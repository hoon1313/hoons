const videoList = ["img/wave1.mp4", "img/wave2.mp4", "img/wave3.mp4","img/wave4.mp4","img/wave5.mp4"];

function playRandomVideo() {
    const videoDiv = document.querySelector(".mb_video");
    const randomIndex = Math.floor(Math.random() * videoList.length);
    const videoSource = videoList[randomIndex];
    const video = document.createElement("video");
    video.src = videoSource;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    videoDiv.innerHTML = "";
    videoDiv.appendChild(video);
  }

  window.onload = function(e) {
    e.preventDefault();
    playRandomVideo();
  };