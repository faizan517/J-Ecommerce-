let logOut = document.getElementById("on-off");
function logout() {
  if (logOut) {
    location.replace("../Login/index.html");
  }
}

//data
let data = [
  {
    title: "Iphone7",
    img: (src = "../../assets/images/product-1.png"),
  },
  {
    title: "Jam",
    img: (src = "../../assets/images/product-2.png"),
  },
  {
    title: "WaterBottle",
    img: (src = "../../assets/images/product-3.png"),
},
  {
      title: "BeardOil",
      img: (src = "../../assets/images/product-4.png"),
  },
  {
    title: "BottlePack",
    img: (src = "../../assets/images/product-5.png"),
  },
];

//  for (let i = 0; i < data.length; i++) {
//     //  const element = array[i];
//     let itemName1 = localStorage.setItem("itemNames",data[i].title) 
//     console.log("🚀 ~ file: app.js ~ line 89 ~ itemName1", itemName1)
     
//  }

//dom
// localStorage.setItem("title",data[i].title)

let scroll = document.getElementById("scroll");
for (let i = 0; i < data.length; i++) {
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "product");
  
  
  let img = document.createElement("img");
  img.setAttribute("class", "picSize");
  img.src = data[i].img;
  
  wrapper.appendChild(img);
  
  let addTo = document.createElement("div");
  addTo.setAttribute("class", "addTo");

  let productName = document.createElement("p");
  productName.innerText = data[i].title;
  addTo.appendChild(productName);
  
  let addToCartBtn = document.createElement("button");
  addToCartBtn.setAttribute("class", "addToCartBtn");
  addToCartBtn.setAttribute("onclick", "addToCart()");
  addToCartBtn.innerText = "AddToCart";
  // addToCartBtn.addEventListener(
    //       "click",
  //       cartItem.bind(null, data[i]),
  //       false
  //     );

  addTo.appendChild(addToCartBtn);

  wrapper.appendChild(addTo);
  
  scroll.appendChild(wrapper);
  
}


// let scroll = document.getElementById("scroll");
// let addToCartDiv = document.getElementById("addToCartDiv");
let addToCartDiv = document.createElement("div");
addToCartDiv.setAttribute("class", "addToCartDiv");
addToCartDiv.setAttribute("id", "addToCartDiv");

let cartHeading = document.createElement("h2");
cartHeading.innerText = "Cart"
// cartHeading.setAttribute("id", "addToCartDiv");

function addToCart() {

  

  let cartItem = document.createElement("div");
  cartItem.setAttribute("class", "cartItem");
  cartItem.setAttribute("id", "cartItem");
  cartItem.setAttribute("onclick", "deleteCartItem()");
  
  let cartItemName = document.createElement("p");
  cartItemName.innerHTML =localStorage.getItem("title");
  cartItem.appendChild(cartItemName);
  
  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "remove"; 
  removeBtn.setAttribute("class", "addToCartBtn");
  // removeBtn.addEventListener(
    //     "click",
    //     cartItem.bind(null, data),
    //     false
    //   );

    
    
    cartItem.appendChild(removeBtn);
    
    addToCartDiv.appendChild(cartItem);
    scroll.appendChild(addToCartDiv)
    // console.log("ok");
    
  }
  let processBtn = document.createElement("button");
  processBtn.innerHTML = "process"; 
  processBtn.setAttribute("class", "processBtn");
  processBtn.setAttribute("onclick", "process()");  
  
  addToCartDiv.appendChild(cartHeading);
  addToCartDiv.appendChild(processBtn);
  scroll.appendChild(addToCartDiv);
  
  
  function process() {
    let proc = document.getElementById("addToCartDiv")
    let itemdelete = document.getElementById("cartItem")
    proc.remove()
}

function deleteCartItem() {
  let deleteCart = document.getElementById("cartItem");
  //   console.log(deleteCart);
  deleteCart.remove()
}