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

    <div
        class="video-progress"
        id="videoProgress"
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


    if (videoControls) {

        videoControls.classList.remove(
            "hidden"
        );

    }


    clearHideControlsTimer();

}


function hideControls() {

    if (
        !youtubePlayer ||
        !mainVideo ||
        mainVideo.paused
    ) {

        return;

    }


    closeSettings();


    youtubePlayer.classList.remove(
        "controls-visible"
    );


    if (videoControls) {

        videoControls.classList.add(
            "hidden"
        );

    }

}


function scheduleHideControls() {

    clearHideControlsTimer();


    if (
        !mainVideo ||
        mainVideo.paused
    ) {

        return;

    }


    hideControlsTimer =
        setTimeout(
            hideControls,
            3000
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

        clearHideControlsTimer();

    }
);


        mainVideo.addEventListener(
            "ended",
            () => {

                updatePlayButtons();

                showControls();

                clearHideControlsTimer();

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
       AUTO HIDE CONTROLS
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

    }


    updatePlayButtons();

    updateVolumeButton();

    updateVideoTime();

    updateProgress();

    showControls();


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
