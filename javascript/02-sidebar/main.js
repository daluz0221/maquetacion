let menuToggle = document.querySelector(".menuToggle");
let sidebar = document.querySelector(".sidebar");

let menuList = document.querySelectorAll(".Menulist li")

menuToggle.addEventListener("click", function(){
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
});

function activelink(){
    menuList.forEach( item =>{
        item.classList.remove("active")
    });
    this.classList.add("active");
}

menuList.forEach(item =>{
    item.addEventListener("click", activelink)
})