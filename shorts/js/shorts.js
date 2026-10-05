const shortsFeed = document.getElementById("shortsFeed");

function getStartShortId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function renderShortItem(video, index) {
    const hasRealFile = Boolean(video.videoUrl);
    const mediaHtml = hasRealFile
        ? `<video class="shorts-video-el" data-index="${index}" data-src="${video.videoUrl}" loop muted playsinline></video>`
        : `<div class="shorts-fallback">${video.icon || "🎬"}</div>`;
    return `
        <div class="shorts-item" data-id="${video.id}" data-index="${index}">
            <div class="shorts-video-frame">
                ${mediaHtml}
                <button class="shorts-mute-hint" data-action="mute-toggle" type="button">🔇</button>
                <div class="shorts-info">
                    <div class="shorts-info-channel">
                        <div class="shorts-info-avatar">${video.avatar || "M"}</div>
                        <span class="shorts-info-channel-name">${video.channel}</span>
                        <button class="shorts-info-subscribe" data-toast="1" type="button">Subscribe</button>
                    </div>
                    <p class="shorts-info-title">${video.title}</p>
                </div>
                <div class="shorts-actions">
                    <button class="shorts-action-button" data-action="like" type="button">
                        <span class="shorts-action-icon">👍</span>
                        <span class="shorts-action-count">${typeof formatCompactCount === "function" ? formatCompactCount(Math.round(parseViewCount(video.views) * 0.04)) : ""}</span>
                    </button>
                    <button class="shorts-action-button" data-action="dislike" type="button"><span class="shorts-action-icon">👎</span></button>
                    <button class="shorts-action-button" data-toast="1" type="button"><span class="shorts-action-icon">💬</span><span class="shorts-action-count">0</span></button>
                    <button class="shorts-action-button" data-toast="1" type="button"><span class="shorts-action-icon">↗</span><span class="shorts-action-count">Bagikan</span></button>
                </div>
                <div class="shorts-nav-buttons">
                    <button class="shorts-nav-button" data-action="prev" type="button">▲</button>
                    <button class="shorts-nav-button" data-action="next" type="button">▼</button>
                </div>
            </div>
        </div>
    `;
}

function renderShortsFeed() {
    if (!shortsFeed || typeof videos === "undefined") return;
    const startId = getStartShortId();
    let orderedVideos = [...videos];
    if (startId) {
        const startIndex = orderedVideos.findIndex(v => v.id === startId);
        if (startIndex > 0) {
            const [startVideo] = orderedVideos.splice(startIndex, 1);
            orderedVideos.unshift(startVideo);
        }
    }
    shortsFeed.innerHTML = orderedVideos.map(renderShortItem).join("");
}

renderShortsFeed();

if (shortsFeed) {
    shortsFeed.addEventListener("click", event => {
        const navButton = event.target.closest("[data-action='prev'],[data-action='next']");
        if (!navButton) return;
        const item = navButton.closest(".shorts-item");
        if (!item) return;
        const direction = navButton.dataset.action === "next" ? 1 : -1;
        const items = Array.from(shortsFeed.querySelectorAll(".shorts-item"));
        const currentIndex = items.indexOf(item);
        const targetItem = items[currentIndex + direction];
        if (targetItem) targetItem.scrollIntoView({ behavior: "smooth" });
    });

    document.addEventListener("keydown", event => {
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
        event.preventDefault();
        const items = Array.from(shortsFeed.querySelectorAll(".shorts-item"));
        const feedRect = shortsFeed.getBoundingClientRect();
        let currentIndex = 0;
        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if (Math.abs(rect.top - feedRect.top) < rect.height / 2) currentIndex = index;
        });
        const direction = event.key === "ArrowDown" ? 1 : -1;
        const targetItem = items[currentIndex + direction];
        if (targetItem) targetItem.scrollIntoView({ behavior: "smooth" });
    });
}
