/* ==================================================
   MAB-VIDEO STUDIO
   Logika khusus halaman studio.html
   (header/dropdown umum sudah ditangani oleh script.js
   karena id elemennya sengaja disamakan)
================================================== */

const studioSidebar =
    document.getElementById("studioSidebar");

const studioMenuButton =
    document.getElementById("menuButton");

const studioMain =
    document.querySelector(".studio-main");


/* ==================================================
   HAMBURGER: KECILKAN SIDEBAR JADI IKON SAJA
   (bukan disembunyikan total, sesuai gaya YouTube Studio)
================================================== */

if (studioMenuButton && studioSidebar) {

    const studioSidebarOverlay =
        document.getElementById("sidebarOverlay");


    studioMenuButton.addEventListener(
        "click",
        () => {

            studioSidebar.classList.toggle(
                "collapsed"
            );

            if (studioMain) {

                studioMain.classList.toggle(
                    "sidebar-collapsed"
                );

            }

            if (
                studioSidebarOverlay &&
                window.innerWidth <= 700
            ) {

                studioSidebarOverlay.classList.toggle(
                    "active"
                );

            }

        }
    );


    if (studioSidebarOverlay) {

        studioSidebarOverlay.addEventListener(
            "click",
            () => {

                studioSidebar.classList.remove(
                    "collapsed"
                );

                studioSidebarOverlay.classList.remove(
                    "active"
                );

            }
        );

    }

}


/* ==================================================
   TOMBOL UPLOAD DI DALAM KARTU DASBOR
   (pakai modal upload asli dari script.js)
================================================== */

const studioUploadButton =
    document.getElementById("studioUploadButton");

if (studioUploadButton) {

    studioUploadButton.addEventListener(
        "click",
        () => {

            if (typeof openUploadModal === "function") {

                openUploadModal();

            }

        }
    );

}


/* ==================================================
   TOMBOL/ITEM YANG BELUM TERSEDIA DI DEMO INI
================================================== */

document.querySelectorAll(
    "[data-toast]"
).forEach(element => {

    element.addEventListener(
        "click",
        event => {

            event.preventDefault();

            if (typeof showGlobalToast === "function") {

                showGlobalToast(
                    "Fitur ini belum tersedia di demo ini."
                );

            }

        }
    );

});


/* ==================================================
   TOMBOL "MINTA STUDIO" & PENCARIAN KONTEN
================================================== */

const studioRequestButton =
    document.getElementById("studioRequestButton");

if (studioRequestButton) {

    studioRequestButton.addEventListener(
        "click",
        () => {

            if (typeof showGlobalToast === "function") {

                showGlobalToast(
                    "Fitur ini belum tersedia di demo ini."
                );

            }

        }
    );

}


const studioSearchInput =
    document.getElementById("studioSearchInput");

const studioSearchButton =
    document.getElementById("studioSearchButton");

function submitStudioSearch() {

    if (typeof showGlobalToast === "function") {

        showGlobalToast(
            "Pencarian konten channel belum tersedia di demo ini."
        );

    }

}

if (studioSearchButton) {

    studioSearchButton.addEventListener(
        "click",
        submitStudioSearch
    );

}

if (studioSearchInput) {

    studioSearchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                submitStudioSearch();

            }

        }
    );

}


/* ==================================================
   JUMLAH VIDEO TERUPLOAD (SEDIKIT SENTUHAN NYATA)
================================================== */

try {

    const rawUploaded =
        localStorage.getItem(
            "mabvideo-uploaded-videos"
        );

    const uploadedList =
        rawUploaded ? JSON.parse(rawUploaded) : [];

    if (uploadedList.length > 0) {

        const studioViewsCount =
            document.getElementById("studioViewsCount");

        if (studioViewsCount) {

            studioViewsCount.textContent =
                uploadedList.length;

        }

    }

}

catch (error) {

    console.log(
        "Tidak bisa membaca data video upload:",
        error
    );

}
