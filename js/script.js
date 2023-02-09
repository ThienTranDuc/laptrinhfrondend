//-------------menu-----//
const toP = document.querySelector(".top")
window.addEventListener("scroll",function(){
    const X = this.pageYOffset;
    if(X>1){toP.classList.add("active")}
    else{
        toP.classList.remove("active")
    }
})
//-------------dhcvjdshbcdsihv----------//
const itemsliderbar = document.querySelectorAll(".category-left-li")
itemsliderbar.forEach(function(menu,index1){
  menu.addEventListener("click",function(){
    menu.classList.toggle("block")
  })
})