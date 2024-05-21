document.addEventListener("DOMContentLoaded", function() {
    const popupTrigger = document.querySelector(".popup-trigger");
    const popup = document.querySelector(".popup");
  
    popupTrigger.addEventListener("mouseover", function() {
      popup.style.display = "block";
    });

    popupTrigger.addEventListener("mouseleave", function() {
      popup.style.display = "none";
    });
});
