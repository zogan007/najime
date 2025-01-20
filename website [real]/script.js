// ตัวแปรสำหรับจัดการสินค้าในตะกร้า
let cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");

// ฟังก์ชันเพิ่มสินค้าในตะกร้า
function addToCart(name, price) {
  const product = cart.find((item) => item.name === name);
  if (product) {
    product.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

// ฟังก์ชันอัปเดตตะกร้าสินค้า
function updateCart() {
  cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  cartItems.innerHTML = cart
    .map(
      (item) =>
        `<div>
          <p>${item.name} x ${item.quantity} = ${item.price * item.quantity} บาท</p>
          <button onclick="removeFromCart('${item.name}')">ลบ</button>
        </div>`
    )
    .join("");
  cartTotal.textContent = cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// ฟังก์ชันลบสินค้าออกจากตะกร้า
function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
  updateCart();
}

// เปิด/ปิด Modal ตะกร้าสินค้า
document.getElementById("cart-btn").addEventListener("click", () => {
  cartModal.classList.remove("hidden");
});

document.getElementById("close-cart").addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

// เพิ่มสินค้าเมื่อคลิกปุ่ม "เพิ่มในตะกร้า"
document.querySelectorAll(".add-to-cart").forEach((button) =>
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    addToCart(name, price);
  })
);
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

