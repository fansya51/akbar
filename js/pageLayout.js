const navbar = ` <link rel="stylesheet" href="../css/layout.css">
<nav class="navbar">
      <div class="burger-menu">
        <i class="fa-solid fa-bars" id="menuBtn"></i>
      </div>

      <div class="navbar-brand" onclick="window.location.href='../index.html'">
        <img src="../src/icon/icon.png" alt="Logo" width="70" height="50" />
      </div>
      <div class="navbar-link">
        <div class="navbar-link-top navbar-link-top-desktop">
          <div class="navbar-link-top-right">
           <a href="../index.html">Home</a>
            <a href="../about.html">About</a>
            <a href="../6-M Kysha Ramadhani/help.html">Help</a>
            <a target="_blank" href="http://wa.me/62895366877759">
            <i class="fa-brands fa-whatsapp"></i> Customer Service</a
          >
          </div>
        </div>
        <div class="navbar-link-bottom">
          <div class="navbar-kategori" id="navLinks">
        <a href="../4-Jawi Arung Samudra/Apparel.html">Apparel</a>
        <a href="../4-Jawi Arung Samudra/Backpack.html">Backpack</a>
        <a href="../4-Jawi Arung Samudra/Equipment.html">Equipment</a>
        <a href="../4-Jawi Arung Samudra/Accessories.html">Accessories</a>
        <a href="../4-Jawi Arung Samudra/Navigation.html">Navigation</a>
          </div>

          <div class="navbar-menu">
            <i class="fa-solid fa-magnifying-glass" onclick="openSearchModal()"></i>
            <i class="fa-solid fa-cart-shopping" onclick="window.location.href='../1-Dzaidan Rizky Alifian Akbar/cart.html'"></i>
          </div>
        </div>
      </div>
      <div class="navbar-menu navbar-link-top-mobile">
        <i class="fa-solid fa-magnifying-glass" onclick="openSearchModal()"></i>
        <i class="fa-solid fa-cart-shopping" onclick="window.location.href='../1-Dzaidan Rizky Alifian Akbar/cart.html'"></i>
      </div>
      <div class="navbar-link-top">
        <div class="navbar-link-top-right navbar-link-top-mobile">
          <a href="../about.html">About</a>
            <a href="../6-M Kysha Ramadhani/help.html">Help</a>
            <a target="_blank" href="http://wa.me/62895366877759">
            <i class="fa-brands fa-whatsapp"></i> Customer Service</a
          >
        </div>
      </div>
    </nav>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <img src="../src/icon/icon.png" alt="Logo" class="sidebar-logo" onclick="window.location.href='../index.html'" />
        <button class="close-btn" id="closeBtn">×</button>
      </div>

      <div class="navbar-kategori-mobile">
        <a href="../4-Jawi Arung Samudra/category.html?category=Apparel">Apparel</a>
        <a href="../4-Jawi Arung Samudra/category.html?category=Backpack">Backpack</a>
        <a href="../4-Jawi Arung Samudra/category.html?category=Equipment">Equipment</a>
        <a href="../4-Jawi Arung Samudra/category.html?category=Accessories">Accessories</a>
        <a href="../4-Jawi Arung Samudra/category.html?category=Navigation">Navigation</a>
      </div>
    </div>

     <!-- The Modal -->
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="searchModalLabel">Search Products</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" id="searchInput" class="form-control" placeholder="Search by name or category" onkeyup="filterProducts()">
                    <div id="suggestions" class="mt-2"></div>
                </div>
            </div>
        </div>
    </div>

    <button id="scrollToTopBtn" class="scroll-to-top">↑</button>
`;

const footer = `   
<div class="footer-top">
  <p><b>Sketdoor</b> is a trusted Indonesian e-commerce brand offering a wide range of equipment and accessories for outdoor adventures. Tailored for tropical climates, Sketdoor delivers high-quality gear including outdoor apparel, hiking boots, backpacks, and camping essentials. With designs that are both functional and stylish, Sketdoor supports activities like mountain trekking, nature exploration, and everyday adventure-inspired lifestyles.</p>
  
  <p>Start your journey with Sketdoor and explore our collection of original, reliable outdoor gear at great prices and with exciting promotions. Enjoy a smooth and flexible shopping experience with payment options like bank transfers, paylater, and COD. The process is safe, quick, and convenient—ensuring full support from Sketdoor at every step of your adventure.</p>
</div>

<footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>Sketdoor</h4>
          <a href="../about.html">Tentang Kami</a>
          <a href="../about.html">Karir</a>
          <a href="../about.html">Lokasi Toko</a>
          <a href="../about.html">Sustainability</a>
        </div>
        <div class="footer-section">
          <h4>Bantuan</h4>
          <a href="../6-M Kysha Ramadhani/help.html">Pengiriman</a>
          <a href="../6-M Kysha Ramadhani/help.html">Pembayaran</a>
          <a href="../6-M Kysha Ramadhani/help.html">Retur &amp; Penukaran</a>
          <a href="../6-M Kysha Ramadhani/help.html">Kebijakan Privasi</a>
        </div>

        <div class="footer-section">
          <h4>Berlangganan</h4>
          <p>Dapatkan promo dan info terbaru langsung ke email Anda.</p>
          <form class="subscribe-form">
            <input type="email" placeholder="Email Anda" required />
            <button type="submit">Berlangganan</button>
          </form>
        </div>
      </div>
      <div class="footer-social">
        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://x.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Sketdoor Produk Industri, Inc. All rights reserved.</p>
        <p>
          CS 24 Jam:
          <a href="mailto:cs@eigeradventure.com">cs@Sketdoor.com</a> |
          <a href="https://wa.me/628112311632">+62 811 2311 632</a>
        </p>
      </div>
    </footer>
`;

function openSearchModal(){
  new bootstrap.Modal(document.getElementById('searchModal')).show();
  document.getElementById('searchInput').focus();
}

function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(input) || 
        product.category.toLowerCase().includes(input)
    ).slice(0, 5);

    filteredProducts.forEach(product => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'suggestion';
        suggestionDiv.innerHTML = `
            <img src="../${product.image}" alt="${product.name}" style="width: 50px; height: 50px;">
            <strong>${product.name}</strong> - ${product.category}
        `;
        suggestionDiv.onclick = () => {
            window.location.href = `../${product.detail}`;
        };
        suggestions.appendChild(suggestionDiv);
    });
}

document.body.insertAdjacentHTML('afterbegin', navbar);
document.body.insertAdjacentHTML('beforeend', footer);

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("active");
  }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let lastScrollTop = 0;
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    nav.style.top = "-80px";
  } else {
    nav.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
