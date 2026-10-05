const channelSubscribeButton = document.getElementById("channelSubscribeButton");
if (channelSubscribeButton) {
    let isSubscribed = false;
    channelSubscribeButton.addEventListener("click", () => {
        isSubscribed = !isSubscribed;
        channelSubscribeButton.textContent = isSubscribed ? "Berlangganan" : "Subscribe";
        channelSubscribeButton.classList.toggle("subscribed", isSubscribed);
    });
}
