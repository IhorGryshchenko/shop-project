//add to cart

let productsCountEl = document.querySelector("#products-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

addToCartBtns.forEach((btn)=>btn.addEventListener("click",function () {
    productsCountEl.textContent =  +productsCountEl.textContent +1 ;
   
}));

//modal

let moreDetailsBtns = document.querySelectorAll(".btn-more-detalis");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

btnClose.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click",function (e) {
    if (e.target === modal) {
        closeModal ();
    }
});

function showModalByScroll() {
    if (window.scrollY >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
}

//setTimeout(openModal,10000);
//window.addEventListener("scroll", showModalByScroll);
 



// change like state

let likeBtns = document.querySelectorAll(".like-btn");
//console.log(likeBtns);

//first variant

likeBtns.forEach((item) => item.addEventListener("click", function () {
    /* if (item.classList.contains("liked")) {
        item.classList.remove("liked");
    } else {
        item.classList.add("liked")
    } */

    //second variant

    item.classList.toggle("liked");
}));

// slick

$(".slider-block").slick({
    dots:true,
   
});

AOS.init();
