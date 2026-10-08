function BrandSections({ type = "used", onBrandSelect }) {
  const bestBrands = brands.slice(0, 6);

  return (
    <main className="mobile-page">
      <section className="category-page-hero">
        <div>
          <span className="eyebrow">Mobile Collection</span>
          <h1>{type === "new" ? "Brand New Phones" : "Used Phones"}</h1>
          <p>
            {type === "new"
              ? "Latest smartphones from popular brands."
              : "Quality checked smartphones from trusted brands."}
          </p>
        </div>
      </section>

      <section className="brand-sections">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Popular Brands</span>
            <h2>Best Brands</h2>
          </div>
        </div>

        <div className="best-brand-grid">
          {bestBrands.map(([name, logo]) => (
            <button
              key={name}
              className="best-brand-card"
              onClick={() => onBrandSelect(name)}
            >
              <img src={logo} alt={name} />
              <strong>{name}</strong>
              <span>View phones →</span>
            </button>
          ))}
        </div>

        <div className="section-heading brand-list-heading">
          <div>
            <span className="eyebrow">All Brands</span>
            <h2>Shop by Brand</h2>
          </div>
        </div>

        <div className="brand-sections-list">
          {brands.map(([brandName, logo]) => {
            const brandProducts = products.filter(
              (product) => product.brand === brandName
            );

            return (
              <section className="brand-section" key={brandName}>
                <div className="brand-section-header">
                  <div className="brand-section-title">
                    <img src={logo} alt={brandName} />
                    <div>
                      <h3>{brandName}</h3>
                      <span>
                        {brandProducts.length} phone
                        {brandProducts.length === 1 ? "" : "s"} available
                      </span>
                    </div>
                  </div>

                  <button onClick={() => onBrandSelect(brandName)}>
                    View all →
                  </button>
                </div>

                {brandProducts.length > 0 ? (
                  <div className="product-grid">
                    {brandProducts.map((product) => (
                      <article className="product-card" key={product.name}>
                        <div className="product-image-wrap">
                          <img src={product.image} alt={product.name} />
                          <span className="product-badge">
                            {type === "new" ? "New" : "Used"}
                          </span>
                        </div>

                        <div className="product-info">
                          <span>{product.brand}</span>
                          <h3>{product.name}</h3>
                          <p>{product.spec}</p>
                          <strong>{product.price}</strong>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="empty-brand">
                    <p>Stock is being added soon.</p>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </main>
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
};

function AccessoriesPage({ category }) {
  const categoryData = categories.find((item) => item.id === category);
  const items = accessoryProducts[category] || [];

  return (
    <main className="mobile-page">
      <section className="category-page-hero">
        <div>
          <span className="eyebrow">Accessories</span>
          <h1>{categoryData?.title || "Accessories"}</h1>
          <p>{categoryData?.text || "Quality mobile accessories."}</p>
        </div>
      </section>

      <section className="accessory-page">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Shop Now</span>
            <h2>Available Products</h2>
          </div>
        </div>

        <div className="accessory-grid">
          {items.map(([name, price]) => (
            <article className="accessory-card" key={name}>
              <div className="accessory-icon">
                <CategoryIcon type={categoryData?.icon || "phone"} />
              </div>
              <span>Mobile Accessory</span>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <button>View Product →</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function CategoryPage({ category, onBrandSelect }) {
  if (category === "used-phones") {
    return (
      <BrandSections
        type="used"
        onBrandSelect={onBrandSelect}
      />
    );
  }

  if (category === "new-phones") {
    return (
      <BrandSections
        type="new"
        onBrandSelect={onBrandSelect}
      />
    );
  }

  if (category === "repair") {
    return <RepairSection />;
  }

  return <AccessoriesPage category={category} />;
}

function MobilePage({ page, onNavigate, onBrandSelect }) {
  if (page.startsWith("category:")) {
    return (
      <CategoryPage
        category={page.replace("category:", "")}
        onBrandSelect={onBrandSelect}
      />
    );
  }

  if (page === "shop") {
    return (
      <main className="mobile-page">
        <Products />
      </main>
    );
  }

  if (page === "categories") {
    return (
      <main className="mobile-page">
        <Categories
          onSelect={(category) =>
            onNavigate(`category:${category}`)
          }
        />
      </main>
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

  const navigate = (page) => {
    setSelectedBrand(null);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setCurrentPage("brand");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromBrand = () => {
    setSelectedBrand(null);
    setCurrentPage("category:used-phones");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedBrand) {
    return (
      <>
        <Header />

        <BrandPage
          brand={selectedBrand}
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

          <Categories
            onSelect={(category) =>
              navigate(`category:${category}`)
            }
          />

          <Brands onBrandSelect={handleBrandSelect} />
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

