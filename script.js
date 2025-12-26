const products = [
  {name:"Trekking Backpack", price:2499, category:"beginner", img:"https://picsum.photos/200?1"},
  {name:"Hiking Shoes", price:3999, category:"beginner", img:"https://picsum.photos/200?2"},
  {name:"Pro Trekking Pole", price:1899, category:"pro", img:"https://picsum.photos/200?3"},
  {name:"Thermal Jacket", price:2999, category:"pro", img:"https://picsum.photos/200?4"},
  {name:"Camping Tent", price:5499, category:"camping", img:"https://picsum.photos/200?5"},
  {name:"Portable Stove", price:1999, category:"camping", img:"https://picsum.photos/200?6"}
];

let category = "all";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;
  const search = document.getElementById("search").value.toLowerCase();
  list.innerHTML = "";

  products.forEach(p => {
    if ((category==="all" || p.category===category) && p.name.toLowerCase().includes(search)) {
      list.innerHTML += `
        <div class="product">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
        </div>`;
    }
  });
}

function filterCategory(c){ category=c; renderProducts(); }

function addToCart(name,price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  const count=document.getElementById("cart-count");
  if(count) count.innerText=cart.length;
  const items=document.getElementById("cart-items");
  const total=document.getElementById("cart-total");
  if(items){
    items.innerHTML="";
    let sum=0;
    cart.forEach(i=>{
      sum+=i.price;
      items.innerHTML+=`<li>${i.name} - ₹${i.price}</li>`;
    });
    total.innerText=sum;
  }
}

function toggleCart(){
  const m=document.getElementById("cart-modal");
  if(m) m.style.display=m.style.display==="block"?"none":"block";
}

function clearCart(){
  cart=[];
  localStorage.clear();
  updateCart();
}

function placeOrder(e){
  e.preventDefault();
  alert("Order placed successfully! (Demo)");
  clearCart();
  window.location.href="index.html";
}

function loadSummary(){
  const s=document.getElementById("summary");
  const t=document.getElementById("final-total");
  if(!s) return;
  let sum=0;
  cart.forEach(i=>{
    sum+=i.price;
    s.innerHTML+=`<li>${i.name} - ₹${i.price}</li>`;
  });
  t.innerText=sum;
}

renderProducts();
updateCart();
loadSummary();const products = [
  {name:"Trekking Backpack", price:2499, category:"beginner", img:"https://picsum.photos/200?1"},
  {name:"Hiking Shoes", price:3999, category:"beginner", img:"https://picsum.photos/200?2"},
  {name:"Pro Trekking Pole", price:1899, category:"pro", img:"https://picsum.photos/200?3"},
  {name:"Thermal Jacket", price:2999, category:"pro", img:"https://picsum.photos/200?4"},
  {name:"Camping Tent", price:5499, category:"camping", img:"https://picsum.photos/200?5"},
  {name:"Portable Stove", price:1999, category:"camping", img:"https://picsum.photos/200?6"}
];

let category = "all";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;
  const search = document.getElementById("search").value.toLowerCase();
  list.innerHTML = "";

  products.forEach(p => {
    if ((category==="all" || p.category===category) && p.name.toLowerCase().includes(search)) {
      list.innerHTML += `
        <div class="product">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
        </div>`;
    }
  });
}

function filterCategory(c){ category=c; renderProducts(); }

function addToCart(name,price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  const count=document.getElementById("cart-count");
  if(count) count.innerText=cart.length;
  const items=document.getElementById("cart-items");
  const total=document.getElementById("cart-total");
  if(items){
    items.innerHTML="";
    let sum=0;
    cart.forEach(i=>{
      sum+=i.price;
      items.innerHTML+=`<li>${i.name} - ₹${i.price}</li>`;
    });
    total.innerText=sum;
  }
}

function toggleCart(){
  const m=document.getElementById("cart-modal");
  if(m) m.style.display=m.style.display==="block"?"none":"block";
}

function clearCart(){
  cart=[];
  localStorage.clear();
  updateCart();
}

function placeOrder(e){
  e.preventDefault();
  alert("Order placed successfully! (Demo)");
  clearCart();
  window.location.href="index.html";
}

function loadSummary(){
  const s=document.getElementById("summary");
  const t=document.getElementById("final-total");
  if(!s) return;
  let sum=0;
  cart.forEach(i=>{
    sum+=i.price;
    s.innerHTML+=`<li>${i.name} - ₹${i.price}</li>`;
  });
  t.innerText=sum;
}

renderProducts();
updateCart();
loadSummary();
