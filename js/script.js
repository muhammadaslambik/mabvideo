/* ==================================================
   MAB-VIDEO
   MAIN JAVASCRIPT
================================================== */


/* ==================================================
   VIDEO DATA
================================================== */

const videos = [

    {
        id: 1,
        title: "Learn JavaScript From Zero",
        channel: "MAB Academy",
        views: "125K views",
        date: "2 days ago",
        duration: "12:45",
        category: "coding",
        icon: "💻",
        avatar: "M",
        subscribers: "3,2 rb subscriber",
        description: "Belajar JavaScript dari nol sampai bisa bikin project sendiri. Cocok untuk pemula yang belum pernah coding sama sekali.\n\n#javascript #belajarcoding #mabacademy"
        // videoUrl: "assets/videos/nama-file.mp4"
    },

    {
        id: 2,
        title: "The Future of Artificial Intelligence",
        channel: "Tech World",
        views: "842K views",
        date: "5 days ago",
        duration: "18:32",
        category: "technology",
        icon: "🤖",
        avatar: "T",
        subscribers: "890 rb subscriber",
        description: "Membahas ke mana arah perkembangan AI dalam beberapa tahun ke depan dan dampaknya bagi pekerjaan serta kehidupan sehari-hari.\n\n#ai #teknologi #techworld"
    },

    {
        id: 3,
        title: "Top 10 Games You Should Play",
        channel: "Game Zone",
        views: "2.1M views",
        date: "1 week ago",
        duration: "24:18",
        category: "gaming",
        icon: "🎮",
        avatar: "G",
        subscribers: "2,4 jt subscriber",
        description: "10 game terbaik yang wajib kamu coba tahun ini, dari genre aksi sampai santai. Ada rekomendasi buat semua jenis gamer.\n\n#gaming #rekomendasigame #gamezone"
    },

    {
        id: 4,
        title: "I'TIROF (Syair Abu Nawas) - SABYAN",
        channel: "MAB Music",
        views: "3.4M views",
        date: "3 weeks ago",
        duration: "4:52",
        category: "music",
        icon: "🎵",
        avatar: "M",
        subscribers: "156 rb subscriber",
        description: "Cover Syair Abu Nawas \"I'TIROF\" oleh MAB Music. Terima kasih sudah mendukung channel ini, jangan lupa like dan subscribe.\n\n#itirof #sabyan #mabmusic",
        videoUrl: "assets/videos/itirof-sabyan.mp4"
    },

    {
        id: 5,
        title: "How To Build Your First Website",
        channel: "Web Developer",
        views: "456K views",
        date: "4 days ago",
        duration: "15:26",
        category: "coding",
        icon: "🌐",
        avatar: "W",
        subscribers: "445 rb subscriber",
        description: "Tutorial step-by-step membuat website pertamamu memakai HTML, CSS, dan sedikit JavaScript, tanpa perlu pengalaman sebelumnya.\n\n#webdevelopment #html #css"
    },

    {
        id: 6,
        title: "Today's Technology News",
        channel: "Daily News",
        views: "98K views",
        date: "3 hours ago",
        duration: "8:17",
        category: "news",
        icon: "📰",
        avatar: "N",
        subscribers: "78 rb subscriber",
        description: "Rangkuman berita teknologi terbaru hari ini, dari gadget baru sampai perkembangan industri digital.\n\n#teknologi #beritahariini #dailynews"
    },

    {
        id: 7,
        title: "JavaScript Projects For Beginners",
        channel: "JS Master",
        views: "210K views",
        date: "6 days ago",
        duration: "21:05",
        category: "coding",
        icon: "⚡",
        avatar: "J",
        subscribers: "210 rb subscriber",
        description: "Kumpulan project JavaScript sederhana yang cocok buat pemula latihan logika dan DOM manipulation.\n\n#javascript #project #jsmaster"
    },

    {
        id: 8,
        title: "The Future of Web Development",
        channel: "Developer Hub",
        views: "1.7M views",
        date: "2 weeks ago",
        duration: "11:39",
        category: "technology",
        icon: "🚀",
        avatar: "D",
        subscribers: "1,1 jt subscriber",
        description: "Tren web development yang perlu kamu ketahui, mulai dari framework baru sampai cara kerja developer modern.\n\n#webdev #frontend #developerhub"
    },

    {
        id: 9,
        title: "Complete HTML & CSS Course",
        channel: "Code School",
        views: "650K views",
        date: "1 week ago",
        duration: "32:10",
        category: "education",
        icon: "📚",
        avatar: "C",
        subscribers: "650 rb subscriber",
        description: "Kursus lengkap HTML & CSS dari dasar sampai layout responsif, disusun runtut untuk pemula.\n\n#html #css #codeschool"
    },

    {
        id: 10,
        title: "Gaming Highlights Of The Week",
        channel: "Pro Gamer",
        views: "980K views",
        date: "2 days ago",
        duration: "10:21",
        category: "gaming",
        icon: "🕹️",
        avatar: "P",
        subscribers: "980 rb subscriber",
        description: "Momen-momen terbaik dari sesi gaming minggu ini, dari clutch epic sampai momen kocak.\n\n#gaming #highlight #progamer"
    },

    {
        id: 11,
        title: "Relaxing Music For Studying",
        channel: "MAB Music",
        views: "4.2M views",
        date: "1 month ago",
        duration: "1:02:14",
        category: "music",
        icon: "🎧",
        avatar: "M",
        subscribers: "156 rb subscriber",
        description: "Kumpulan musik santai buat teman belajar atau kerja biar lebih fokus dan rileks.\n\n#musicforstudy #relaxingmusic #mabmusic"
    },

    {
        id: 12,
        title: "Learn Programming Step By Step",
        channel: "Programming School",
        views: "321K views",
        date: "3 days ago",
        duration: "20:42",
        category: "education",
        icon: "👨‍💻",
        avatar: "P",
        subscribers: "320 rb subscriber",
        description: "Belajar pemrograman secara bertahap, dimulai dari konsep dasar sampai membuat program sederhana.\n\n#programming #belajarcoding #programmingschool"
    }

];


/* ==================================================
   HELPER: PARSE & FORMAT ANGKA (VIEWS, LIKES, SUBSCRIBER)
================================================== */

function parseViewCount(text) {

    if (!text) {

        return 0;

    }


    const match =
        String(text)
            .replace(",", ".")
            .match(/([\d.]+)\s*([KMkm]?)/);


    if (!match) {

        return 0;

    }


    let number =
        parseFloat(match[1]);

    const suffix =
        match[2].toUpperCase();


    if (suffix === "K") {

        number *= 1000;

    }

    else if (suffix === "M") {

        number *= 1000000;

    }


    return Math.round(number);

}


function formatCompactCount(number) {

    if (number >= 1000000) {

        return (
            (Math.round((number / 1000000) * 10) / 10)
                .toString()
                .replace(".", ",") +
            " jt"
        );

    }


    if (number >= 1000) {

        return (
            (Math.round((number / 1000) * 10) / 10)
                .toString()
                .replace(".", ",") +
            " rb"
        );

    }


    return String(number);

}


/* ==================================================
   DOM ELEMENTS
================================================== */

const videoGrid =
    document.getElementById("videoGrid");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const themeButton =
    document.getElementById("themeButton");

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");

const categoryButtons =
    document.querySelectorAll(".category-button");


/* ==================================================
   RENDER VIDEO CARDS
================================================== */

function renderVideos(videoList) {

    if (!videoGrid) {
        return;
    }


    videoGrid.innerHTML = "";


    if (videoList.length === 0) {

        videoGrid.innerHTML = `

            <div class="no-results">

                <h2>No videos found</h2>

                <p>
                    Try another search.
                </p>

            </div>

        `;

        return;
    }


    videoList.forEach(video => {

        const videoCard =
            document.createElement("article");


        videoCard.className =
            "video-card";


        videoCard.innerHTML = `

            <div class="thumbnail">

                <div class="thumbnail-background">
                    ${video.icon}
                </div>

                <span class="duration">
                    ${video.duration}
                </span>

            </div>


            <div class="video-info">

                <div class="channel-avatar">
                    ${video.avatar}
                </div>


                <div class="video-text">

                    <h2 class="video-title">
                        ${video.title}
                    </h2>

                    <p class="channel-name">
                        ${video.channel}
                    </p>

                    <p class="video-meta">
                        ${video.views} • ${video.date}
                    </p>

                </div>


                <button
                    class="more-button"
                    aria-label="More options"
                >
                    ⋮
                </button>

            </div>

        `;


        videoCard.addEventListener(
            "click",
            () => {

                window.location.href =
                    `watch.html?id=${video.id}&autoplay=1`;

            }
        );


        videoGrid.appendChild(videoCard);

    });

}


/* ==================================================
   SEARCH
================================================== */

function searchVideos() {

    if (!searchInput) {
        return;
    }


    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredVideos =
        videos.filter(video => {

            return (

                video.title
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                video.channel
                    .toLowerCase()
                    .includes(searchTerm)

            );

        });


    renderVideos(filteredVideos);

}


/* ==================================================
   SEARCH BUTTON
================================================== */

if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchVideos
    );

}


/* ==================================================
   SEARCH INPUT
================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchVideos
    );


    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                searchVideos();

            }

        }
    );

}


/* ==================================================
   CATEGORY FILTER
================================================== */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            const selectedCategory =
                button.dataset.category;


            if (
                selectedCategory === "all"
            ) {

                renderVideos(videos);

                return;

            }


            const filteredVideos =
                videos.filter(video => {

                    return (
                        video.category ===
                        selectedCategory
                    );

                });


            renderVideos(filteredVideos);

        }
    );

});


/* ==================================================
   DARK MODE
================================================== */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            const darkMode =
                document.body.classList.contains(
                    "dark"
                );


            if (darkMode) {

                themeButton.textContent =
                    "☀️";


                localStorage.setItem(
                    "mab-video-theme",
                    "dark"
                );

            }

            else {

                themeButton.textContent =
                    "🌙";


                localStorage.setItem(
                    "mab-video-theme",
                    "light"
                );

            }

        }
    );

}


/* ==================================================
   LOAD SAVED THEME
================================================== */

const savedTheme =
    localStorage.getItem(
        "mab-video-theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );


    if (themeButton) {

        themeButton.textContent =
            "☀️";

    }

}


/* ==================================================
   MENU
================================================== */

if (
    menuButton &&
    sidebar
) {

    menuButton.addEventListener(
        "click",
        () => {

            if (
                window.innerWidth > 800
            ) {

                sidebar.classList.toggle(
                    "collapsed"
                );


                const mainContent =
                    document.querySelector(
                        ".main-content"
                    );


                if (mainContent) {

                    mainContent.classList.toggle(
                        "sidebar-collapsed"
                    );

                }

            }

            else {

                sidebar.classList.toggle(
                    "open"
                );


                if (sidebarOverlay) {

                    sidebarOverlay.classList.toggle(
                        "active"
                    );

                }

            }

        }
    );

}


/* ==================================================
   MOBILE SIDEBAR OVERLAY
================================================== */

if (
    sidebarOverlay &&
    sidebar
) {

    sidebarOverlay.addEventListener(
        "click",
        () => {

            sidebar.classList.remove(
                "open"
            );


            sidebarOverlay.classList.remove(
                "active"
            );

        }
    );

}


/* ==================================================
   SIDEBAR ITEMS
================================================== */

const sidebarItems =
    document.querySelectorAll(
        ".sidebar-item"
    );


sidebarItems.forEach(item => {

    item.addEventListener(
        "click",
        event => {

            event.preventDefault();


            sidebarItems.forEach(
                sidebarItem => {

                    sidebarItem.classList.remove(
                        "active"
                    );

                }
            );


            item.classList.add(
                "active"
            );


            if (sidebar) {

                sidebar.classList.remove(
                    "open"
                );

            }


            if (sidebarOverlay) {

                sidebarOverlay.classList.remove(
                    "active"
                );

            }

        }
    );

});


/* ==================================================
   WATCH PAGE ELEMENTS
================================================== */

const watchVideoPlayer =
    document.getElementById(
        "videoPlayer"
    );

const watchVideoTitle =
    document.getElementById(
        "videoTitle"
    );

const watchVideoInfo =
    document.getElementById(
        "videoInfo"
    );

const backButton =
    document.getElementById(
        "backButton"
    );


/* ==================================================
   LOAD WATCH PAGE
================================================== */

if (
    watchVideoPlayer &&
    watchVideoTitle &&
    watchVideoInfo
) {

    /* ==================================================
       GET VIDEO ID
    ================================================== */

const urlParams =
    new URLSearchParams(
        window.location.search
    );

const videoId =
    Number(
        urlParams.get("id")
    );

const shouldAutoplay =
    urlParams.get("autoplay") === "1";

    
    /* ==================================================
       FIND VIDEO
    ================================================== */

    const selectedVideo =
        videos.find(
            video =>
                video.id === videoId
        );


    /* ==================================================
       VIDEO FOUND
    ================================================== */

    if (selectedVideo) {

        /* ==================================================
           TITLE
        ================================================== */

        watchVideoTitle.textContent =
            selectedVideo.title;


        /* ==================================================
           INFORMATION (CHANNEL, AKSI, DESKRIPSI ALA YOUTUBE)
        ================================================== */

        const initialLikeCount =
            Math.max(
                12,
                Math.round(
                    parseViewCount(selectedVideo.views) * 0.045
                )
            );

        const descriptionHtml =
            (selectedVideo.description || "Tidak ada deskripsi.")
                .replace(/\n/g, "<br>");

        watchVideoInfo.innerHTML = `

            <div class="channel-actions-row">

                <div class="channel-block">

                    <div class="channel-avatar-lg">
                        ${selectedVideo.avatar}
                    </div>

                    <div class="channel-meta">

                        <p class="channel-name-lg">
                            ${selectedVideo.channel}
                        </p>

                        <p
                            class="channel-subs"
                            id="channelSubs"
                        >
                            ${selectedVideo.subscribers || ""}
                        </p>

                    </div>

                    <button
                        class="subscribe-button"
                        id="subscribeButton"
                        type="button"
                    >
                        Subscribe
                    </button>

                    <button
                        class="notify-bell-button"
                        id="notifyBellButton"
                        type="button"
                        aria-label="Notifikasi"
                    >
                        🔔
                    </button>

                </div>


                <div class="video-actions">

                    <div class="like-dislike-group">

                        <button
                            class="action-pill like-button"
                            id="likeButton"
                            type="button"
                        >
                            <span class="action-icon">👍</span>
                            <span id="likeCount">
                                ${formatCompactCount(initialLikeCount)}
                            </span>
                        </button>

                        <span class="pill-divider"></span>

                        <button
                            class="action-pill dislike-button"
                            id="dislikeButton"
                            type="button"
                            aria-label="Tidak suka"
                        >
                            <span class="action-icon">👎</span>
                        </button>

                    </div>

                    <button
                        class="action-pill"
                        id="shareButton"
                        type="button"
                    >
                        <span class="action-icon">↗</span>
                        <span>Bagikan</span>
                    </button>

                    <button
                        class="action-pill"
                        id="downloadButton"
                        type="button"
                    >
                        <span class="action-icon">⬇</span>
                        <span>Unduh</span>
                    </button>

                    <div class="more-menu-wrapper">

                        <button
                            class="action-pill action-pill-icon"
                            id="moreButton"
                            type="button"
                            aria-label="Lainnya"
                        >
                            ⋮
                        </button>

                        <div
                            class="more-menu"
                            id="moreMenu"
                        >

                            <button
                                class="more-menu-item"
                                type="button"
                            >
                                🚩 Laporkan
                            </button>

                            <button
                                class="more-menu-item"
                                type="button"
                            >
                                💾 Simpan ke playlist
                            </button>

                        </div>

                    </div>

                </div>

            </div>


            <div
                class="video-description-box"
                id="descriptionBox"
            >

                <p class="description-meta">
                    <strong>${selectedVideo.views}</strong>
                    &nbsp;•&nbsp;
                    ${selectedVideo.date}
                </p>

                <p
                    class="description-text"
                    id="descriptionText"
                >
                    ${descriptionHtml}
                </p>

                <button
                    class="description-toggle"
                    id="descriptionToggle"
                    type="button"
                >
                    Tampilkan lebih banyak
                </button>

            </div>

        `;


        /* ==================================================
           SUBSCRIBE BUTTON
        ================================================== */

        const subscribeButton =
            document.getElementById("subscribeButton");

        const notifyBellButton =
            document.getElementById("notifyBellButton");

        const channelSubs =
            document.getElementById("channelSubs");

        let isSubscribed =
            false;

        const baseSubsCount =
            parseViewCount(selectedVideo.subscribers);


        if (subscribeButton) {

            subscribeButton.addEventListener(
                "click",
                () => {

                    isSubscribed =
                        !isSubscribed;


                    subscribeButton.textContent =
                        isSubscribed
                            ? "Berlangganan"
                            : "Subscribe";


                    subscribeButton.classList.toggle(
                        "subscribed",
                        isSubscribed
                    );


                    if (notifyBellButton) {

                        notifyBellButton.classList.toggle(
                            "visible",
                            isSubscribed
                        );

                    }


                    if (channelSubs) {

                        const newCount =
                            baseSubsCount +
                            (isSubscribed ? 1 : 0);

                        channelSubs.textContent =
                            `${formatCompactCount(newCount)} subscriber`;

                    }

                }
            );

        }


        if (notifyBellButton) {

            notifyBellButton.addEventListener(
                "click",
                () => {

                    notifyBellButton.classList.toggle(
                        "active"
                    );

                }
            );

        }


        /* ==================================================
           LIKE / DISLIKE
        ================================================== */

        const likeButton =
            document.getElementById("likeButton");

        const dislikeButton =
            document.getElementById("dislikeButton");

        const likeCountEl =
            document.getElementById("likeCount");

        let likeState =
            "none";


        if (likeButton && dislikeButton && likeCountEl) {

            likeButton.addEventListener(
                "click",
                () => {

                    if (likeState === "liked") {

                        likeState =
                            "none";

                        likeCountEl.textContent =
                            formatCompactCount(
                                initialLikeCount
                            );

                    }

                    else {

                        likeState =
                            "liked";

                        likeCountEl.textContent =
                            formatCompactCount(
                                initialLikeCount + 1
                            );

                    }


                    likeButton.classList.toggle(
                        "active",
                        likeState === "liked"
                    );

                    dislikeButton.classList.remove(
                        "active"
                    );

                }
            );


            dislikeButton.addEventListener(
                "click",
                () => {

                    if (likeState === "disliked") {

                        likeState =
                            "none";

                    }

                    else {

                        likeState =
                            "disliked";

                        likeCountEl.textContent =
                            formatCompactCount(
                                initialLikeCount
                            );

                    }


                    dislikeButton.classList.toggle(
                        "active",
                        likeState === "disliked"
                    );

                    likeButton.classList.remove(
                        "active"
                    );

                }
            );

        }


        /* ==================================================
           SHARE (SALIN LINK)
        ================================================== */

        const shareButton =
            document.getElementById("shareButton");


        function showToast(message) {

            const existingToast =
                document.getElementById("mabToast");

            if (existingToast) {

                existingToast.remove();

            }


            const toast =
                document.createElement("div");

            toast.id =
                "mabToast";

            toast.className =
                "mab-toast";

            toast.textContent =
                message;

            document.body.appendChild(
                toast
            );


            requestAnimationFrame(
                () => {

                    toast.classList.add(
                        "visible"
                    );

                }
            );


            setTimeout(
                () => {

                    toast.classList.remove(
                        "visible"
                    );

                    setTimeout(
                        () => toast.remove(),
                        300
                    );

                },
                2200
            );

        }


        if (shareButton) {

            shareButton.addEventListener(
                "click",
                () => {

                    const shareUrl =
                        window.location.href;


                    if (
                        navigator.clipboard &&
                        navigator.clipboard.writeText
                    ) {

                        navigator.clipboard
                            .writeText(shareUrl)
                            .then(
                                () => {

                                    showToast(
                                        "Link video disalin"
                                    );

                                }
                            )
                            .catch(
                                () => {

                                    showToast(
                                        "Gagal menyalin link"
                                    );

                                }
                            );

                    }

                    else {

                        showToast(
                            "Link video: " + shareUrl
                        );

                    }

                }
            );

        }


        /* ==================================================
           DOWNLOAD
        ================================================== */

        const downloadButton =
            document.getElementById("downloadButton");


        if (downloadButton) {

            downloadButton.addEventListener(
                "click",
                () => {

                    if (!selectedVideo.videoUrl) {

                        showToast(
                            "Video ini belum punya file untuk diunduh."
                        );

                        return;

                    }


                    const tempLink =
                        document.createElement("a");

                    tempLink.href =
                        selectedVideo.videoUrl;

                    tempLink.download =
                        selectedVideo.title;

                    document.body.appendChild(
                        tempLink
                    );

                    tempLink.click();

                    tempLink.remove();

                }
            );

        }


        /* ==================================================
           MENU LAINNYA (⋮)
        ================================================== */

        const moreButton =
            document.getElementById("moreButton");

        const moreMenu =
            document.getElementById("moreMenu");


        if (moreButton && moreMenu) {

            moreButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    moreMenu.classList.toggle(
                        "open"
                    );

                }
            );


            moreMenu.querySelectorAll(
                ".more-menu-item"
            ).forEach(item => {

                item.addEventListener(
                    "click",
                    () => {

                        moreMenu.classList.remove(
                            "open"
                        );

                        showToast(
                            "Fitur ini masih dalam pengembangan."
                        );

                    }
                );

            });


            document.addEventListener(
                "click",
                () => {

                    moreMenu.classList.remove(
                        "open"
                    );

                }
            );

        }


        /* ==================================================
           DESKRIPSI (TAMPILKAN LEBIH BANYAK/SEDIKIT)
        ================================================== */

        const descriptionBox =
            document.getElementById("descriptionBox");

        const descriptionToggle =
            document.getElementById("descriptionToggle");


        if (descriptionBox && descriptionToggle) {

            descriptionToggle.addEventListener(
                "click",
                () => {

                    const isExpanded =
                        descriptionBox.classList.toggle(
                            "expanded"
                        );

                    descriptionToggle.textContent =
                        isExpanded
                            ? "Tampilkan lebih sedikit"
                            : "Tampilkan lebih banyak";

                }
            );

        }


     /* ==================================================
   VIDEO WITHOUT FILE
================================================== */

if (!selectedVideo.videoUrl) {

    watchVideoPlayer.innerHTML = `
        <div class="video-container video-error-state">

            <div class="video-message">

                Video ini belum memiliki file (videoUrl).

                <br>

                Tambahkan properti "videoUrl"
                pada data video ini di script.js.

            </div>

        </div>
    `;

}

else {

    /* ==================================================
       CREATE YOUTUBE-STYLE VIDEO PLAYER
    ================================================== */

    watchVideoPlayer.innerHTML = `

        <div
            class="video-container youtube-player"
            id="youtubePlayer"
        >

<video
    id="mainVideo"
    class="main-video"
    preload="metadata"
    autoplay
    playsinline
>

                <source
                    src="${selectedVideo.videoUrl}"
                    type="video/mp4"
                >

                Browser kamu tidak mendukung
                video HTML5.

            </video>


            <!-- CENTER PLAY BUTTON -->

            <button
                id="playButton"
                class="play-button"
                aria-label="Play video"
                type="button"
            >
                ▶
            </button>


            <!-- VIDEO CONTROLS -->

            <div
                class="video-controls"
                id="videoControls"
            >

               <!-- PROGRESS BAR -->

<div
    class="video-progress-container"
    id="videoProgressContainer"
>

    <!-- PREVIEW FRAME (mengikuti kursor) -->

    <div
        class="video-preview"
        id="videoPreview"
    >

        <div class="video-preview-frame">

            <canvas
                class="video-preview-canvas"
                id="videoPreviewCanvas"
                width="160"
                height="90"
            ></canvas>

            <span
                class="video-preview-time"
                id="videoPreviewTime"
            >0:00</span>

        </div>

        <div class="video-preview-arrow"></div>

    </div>

    <div
        class="video-progress"
        id="videoProgress"
    ></div>


    <div
        class="video-progress-hover-dot"
        id="videoProgressHoverDot"
    ></div>


    <div
        class="video-progress-thumb"
        id="videoProgressThumb"
    ></div>

</div>


                <!-- CONTROL BAR -->

                <div class="control-bar">


                    <!-- PLAY / PAUSE -->

                    <button
                        id="controlPlayButton"
                        class="control-button"
                        aria-label="Play video"
                        type="button"
                    >
                        ▶
                    </button>


                    <!-- VOLUME -->

                    <div
                        class="volume-controls"
                        id="volumeControls"
                    >

                        <button
                            id="muteButton"
                            class="mute-button control-button"
                            aria-label="Mute video"
                            type="button"
                        >
                            🔊
                        </button>


                        <input
                            id="volumeSlider"
                            class="volume-slider"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value="1"
                            aria-label="Volume"
                        >

                    </div>


                    <!-- TIME -->

                    <div
                        class="video-time"
                        id="videoTime"
                    >
                        0:00 / 0:00
                    </div>


                    <!-- SPACER -->

                    <div class="controls-spacer"></div>


                    <!-- SETTINGS -->

                    <div
    class="settings-wrapper"
    id="settingsWrapper"
>

                        <button
                            id="settingsButton"
                            class="control-button"
                            aria-label="Settings"
                            type="button"
                        >
                            ⚙
                        </button>


                        <div
                            id="settingsMenu"
                             class="settings-menu hidden"
                            aria-hidden="true"
                        >

                            <div class="settings-title">
                                Playback speed
                            </div>


                            <button
                                class="speed-option"
                                data-speed="0.25"
                                type="button"
                            >
                                0.25x
                            </button>


                            <button
                                class="speed-option"
                                data-speed="0.5"
                                type="button"
                            >
                                0.5x
                            </button>


                            <button
                                class="speed-option"
                                data-speed="0.75"
                                type="button"
                            >
                                0.75x
                            </button>


                            <button
                                class="speed-option active"
                                data-speed="1"
                                type="button"
                            >
                                Normal
                            </button>


                            <button
                                class="speed-option"
                                data-speed="1.25"
                                type="button"
                            >
                                1.25x
                            </button>


                            <button
                                class="speed-option"
                                data-speed="1.5"
                                type="button"
                            >
                                1.5x
                            </button>


                            <button
                                class="speed-option"
                                data-speed="1.75"
                                type="button"
                            >
                                1.75x
                            </button>


                            <button
                                class="speed-option"
                                data-speed="2"
                                type="button"
                            >
                                2x
                            </button>

                        </div>

                    </div>


                    <!-- FULLSCREEN -->

                    <button
                        id="fullscreenButton"
                        class="control-button fullscreen-button"
                        aria-label="Fullscreen"
                        type="button"
                    >
                        ⛶
                    </button>

                </div>

            </div>

        </div>

    `;


    /* ==================================================
       VIDEO ELEMENTS
    ================================================== */

    const mainVideo =
        document.getElementById("mainVideo");

    const youtubePlayer =
        document.getElementById("youtubePlayer");

    const videoControls =
        document.getElementById("videoControls");

    const playButton =
        document.getElementById("playButton");

    const controlPlayButton =
        document.getElementById("controlPlayButton");

    const videoProgressContainer =
        document.getElementById(
            "videoProgressContainer"
        );

    const videoProgress =
        document.getElementById("videoProgress");

    const videoProgressThumb =
        document.getElementById(
            "videoProgressThumb"
        );

    const videoPreview =
        document.getElementById("videoPreview");

    const videoPreviewCanvas =
        document.getElementById("videoPreviewCanvas");

    const videoPreviewTime =
        document.getElementById("videoPreviewTime");

    const videoProgressHoverDot =
        document.getElementById(
            "videoProgressHoverDot"
        );

    const muteButton =
        document.getElementById("muteButton");

    const volumeSlider =
        document.getElementById("volumeSlider");

    const videoTime =
        document.getElementById("videoTime");

    const settingsButton =
        document.getElementById("settingsButton");

    const settingsMenu =
        document.getElementById("settingsMenu");

    const fullscreenButton =
        document.getElementById(
            "fullscreenButton"
        );

    const speedOptions =
        document.querySelectorAll(
            ".speed-option"
        );

    /* ==================================================
       CENTER BUTTON INITIAL STATE
    ================================================== */

    if (playButton) {

        playButton.classList.add(
            "hidden"
        );

    }

    /* ==================================================
       TIME FORMAT
    ================================================== */

    function formatVideoTime(seconds) {

        if (!Number.isFinite(seconds)) {

            return "0:00";

        }


        seconds =
            Math.max(
                0,
                Math.floor(seconds)
            );


        const hours =
            Math.floor(
                seconds / 3600
            );


        const minutes =
            Math.floor(
                (seconds % 3600) / 60
            );


        const remainingSeconds =
            seconds % 60;


        if (hours > 0) {

            return (
                hours +
                ":" +
                String(minutes).padStart(2, "0") +
                ":" +
                String(remainingSeconds).padStart(2, "0")
            );

        }


        return (
            minutes +
            ":" +
            String(remainingSeconds).padStart(2, "0")
        );

    }


    /* ==================================================
       UPDATE VIDEO TIME
    ================================================== */

    function updateVideoTime() {

        if (
            !mainVideo ||
            !videoTime
        ) {

            return;

        }


        const currentTime =
            formatVideoTime(
                mainVideo.currentTime
            );


        const duration =
            formatVideoTime(
                mainVideo.duration
            );


        videoTime.textContent =
            `${currentTime} / ${duration}`;

    }


    /* ==================================================
       UPDATE PROGRESS
    ================================================== */

    function updateProgress() {

        if (
            !mainVideo ||
            !videoProgress ||
            !Number.isFinite(mainVideo.duration) ||
            mainVideo.duration <= 0
        ) {

            return;

        }


        const percentage =
            (
                mainVideo.currentTime /
                mainVideo.duration
            ) * 100;


videoProgress.style.width =
    `${percentage}%`;

if (videoProgressThumb) {
    videoProgressThumb.style.left =
        `${percentage}%`;
}

    }


    /* ==================================================
       PLAY / PAUSE
    ================================================== */

    function togglePlayPause() {

        if (!mainVideo) {

            return;

        }


        if (
            mainVideo.paused ||
            mainVideo.ended
        ) {

            const playPromise =
                mainVideo.play();


            if (
                playPromise !== undefined
            ) {

                playPromise.catch(
                    error => {

                        console.log(
                            "Play dibatalkan:",
                            error
                        );

                    }
                );

            }

        }

        else {

            mainVideo.pause();

        }

    }


    /* ==================================================
       UPDATE PLAY BUTTONS
    ================================================== */

    function updatePlayButtons() {

        if (!mainVideo) {

            return;

        }


        const isPlaying =
            !mainVideo.paused &&
            !mainVideo.ended;


        const buttonText =
            isPlaying
                ? "❚❚"
                : "▶";


        const buttonLabel =
            isPlaying
                ? "Pause video"
                : "Play video";


        if (playButton) {

            playButton.textContent =
                buttonText;


            playButton.setAttribute(
                "aria-label",
                buttonLabel
            );

        }


        if (controlPlayButton) {

            controlPlayButton.textContent =
                buttonText;


            controlPlayButton.setAttribute(
                "aria-label",
                buttonLabel
            );

        }

    }


/* ==================================================
   AUTO HIDE TIMER
================================================== */

let hideControlsTimer = null;


function clearHideControlsTimer() {

    if (hideControlsTimer) {

        clearTimeout(
            hideControlsTimer
        );


        hideControlsTimer =
            null;

    }

}

function showControls() {

    if (!youtubePlayer) {

        return;

    }


    youtubePlayer.classList.add(
        "controls-visible"
    );


    youtubePlayer.classList.remove(
        "cursor-hidden"
    );


    if (videoControls) {

        videoControls.classList.remove(
            "hidden"
        );

    }


    clearHideControlsTimer();

}


function hideControls() {

    if (!youtubePlayer) {

        return;

    }


    closeSettings();


    youtubePlayer.classList.remove(
        "controls-visible"
    );


    youtubePlayer.classList.add(
        "cursor-hidden"
    );


    if (videoControls) {

        videoControls.classList.add(
            "hidden"
        );

    }

}


function scheduleHideControls() {

    clearHideControlsTimer();


    hideControlsTimer =
        setTimeout(
            hideControls,
            2000
        );

}

/* ==================================================
   TRANSIENT CENTER PLAY / PAUSE BUTTON
================================================== */

let centerPlayButtonTimer = null;


function clearCenterPlayButtonTimer() {

    if (centerPlayButtonTimer) {

        clearTimeout(
            centerPlayButtonTimer
        );

        centerPlayButtonTimer =
            null;

    }

}


function showCenterPlayButtonBriefly() {

    if (!playButton) {

        return;

    }


    clearCenterPlayButtonTimer();


    playButton.classList.remove(
        "hidden"
    );


    centerPlayButtonTimer =
        setTimeout(
            () => {

                playButton.classList.add(
                    "hidden"
                );

                centerPlayButtonTimer =
                    null;

            },
            500
        );

}

   
/* ==================================================
   CENTER PLAY BUTTON
================================================== */

if (
    mainVideo &&
    playButton
) {

    playButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            togglePlayPause();

            showControls();

        }
    );

}


    /* ==================================================
       CONTROL BAR PLAY BUTTON
    ================================================== */

    if (
        mainVideo &&
        controlPlayButton
    ) {

        controlPlayButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                togglePlayPause();

                showControls();

            }
        );

    }


    /* ==================================================
       CLICK VIDEO
    ================================================== */

    if (mainVideo) {

        mainVideo.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                togglePlayPause();

                showControls();

            }
        );

    }


    /* ==================================================
       VIDEO EVENTS
    ================================================== */

    if (mainVideo) {

mainVideo.addEventListener(
    "play",
    () => {

        updatePlayButtons();

        showCenterPlayButtonBriefly();

        showControls();

        scheduleHideControls();

    }
);


mainVideo.addEventListener(
    "pause",
    () => {

        updatePlayButtons();

        showCenterPlayButtonBriefly();

        showControls();

         scheduleHideControls();

    }
);


        mainVideo.addEventListener(
            "ended",
            () => {

                updatePlayButtons();

                showControls();

                scheduleHideControls();

            }
        );


        mainVideo.addEventListener(
            "loadedmetadata",
            () => {

                updateVideoTime();

                updateProgress();

            }
        );


        mainVideo.addEventListener(
            "durationchange",
            () => {

                updateVideoTime();

            }
        );


        mainVideo.addEventListener(
            "timeupdate",
            () => {

                updateVideoTime();

                updateProgress();

            }
        );

    }


    /* ==================================================
       VOLUME
    ================================================== */

    function updateVolumeButton() {

        if (
            !mainVideo ||
            !muteButton
        ) {

            return;

        }


        if (
            mainVideo.muted ||
            mainVideo.volume === 0
        ) {

            muteButton.textContent =
                "🔇";


            muteButton.setAttribute(
                "aria-label",
                "Unmute video"
            );

        }

        else {

            muteButton.textContent =
                "🔊";


            muteButton.setAttribute(
                "aria-label",
                "Mute video"
            );

        }

    }


    function setVideoVolume(volume) {

        if (!mainVideo) {

            return;

        }


        volume =
            Math.max(
                0,
                Math.min(
                    1,
                    Number(volume)
                )
            );


        mainVideo.volume =
            volume;


        if (
            volume > 0 &&
            mainVideo.muted
        ) {

            mainVideo.muted =
                false;

        }


        if (volume === 0) {

            mainVideo.muted =
                true;

        }


        if (volumeSlider) {

            volumeSlider.value =
                volume;

        }


        updateVolumeButton();

    }


    if (
        mainVideo &&
        volumeSlider
    ) {

        volumeSlider.addEventListener(
            "input",
            event => {

                event.stopPropagation();

                setVideoVolume(
                    event.target.value
                );

                showControls();

            }
        );

    }


    if (
        mainVideo &&
        muteButton
    ) {

        muteButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                if (
                    mainVideo.muted ||
                    mainVideo.volume === 0
                ) {

                    const restoredVolume =
                        mainVideo.volume > 0
                            ? mainVideo.volume
                            : 1;


                    mainVideo.muted =
                        false;


                    mainVideo.volume =
                        restoredVolume;


                    if (volumeSlider) {

                        volumeSlider.value =
                            restoredVolume;

                    }

                }

                else {

                    mainVideo.muted =
                        true;

                }


                updateVolumeButton();

                showControls();

            }
        );

    }


    if (mainVideo) {

        mainVideo.addEventListener(
            "volumechange",
            () => {

                updateVolumeButton();


                if (
                    volumeSlider &&
                    !mainVideo.muted
                ) {

                    volumeSlider.value =
                        mainVideo.volume;

                }

            }
        );

    }


    /* ==================================================
       PROGRESS SEEK
    ================================================== */

    let isSeeking = false;


    function getSeekPercentage(clientX) {

        if (
            !videoProgressContainer
        ) {

            return 0;

        }


        const rect =
            videoProgressContainer
                .getBoundingClientRect();


        if (rect.width <= 0) {

            return 0;

        }


        let percentage =
            (
                clientX -
                rect.left
            ) /
            rect.width;


        percentage =
            Math.max(
                0,
                Math.min(
                    1,
                    percentage
                )
            );


        return percentage;

    }


    function seekToPosition(clientX) {

        if (
            !mainVideo ||
            !Number.isFinite(mainVideo.duration) ||
            mainVideo.duration <= 0
        ) {

            return;

        }


        const percentage =
            getSeekPercentage(clientX);


        mainVideo.currentTime =
            percentage *
            mainVideo.duration;


if (videoProgress) {

    videoProgress.style.width =
        `${percentage * 100}%`;

}

if (videoProgressThumb) {

    videoProgressThumb.style.left =
        `${percentage * 100}%`;

}


        updateVideoTime();

    }


    if (videoProgressContainer) {

        videoProgressContainer.addEventListener(
            "pointerdown",
            event => {

                event.stopPropagation();

                isSeeking =
                    true;


                if (
                    videoProgressContainer.setPointerCapture
                ) {

                    videoProgressContainer.setPointerCapture(
                        event.pointerId
                    );

                }


                seekToPosition(
                    event.clientX
                );


                showControls();

            }
        );


        videoProgressContainer.addEventListener(
            "pointermove",
            event => {

                if (!isSeeking) {

                    return;

                }


                event.stopPropagation();


                seekToPosition(
                    event.clientX
                );

            }
        );


        function finishSeeking(event) {

            if (!isSeeking) {

                return;

            }


            event.stopPropagation();


            seekToPosition(
                event.clientX
            );


            isSeeking =
                false;


            scheduleHideControls();

        }


        videoProgressContainer.addEventListener(
            "pointerup",
            finishSeeking
        );


        videoProgressContainer.addEventListener(
            "pointercancel",
            finishSeeking
        );


        videoProgressContainer.addEventListener(
            "lostpointercapture",
            () => {

                if (!isSeeking) {

                    return;

                }


                isSeeking =
                    false;


                scheduleHideControls();

            }
        );


        videoProgressContainer.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                seekToPosition(
                    event.clientX
                );

                showControls();

            }
        );

    }


    /* ==================================================
       PREVIEW FRAME MENGIKUTI KURSOR (HOVER SCRUB)
    ================================================== */

    if (
        videoProgressContainer &&
        videoPreview &&
        videoPreviewCanvas &&
        videoPreviewTime &&
        mainVideo &&
        selectedVideo.videoUrl
    ) {

        const previewCtx =
            videoPreviewCanvas.getContext("2d");

        /* video tersembunyi khusus buat menangkap frame,
           supaya video utama tidak ikut ke-seek/terganggu */

        const previewVideo =
            document.createElement("video");

        previewVideo.src =
            selectedVideo.videoUrl;

        previewVideo.muted =
            true;

        previewVideo.preload =
            "auto";

        previewVideo.style.display =
            "none";

        document.body.appendChild(
            previewVideo
        );


        let previewFrameReady =
            false;

        let pendingPreviewTime =
            null;

        previewVideo.addEventListener(
            "loadedmetadata",
            () => {

                previewFrameReady =
                    true;


                if (pendingPreviewTime !== null) {

                    previewVideo.currentTime =
                        pendingPreviewTime;

                    pendingPreviewTime =
                        null;

                }

            }
        );


        previewVideo.addEventListener(
            "seeked",
            () => {

                try {

                    previewCtx.drawImage(
                        previewVideo,
                        0,
                        0,
                        videoPreviewCanvas.width,
                        videoPreviewCanvas.height
                    );

                }

                catch (error) {

                    console.log(
                        "Gagal menggambar preview frame:",
                        error
                    );

                }

            }
        );


        function updatePreviewFrame(hoverTime) {

            if (!previewFrameReady) {

                pendingPreviewTime =
                    hoverTime;

                return;

            }


            previewVideo.currentTime =
                hoverTime;

        }


        function handleProgressHover(clientX) {

            if (
                !Number.isFinite(mainVideo.duration) ||
                mainVideo.duration <= 0
            ) {

                return;

            }


            const rect =
                videoProgressContainer.getBoundingClientRect();

            const percentage =
                getSeekPercentage(clientX);

            const hoverTime =
                percentage *
                mainVideo.duration;


            /* posisi horizontal preview & titik hover,
               mengikuti posisi kursor pada progress bar */

            const offsetX =
                clientX -
                rect.left;

            const clampedOffsetX =
                Math.max(
                    0,
                    Math.min(
                        rect.width,
                        offsetX
                    )
                );


            videoPreview.style.left =
                `${clampedOffsetX}px`;


            /* jaga agar kotak preview tidak terpotong
               di ujung kiri/kanan progress bar */

            const previewWidth =
                videoPreview.offsetWidth || 160;

            const halfPreviewWidth =
                previewWidth / 2;

            let previewLeft =
                clampedOffsetX;

            if (previewLeft < halfPreviewWidth) {

                previewLeft =
                    halfPreviewWidth;

            }

            else if (
                previewLeft >
                rect.width - halfPreviewWidth
            ) {

                previewLeft =
                    rect.width -
                    halfPreviewWidth;

            }

            videoPreview.style.left =
                `${previewLeft}px`;

            if (videoProgressHoverDot) {

                videoProgressHoverDot.style.left =
                    `${percentage * 100}%`;

            }


            videoPreviewTime.textContent =
                formatVideoTime(hoverTime);


            updatePreviewFrame(hoverTime);


            videoPreview.classList.add(
                "visible"
            );

            if (videoProgressHoverDot) {

                videoProgressHoverDot.classList.add(
                    "visible"
                );

            }

        }


        function hideProgressHover() {

            videoPreview.classList.remove(
                "visible"
            );

            if (videoProgressHoverDot) {

                videoProgressHoverDot.classList.remove(
                    "visible"
                );

            }

        }


        videoProgressContainer.addEventListener(
            "pointermove",
            event => {

                handleProgressHover(
                    event.clientX
                );

            }
        );


        videoProgressContainer.addEventListener(
            "pointerenter",
            event => {

                handleProgressHover(
                    event.clientX
                );

            }
        );


        videoProgressContainer.addEventListener(
            "pointerleave",
            hideProgressHover
        );


        videoProgressContainer.addEventListener(
            "pointercancel",
            hideProgressHover
        );

    }


    /* ==================================================
       SETTINGS MENU
    ================================================== */

function closeSettings() {

    if (!settingsMenu) {

        return;

    }


    settingsMenu.classList.add(
        "hidden"
    );


    settingsMenu.setAttribute(
        "aria-hidden",
        "true"
    );

}


   function toggleSettings(event) {

    if (event) {

        event.stopPropagation();

    }


    if (!settingsMenu) {

        return;

    }


    const isOpen =
        !settingsMenu.classList.contains(
            "hidden"
        );


    if (isOpen) {

        closeSettings();

    }

    else {

        settingsMenu.classList.remove(
            "hidden"
        );


        settingsMenu.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    showControls();

}

    if (settingsButton) {

        settingsButton.addEventListener(
            "click",
            toggleSettings
        );

    }


    if (settingsMenu) {

        settingsMenu.addEventListener(
            "click",
            event => {

                event.stopPropagation();

            }
        );

    }


    /* ==================================================
       PLAYBACK SPEED
    ================================================== */

    speedOptions.forEach(
        option => {

            option.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    if (!mainVideo) {

                        return;

                    }


                    const speed =
                        Number(
                            option.dataset.speed
                        );


                    if (
                        !Number.isFinite(speed)
                    ) {

                        return;

                    }


                    mainVideo.playbackRate =
                        speed;


                    speedOptions.forEach(
                        item => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    option.classList.add(
                        "active"
                    );


                    closeSettings();

                    showControls();

                }
            );

        }
    );


    /* ==================================================
       CLICK OUTSIDE SETTINGS
    ================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !settingsMenu ||
                !settingsButton
            ) {

                return;

            }


            if (
                !settingsMenu.contains(
                    event.target
                ) &&
                !settingsButton.contains(
                    event.target
                )
            ) {

                closeSettings();

            }

        }
    );


 /* ==================================================
   AUTO HIDE CONTROLS + CURSOR
================================================== */

if (youtubePlayer) {

    youtubePlayer.addEventListener(
        "mousemove",
        () => {

            showControls();

            scheduleHideControls();

        }
    );


    youtubePlayer.addEventListener(
        "touchstart",
        () => {

            showControls();

            scheduleHideControls();

        },
        {
            passive: true
        }
    );


    youtubePlayer.addEventListener(
        "mouseenter",
        () => {

            showControls();

            scheduleHideControls();

        }
    );


    youtubePlayer.addEventListener(
        "mouseleave",
        () => {

            scheduleHideControls();

        }
    );

}

    /* ==================================================
       KEYBOARD CONTROLS
    ================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (!mainVideo) {

                return;

            }


            const activeElement =
                document.activeElement;


            const tagName =
                activeElement
                    ? activeElement.tagName
                    : "";


            if (
                tagName === "INPUT" ||
                tagName === "TEXTAREA" ||
                tagName === "SELECT"
            ) {

                return;

            }


            switch (
                event.key.toLowerCase()
            ) {

                case " ":
                case "k":

                    event.preventDefault();

                    togglePlayPause();

                    showControls();


                    if (
                        !mainVideo.paused
                    ) {

                        scheduleHideControls();

                    }

                    break;


                case "m":

                    event.preventDefault();


                    if (
                        mainVideo.muted ||
                        mainVideo.volume === 0
                    ) {

                        mainVideo.muted =
                            false;


                        if (
                            mainVideo.volume === 0
                        ) {

                            mainVideo.volume =
                                1;

                        }

                    }

                    else {

                        mainVideo.muted =
                            true;

                    }


                    updateVolumeButton();

                    showControls();

                    break;


case "f":

    event.preventDefault();

    toggleFullscreen();

    showControls();

    break;


                case "arrowleft":
                case "j":

                    event.preventDefault();


                    mainVideo.currentTime =
                        Math.max(
                            0,
                            mainVideo.currentTime - 5
                        );


                    updateVideoTime();

                    updateProgress();

                    showControls();

                    break;


                case "arrowright":
                case "l":

                    event.preventDefault();


                    mainVideo.currentTime =
                        Math.min(
                            mainVideo.duration || 0,
                            mainVideo.currentTime + 5
                        );


                    updateVideoTime();

                    updateProgress();

                    showControls();

                    break;


                case "arrowup":

                    event.preventDefault();


                    setVideoVolume(
                        mainVideo.volume + 0.05
                    );


                    showControls();

                    break;


                case "arrowdown":

                    event.preventDefault();


                    setVideoVolume(
                        mainVideo.volume - 0.05
                    );


                    showControls();

                    break;


                case "home":

                    event.preventDefault();


                    mainVideo.currentTime =
                        0;


                    updateVideoTime();

                    updateProgress();

                    showControls();

                    break;


                case "end":

                    event.preventDefault();


                    if (
                        Number.isFinite(
                            mainVideo.duration
                        )
                    ) {

                        mainVideo.currentTime =
                            mainVideo.duration;

                    }


                    updateVideoTime();

                    updateProgress();

                    showControls();

                    break;

            }

        }
    );


    /* ==================================================
       FULLSCREEN
    ================================================== */

    function toggleFullscreen() {

        if (!youtubePlayer) {

            return;

        }


        if (
            !document.fullscreenElement
        ) {

            if (
                youtubePlayer.requestFullscreen
            ) {

                youtubePlayer
                    .requestFullscreen()
                    .catch(
                        error => {

                            console.log(
                                "Fullscreen gagal:",
                                error
                            );

                        }
                    );

            }

        }

        else {

            if (
                document.exitFullscreen
            ) {

                document
                    .exitFullscreen()
                    .catch(
                        error => {

                            console.log(
                                "Keluar fullscreen gagal:",
                                error
                            );

                        }
                    );

            }

        }

    }


    if (fullscreenButton) {

        fullscreenButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFullscreen();

                showControls();

            }
        );

    }


    /* ==================================================
       FULLSCREEN CHANGE
    ================================================== */

    document.addEventListener(
        "fullscreenchange",
        () => {

            if (!fullscreenButton) {

                return;

            }


            if (
                document.fullscreenElement
            ) {

                fullscreenButton.setAttribute(
                    "aria-label",
                    "Exit fullscreen"
                );

            }

            else {

                fullscreenButton.setAttribute(
                    "aria-label",
                    "Fullscreen"
                );

            }


            showControls();

        }
    );


    /* ==================================================
       INITIAL PLAYER STATE
    ================================================== */

if (mainVideo) {

    mainVideo.volume =
        1;

    mainVideo.muted =
        false;

    mainVideo.playbackRate =
        1;


    /* ==================================================
       PROMPT "AKTIFKAN SUARA" JIKA AUTOPLAY BERSUARA DIBLOKIR
    ================================================== */

    function showUnmutePrompt() {

        if (
            !youtubePlayer ||
            document.getElementById("unmutePrompt")
        ) {

            return;

        }

        const unmutePrompt =
            document.createElement("button");

        unmutePrompt.id =
            "unmutePrompt";

        unmutePrompt.type =
            "button";

        unmutePrompt.className =
            "unmute-prompt";

        unmutePrompt.textContent =
            "🔇 Ketuk untuk aktifkan suara";

        unmutePrompt.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                mainVideo.muted =
                    false;

                mainVideo.play().catch(
                    () => {}
                );

                updateVolumeButton();

                unmutePrompt.remove();

            }
        );

        youtubePlayer.appendChild(
            unmutePrompt
        );

    }


    if (shouldAutoplay) {

        const startAutoplay = () => {

            const playPromise =
                mainVideo.play();

            if (
                playPromise !== undefined
            ) {

                playPromise.catch(
                    error => {

                        console.log(
                            "Autoplay bersuara diblokir browser, coba mode senyap:",
                            error
                        );

                        /* ==================================================
                           FALLBACK: AUTOPLAY SENYAP + TOMBOL AKTIFKAN SUARA
                        ================================================== */

                        mainVideo.muted =
                            true;

                        mainVideo.play()
                            .then(
                                () => {

                                    showUnmutePrompt();

                                }
                            )
                            .catch(
                                fallbackError => {

                                    console.log(
                                        "Autoplay senyap juga diblokir browser:",
                                        fallbackError
                                    );

                                }
                            );

                    }
                );

            }

        };


        if (
            mainVideo.readyState >= 2
        ) {

            startAutoplay();

        }

        else {

            mainVideo.addEventListener(
                "canplay",
                startAutoplay,
                {
                    once: true
                }
            );

        }

    }


    updatePlayButtons();

    updateVolumeButton();

    updateVideoTime();

    updateProgress();

    showControls();
}



    /* ==================================================
       VIDEO ERROR
    ================================================== */

    if (mainVideo) {

        mainVideo.addEventListener(
            "error",
            () => {

                console.error(
                    "Video gagal dimuat:",
                    selectedVideo.videoUrl
                );


                watchVideoPlayer.innerHTML = `

                    <div class="video-container video-error-state">

                        <div class="video-message">

                            Video gagal dimuat.

                            <br>

                            Pastikan file
                            "${selectedVideo.videoUrl}"
                            ada di folder yang benar.

                        </div>

                    </div>

                `;

            }
        );

    }


    /* ==================================================
       PLAYER DEBUG
    ================================================== */

    console.log(
        "YouTube-style player loaded:",
        selectedVideo.title
    );

        /* ==================================================
           DEBUG
        ================================================== */

        console.log(
            "Video loaded:",
            selectedVideo
        );

    }

    }


    /* ==================================================
       VIDEO NOT FOUND
    ================================================== */

    else {

        watchVideoTitle.textContent =
            "Video not found";


        watchVideoInfo.textContent =
            "The video you are looking for does not exist.";


        console.log(
            "Video not found:",
            videoId
        );

    }

}


/* ==================================================
   BACK BUTTON
================================================== */

if (backButton) {

    backButton.addEventListener(
        "click",
        () => {

            history.back();

        }
    );

}


/* ==================================================
   INITIAL RENDER
================================================== */

if (videoGrid) {

    renderVideos(videos);

}


/* ==================================================
   DEBUG
================================================== */

console.log(
    "MAB-Video loaded successfully 🚀"
);


console.log(
    "Total videos:",
    videos.length
);
