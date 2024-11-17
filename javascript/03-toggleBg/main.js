let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom =  document.querySelector(".carousel .list");
let thumbnailDom =  document.querySelector(".carousel .thumbnail");


nextDom.addEventListener("click", function(){
    console.log("me llamó jefe?");
    
    showSlider("next")
});

prevDom.addEventListener("click", function(){
    showSlider("prev")
});

let timeRunning = 2200;
let runTimeOut;
let timeAutoNext = 5000;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)

function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll((".carousel .thumbnail .item"));

    switch (type) {
        case "next":
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add("next");
            break;
        case "prev":
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carouselDom.classList.add("prev");
            break;
        default:
            break;
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}