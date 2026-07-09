function showScorePopup(points){

    const popup=document.getElementById("scorePopup");

    popup.textContent="+"+points;

    popup.classList.remove("show");

    void popup.offsetWidth;

    popup.classList.add("show");

}

function showLevelBanner(){

    const banner=document.getElementById("levelBanner");

    banner.classList.remove("show");

    void banner.offsetWidth;

    banner.classList.add("show");

}