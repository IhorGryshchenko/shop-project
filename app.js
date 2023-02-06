let productsCountEl = document.querySelector("#products-count");
console.log(productsCountEl)

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log( addToCartBtns);

/* addToCartBtns.addEventListener("click", function() {
    console.log("clicked")
})
 */



/* for(let i= 0;i < addToCartBtns.length; i++ ){
    addToCartBtns[i].addEventListener("click", function() {
        console.log("clicked")
    })
}; */



addToCartBtns.forEach((btn)=>btn.addEventListener("click",function () {
    productsCountEl.textContent =  +productsCountEl.textContent +1 ;
   
}));