const products = [
  {
    id: 1,
    name: "TrailPro 45L Trekking Backpack",
    price: 3499,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    desc: "45L ergonomic trekking backpack designed for multi-day hikes.",
    specs: ["45 Litres Capacity", "1.2 kg Weight", "Water Resistant"]
  },
  {
    id: 2,
    name: "GripX High-Traction Hiking Shoes",
    price: 5299,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    desc: "High grip hiking shoes built for rocky and uneven terrain.",
    specs: ["Rubber Grip Sole", "Ankle Support", "Breathable Mesh"]
  }
];

/* HOME */
const grid = document.getElementById("productGrid");
if (grid) {
  products.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <a href="product.html?id=${p.id}">View Product</a>
        </div>
      </div>
    `;
  });
}

/* PDP */
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (id) {
  const p = products.find(x => x.id == id);
  document.getElementById("pImage").src = p.img;
  document.getElementById("pName").innerText = p.name;
  document.getElementById("pPrice").innerText = "₹" + p.price;
  document.getElementById("pDesc").innerText = p.desc;
  document.getElementById("pSpecs").innerHTML =
    p.specs.map(s => `<li>${s}</li>`).join("");
}
