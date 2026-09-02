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
        avatar: "M"
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
        avatar: "T"
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
        avatar: "G"
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
        avatar: "W"
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
        avatar: "N"
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
        avatar: "J"
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
        avatar: "D"
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
        avatar: "C"
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
        avatar: "P"
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
        avatar: "M"
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
        avatar: "P"
    }

];


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
                    `watch.html?id=${video.id}`;

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
           INFORMATION
        ================================================== */

        watchVideoInfo.innerHTML = `

            <strong>
                ${selectedVideo.channel}
            </strong>

            <br>

            ${selectedVideo.views}

            •

            ${selectedVideo.date}

            •

            ${selectedVideo.duration}

        `;


        /* ==================================================
           VIDEO WITHOUT FILE
        ================================================== */

        if (!selectedVideo.videoUrl) {

            watchVideoPlayer.innerHTML = `

                <div class="video-container">

                    <div
                        style="
                            width:100%;
                            height:100%;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            color:#ffffff;
                            font-size:14px;
                            text-align:center;
                            padding:20px;
                        "
                    >

                        Video ini belum memiliki
                        file (videoUrl).

                        <br>

                        Tambahkan properti
                        "videoUrl" pada data video
                        ini di script.js.

                    </div>

                </div>

            `;

        }

        else {

            /* ==================================================
               CREATE VIDEO PLAYER
            ================================================== */

            watchVideoPlayer.innerHTML = `

                <div class="video-container">

                    <video
                        id="mainVideo"
                        class="main-video"
                        preload="metadata"
                        playsinline
                    >

                        <source
                            src="${selectedVideo.videoUrl}"
                            type="video/mp4"
                        >

                        Browser kamu tidak mendukung
                        video HTML5.

                    </video>


                    <!-- ==================================================
                         PLAY BUTTON
                    ================================================== -->

                    <button
                        id="playButton"
                        class="play-button"
                        aria-label="Play video"
                        type="button"
                    >
                        ▶
                    </button>


                    <!-- ==================================================
                         VOLUME CONTROLS
                    ================================================== -->

                    <div
                        class="volume-controls"
                        id="volumeControls"
                    >

                        <button
                            id="muteButton"
                            class="mute-button"
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


                    <!-- ==================================================
                         FULLSCREEN BUTTON
                    ================================================== -->

                    <button
                        id="fullscreenButton"
                        class="fullscreen-button"
                        aria-label="Fullscreen"
                        type="button"
                    >
                        ⛶
                    </button>


                    <!-- ==================================================
                         PROGRESS BAR
                    ================================================== -->

                    <div
                        class="video-progress-container"
                        id="videoProgressContainer"
                    >

                        <div
                            class="video-progress"
                            id="videoProgress"
                        ></div>

                    </div>

                </div>

            `;


            /* ==================================================
               VIDEO ELEMENTS
            ================================================== */

            const mainVideo =
                document.getElementById(
                    "mainVideo"
                );


            const playButton =
                document.getElementById(
                    "playButton"
                );


            const videoProgressContainer =
                document.getElementById(
                    "videoProgressContainer"
                );


            const videoProgress =
                document.getElementById(
                    "videoProgress"
                );


            const muteButton =
                document.getElementById(
                    "muteButton"
                );


            const volumeSlider =
                document.getElementById(
                    "volumeSlider"
                );


            const fullscreenButton =
                document.getElementById(
                    "fullscreenButton"
                );


            /* ==================================================
               PLAY / PAUSE
            ================================================== */

            if (
                mainVideo &&
                playButton
            ) {

                let hidePlayButtonTimer;


                function togglePlayPause() {

                    if (mainVideo.paused) {

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


                function flashPlayButton() {

                    playButton.classList.remove(
                        "hidden"
                    );


                    clearTimeout(
                        hidePlayButtonTimer
                    );


                    hidePlayButtonTimer =
                        setTimeout(
                            () => {

                                playButton.classList.add(
                                    "hidden"
                                );

                            },
                            350
                        );

                }


                /* ==================================================
                   CLICK VIDEO
                ================================================== */

                mainVideo.addEventListener(
                    "click",
                    () => {

                        togglePlayPause();

                        flashPlayButton();

                    }
                );


                /* ==================================================
                   CLICK PLAY BUTTON
                ================================================== */

                playButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        togglePlayPause();

                        flashPlayButton();

                    }
                );


                /* ==================================================
                   PLAY EVENT
                ================================================== */

                mainVideo.addEventListener(
                    "play",
                    () => {

                        playButton.textContent =
                            "❚❚";


                        playButton.setAttribute(
                            "aria-label",
                            "Pause video"
                        );

                    }
                );


                /* ==================================================
                   PAUSE EVENT
                ================================================== */

                mainVideo.addEventListener(
                    "pause",
                    () => {

                        playButton.textContent =
                            "▶";


                        playButton.setAttribute(
                            "aria-label",
                            "Play video"
                        );

                    }
                );


                /* ==================================================
                   ENDED EVENT
                ================================================== */

                mainVideo.addEventListener(
                    "ended",
                    () => {

                        clearTimeout(
                            hidePlayButtonTimer
                        );


                        playButton.textContent =
                            "▶";


                        playButton.setAttribute(
                            "aria-label",
                            "Play video"
                        );


                        playButton.classList.remove(
                            "hidden"
                        );

                    }
                );

            }


            /* ==================================================
               VOLUME + MUTE
            ================================================== */

            if (
                mainVideo &&
                muteButton &&
                volumeSlider
            ) {

                /* ==================================================
                   SET VOLUME
                ================================================== */

                function setVideoVolume(
                    volume
                ) {

                    volume = Math.max(
                        0,
                        Math.min(
                            1,
                            volume
                        )
                    );


                    mainVideo.volume =
                        volume;


                    volumeSlider.value =
                        volume;


                    if (volume <= 0) {

                        mainVideo.muted =
                            true;


                        muteButton.textContent =
                            "🔇";


                        muteButton.setAttribute(
                            "aria-label",
                            "Unmute video"
                        );

                    }

                    else {

                        mainVideo.muted =
                            false;


                        muteButton.textContent =
                            "🔊";


                        muteButton.setAttribute(
                            "aria-label",
                            "Mute video"
                        );

                    }

                }


                /* ==================================================
                   VOLUME SLIDER - INPUT
                   REAL-TIME MOUSE + TOUCH
                ================================================== */

                volumeSlider.addEventListener(
                    "input",
                    event => {

                        event.stopPropagation();


                        const volume =
                            Number(
                                event.target.value
                            );


                        setVideoVolume(
                            volume
                        );

                    }
                );


                /* ==================================================
                   VOLUME SLIDER
                   POINTER EVENTS
                ================================================== */

                volumeSlider.addEventListener(
                    "pointerdown",
                    event => {

                        event.stopPropagation();


                        if (
                            volumeSlider.setPointerCapture
                        ) {

                            volumeSlider.setPointerCapture(
                                event.pointerId
                            );

                        }

                    }
                );


                volumeSlider.addEventListener(
                    "pointermove",
                    event => {

                        if (
                            event.buttons !== 0
                        ) {

                            event.stopPropagation();

                        }

                    }
                );


                /* ==================================================
                   MUTE BUTTON
                ================================================== */

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


                            volumeSlider.value =
                                restoredVolume;


                            muteButton.textContent =
                                "🔊";


                            muteButton.setAttribute(
                                "aria-label",
                                "Mute video"
                            );

                        }

                        else {

                            mainVideo.muted =
                                true;


                            muteButton.textContent =
                                "🔇";


                            muteButton.setAttribute(
                                "aria-label",
                                "Unmute video"
                            );

                        }

                    }
                );


                /* ==================================================
                   VOLUME CHANGE
                ================================================== */

                mainVideo.addEventListener(
                    "volumechange",
                    () => {

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


                            volumeSlider.value =
                                mainVideo.volume;

                        }

                    }
                );

            }


            /* ==================================================
               PROGRESS BAR
               REAL-TIME SEEK
            ================================================== */

            if (
                mainVideo &&
                videoProgressContainer &&
                videoProgress
            ) {

                let isSeeking =
                    false;


                /* ==================================================
                   UPDATE PROGRESS
                ================================================== */

                function updateProgress() {

                    if (
                        !mainVideo.duration ||
                        isNaN(
                            mainVideo.duration
                        )
                    ) {

                        return;

                    }


                    const progress =
                        (
                            mainVideo.currentTime /
                            mainVideo.duration
                        ) * 100;


                    videoProgress.style.width =
                        `${progress}%`;

                }


                /* ==================================================
                   GET SEEK POSITION
                ================================================== */

                function getSeekPosition(
                    clientX
                ) {

                    const rect =
                        videoProgressContainer
                            .getBoundingClientRect();


                    let percentage =
                        (
                            clientX -
                            rect.left
                        ) /
                        rect.width;


                    /* ==========================
                       LIMIT 0 - 100%
                    ========================== */

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


                /* ==================================================
                   SEEK TO POSITION
                ================================================== */

                function seekToPosition(
                    clientX
                ) {

                    if (
                        !mainVideo.duration ||
                        isNaN(
                            mainVideo.duration
                        )
                    ) {

                        return;

                    }


                    const percentage =
                        getSeekPosition(
                            clientX
                        );


                    mainVideo.currentTime =
                        percentage *
                        mainVideo.duration;


                    videoProgress.style.width =
                        `${percentage * 100}%`;

                }


                /* ==================================================
                   TIME UPDATE
                ================================================== */

                mainVideo.addEventListener(
                    "timeupdate",
                    () => {

                        if (!isSeeking) {

                            updateProgress();

                        }

                    }
                );


                /* ==================================================
                   POINTER DOWN
                   MOUSE + TOUCH
                ================================================== */

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

                    }
                );


                /* ==================================================
                   POINTER MOVE
                   REAL-TIME SEEK
                ================================================== */

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


                /* ==================================================
                   POINTER UP
                ================================================== */

                function finishSeeking(
                    event
                ) {

                    if (!isSeeking) {

                        return;

                    }


                    event.stopPropagation();


                    seekToPosition(
                        event.clientX
                    );


                    isSeeking =
                        false;

                }


                videoProgressContainer.addEventListener(
                    "pointerup",
                    finishSeeking
                );


                videoProgressContainer.addEventListener(
                    "pointercancel",
                    finishSeeking
                );


                /* ==================================================
                   CLICK
                   FALLBACK DESKTOP
                ================================================== */

                videoProgressContainer.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        /*
                         * Pointer events sudah menangani
                         * sebagian besar interaksi.
                         *
                         * Event click tetap dipertahankan
                         * sebagai fallback.
                         */

                        seekToPosition(
                            event.clientX
                        );

                    }
                );

            }


            /* ==================================================
               FULLSCREEN
            ================================================== */

            if (
                mainVideo &&
                fullscreenButton
            ) {

                fullscreenButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        const videoContainer =
                            mainVideo.closest(
                                ".video-container"
                            );


                        if (!videoContainer) {

                            return;

                        }


                        /* ==========================
                           ENTER FULLSCREEN
                        ========================== */

                        if (
                            !document.fullscreenElement
                        ) {

                            if (
                                videoContainer.requestFullscreen
                            ) {

                                videoContainer.requestFullscreen();

                            }

                        }

                        /* ==========================
                           EXIT FULLSCREEN
                        ========================== */

                        else {

                            if (
                                document.exitFullscreen
                            ) {

                                document.exitFullscreen();

                            }

                        }

                    }
                );


                /* ==================================================
                   FULLSCREEN CHANGE
                ================================================== */

                document.addEventListener(
                    "fullscreenchange",
                    () => {

                        if (
                            document.fullscreenElement
                        ) {

                            fullscreenButton.textContent =
                                "⛶";


                            fullscreenButton.setAttribute(
                                "aria-label",
                                "Exit fullscreen"
                            );

                        }

                        else {

                            fullscreenButton.textContent =
                                "⛶";


                            fullscreenButton.setAttribute(
                                "aria-label",
                                "Fullscreen"
                            );

                        }

                    }
                );

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

                            <div class="video-container">

                                <div
                                    style="
                                        width:100%;
                                        height:100%;
                                        display:flex;
                                        align-items:center;
                                        justify-content:center;
                                        color:#ffffff;
                                        font-size:14px;
                                        text-align:center;
                                        padding:20px;
                                    "
                                >

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

        }


        /* ==================================================
           DEBUG
        ================================================== */

        console.log(
            "Video loaded:",
            selectedVideo
        );

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
