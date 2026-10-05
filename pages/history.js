try {
    const raw = localStorage.getItem("mab-video-history");
    const historyList = raw ? JSON.parse(raw) : [];
    const historyVideos = historyList
        .map(entry => (typeof videos !== "undefined" ? videos.find(v => v.id === entry.id) : null))
        .filter(Boolean);
    const emptyEl = document.getElementById("historyEmptyState");
    const gridEl = document.getElementById("videoGrid");
    if (historyVideos.length === 0) {
        if (emptyEl) emptyEl.style.display = "block";
        if (gridEl) gridEl.style.display = "none";
    } else if (typeof renderVideos === "function") {
        renderVideos(historyVideos);
    }
} catch (error) {
    console.log("Gagal memuat riwayat tontonan:", error);
}
