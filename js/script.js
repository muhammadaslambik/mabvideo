/* ==================================================
   MAB-VIDEO
   MAIN JAVASCRIPT
================================================== */


/* ================= VIDEO DATA ================= */

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
        title: "Best Music Mix 2026",
        channel: "MAB Music",
        views: "3.4M views",
        date: "3 weeks ago",
        duration: "4:52",
        category: "music",
        icon: "🎵",
        avatar: "M"
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


/* ================= DOM ELEMENTS ================= */

const videoGrid = document.getElementById("videoGrid");

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const themeButton = document.getElementById("themeButton");

const menuButton = document.getElementById("menuButton");

const sidebar = document.getElementById("sidebar");

const sidebarOverlay =
    document.getElementById("sidebarOverlay");

const categoryButtons =
    document.querySelectorAll(".category-button");


/* ================= RENDER VIDEOS ================= */

/*
    Fungsi ini bertugas:

    Data videos
          ↓
    JavaScript
          ↓
    HTML Video Cards
*/

function renderVideos(videoList) {

    videoGrid.innerHTML = "";


    if (videoList.length === 0) {

        videoGrid.innerHTML = `
            <div class="no-results">
                <h2>No videos found</h2>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    videoList.forEach(video => {

        const videoCard = document.createElement("article");

        videoCard.className = "video-card";


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


        /*
            Ketika video diklik,
            untuk sementara kita tampilkan
            ID video di console.

            Nanti fungsi ini akan berkembang
            menjadi:

            video card
                 ↓
            watch.html
                 ↓
            video player
        */

        videoCard.addEventListener("click", () => {

            console.log(
                "Video selected:",
                video.id,
                video.title
            );

        });


        videoGrid.appendChild(videoCard);

    });

}


/* ================= SEARCH ================= */

function searchVideos() {

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


/* Search button */

searchButton.addEventListener(
    "click",
    searchVideos
);


/* Search while typing */

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


/* ================= CATEGORY FILTER ================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            /*
                Hapus active dari semua button
            */

            categoryButtons.forEach(
                item => {
                    item.classList.remove("active");
                }
            );


            /*
                Jadikan button yang diklik aktif
            */

            button.classList.add("active");


            /*
                Ambil category
            */

            const selectedCategory =
                button.dataset.category;


            /*
                Jika All,
                tampilkan semua video.
            */

            if (selectedCategory === "all") {

                renderVideos(videos);

                return;

            }


            /*
                Filter berdasarkan category
            */

            const filteredVideos =
                videos.filter(video => {

                    return video.category ===
                        selectedCategory;

                });


            renderVideos(filteredVideos);

        }
    );

});


/* ================= DARK MODE ================= */

themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");


        const darkMode =
            document.body.classList.contains("dark");


        if (darkMode) {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "mab-video-theme",
                "dark"
            );

        } else {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "mab-video-theme",
                "light"
            );

        }

    }
);


/* ================= LOAD SAVED THEME ================= */

const savedTheme =
    localStorage.getItem(
        "mab-video-theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


/* ================= MOBILE MENU ================= */

menuButton.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle("open");

        sidebarOverlay.classList.toggle(
            "active"
        );

    }
);


sidebarOverlay.addEventListener(
    "click",
    () => {

        sidebar.classList.remove("open");

        sidebarOverlay.classList.remove(
            "active"
        );

    }
);


/* ================= SIDEBAR ================= */

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


            item.classList.add("active");


            /*
                Tutup sidebar pada mobile
            */

            sidebar.classList.remove("open");

            sidebarOverlay.classList.remove(
                "active"
            );

        }
    );

});


/* ================= INITIAL RENDER ================= */

renderVideos(videos);


/* ================= DEBUG ================= */

console.log(
    "MAB-Video loaded successfully 🚀"
);

console.log(
    "Total videos:",
    videos.length
);
