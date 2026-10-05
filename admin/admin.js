const adminMenuButton = document.getElementById("adminMenuButton");
const adminSidebar = document.getElementById("adminSidebar");
if (adminMenuButton && adminSidebar) {
    adminMenuButton.addEventListener("click", () => adminSidebar.classList.toggle("open"));
}
document.querySelectorAll("[data-admin-toast]").forEach(el => {
    el.addEventListener("click", event => {
        event.preventDefault();
        if (typeof showGlobalToast === "function") showGlobalToast("Fitur admin ini belum tersedia di demo ini.");
        else alert("Fitur admin ini belum tersedia di demo ini.");
    });
});
