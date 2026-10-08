import React, { useEffect, useRef, useState } from "react";

const shopMetrics = {
  "iPhone 13": { views: 1280, bought: 18 },
  "Galaxy S21 5G": { views: 1040, bought: 15 },
  "Redmi Note 12": { views: 920, bought: 12 },
  "OnePlus 9": { views: 810, bought: 10 },
  "Galaxy A54": { views: 760, bought: 9 },
};

const accessoryAds = [
  {
    id: "charger",
    title: "Fast Chargers",
    subtitle: "20W • 33W • Type-C",
    price: "From Rs. 4,500",
    icon: "⚡",
    color: "blue",
    category: "chargers",
  },
  {
    id: "earbuds",
    title: "Wireless Earbuds",
    subtitle: "TWS • Bluetooth • Premium",
    price: "From Rs. 5,500",
    icon: "🎧",
    color: "purple",
    category: "earbuds",
  },
  {
    id: "powerbank",
    title: "Power Banks",
    subtitle: "10,000mAh • 20,000mAh",
    price: "From Rs. 6,500",
    icon: "🔋",
    color: "green",
    category: "power-banks",
  },
  {
    id: "cable",
    title: "Charging Cables",
    subtitle: "Type-C • Lightning",
    price: "From Rs. 1,500",
    icon: "🔌",
    color: "orange",
    category: "accessories",
  },
];

function formatCount(value) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }

  return String(value);
}

export default function ShopPage({ products = [], onNavigate }) {
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [accessoryIndex, setAccessoryIndex] = useState(0);

  const trendingRef = useRef(null);
  const featuredRef = useRef(null);
  const accessoryRef = useRef(null);

  const trendingProducts = [...products]
    .map((product, originalIndex) => ({
      ...product,
      metrics:
        shopMetrics[product.name] || {
          views: Math.max(420, 680 - originalIndex * 55),
          bought: Math.max(3, 8 - originalIndex),
        },
    }))
    .sort((a, b) => {
      const scoreA = a.metrics.views + a.metrics.bought * 45;
      const scoreB = b.metrics.views + b.metrics.bought * 45;
      return scoreB - scoreA;
    })
    .slice(0, 6);

  const featuredProducts = products.slice(0, 6);

  useEffect(() => {
    if (trendingProducts.length < 2) return;

    const timer = setInterval(() => {
      setTrendingIndex((current) => (current + 1) % trendingProducts.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [trendingProducts.length]);

  useEffect(() => {
    if (featuredProducts.length < 2) return;

    const timer = setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % featuredProducts.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAccessoryIndex((current) => (current + 1) % accessoryAds.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const scrollSlider = (ref, index) => {
      const element = ref.current;

      if (!element || !element.children.length) return;

      const card = element.children[index];

      if (card) {
        element.scrollTo({
          left: card.offsetLeft - 12,
          behavior: "smooth",
        });
      }
    };

    scrollSlider(trendingRef, trendingIndex);
  }, [trendingIndex]);

  useEffect(() => {
    const element = featuredRef.current;

    if (!element || !element.children.length) return;

    const card = element.children[featuredIndex];

    if (card) {
      element.scrollTo({
        left: card.offsetLeft - 12,
        behavior: "smooth",
      });
    }
  }, [featuredIndex]);

  useEffect(() => {
    const element = accessoryRef.current;

    if (!element || !element.children.length) return;

    const card = element.children[accessoryIndex];

    if (card) {
      element.scrollTo({
        left: card.offsetLeft - 12,
        behavior: "smooth",
      });
    }
  }, [accessoryIndex]);

  return (
    <main className="shop-page-modern">
      <section className="shop-page-shell">

        <header className="shop-page-header">
          <div>
            <span className="shop-page-eyebrow">DISCOVER & SHOP</span>
            <h1>Find Your Next Device</h1>
            <p>
              Trending phones, featured deals and everyday accessories.
            </p>
          </div>

          <div className="shop-header-icon">
            🛍️
          </div>
        </header>

        <section className="shop-section">
          <div className="shop-section-heading">
            <div>
              <span className="shop-section-eyebrow trending">
                🔥 TRENDING
              </span>
              <h2>Trending Now</h2>
              <p>Popular products based on views & purchases.</p>
            </div>

            <span className="shop-slider-count">
              {trendingProducts.length} items
            </span>
          </div>

          <div
            className="shop-horizontal-slider"
            ref={trendingRef}
          >
            {trendingProducts.map((product, index) => (
              <article
                className={`shop-trending-card ${
                  index === trendingIndex ? "is-active" : ""
                }`}
                key={product.name}
              >
                <div className="shop-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span className="shop-trending-badge">
                    #{index + 1} Trending
                  </span>
                </div>

                <div className="shop-product-content">
                  <span className="shop-product-brand">
                    {product.brand}
                  </span>

                  <h3>{product.name}</h3>

                  <p>{product.spec}</p>

                  <strong className="shop-product-price">
                    {product.price}
                  </strong>

                  <div className="shop-product-stats">
                    <span>👁 {formatCount(product.metrics.views)}</span>
                    <span>🛒 {product.metrics.bought} bought</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="shop-slider-dots">
            {trendingProducts.map((product, index) => (
              <button
                key={product.name}
                type="button"
                className={index === trendingIndex ? "active" : ""}
                onClick={() => setTrendingIndex(index)}
                aria-label={`Trending item ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="shop-section">
          <div className="shop-section-heading">
            <div>
              <span className="shop-section-eyebrow featured">
                ⭐ FEATURED ADS
              </span>
              <h2>Featured Deals</h2>
              <p>Fresh offers and selected products.</p>
            </div>

            <span className="shop-slider-count">
              Featured
            </span>
          </div>

          <div
            className="shop-horizontal-slider featured-slider"
            ref={featuredRef}
          >
            {featuredProducts.map((product, index) => (
              <article
                className={`shop-featured-card ${
                  index === featuredIndex ? "is-active" : ""
                }`}
                key={`featured-${product.name}`}
              >
                <div className="shop-featured-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <span>FEATURED</span>
                </div>

                <div className="shop-featured-content">
                  <div>
                    <small>{product.brand}</small>
                    <h3>{product.name}</h3>
                    <p>{product.spec}</p>
                  </div>

                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="shop-slider-dots">
            {featuredProducts.map((product, index) => (
              <button
                key={`featured-dot-${product.name}`}
                type="button"
                className={index === featuredIndex ? "active" : ""}
                onClick={() => setFeaturedIndex(index)}
                aria-label={`Featured item ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="shop-section">
          <div className="shop-section-heading">
            <div>
              <span className="shop-section-eyebrow accessories">
                🎧 ACCESSORIES ADS
              </span>
              <h2>Accessories</h2>
              <p>Chargers, earbuds, power banks and more.</p>
            </div>

            <button
              type="button"
              className="shop-view-all-button"
              onClick={() => onNavigate("category:accessories")}
            >
              View All →
            </button>
          </div>

          <div
            className="shop-horizontal-slider accessories-slider"
            ref={accessoryRef}
          >
            {accessoryAds.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`shop-accessory-card shop-accessory-${item.color} ${
                  index === accessoryIndex ? "is-active" : ""
                }`}
                onClick={() =>
                  onNavigate(`category:${item.category}`)
                }
              >
                <div className="shop-accessory-icon">
                  {item.icon}
                </div>

                <div className="shop-accessory-content">
                  <span>ACCESSORY</span>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <strong>{item.price}</strong>
                </div>

                <span className="shop-accessory-arrow">
                  →
                </span>
              </button>
            ))}
          </div>

          <div className="shop-slider-dots">
            {accessoryAds.map((item, index) => (
              <button
                key={`accessory-dot-${item.id}`}
                type="button"
                className={index === accessoryIndex ? "active" : ""}
                onClick={() => setAccessoryIndex(index)}
                aria-label={`${item.title} slide`}
              />
            ))}
          </div>
        </section>

        <section className="shop-bottom-banner">
          <div>
            <span>USED • NEW • ACCESSORIES</span>
            <h2>Everything for your mobile.</h2>
            <p>
              Quality products with islandwide delivery.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("categories")}
          >
            Browse Categories →
          </button>
        </section>

      </section>
    </main>
  );
}
