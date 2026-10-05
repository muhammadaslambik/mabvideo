const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

function saveMockSession(name, email) {
    try {
        localStorage.setItem("mab-video-user", JSON.stringify({ name: name, email: email }));
    } catch (error) {
        console.log("Gagal menyimpan sesi:", error);
    }
}

if (loginForm) {
    loginForm.addEventListener("submit", event => {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        if (!email) return;
        saveMockSession(email.split("@")[0] || "Pengguna", email);
        window.location.href = "index.html";
    });
}

if (registerForm) {
    registerForm.addEventListener("submit", event => {
        event.preventDefault();
        const firstName = document.getElementById("registerFirstName").value.trim();
        const lastName = document.getElementById("registerLastName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("registerConfirmPassword").value;
        if (password !== confirmPassword) {
            if (typeof showGlobalToast === "function") showGlobalToast("Konfirmasi kata sandi tidak cocok.");
            return;
        }
        saveMockSession(`${firstName} ${lastName}`.trim() || "Pengguna", email);
        window.location.href = "index.html";
    });
}
