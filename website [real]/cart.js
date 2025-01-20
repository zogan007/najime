// ตัวแปรสำหรับเก็บสินค้าในตะกร้า
let cart = [];
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.querySelector("a[href='cart.html']");

// ฟังก์ชันเพิ่มสินค้าในตะกร้า
function addToCart(name, price) {
  const item = cart.find((product) => product.name === name);
  if (item) {
    item.quantity += 1; // เพิ่มจำนวนสินค้า
  } else {
    cart.push({ name, price, quantity: 1 }); // เพิ่มสินค้าใหม่
  }
  updateCart(); // อัปเดตตะกร้า
}

// ฟังก์ชันลบสินค้า
function removeFromCart(name) {
  cart = cart.filter((product) => product.name !== name);
  updateCart(); // อัปเดตตะกร้า
}

// ฟังก์ชันอัปเดตตะกร้าสินค้า
function updateCart() {
  cartItems.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <p>${item.name} x ${item.quantity} = ${item.price * item.quantity} บาท</p>
        <button onclick="removeFromCart('${item.name}')">ลบ</button>
      </div>
    `
    )
    .join("");

  // รวมราคาและจำนวนสินค้าในตะกร้า
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = total;
  cartCount.textContent = `ตะกร้าสินค้า (${cart.reduce((sum, item) => sum + item.quantity, 0)})`;
}

// เปิด Modal ตะกร้าสินค้า
document.querySelector("a[href='cart.html']").addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.classList.remove("hidden");
});

// ปิด Modal ตะกร้าสินค้า
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
