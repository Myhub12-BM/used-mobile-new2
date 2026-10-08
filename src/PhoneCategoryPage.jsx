import React from "react";

export default function PhoneCategoryPage({
  type = "used",
  brands,
  products,
  onBrandSelect,
  onBack,
}) {
  const isNew = type === "new";
  const theme = isNew ? "new" : "used";

  return (
    <main className={`mobile-page phone-category-page phone-category-${theme}`}>
      <section className="phone-category-shell">

        <button
          type="button"
          className="phone-category-back"
          onClick={onBack}
        >
          <span className="phone-category-back-icon">←</span>

          <div>
            <strong>Back to All Categories</strong>
            <small>Return to all categories</small>
          </div>
        </button>

        <section className="phone-category-hero">

          <div className="phone-category-hero-icon">
            <span>{isNew ? "✦" : "📱"}</span>
          </div>

          <div className="phone-category-hero-copy">
            <span className="phone-category-eyebrow">
              {isNew
                ? "BRAND NEW COLLECTION"
                : "QUALITY CHECKED COLLECTION"}
            </span>

            <h1>
              {isNew ? "Brand New Phones" : "Used Mobile Phones"}
            </h1>

            <p>
              {isNew
                ? "Explore the latest smartphones from trusted mobile brands."
                : "Quality checked smartphones from popular and trusted brands."}
            </p>
          </div>

          <div className="phone-category-hero-badge">
            <strong>{brands.length}</strong>
            <span>Brands</span>
          </div>

        </section>

        <section className="phone-category-brands-section">

          <div className="phone-category-section-heading">
            <div>
              <span className="phone-category-section-eyebrow">
                EXPLORE BRANDS
              </span>

              <h2>Popular Mobile Brands</h2>

              <p>Choose a brand to view available phones.</p>
            </div>
          </div>

          <div className="phone-brand-grid">

            {brands.map(([brandName, logo], index) => {
              const brandProducts = products.filter(
                (product) => product.brand === brandName
              );

              const featuredProduct = brandProducts[0];

              return (
                <button
                  key={brandName}
                  type="button"
                  className={`phone-brand-card phone-brand-card-${index % 8}`}
                  onClick={() => onBrandSelect(brandName, type)}
                >

                  <div className="phone-brand-card-top">

                    <div className="phone-brand-logo">
                      <img src={logo} alt={brandName} />
                    </div>

                    <span className="phone-brand-arrow">
                      ↗
                    </span>

                  </div>

                  <div className="phone-brand-info">

                    <span className="phone-brand-label">
                      {isNew ? "NEW COLLECTION" : "USED COLLECTION"}
                    </span>

                    <h3>{brandName}</h3>

                    <p>
                      {brandProducts.length > 0
                        ? `${brandProducts.length} phone${
                            brandProducts.length === 1 ? "" : "s"
                          } available`
                        : "New stock arriving soon"}
                    </p>

                  </div>

                  <div className="phone-brand-product">

                    {featuredProduct ? (
                      <img
                        src={featuredProduct.image}
                        alt={featuredProduct.name}
                      />
                    ) : (
                      <div className="phone-brand-placeholder">
                        <span>📱</span>
                        <small>{brandName}</small>
                      </div>
                    )}

                  </div>

                  <div className="phone-brand-footer">
                    <span>Explore {brandName}</span>
                    <strong>→</strong>
                  </div>

                </button>
              );
            })}

          </div>

        </section>

      </section>
    </main>
  );
}
