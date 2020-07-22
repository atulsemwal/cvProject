document.querySelector(".about-modal-btn").addEventListener("click",
    function () {
        document.querySelector(".about-modal-bg").style.display = 'flex';
    })

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".about-modal-bg").style.display = "none";
    document.querySelector(".product-modal-bg").style.display= "none";
})

var el =document.querySelector(".about-modal-bg")
el.addEventListener("click", function(event){
    if(el != event.target){
      return  
    }
    document.querySelector(".about-modal-bg").style.display = "none";
})

document.querySelector(".project-modal-btn").addEventListener("click",
    function () {
        document.querySelector(".project-modal-bg").style.display = 'flex';
    })

document.querySelector(".closeTwo").addEventListener("click", function () {
     document.querySelector(".project-modal-bg").style.display= "none";
})
// document.querySelector(".product-modal-btn").addEventListener("click",
//     function () {
//         document.querySelector(".about-modal-bg").style.display = 'flex';
//     })

//Gloab
VANTA.GLOBE({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x86b3dc,
    backgroundColor: 0xdbe1eb
  })