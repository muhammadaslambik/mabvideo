function initShortsPlayer() {
    const feed = document.getElementById("shortsFeed");
    if (!feed) return;
    const videoElements = feed.querySelectorAll(".shorts-video-el");

    videoElements.forEach(videoEl => {
        const src = videoEl.dataset.src;
        if (!src) return;
        if (src.startsWith("indexeddb:") && typeof getUploadedVideoFile === "function") {
            const fileId = src.replace("indexeddb:", "");
            getUploadedVideoFile(fileId).then(file => {
                if (file) videoEl.src = URL.createObjectURL(file);
            }).catch(() => {});
        } else {
            videoEl.src = src;
        }
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target.querySelector(".shorts-video-el");
            if (!video) return;
            if (entry.isIntersecting) video.play().catch(() => {});
            else video.pause();
        });
    }, { threshold: 0.6 });

    feed.querySelectorAll(".shorts-item").forEach(item => observer.observe(item));

    feed.addEventListener("click", event => {
        const muteButton = event.target.closest("[data-action='mute-toggle']");
        if (muteButton) {
            const frame = muteButton.closest(".shorts-video-frame");
            const video = frame ? frame.querySelector(".shorts-video-el") : null;
            if (video) {
                video.muted = !video.muted;
                muteButton.textContent = video.muted ? "🔇" : "🔊";
            }
            return;
        }
        const likeButton = event.target.closest("[data-action='like']");
        if (likeButton) {
            const isActive = likeButton.classList.toggle("active");
            const dislikeButton = likeButton.closest(".shorts-actions").querySelector("[data-action='dislike']");
            if (dislikeButton && isActive) dislikeButton.classList.remove("active");
            return;
        }
        const dislikeButton = event.target.closest("[data-action='dislike']");
        if (dislikeButton) {
            const isActive = dislikeButton.classList.toggle("active");
            const likeBtn = dislikeButton.closest(".shorts-actions").querySelector("[data-action='like']");
            if (likeBtn && isActive) likeBtn.classList.remove("active");
            return;
        }
        const toastTrigger = event.target.closest("[data-toast]");
        if (toastTrigger && typeof showGlobalToast === "function") {
            showGlobalToast("Fitur ini belum tersedia di demo ini.");
        }
    });
}
setTimeout(initShortsPlayer, 50);
