/* ==================================================
   MAB-VIDEO STUDIO — HALAMAN ANALYTICS
================================================== */

const studioInfoBanner =
    document.getElementById("studioInfoBanner");

const studioBannerClose =
    document.getElementById("studioBannerClose");

if (studioBannerClose && studioInfoBanner) {

    studioBannerClose.addEventListener(
        "click",
        () => {

            studioInfoBanner.style.display =
                "none";

        }
    );

}


/* ==================================================
   SINKRONKAN JUMLAH VIDEO UPLOAD KE ANGKA PENAYANGAN
   (sentuhan kecil biar konsisten dengan Dasbor)
================================================== */

try {

    const raw =
        localStorage.getItem(
            "mabvideo-uploaded-videos"
        );

    const uploadedList =
        raw ? JSON.parse(raw) : [];


    if (uploadedList.length > 0) {

        const viewsValue =
            uploadedList.length;

        const headline =
            document.getElementById(
                "studioAnalyticsHeadline"
            );

        const viewsNumber =
            document.getElementById(
                "studioAnalyticsViews"
            );


        if (headline) {

            headline.textContent =
                `Channel Anda ditonton ${viewsValue} kali dalam 28 hari terakhir`;

        }

        if (viewsNumber) {

            viewsNumber.textContent =
                viewsValue;

        }

    }

}

catch (error) {

    console.log(
        "Tidak bisa membaca data video upload:",
        error
    );

}
