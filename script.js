/* ================= PRODUCTS DATABASE ================= */

const products = [
  {
    id: 1,
    name: "TrailPro 45L Trekking Backpack",
    price: 3499,
    rating: 4,
    category: "pro",
    sizes: ["S", "M", "L"],
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    desc: "A rugged 45L trekking backpack designed for multi-day treks with ergonomic support and weather resistance.",
    specs: {
      weight: "1.2 kg",
      material: "Ripstop Polyester",
      warranty: "1 Year"
    }
  },
  {
    id: 2,
    name: "GripX High-Traction Hiking Shoes",
    price: 5299,
    rating: 5,
    category: "pro",
    sizes: ["S", "M", "L"],
    img: "https://images.unsplash.com/photo-1528701800489-20be3c53e2f6?auto=format&fit=crop&w=600&q=80",
    desc: "High-traction hiking shoes with reinforced ankle support, suitable for rocky and uneven terrain.",
    specs: {
      weight: "900 g (pair)",
      material: "Mesh + Rubber Sole",
      warranty: "6 Months"
    }
  },
  {
    id: 3,
    name: "StormGuard 3-Person Camping Tent",
    price: 6999,
    rating: 4,
    category: "camping",
    sizes: ["M", "L"],
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    desc: "Waterproof and wind-resistant camping tent suitable for high-altitude and monsoon conditions.",
    specs: {
      weight: "2.5 kg",
      material: "Waterproof Polyester",
      warranty: "1 Year"
    }
  },
  {
    id: 4,
    name: "ThermaPeak Insulated Trek Jacket",
    price: 3899,
    rating: 4,
    category: "winter",
    sizes: ["S", "M", "L"],
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=600&q=80",
    desc: "Thermal insulated trekking jacket designed for cold climates and high-altitude expeditions.",
    specs: {
      weight: "750 g",
      material: "Thermal Fleece + Windproof Shell",
      warranty: "6 Months"
    }
  }
];

/* ================= STATE ================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let reviews = JSON.parse(localStorage.getItem("reviews")) || {};

/* ================= CATALOG ================= */

function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <div class="info">
          <h4>${p.name}</h4>
          <p class="price">₹${p.price}</p>
          <p class="rating">${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</p>
          <a href="product.html?id=${p.id}" class="btn-primary">View Details</a>
        </div>
      </div>
    `;
  });
}

/* ================= PRODUCT PAGE ================= */

function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById("p-img").src = p.img;
  document.getElementById("p-name").innerText = p.name;
  document.getElementById("p-price").innerText = "₹" + p.price;
  document.getElementById("p-desc").innerText = p.desc;

  document.getElementById("rating-stars").innerText =
    "★".repeat(p.rating) + "☆".repeat(5 - p.rating);

  document.getElementById("p-specs").innerHTML = `
    <li><b>Weight:</b> ${p.specs.weight}</li>
    <li><b>Material:</b> ${p.specs.material}</li>
    <li><b>Warranty:</b> ${p.specs.warranty}</li>
  `;

  const sizeBox = document.getElementById("size");
  sizeBox.innerHTML = p.sizes.map(s => `<option>${s}</option>`).join("");

  renderReviews(id);
  document.getElementById("add-btn").onclick = () => addToCart(p, sizeBox.value);
  document.getElementById("wish-btn").onclick = () => addToWishlist(p.id);
}

/* ================= CART ================= */

function addToCart(product, size) {
  const item = cart.find(i => i.id === product.id && i.size === size);
  if (item) item.qty++;
  else cart.push({ ...product, size, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

/* ================= WISHLIST ================= */

function addToWishlist(id) {
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to wishlist");
  }
}

/* ================= REVIEWS ================= */

function submitReview(id) {
  const text = document.getElementById("review-text").value;
  if (!text) return;

  if (!reviews[id]) reviews[id] = [];
  reviews[id].push(text);

  localStorage.setItem("reviews", JSON.stringify(reviews));
  document.getElementById("review-text").value = "";
  renderReviews(id);
}

function renderReviews(id) {
  const box = document.getElementById("reviews");
  if (!box) return;

  const list = reviews[id] || [];
  box.innerHTML = list.map(r => `<p>⭐ ${r}</p>`).join("");
}

/* ================= INIT ================= */

renderProducts();
loadProduct();
