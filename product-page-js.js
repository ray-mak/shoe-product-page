const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelectorAll("[data-mobile-nav]");
const featuredImg = document.getElementById("featured");
const thumbnails = document.querySelectorAll(".thumbnail");
const closeBtn = document.getElementById("close-btn");
const mdlThumbnails = document.querySelectorAll(".mdl-thumbnail");
const prevBtn = document.getElementById("left-btn");
const nextBtn = document.getElementById("right-btn");
const carouselBtn = document.querySelectorAll("[data-carousel-button]");
const numberInput = document.getElementById("number-input");
const incrementBtn = document.querySelectorAll("[data-increment-button]");
const cartBtn = document.getElementById("cart-btn");
const cartContainer = document.querySelector(".cart-container");

const cartSummary = document.getElementById("summary-container");
const itemSummary = document.getElementsByClassName("item-summary");
const itemName = document.getElementsByClassName("item-name");
const checkOutBtn = document.getElementById("checkout");
const itemPrice = document.getElementsByClassName("item-price");
const quantity = document.getElementsByClassName("quantity");
const totalPrice = document.getElementsByClassName("total-price");
const addToCartBtn = document.getElementById("add-cart-btn");

//open and close cart
cartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cartContainer.classList.toggle("show-cart");
})

cartContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})

document.addEventListener("click", () => {   
    cartContainer.classList.remove("show-cart")    
})

//cart functionality (add/delete items)

/* These functions don't work on dynamically created elements. Ended up having to use event delegation (last function listed)
const addDelete = () => {
    console.log("delete function logged")
    const deleteBtn = document.getElementsByClassName("delete");
    for (let i = 0; i < deleteBtn.length; i++) {
        let button = deleteBtn[i];
        console.log(button);
        button.addEventListener('click', e => {
            console.log("event");
            let buttonClicked = e.target;
            buttonClicked.closest(".item-summary").remove();
            checkCart();
        })
    }
}


function removeCartItem(e) {
    console.log("function added");
    let buttonClicked = e.target;
    buttonClicked.closest(".item-summary").remove();
    checkCart();
}
*/

const checkCart = () => {
    if (itemSummary.length === 0) {
        if (checkOutBtn) {
            checkOutBtn.remove();
        }
        cartSummary.innerText = `Your cart is empty`
    }
}

const updatePrice = () => {
    for (let i = 0; i < itemPrice.length; i++) {
        let unitPrice = parseFloat(itemPrice[i].textContent);
        let qty = parseInt(quantity[i].textContent);
        let totalUnitPrice = unitPrice * qty;
        totalPrice[i].innerHTML = `$${totalUnitPrice.toFixed(2)}`;
    }
}

const addToCart = (e) => {
    let button = e.target;
    let product = button.closest(".product-container");
    let title = product.getElementsByClassName("product-title")[0].innerText;
    let price = product.getElementsByClassName("price")[0].innerText.replace("$", "");
    let img = product.getElementsByClassName("mobile-photos")[0].src;
    let cartItemName = document.getElementsByClassName("item-name");
    let qty = numberInput.value;
    let inCart = false;
    for (let i = 0; i < itemSummary.length; i++) {
        if (cartItemName[i].innerText == title) {
            let currentQuantity = parseInt(quantity[i].innerText);
            quantity[i].innerText = currentQuantity + parseInt(qty);
            updatePrice();
            inCart = true;
            return
        }
    }
    if (numberInput.value == 0) {
        return
    } else if (!inCart && itemSummary.length == 0) {
        cartSummary.innerHTML = ``;
        updateCart(title, price, img, qty);
        updatePrice();
        cartSummary.innerHTML += `
        <btn id="checkout" type="button">Checkout</btn>`
    } else {
        updateCart(title, price, img, qty);
        updatePrice();
    }
}

function updateCart(title, price, img, qty) {
    let newItem = document.createElement("div");
    newItem.classList.add("item-summary");
    let newItemContents = `
        <div class="cart-thumbnail">
            <img src="${img}" alt="thumnbail of shoe"/>
        </div>
        <div class="name-price">
            <p class="item-name">${title}</p>
            <p>$<span class="item-price">${price}</span> x <span class="quantity">${qty}</span> <span class="total-price">$375.00</span></p>
        </div>
        <img class="delete" src="images/icon-delete.svg" alt="delete icon"/>`;
    newItem.innerHTML = newItemContents;
    cartSummary.appendChild(newItem);
}



/* Original toggle for closing cart container when clicking outside of it
document.addEventListener("click", e => {
    const isCartContainer = e.target.closest(".cart-container");
    const isCartBtn = e.target === cartBtn;
    const isDeleteBtn = Array.from(deleteBtn).some(btn => e.target === btn);
    if (!isCartContainer && !isCartBtn && !isDeleteBtn) {
        cartContainer.classList.remove("show-cart")
    } 
})
*/


//toggle hamburger menu
hamburger.addEventListener("click", () => {
    mobileNav.forEach(element => {
        element.classList.toggle("opened")
    });
})

document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.forEach(element => {
            element.classList.remove("opened")
        })
    })
})

//turn thumbnail to featured image on click
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        thumbnails.forEach(i => {
            i.classList.remove("selected");            
        })
        this.classList.add("selected");
        document.getElementById("featured").src = this.src
    })
})

mdlThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
        mdlThumbnails.forEach(i => {
            i.classList.remove("selected");            
        })
        this.classList.add("selected");
        document.getElementById("main-image").src = this.src;
        currentIndex = index;
    })
})

//open and close lightbox
function openModal() {
    document.getElementById("lightbox").style.display = "block";
    for (let i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i].classList.contains("selected")) {
            currentIndex = i;
            showThumbnail(currentIndex);
        }
    }
}

function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}

//lightbox button functions
function findIndex() {
    for (let i = 0; i < mdlThumbnails.length; i++) {
        if (mdlThumbnails[i].classList.contains("selected")) {
            return i
        }
    }
}

let currentIndex = findIndex();

function showThumbnail(index) {
    mdlThumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add("selected");
        } else {
            thumbnail.classList.remove("selected")
        }
    })
    document.getElementById("main-image").src = mdlThumbnails[index].src;
}

function viewNext() {
    currentIndex = (currentIndex + 1) % mdlThumbnails.length;
    showThumbnail(currentIndex)
}

function viewPrevious() {
    currentIndex= (currentIndex - 1 + mdlThumbnails.length) % mdlThumbnails.length;
    showThumbnail(currentIndex)
}

//mobile corousel functions
carouselBtn.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-carousel-track]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    })
})

//custom input button functions
incrementBtn.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.dataset.incrementButton;
        const increment = direction === "up" ? 1 : -1;
        if (parseInt(numberInput.value) + increment <= 0) {
            numberInput.value = 0
        } else {
        numberInput.value = parseInt(numberInput.value) + increment;
        }
    })
})

prevBtn.addEventListener("click", viewPrevious);
nextBtn.addEventListener("click", viewNext);
featuredImg.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
addToCartBtn.addEventListener("click", addToCart)

cartSummary.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.closest('.item-summary').remove();
        checkCart();
    }
});