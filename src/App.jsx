import React, { useState } from "react";
import PhoneCategoryPage from "./PhoneCategoryPage.jsx";
import ShopPage from "./ShopPage.jsx";
import "./style.css";

const products = [
  {
    name: "iPhone 13",
    brand: "Apple",
    spec: "128GB | Good Condition",
    price: "Rs. 98,000",
    tag: "Used",
    image: "/products/iphone-13.jpg",
  },
  {
    name: "Galaxy S21 5G",
    brand: "Samsung",
    spec: "256GB | Very Good Condition",
    price: "Rs. 75,000",
    tag: "Used",
    image: "/products/samsung-s21.jpg",
  },
  {
    name: "Redmi Note 12",
    brand: "Xiaomi",
    spec: "128GB | Good Condition",
    price: "Rs. 52,000",
    tag: "Used",
    image: "/products/samsung-s21.jpg",
  },
  {
    name: "OnePlus 9",
    brand: "OnePlus",
    spec: "128GB | Very Good Condition",
    price: "Rs. 62,000",
    tag: "Used",
    image: "/products/oneplus-9.jpg",
  },
  {
    name: "Galaxy A54",
    brand: "Samsung",
    spec: "128GB | Good Condition",
    price: "Rs. 68,000",
    tag: "Used",
    image: "/products/samsung-s21.jpg",
  },
  {
    name: "iPhone X",
    brand: "Apple",
    spec: "64GB | Good Condition",
    price: "Rs. 56,000",
    tag: "Used",
    image: "/products/iphone-13.jpg",
  },
];

const brands = [
  ["Apple", "/brands/apple.svg"],
  ["Samsung", "/brands/samsung.svg"],
  ["Xiaomi", "/brands/xiaomi.svg"],
  ["Vivo", "/brands/vivo.svg"],
  ["OPPO", "/brands/oppo.svg"],
  ["HONOR", "/brands/honor.svg"],
  ["OnePlus", "/brands/oneplus.svg"],
  ["realme", "/brands/realme.svg"],
  ["Infinix", "/brands/infinix.svg"],
];

const categories = [
  { id: "used-phones", icon: "phone", title: "Used Mobile", text: "Quality checked used phones" },
  { id: "new-phones", icon: "spark", title: "Brand New Mobile", text: "Latest brand new smartphones" },
  { id: "accessories", icon: "cover", title: "Accessories", text: "Essential mobile accessories" },
  { id: "booking", icon: "calendar", title: "Booking", text: "Book a mobile service" },
  { id: "speaker", icon: "speaker", title: "Speaker", text: "Portable & mobile speakers" },
  { id: "earbuds", icon: "earbuds", title: "Earbuds", text: "Wireless audio experience" },
  { id: "power-banks", icon: "battery", title: "Power Bank", text: "Power on the go" },
  { id: "chargers", icon: "charger", title: "Charger", text: "Fast & reliable charging" },
  { id: "repair", icon: "repair", title: "Repair", text: "Professional phone repair" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div>🚚 <b>Free Delivery Islandwide (Rs. 3,000+)</b></div>
        <div>🛡️ <b>100% Genuine Products</b></div>
        <div>☎ <b>Need Help? 077 123 4567</b></div>
        <div>♙ <b>Login / Register</b></div>
      </div>

      <header className="main-header">
        <a className="brand-logo" href="#">
          <img src="/used-mobile-logo.svg" alt="Used Mobile Store" />
        </a>

        <nav className={menuOpen ? "desktop-nav open" : "desktop-nav"}>
          <a className="active" href="#">Home</a>
          <a href="#products">Used Phones⌄</a>
          <a href="#categories">Accessories⌄</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-right">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search phones, models..."
            />
            <span>⌕</span>
          </div>

          <button className="head-icon" aria-label="Wishlist">♡</button>

          <button className="head-icon cart-head" aria-label="Cart">
            🛒
            <small>0</small>
          </button>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);

  const slides = [
    "/used-mobile-hero-phones-full.png",
    "/used-mobile-hero-phones-full.png",
    "/used-mobile-hero-phones-full.png",
    "/used-mobile-hero-phones-full.png",
  ];

  return (
    <section className="hero">
      <button
        className="hero-arrow left"
        onClick={() => setSlide((slide + slides.length - 1) % slides.length)}
      >
        ‹
      </button>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-pill">
            Best Deals&nbsp;&nbsp;|&nbsp;&nbsp;Trusted Quality&nbsp;&nbsp;|&nbsp;&nbsp;Your Next Phone Awaits
          </div>

          <h1>
            USED MOBILE <span>STORE</span>
          </h1>

          <p>
            Quality Used Phones &amp; Mobile Accessories
            <br />
            at the Best Prices in Sri Lanka
          </p>

          <button className="shop-btn">
            Shop Now <b>→</b>
          </button>

          <div className="hero-benefits">
            <div>
              <strong>♢</strong>
              <span><b>100% Original</b><small>Products</small></span>
            </div>

            <i></i>

            <div>
              <strong>▣</strong>
              <span><b>Safe &amp; Secure</b><small>Payments</small></span>
            </div>

            <i></i>

            <div>
              <strong>▱</strong>
              <span><b>Islandwide</b><small>Delivery</small></span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={slides[slide]}
            alt="Premium mobile phones"
          />

        </div>
      </div>

      <button
        className="hero-arrow right"
        onClick={() => setSlide((slide + 1) % slides.length)}
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === slide ? "active" : ""}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

function CategoryIcon({ type }) {
  const icons = {
    phone: <svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10 18.5h4"/></svg>,
    spark: <svg viewBox="0 0 24 24"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z"/></svg>,
      calendar: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M7 2v4M17 2v4M3 9h18M8 13h3M8 17h2"/></svg>,
      speaker: <svg viewBox="0 0 24 24"><path d="M4 9v6h4l6 5V4L8 9z"/><path d="M18 9a4 4 0 0 1 0 6M20 6a8 8 0 0 1 0 12"/></svg>,
    charger: <svg viewBox="0 0 24 24"><path d="M8 3v6M16 3v6M7 7h10v4a5 5 0 0 1-10 0z"/><path d="M12 16v5M9 21h6"/></svg>,
    cable: <svg viewBox="0 0 24 24"><path d="M7 4v5a5 5 0 0 0 5 5h5"/><path d="M5 2v4M9 2v4M15 12v6M19 12v6"/><path d="M13 9h5a2 2 0 0 1 2 2v1h-7z"/></svg>,
    earbuds: <svg viewBox="0 0 24 24"><path d="M7 4a4 4 0 0 0-4 4v3a2 2 0 0 0 4 0V8"/><path d="M17 4a4 4 0 0 1 4 4v3a2 2 0 0 1-4 0V8"/><path d="M7 8v9a3 3 0 0 0 3 3"/><path d="M17 8v9a3 3 0 0 1-3 3"/></svg>,
    headphones: <svg viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z"/></svg>,
    battery: <svg viewBox="0 0 24 24"><rect x="3" y="7" width="17" height="10" rx="2"/><path d="M20 10h2v4h-2M8 10v4M12 9v6M16 10v4"/></svg>,
    cover: <svg viewBox="0 0 24 24"><rect x="5" y="2.5" width="14" height="19" rx="3"/><circle cx="12" cy="18" r="1"/></svg>,
    shield: <svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>,
    repair: <svg viewBox="0 0 24 24"><path d="m14 6 4-4 4 4-4 4z"/><path d="m3 21 8.5-8.5"/><path d="M14 10 4 20l-1 1 1-1 1-1"/><path d="M8 5a5 5 0 0 0 6 6"/></svg>,
  };

  return <span className="category-svg-icon">{icons[type]}</span>;
}

function Categories({ onSelect }) {
  return (
    <section className="category-section" id="categories">
      <div className="section-heading category-heading">
        <div>
          <span className="section-kicker">SHOP EVERYTHING</span>
          <h2>Categories</h2>
          <p>Find phones, accessories and services.</p>
        </div>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <button
            className="category-card"
            key={category.id}
            onClick={() => onSelect?.(category.id)}
          >
            <CategoryIcon type={category.icon} />
            <div className="category-card-content">
              <strong>{category.title}</strong>
              <small>{category.text}</small>
            </div>
            <span className="category-arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  );
}


function Brands({ onBrandSelect }) {
  return (
    <section className="brands-section">
      <div className="section-heading">
        <div>
          <span className="section-kicker">TOP BRANDS</span>
          <h2>Shop by Brand</h2>
        </div>
        <span className="section-arrow">→</span>
      </div>

      <div className="brands-grid">
        {brands.map(([name, logo]) => (
          <button
            className="brand-card"
            key={name}
            onClick={() => onBrandSelect(name)}
          >
            <img className="brand-small-logo" src={logo} alt={name} />
            <span className="brand-small-name">{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function BrandPage({ brand, onBack }) {
  const brandProducts = products.filter((product) => product.brand === brand);
  const brandLogo = brands.find(([name]) => name === brand)?.[1];

  return (
    <section className="brand-page">
      <button className="brand-back" onClick={onBack}>← Back to Brands</button>

      <div className="brand-store-top">
        <div className="brand-store-logo">
          <img src={brandLogo} alt={brand} />
        </div>
        <div>
          <span className="section-kicker">OFFICIAL BRAND STORE</span>
          <h1>{brand} Mobile Phones</h1>
          <p>Used &amp; New Phones • Accessories • Repairs</p>
        </div>
      </div>

      <div className="brand-ad-banner">
        <div>
          <span>🔥 SPECIAL OFFER</span>
          <h2>{brand} Phones &amp; Accessories</h2>
          <p>Quality checked phones at competitive prices.</p>
          <button>Shop Phones →</button>
        </div>
        <div className="brand-ad-icon">📱</div>
      </div>

      <div className="brand-section-title">
        <div>
          <span className="section-kicker">PHONE COLLECTION</span>
          <h2>{brand} Phones</h2>
        </div>
        <span>{brandProducts.length} Products</span>
      </div>

      <div className="product-grid brand-product-grid">
        {brandProducts.length > 0 ? (
          brandProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <div className={`product-tag ${product.tag === "New" ? "new" : ""}`}>
                {product.tag}
              </div>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.spec}</p>
              <strong className="price">{product.price}</strong>
              <button className="cart-btn">🛒 View Phone</button>
            </article>
          ))
        ) : (
          <div className="brand-empty">
            <div>📱</div>
            <h3>{brand} Phones</h3>
            <p>New stock is being added soon.</p>
            <button className="cart-btn">☎ Contact Store</button>
          </div>
        )}
      </div>

      <div className="brand-service-grid">
        <button className="brand-service-card">
          <span>🔧</span>
          <div><strong>{brand} Repairs</strong><small>Display • Battery • Charging</small></div>
        </button>
        <button className="brand-service-card">
          <span>🛡️</span>
          <div><strong>{brand} Accessories</strong><small>Covers • Glass • Chargers</small></div>
        </button>
        <button className="brand-service-card">
          <span>📞</span>
          <div><strong>Need Help?</strong><small>Call / WhatsApp Store</small></div>
        </button>
      </div>

      <div className="brand-accessories-box">
        <span className="section-kicker">ACCESSORIES</span>
        <h2>{brand} Accessories</h2>
        <div className="brand-accessory-list">
          <span>📱 Phone Covers</span>
          <span>🛡️ Tempered Glass</span>
          <span>🔌 Chargers</span>
          <span>🎧 Earphones</span>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (name) => {
    setWishlist((items) =>
      items.includes(name)
        ? items.filter((item) => item !== name)
        : [...items, name]
    );
  };

  return (
    <section className="products-section" id="products">
      <div className="section-title">
        <h2><span>ϟ</span> Featured Products</h2>
        <a href="#">View All →</a>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <article className="product-card" key={product.name}>
            <div className={`product-tag ${product.tag === "New" ? "new" : ""}`}>
              {product.tag}
            </div>

            <button
              className={`wishlist ${
                wishlist.includes(product.name) ? "selected" : ""
              }`}
              onClick={() => toggleWishlist(product.name)}
            >
              {wishlist.includes(product.name) ? "♥" : "♡"}
            </button>

            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <h3>{product.name}</h3>
            <p>{product.spec}</p>
            <strong className="price">{product.price}</strong>

            <button className="cart-btn">
              🛒 &nbsp; Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function PromoBanners() {
  return (
    <section className="promo-section">
      <div className="promo-card">
        <div>
          <h3>Premium<br />Accessories</h3>
          <p>Keep Your Device<br />Powered &amp; Protected</p>
          <button>Shop Now →</button>
        </div>
        <div className="promo-art">🔌 🎧 🔗</div>
      </div>

      <div className="promo-card">
        <div>
          <h3>Stylish Phone Covers</h3>
          <p>Protect Your Phone<br />With Style</p>
          <button>View More →</button>
        </div>
        <div className="cover-art">📱 📱 📱</div>
      </div>

      <div className="promo-card glass-promo">
        <div>
          <h3>Tempered Glass</h3>
          <p>Clear Protection<br />For Your Screen</p>
          <button>Shop Now →</button>
        </div>
        <div className="glass-art">▱</div>
      </div>
    </section>
  );
}

function Footer({ currentPage, onNavigate }) {
  return (
    <>
      <footer className="app-footer">
        <div className="footer-main">
          <div className="footer-brand-block">
            <div className="footer-logo-wrap">
              <img src="/used-mobile-logo.svg" alt="Used Mobile Store" />
            </div>

            <p>
              Quality used phones and mobile accessories with trusted service,
              fair prices and islandwide delivery.
            </p>

            <div className="footer-trust">
              <span>✓ Genuine Products</span>
              <span>✓ Quality Checked</span>
              <span>✓ Islandwide Delivery</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Shop</h4>

            <button onClick={() => onNavigate("shop")}>
              Used Phones
            </button>

            <button onClick={() => onNavigate("categories")}>
              Accessories
            </button>

            <button onClick={() => onNavigate("shop")}>
              Latest Deals
            </button>

            <button onClick={() => onNavigate("shop")}>
              Featured Phones
            </button>
          </div>

          <div className="footer-links">
            <h4>Customer Care</h4>

            <button onClick={() => onNavigate("home")}>
              Home
            </button>

            <button onClick={() => onNavigate("categories")}>
              Service Center
            </button>

            <button onClick={() => onNavigate("wishlist")}>
              Wishlist
            </button>

            <button onClick={() => onNavigate("cart")}>
              Cart
            </button>
          </div>

          <div className="footer-contact-card">
            <span className="footer-contact-label">NEED HELP?</span>

            <h3>Talk to our team</h3>

            <p>
              We are ready to help you find the right phone.
            </p>

            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              <span>💬</span>

              <div>
                <strong>WhatsApp Us</strong>
                <small>077 123 4567</small>
              </div>

              <b>→</b>
            </a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>© 2026 Used Mobile Store</span>
          <span>Trusted • Genuine • Affordable</span>
          <span>Privacy • Terms</span>
        </div>
      </footer>

      <nav
        className="mobile-bottom-nav"
        aria-label="Mobile navigation"
      >

        <button
          type="button"
          className={`mobile-nav-item ${
            currentPage === "home" ? "active" : ""
          }`}
          onClick={() => onNavigate("home")}
        >
          <span className="mobile-nav-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-5v-6h-5v6h-5A1.5 1.5 0 0 1 3 19.5z" />
            </svg>
          </span>

          <small>Home</small>
        </button>

        <button
          type="button"
          className={`mobile-nav-item ${
            currentPage === "shop" ? "active" : ""
          }`}
          onClick={() => onNavigate("shop")}
        >
          <span className="mobile-nav-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z" />
              <path d="M8 8h8M8 12h8M8 16h5" />
            </svg>
          </span>

          <small>Shop</small>
        </button>

        <button
          type="button"
          className={`mobile-nav-item ${
            currentPage === "categories" ? "active" : ""
          }`}
          onClick={() => onNavigate("categories")}
        >
          <span className="mobile-nav-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="6" height="6" rx="1" />
              <rect x="14" y="4" width="6" height="6" rx="1" />
              <rect x="4" y="14" width="6" height="6" rx="1" />
              <rect x="14" y="14" width="6" height="6" rx="1" />
            </svg>
          </span>

          <small>Categories</small>
        </button>

        <button
          type="button"
          className={`mobile-nav-item ${
            currentPage === "wishlist" ? "active" : ""
          }`}
          onClick={() => onNavigate("wishlist")}
        >
          <span className="mobile-nav-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6z" />
            </svg>
          </span>

          <small>Wishlist</small>
        </button>

        <button
          type="button"
          className={`mobile-nav-item cart-nav ${
            currentPage === "cart" ? "active" : ""
          }`}
          onClick={() => onNavigate("cart")}
        >
          <span className="mobile-nav-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.2 11.2A2 2 0 0 0 9.2 17H18a2 2 0 0 0 1.9-1.4L22 8H7" />
              <circle cx="10" cy="20" r="1.2" />
              <circle cx="18" cy="20" r="1.2" />
            </svg>
          </span>

          <small>Cart</small>

          <i>0</i>
        </button>

      </nav>
    </>
  );
}



const accessoryProducts = {
  chargers: [
    ["Fast Charger 20W", "Rs. 4,500"],
    ["Fast Charger 33W", "Rs. 5,500"],
    ["Original Type-C Charger", "Rs. 6,500"],
  ],
  cables: [
    ["Type-C Fast Charging Cable", "Rs. 1,500"],
    ["Lightning Cable", "Rs. 2,000"],
    ["Type-C to Type-C Cable", "Rs. 2,500"],
  ],
  earbuds: [
    ["Wireless Earbuds", "Rs. 5,500"],
    ["TWS Pro Earbuds", "Rs. 7,500"],
    ["Premium Wireless Buds", "Rs. 9,500"],
  ],
  handfree: [
    ["Type-C Handfree", "Rs. 2,000"],
    ["3.5mm Handfree", "Rs. 1,500"],
    ["Bluetooth Handfree", "Rs. 4,500"],
  ],
  "power-banks": [
    ["10,000mAh Power Bank", "Rs. 6,500"],
    ["20,000mAh Power Bank", "Rs. 9,500"],
    ["Fast Charge Power Bank", "Rs. 11,500"],
  ],
  "phone-battery": [
    ["iPhone Replacement Battery", "Rs. 8,500"],
    ["Samsung Replacement Battery", "Rs. 7,500"],
    ["Android Replacement Battery", "Rs. 6,500"],
  ],
  "back-covers": [
    ["Clear Protection Cover", "Rs. 1,200"],
    ["Premium Silicone Cover", "Rs. 1,800"],
    ["Shockproof Cover", "Rs. 2,500"],
  ],
  "tempered-glass": [
    ["9H Tempered Glass", "Rs. 1,200"],
    ["Privacy Glass", "Rs. 1,800"],
    ["Full Glue Glass", "Rs. 2,000"],
  ],
  watches: [
    ["Smart Watch Series 1", "Rs. 12,500"],
    ["Smart Watch Series 2", "Rs. 16,500"],
    ["Premium Smart Watch", "Rs. 22,500"],
  ],
  displays: [
    ["iPhone Display Replacement", "Rs. 18,500"],
    ["Samsung Display Replacement", "Rs. 22,500"],
    ["Android Display Replacement", "Rs. 12,500"],
  ],
  motherboards: [
    ["iPhone Motherboard", "Contact for Price"],
    ["Samsung Motherboard", "Contact for Price"],
    ["Android Motherboard", "Contact for Price"],
  ],
};

function AccessoriesPage({ category, onNavigate }) {
  const categoryData = categories.find((item) => item.id === category);

  const accessoryCategories = [
    {
      id: "tempered-glass",
      title: "Tempered Glass",
      text: "Strong screen protection",
      icon: "cover",
      color: "blue",
    },
    {
      id: "back-covers",
      title: "Back Cover",
      text: "Stylish phone protection",
      icon: "cover",
      color: "purple",
    },
    {
      id: "watches",
      title: "Watch",
      text: "Smart & stylish watches",
      icon: "calendar",
      color: "green",
    },
    {
      id: "displays",
      title: "Display",
      text: "Quality display replacements",
      icon: "phone",
      color: "orange",
    },
    {
      id: "motherboards",
      title: "Motherboard",
      text: "Mobile board solutions",
      icon: "repair",
      color: "red",
    },
  ];

  const categoryMeta = {
    accessories: {
      title: "Accessories",
      eyebrow: "MOBILE ESSENTIALS",
      text: "Everything your phone needs in one place.",
      icon: "cover",
      color: "orange",
    },
    "tempered-glass": {
      title: "Tempered Glass",
      eyebrow: "SCREEN PROTECTION",
      text: "Protect your display from scratches and damage.",
      icon: "cover",
      color: "blue",
    },
    "back-covers": {
      title: "Back Cover",
      eyebrow: "PHONE PROTECTION",
      text: "Protect your phone with style.",
      icon: "cover",
      color: "purple",
    },
    watches: {
      title: "Watch",
      eyebrow: "SMART COLLECTION",
      text: "Smart and stylish watches for everyday use.",
      icon: "calendar",
      color: "green",
    },
    displays: {
      title: "Display",
      eyebrow: "DISPLAY SOLUTIONS",
      text: "Quality display replacement options.",
      icon: "phone",
      color: "orange",
    },
    motherboards: {
      title: "Motherboard",
      eyebrow: "MOBILE HARDWARE",
      text: "Reliable motherboard solutions for mobile devices.",
      icon: "repair",
      color: "red",
    },
    speaker: {
      title: "Speaker",
      eyebrow: "AUDIO COLLECTION",
      text: "Powerful sound for home, travel and everyday use.",
      icon: "speaker",
      color: "cyan",
    },
    earbuds: {
      title: "Earbuds",
      eyebrow: "WIRELESS AUDIO",
      text: "Wireless sound for every moment.",
      icon: "earbuds",
      color: "pink",
    },
    "power-banks": {
      title: "Power Bank",
      eyebrow: "POWER ON THE GO",
      text: "Stay powered wherever you go.",
      icon: "battery",
      color: "yellow",
    },
    chargers: {
      title: "Charger",
      eyebrow: "FAST CHARGING",
      text: "Reliable charging for your everyday devices.",
      icon: "charger",
      color: "indigo",
    },
  };

  const meta =
    categoryMeta[category] || {
      title: categoryData?.title || "Mobile Store",
      eyebrow: "MOBILE COLLECTION",
      text: categoryData?.text || "Quality mobile products.",
      icon: categoryData?.icon || "phone",
      color: "blue",
    };

  const items = accessoryProducts[category] || [];

  const isAccessoriesMain = category === "accessories";

  return (
    <main className={`mobile-page category-detail-page category-theme-${meta.color}`}>
      <section className="category-detail-shell">

        <button
          type="button"
          className="category-back-button"
          onClick={() => onNavigate("categories")}
        >
          <span className="category-back-icon">←</span>
          <span>
            <strong>Back to All Categories</strong>
            <small>Return to all categories</small>
          </span>
        </button>

        <section className="category-detail-hero">
          <div className="category-detail-copy">
            <span className="category-detail-eyebrow">
              {meta.eyebrow}
            </span>

            <h1>{meta.title}</h1>

            <p>{meta.text}</p>

            <div className="category-detail-pill">
              <CategoryIcon type={meta.icon} />
              <span>Trusted Mobile Store</span>
            </div>
          </div>

          <div className="category-detail-icon">
            <CategoryIcon type={meta.icon} />
          </div>
        </section>

        {isAccessoriesMain ? (
          <section className="category-subcategory-section">
            <div className="category-section-heading">
              <div>
                <span>EXPLORE</span>
                <h2>Accessories Categories</h2>
              </div>

              <small>5 categories</small>
            </div>

            <div className="accessory-category-grid">
              {accessoryCategories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`accessory-category-card accessory-color-${item.color}`}
                  onClick={() => onNavigate(`category:${item.id}`)}
                >
                  <div className="accessory-category-icon">
                    <CategoryIcon type={item.icon} />
                  </div>

                  <div className="accessory-category-content">
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>

                  <span className="accessory-category-arrow">→</span>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <>
            <section className="category-ad-card">
              <div className="category-ad-copy">
                <span>STORE SPECIAL</span>
                <h2>Quality Products.<br />Better Prices.</h2>
                <p>
                  Genuine products with trusted service and support.
                </p>

                <button type="button">
                  Shop Now →
                </button>
              </div>

              <div className="category-ad-visual">
                <div className="category-ad-photo">
                  <img
                    src={`/ads/${category}-banner.jpg`}
                    alt={`${meta.title} offer`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.parentElement.classList.add(
                        "ad-photo-fallback"
                      );
                    }}
                  />

                  <div className="category-ad-fallback">
                    <CategoryIcon type={meta.icon} />
                  </div>
                </div>
              </div>
            </section>

            <section className="category-products-section">
              <div className="category-section-heading">
                <div>
                  <span>SHOP NOW</span>
                  <h2>Popular {meta.title}</h2>
                </div>

                <small>
                  {items.length > 0 ? `${items.length} items` : "New"}
                </small>
              </div>

              {items.length > 0 ? (
                <div className="category-product-grid">
                  {items.map(([name, price], index) => (
                    <article
                      className="category-product-card"
                      key={name}
                    >
                      <div className="category-product-art">
                        <span>
                          {index === 0 ? "POPULAR" : "NEW"}
                        </span>

                        <CategoryIcon type={meta.icon} />
                      </div>

                      <div className="category-product-info">
                        <small>{meta.title}</small>
                        <h3>{name}</h3>

                        <div className="category-product-footer">
                          <strong>{price}</strong>
                          <button type="button">
                            View →
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="category-empty-card">
                  <div>
                    <CategoryIcon type={meta.icon} />
                  </div>

                  <h3>Products Coming Soon</h3>
                  <p>
                    New {meta.title.toLowerCase()} products will be
                    added soon.
                  </p>
                </div>
              )}
            </section>
          </>
        )}

      </section>
    </main>
  );
}
function BookingPage() {
  const [form, setForm] = React.useState({
    model: "",
    service: "",
    name: "",
    date: "",
    time: "",
    phone: "",
    notes: "",
  });

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    if (!form.model || !form.service || !form.name || !form.date || !form.time || !form.phone) {
      alert("Please fill all required fields.");
      return;
    }

    const message = [
      "📱 *USED MOBILE STORE - SERVICE BOOKING*",
      "",
      `📱 *Phone Model:* ${form.model}`,
      `🔧 *Service:* ${form.service}`,
      `👤 *Name:* ${form.name}`,
      `📅 *Date:* ${form.date}`,
      `🕐 *Time:* ${form.time}`,
      `📞 *Phone:* ${form.phone}`,
      form.notes ? `📝 *Notes:* ${form.notes}` : "",
      "",
      "Please confirm my booking.",
    ].filter(Boolean).join("\\n");

    window.open(
      `https://wa.me/94771234567?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="mobile-page booking-page">
      <section className="category-page-hero booking-hero">
        <div>
          <span className="eyebrow">SERVICE BOOKING</span>
          <h1>Book Your Service</h1>
          <p>Tell us about your phone and choose the service you need.</p>
        </div>
      </section>

      <section className="booking-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">QUICK BOOKING</span>
            <h2>Service Details</h2>
          </div>
        </div>

        <div className="repair-form booking-form">
          <div className="form-field">
            <label>Phone Model *</label>
            <input
              type="text"
              placeholder="e.g. iPhone 13 / Samsung S21"
              value={form.model}
              onChange={(e) => updateField("model", e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Service *</label>
            <select
              value={form.service}
              onChange={(e) => updateField("service", e.target.value)}
            >
              <option value="">Select service</option>
              <option value="Display Replacement">Display Replacement</option>
              <option value="Software Service">Software Service</option>
              <option value="Battery Replacement">Battery Replacement</option>
              <option value="Charging Repair">Charging Repair</option>
              <option value="Camera Repair">Camera Repair</option>
              <option value="Speaker / Mic Repair">Speaker / Mic Repair</option>
              <option value="Other Repair">Other Repair</option>
            </select>
          </div>

          <div className="form-field">
            <label>Your Name *</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>

          <div className="booking-form-row">
            <div className="form-field">
              <label>Preferred Date *</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Preferred Time *</label>
              <input
                type="time"
                value={form.time}
                onChange={(e) => updateField("time", e.target.value)}
              />
            </div>
          </div>

          <div className="form-field">
            <label>Phone Number *</label>
            <input
              type="tel"
              placeholder="07X XXX XXXX"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Notes</label>
            <textarea
              rows="4"
              placeholder="Tell us about the problem or any additional details..."
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
            />
          </div>

          <button
            type="button"
            className="repair-submit booking-submit"
            onClick={handleBooking}
          >
            <span>💬</span>
            Send Booking via WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
}


function CategoryPage({ category, onBrandSelect, onNavigate }) {
  if (category === "booking") {
    return <BookingPage />;
  }

  if (category === "used-phones") {
    return (
      <PhoneCategoryPage
        type="used"
        brands={brands}
        products={products}
        onBack={() => onNavigate("categories")}
        onBrandSelect={onBrandSelect}
      />
    );
  }

  if (category === "new-phones") {
    return (
      <PhoneCategoryPage
        type="new"
        brands={brands}
        products={products}
        onBack={() => onNavigate("categories")}
        onBrandSelect={onBrandSelect}
      />
    );
  }

  if (category === "repair") {
    return <RepairSection />;
  }

  return (
    <AccessoriesPage
      category={category}
      onNavigate={onNavigate}
    />
  );
}

function CategoriesPage({ onNavigate }) {
  return (
    <main className="mobile-page categories-page">
      <section className="categories-page-hero">
        <div>
          <span className="eyebrow">EXPLORE STORE</span>
          <h1>Shop by Category</h1>
          <p>Find phones, accessories, services and more.</p>
        </div>
      </section>

      <section className="categories-page-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ALL CATEGORIES</span>
            <h2>What are you looking for?</h2>
          </div>
        </div>

        <div className="category-grid categories-page-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="category-card categories-page-card"
              onClick={() => onNavigate(`category:${category.id}`)}
            >
              <CategoryIcon type={category.icon} />

              <div className="category-card-content">
                <strong>{category.title}</strong>
                <small>{category.text}</small>
              </div>

              <span className="category-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function MobilePage({ page, onNavigate, onBrandSelect }) {
  if (page === "categories") {
    return <CategoriesPage onNavigate={onNavigate} />;
  }

  if (page.startsWith("category:")) {
    return (
      <CategoryPage
        category={page.replace("category:", "")}
        onBrandSelect={onBrandSelect}
        onNavigate={onNavigate}
      />
    );
  }

  if (page === "shop") {
    return (
      <ShopPage
        products={products}
        onNavigate={onNavigate}
      />
    );
  }

  if (page === "wishlist") {
    return (
      <main className="mobile-page empty-page">
        <div>
          <span className="eyebrow">Your List</span>
          <h1>Wishlist</h1>
          <p>Your favourite products will appear here.</p>
        </div>
      </main>
    );
  }

  if (page === "cart") {
    return (
      <main className="mobile-page empty-page">
        <div>
          <span className="eyebrow">Shopping</span>
          <h1>Your Cart</h1>
          <p>Your selected products will appear here.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mobile-page">
      <Products />
    </main>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [brandType, setBrandType] = useState("used");

  const navigate = (page) => {
    setSelectedBrand(null);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBrandSelect = (brand, type = "used") => {
    setSelectedBrand(brand);
    setBrandType(type);
    setCurrentPage("brand");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromBrand = () => {
    setSelectedBrand(null);
    setCurrentPage(
      brandType === "new"
        ? "category:new-phones"
        : "category:used-phones"
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedBrand) {
    return (
      <>
        <Header />

        <BrandPage
          brand={selectedBrand}
          type={brandType}
          onBack={handleBackFromBrand}
        />

        <Footer
          currentPage={currentPage}
          onNavigate={navigate}
        />
      </>
    );
  }

  return (
    <>
      {currentPage === "home" ? (
        <>
          <Header />
          <Hero />

          <Brands
            onBrandSelect={(brand) => handleBrandSelect(brand, "used")}
          />

          <Products />
          <PromoBanners />
        </>
      ) : (
        <>
          <Header />

          <MobilePage
            page={currentPage}
            onNavigate={navigate}
            onBrandSelect={handleBrandSelect}
          />
        </>
      )}

      <Footer
        currentPage={currentPage}
        onNavigate={navigate}
      />
    </>
  );
}

export default App;
