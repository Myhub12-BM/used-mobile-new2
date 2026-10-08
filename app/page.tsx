export default function Home() {
  return (
    <main>
      <header>
        <div className="logo">
          USED <span>MOBILE STORE</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#phones">Phones</a>
          <a href="#accessories">Accessories</a>
          <a href="#repairs">Repairs</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div>
          <p className="small-title">TRUSTED MOBILE STORE</p>

          <h1>
            USED MOBILE
            <br />
            <span>STORE</span>
          </h1>

          <p className="hero-text">
            Buy • Sell • Exchange • Repair
          </p>

          <div className="buttons">
            <button>Shop Phones</button>
            <button className="outline">View Used Phones</button>
          </div>
        </div>

        <div className="phone-card">
          <div className="phone">📱</div>
          <p>Premium Phones</p>
          <strong>Brand New & Used</strong>
        </div>
      </section>

      <section className="categories">
        <h2>SHOP BY CATEGORY</h2>

        <div className="category-grid">
          <div>📱<span>iPhone</span></div>
          <div>📱<span>Samsung</span></div>
          <div>📱<span>Xiaomi</span></div>
          <div>📱<span>Oppo</span></div>
          <div>📱<span>Vivo</span></div>
          <div>🎧<span>Accessories</span></div>
        </div>
      </section>

      <section id="phones" className="products">
        <p className="small-title">FEATURED PRODUCTS</p>
        <h2>POPULAR MOBILE PHONES</h2>

        <div className="product-grid">
          <article>
            <div className="product-image">iPhone</div>
            <h3>iPhone 12</h3>
            <p>Brand New / Used</p>
            <strong>View Details</strong>
          </article>

          <article>
            <div className="product-image">Samsung</div>
            <h3>Samsung Galaxy</h3>
            <p>Brand New / Used</p>
            <strong>View Details</strong>
          </article>

          <article>
            <div className="product-image">Xiaomi</div>
            <h3>Xiaomi Redmi</h3>
            <p>Brand New / Used</p>
            <strong>View Details</strong>
          </article>

          <article>
            <div className="product-image">Oppo</div>
            <h3>Oppo Series</h3>
            <p>Brand New / Used</p>
            <strong>View Details</strong>
          </article>
        </div>
      </section>

      <section id="repairs" className="services">
        <p className="small-title">OUR SERVICES</p>
        <h2>EVERYTHING YOUR PHONE NEEDS</h2>

        <div className="service-grid">
          <div>
            <h3>🔧 Mobile Repair</h3>
            <p>Display, touch, battery, mic, charging and more.</p>
          </div>

          <div>
            <h3>🔄 Buy / Sell / Exchange</h3>
            <p>Buy new phones or sell and exchange your used device.</p>
          </div>

          <div id="accessories">
            <h3>🛡️ Accessories</h3>
            <p>Back covers, tempered glass, handsfree, earbuds and more.</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <h2>USED MOBILE STORE</h2>
        <p>Buy • Sell • Exchange • Repair</p>

        <div className="socials">
          Facebook · WhatsApp · Instagram · TikTok · YouTube
        </div>

        <p className="copyright">
          © 2026 Used Mobile Store. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
