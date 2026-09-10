/* ==================================================
   MAB-VIDEO STUDIO — HALAMAN KONTEN
================================================== */

const studioVideoRow =
    document.getElementById("studioVideoRow");

const studioVideoSection =
    document.getElementById("studioVideoSection");

const studioPlaylistSection =
    document.getElementById("studioPlaylistSection");

const studioContentTabs =
    document.querySelectorAll(".studio-content-tab");


function countCommentsFor(videoId) {

    try {

        const raw =
            localStorage.getItem(
                `mab-video-comments-${videoId}`
            );

        if (!raw) {

            return 0;

        }


        const list =
            JSON.parse(raw);

        if (!Array.isArray(list)) {

            return 0;

        }


        return list.reduce(
            (sum, comment) =>
                sum +
                1 +
                (comment.replies ? comment.replies.length : 0),
            0
        );

    }

    catch (error) {

        return 0;

    }

}


function renderStudioVideoCard(video) {

    const commentCount =
        countCommentsFor(video.id);

    const thumbnailHtml =
        video.thumbnailDataUrl
            ? `<img class="studio-video-thumb-img" src="${video.thumbnailDataUrl}" alt="">`
            : `<div class="studio-video-thumb-fallback">${video.icon || "🎬"}</div>`;

    return `

        <a
            class="studio-video-card"
            href="watch.html?id=${video.id}"
        >

            <div class="studio-video-thumb">

                ${thumbnailHtml}

                <span class="duration">${video.duration}</span>

            </div>

            <p class="studio-video-title">${video.title}</p>

            <p class="studio-video-date">${video.date}</p>

            <div class="studio-video-stats">

                <span>👁 ${video.views || "0 views"}</span>

                <span>💬 ${commentCount}</span>

            </div>

        </a>

    `;

}


function renderStudioContent() {

    if (!studioVideoRow) {

        return;

    }


    let uploadedList =
        [];

    try {

        const raw =
            localStorage.getItem(
                "mabvideo-uploaded-videos"
            );

        uploadedList =
            raw ? JSON.parse(raw) : [];

    }

    catch (error) {

        uploadedList =
            [];

    }


    if (uploadedList.length === 0) {

        studioVideoRow.innerHTML = `
            <p class="studio-empty-text">
                Anda belum mengupload video apa pun. Klik
                <strong>+ Buat &rarr; Upload video</strong>
                di pojok kanan atas untuk mulai mengupload.
            </p>
        `;

        return;

    }


    studioVideoRow.innerHTML =
        uploadedList
            .map(renderStudioVideoCard)
            .join("");

}


renderStudioContent();


/* ==================================================
   TAB VIDEO / PLAYLIST
================================================== */

if (studioContentTabs.length > 0) {

    studioContentTabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                studioContentTabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                tab.classList.add(
                    "active"
                );


                const isVideoTab =
                    tab.dataset.tab === "video";

                if (studioVideoSection) {

                    studioVideoSection.style.display =
                        isVideoTab ? "" : "none";

                }

                if (studioPlaylistSection) {

                    studioPlaylistSection.style.display =
                        isVideoTab ? "none" : "";

                }

            }
        );

    });


    /* Sembunyikan playlist di awal (tab Video aktif duluan) */

    if (studioPlaylistSection) {

        studioPlaylistSection.style.display =
            "none";

    }

}
