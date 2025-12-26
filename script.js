let currentProductId = null;

const products = [
  {
    id:1,
    name:"TrailPro 45L Backpack",
    price:3499,
    rating:4,
    sizes:["S","M","L"],
    img:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    desc:"Professional trekking backpack for multi-day hikes.",
    specs:["1.2kg","Ripstop Polyester","1 Year Warranty"]
  },
  {
    id:2,
    name:"GripX Hiking Shoes",
    price:5299,
    rating:5,
    sizes:["S","M","L"],
    img:"https://images.unsplash.com/photo-1528701800489-20be3c53e2f6?auto=format&fit=crop&w=600&q=80",
    desc:"High traction hiking shoes for rough terrain.",
    specs:["900g","Rubber Sole","6 Months Warranty"]
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let reviews = JSON.parse(localStorage.getItem("reviews")) || {};

function renderProducts(){
  const box = document.getElementById("product-list");
  if(!box) return;
  box.innerHTML="";
  products.forEach(p=>{
    box.innerHTML+=`
      <div class="product">
        <img src="${p.img}">
        <div style="padding:10px">
          <h4>${p.name}</h4>
          <p>₹${p.price}</p>
          <a href="product.html?id=${p.id}" class="btn-primary">View</a>
        </div>
      </div>`;
  });
}

function loadProduct(){
  const id = new URLSearchParams(location.search).get("id");
  if(!id) return;
  currentProductId = id;
  const p = products.find(x=>x.id==id);
  document.getElementById("p-img").src=p.img;
  document.getElementById("p-name").innerText=p.name;
  document.getElementById("p-price").innerText="₹"+p.price;
  document.getElementById("p-desc").innerText=p.desc;
  document.getElementById("rating-stars").innerText="★".repeat(p.rating);
  document.getElementById("p-specs").innerHTML=p.specs.map(s=>`<li>${s}</li>`).join("");
  document.getElementById("size").innerHTML=p.sizes.map(s=>`<option>${s}</option>`).join("");
  document.getElementById("add-btn").onclick=()=>addToCart(p);
  document.getElementById("wish-btn").onclick=()=>addToWishlist(p.id);
  renderReviews(id);
}

function addToCart(p){
  cart.push({...p, size:document.getElementById("size").value, qty:1});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart");
}

function toggleCart(){
  document.getElementById("cart-modal").classList.toggle("open");
}

function addToWishlist(id){
  if(!wishlist.includes(id)){ wishlist.push(id); localStorage.setItem("wishlist",JSON.stringify(wishlist)); alert("Added to wishlist"); }
}

function submitReview(id){
  if(!reviews[id]) reviews[id]=[];
  reviews[id].push(document.getElementById("review-text").value);
  localStorage.setItem("reviews",JSON.stringify(reviews));
  renderReviews(id);
}

function renderReviews(id){
  const box=document.getElementById("reviews");
  if(!box) return;
  box.innerHTML=(reviews[id]||[]).map(r=>`<p>⭐ ${r}</p>`).join("");
}

function placeOrder(){
  alert("Order Placed (Demo)");
  localStorage.clear();
  location.href="index.html";
}

renderProducts();
loadProduct();
