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

    /* Jika halaman bukan homepage,
       hentikan fungsi */
    if (!videoGrid) {
        return;
    }


    videoGrid.innerHTML = "";


    /* Jika tidak ada hasil */

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


    /* Buat setiap video card */

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


        /* ==================================================
           VIDEO CARD CLICK
        ================================================== */

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
   SEARCH WHILE TYPING
================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchVideos
    );


    /* Enter key */

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


            /* Hapus active */

            categoryButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            /* Tambahkan active */

            button.classList.add(
                "active"
            );


            /* Ambil category */

            const selectedCategory =
                button.dataset.category;


            /* Semua video */

            if (
                selectedCategory === "all"
            ) {

                renderVideos(videos);

                return;

            }


            /* Filter */

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


            /* ==========================
               DESKTOP
            ========================== */

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


            /* ==========================
               MOBILE
            ========================== */

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


            /* Tutup mobile sidebar */

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
   WATCH PAGE
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
   LOAD WATCH VIDEO
================================================== */

if (
    watchVideoPlayer &&
    watchVideoTitle &&
    watchVideoInfo
) {


    /* Ambil ?id= */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const videoId =
        Number(
            urlParams.get("id")
        );


    /* Cari video */

    const selectedVideo =
        videos.find(
            video =>
                video.id === videoId
        );


    /* ==========================
       VIDEO FOUND
    ========================== */

    if (selectedVideo) {


        /* Judul */

        watchVideoTitle.textContent =
            selectedVideo.title;


        /* Informasi */

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
   HTML5 VIDEO PLAYER
================================================== */

watchVideoPlayer.innerHTML = `

    <div class="video-container">

        <video
            id="mainVideo"
            class="main-video"
            preload="metadata"
        >

            <source
                src="${selectedVideo.videoUrl || ""}"
                type="video/mp4"
            >

            Browser kamu tidak mendukung video HTML5.

        </video>


        <button
            id="playButton"
            class="play-button"
            aria-label="Play video"
        >
            ▶
        </button>


        <!-- PROGRESS BAR -->

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
   PLAY / PAUSE
================================================== */

const mainVideo =
    document.getElementById("mainVideo");

const playButton =
    document.getElementById("playButton");

if (mainVideo && playButton) {

    playButton.addEventListener(
        "click",
        () => {

            if (mainVideo.paused) {

                mainVideo.play();

            } else {

                mainVideo.pause();

            }

        }
    );


    /* ==========================
       VIDEO PLAY
    ========================== */

    mainVideo.addEventListener(
        "play",
        () => {

            playButton.textContent = "❚❚";

            playButton.setAttribute(
                "aria-label",
                "Pause video"
            );

        }
    );


    /* ==========================
       VIDEO PAUSE
    ========================== */

    mainVideo.addEventListener(
        "pause",
        () => {

            playButton.textContent = "▶";

            playButton.setAttribute(
                "aria-label",
                "Play video"
            );

        }
    );


    /* ==========================
       VIDEO ENDED
    ========================== */

    mainVideo.addEventListener(
        "ended",
        () => {

            playButton.textContent = "▶";

            playButton.setAttribute(
                "aria-label",
                "Play video"
            );

        }
    );


    /* ==================================================
       VIDEO PROGRESS BAR
    ================================================== */

    const videoProgressContainer =
        document.getElementById(
            "videoProgressContainer"
        );

    const videoProgress =
        document.getElementById(
            "videoProgress"
        );


    if (
        videoProgressContainer &&
        videoProgress
    ) {

        /* ==========================
           UPDATE PROGRESS
        ========================== */

        mainVideo.addEventListener(
            "timeupdate",
            () => {

                if (mainVideo.duration) {

                    const progress =
                        (
                            mainVideo.currentTime /
                            mainVideo.duration
                        ) * 100;


                    videoProgress.style.width =
                        `${progress}%`;

                }

            }
        );


        /* ==========================
           SEEK VIDEO
        ========================== */

        videoProgressContainer.addEventListener(
            "click",
            event => {

                const rect =
                    videoProgressContainer.getBoundingClientRect();


                const clickPosition =
                    event.clientX - rect.left;


                const percentage =
                    clickPosition / rect.width;


                if (mainVideo.duration) {

                    mainVideo.currentTime =
                        percentage *
                        mainVideo.duration;

                }

            }
        );

    }

}


    /* ==========================
       CLICK PROGRESS BAR
    ========================== */

    videoProgressContainer.addEventListener(
        "click",
        event => {

            const rect =
                videoProgressContainer.getBoundingClientRect();


            const clickPosition =
                event.clientX - rect.left;


            const percentage =
                clickPosition / rect.width;


            if (mainVideo.duration) {

                mainVideo.currentTime =
                    percentage *
                    mainVideo.duration;

            }

        }
    );

}
   
}

    


    /* ==========================
       VIDEO NOT FOUND
    ========================== */

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
