const introVideo = document.getElementById("introVideo");
const mainContent = document.getElementById("main");

introVideo.onended = () => {
  mainContent.classList.add("show");
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
};
