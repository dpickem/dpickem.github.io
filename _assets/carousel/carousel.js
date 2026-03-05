document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".photo-carousel").forEach(function (carousel) {
    var track = carousel.querySelector(".carousel-track");
    if (!track || track.children.length === 0) return;

    var prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn prev";
    prevBtn.setAttribute("aria-label", "Previous photos");
    prevBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';

    var nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn next";
    nextBtn.setAttribute("aria-label", "Next photos");
    nextBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>';

    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);

    var total = track.children.length;
    var counter = document.createElement("div");
    counter.className = "carousel-counter";
    carousel.appendChild(counter);

    function getItemWidth() {
      var firstChild = track.children[0];
      if (!firstChild) return 0;
      var style = window.getComputedStyle(track);
      var gap = parseFloat(style.gap) || 12;
      return firstChild.offsetWidth + gap;
    }

    function getVisibleCount() {
      var itemW = getItemWidth();
      if (itemW === 0) return 3;
      return Math.round(track.offsetWidth / itemW);
    }

    function updateState() {
      var scrollLeft = track.scrollLeft;
      var maxScroll = track.scrollWidth - track.offsetWidth;
      prevBtn.classList.toggle("hidden", scrollLeft <= 2);
      nextBtn.classList.toggle("hidden", scrollLeft >= maxScroll - 2);

      var itemW = getItemWidth();
      var startIdx = itemW > 0 ? Math.round(scrollLeft / itemW) + 1 : 1;
      var visible = getVisibleCount();
      var endIdx = Math.min(startIdx + visible - 1, total);
      counter.textContent = startIdx + "–" + endIdx + " of " + total;
    }

    prevBtn.addEventListener("click", function () {
      var scrollAmount = getItemWidth() * getVisibleCount();
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
      var scrollAmount = getItemWidth() * getVisibleCount();
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    track.addEventListener("scroll", updateState, { passive: true });

    updateState();
    requestAnimationFrame(updateState);
  });
});
