const products = [
  {
    id: 1,
    gender: "men",
    name: "TrailCore 50L Backpack",
    price: 4299,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    desc: "50L trekking backpack designed for multi-day expeditions.",
    specs: ["50L Capacity", "Aluminium Frame", "Rain Cover"]
  },
  {
    id: 2,
    gender: "women",
    name: "AstraLite 45L Backpack",
    price: 3999,
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    ],
    desc: "Ergonomic backpack designed specifically for women trekkers.",
    specs: ["45L Capacity", "Women Fit", "Lightweight"]
  }
];

/* EXPAND TO 50 */
const base = [...products];
let id = products.length + 1;
for (let i = 0; i < 48; i++) {
  const b = base[i % base.length];
  products.push({
    ...b,
    id: id++,
    name: b.name + " Variant " + (i + 1),
    price: b.price + (i % 5) * 300
  });
}

/* HOME FEATURED */
const homeMen = document.getElementById("homeMen");
const homeWomen = document.getElementById("homeWomen");

if (homeMen && homeWomen) {
  products.filter(p => p.gender === "men").slice(0,4).forEach(p => {
    homeMen.innerHTML += card(p);
  });
  products.filter(p => p.gender === "women").slice(0,4).forEach(p => {
    homeWomen.innerHTML += card(p);
  });
}

/* MEN / WOMEN */
const menBox = document.getElementById("menProducts");
const womenBox = document.getElementById("womenProducts");

if (menBox) products.filter(p=>p.gender==="men").forEach(p=>menBox.innerHTML+=card(p));
if (womenBox) products.filter(p=>p.gender==="women").forEach(p=>womenBox.innerHTML+=card(p));

/* PRODUCT PAGE */
const pid = new URLSearchParams(location.search).get("id");
if (pid) {
  const p = products.find(x=>x.id==pid);
  document.getElementById("mainImage").src = p.images[0];
  document.getElementById("pName").innerText = p.name;
  document.getElementById("pPrice").innerText = "₹" + p.price;
  document.getElementById("pDesc").innerText = p.desc;
  document.getElementById("pSpecs").innerHTML = p.specs.map(s=>`<li>${s}</li>`).join("");
  p.images.forEach(img=>{
    document.getElementById("thumbs").innerHTML +=
      `<img src="${img}" onclick="mainImage.src='${img}'">`;
  });
}

function card(p){
  return `
    <div class="card">
      <img src="${p.images[0]}">
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <a href="product.html?id=${p.id}">View Product</a>
      </div>
    </div>
  `;
}
