import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import destinations from "../../Destination.json";
import {
  tourPackages,
  commonInclusions,
  commonExclusions,
} from "../../tourPackages.js";
import aboutImage from "../../assets/about11.jpg";
import teamImage from "../../assets/about2.jpg";
import heroOne from "../../assets/Hero-slider-1.webp";
import heroTwo from "../../assets/Hero-slider-2.webp";
import heroThree from "../../assets/hero3.jpg";

const phone = "919541272705";
const wa = (message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const features = [
  [
    "bi-compass",
    "Local Kashmir expertise",
    "Discover the valley with people who know its routes, seasons and hidden corners.",
  ],
  [
    "bi-house-heart",
    "Stays to suit your trip",
    "Choose the kind of stay and travel experience that feels right for you.",
  ],
  [
    "bi-car-front",
    "Comfortable travel",
    "Plan your sightseeing and transfers with a local travel team.",
  ],
  [
    "bi-headset",
    "Personal assistance",
    "Get in touch with our team to discuss your travel plans and questions.",
  ],
];

export default function Index() {
  const [season, setSeason] = useState("summer");
  const [packageChoice, setPackageChoice] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2 Adults");
  const [activePackage, setActivePackage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    travellers: "2 Adults",
    interest: "",
    message: "",
  });
  const heroSlides = useMemo(() => [heroOne, heroTwo, heroThree], []);
  const submitEnquiry = (event) => {
    event.preventDefault();
    const message = `Tamjeed Tours enquiry\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nTravel date: ${form.date}\nTravellers: ${form.travellers}\nPackage: ${form.interest}\nMessage: ${form.message}`;
    window.open(wa(message), "_blank", "noopener,noreferrer");
  };
  const quickBook = () =>
    window.open(
      wa(
        `Hello Tamjeed Tours, I would like to enquire about ${packageChoice || "a Kashmir tour"}. Travel date: ${travelDate || "Not decided"}. Travellers: ${travellers}.`,
      ),
      "_blank",
      "noopener,noreferrer",
    );

  return (
    <main>
      <section className="hero-section" id="homepage">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="hero-swiper"
        >
          {heroSlides.map((image, i) => (
            <SwiperSlide key={image}>
              <div
                className="hero-image"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(7,27,44,.62),rgba(7,27,44,.25)),url(${image})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">
            YOUR KASHMIR JOURNEY STARTS HERE
          </span>
          <div className="hero-brand-pill">
            <span className="brand-dot">T</span> TAMJEED TOURS &amp; TRAVELS
          </div>
          <h1>
            <span>KASHMIR</span>
          </h1>
          <p>
            Discover breathtaking valleys, peaceful lakes and unforgettable
            experiences in the heart of Kashmir.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#packagespage">
              Explore packages <i className="bi bi-arrow-right" />
            </a>
            <a className="btn-outline" href="#destinationspage">
              Discover destinations
            </a>
          </div>
        </div>
        {/* <div className="season-switch" aria-label="Choose travel season"><button className={season === "summer" ? "active" : ""} onClick={() => setSeason("summer")}><i className="bi bi-sun" /> Summer</button><button className={season === "winter" ? "active" : ""} onClick={() => setSeason("winter")}><i className="bi bi-snow" /> Winter</button></div> */}
        <div className="hero-bottom-note">
          KASHMIR · JAMMU &amp; KASHMIR · INDIA
        </div>
      </section>

      <section className="booking-panel" aria-label="Quick tour enquiry">
        <h2>Plan your Kashmir tour</h2>
        <div className="booking-grid">
          <label>
            <span>Select package</span>
            <select
              value={packageChoice}
              onChange={(e) => setPackageChoice(e.target.value)}
            >
              <option value="">Choose a package</option>
              {tourPackages.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} (₹{p.price.toLocaleString("en-IN")}/person)
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Travel date</span>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </label>
          <label>
            <span>Travellers</span>
            <select
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>5+ Travellers</option>
            </select>
          </label>
          <button className="btn-primary booking-submit" onClick={quickBook}>
            Enquire now <i className="bi bi-arrow-right" />
          </button>
        </div>
        <div className="popular-places">
          <b>POPULAR:</b>
          {[
            "Dal Lake",
            "Mughal Gardens",
            "Pahalgam",
            "Sonamarg",
            "Gulmarg",
            "Doodhpathri",
          ].map((place) => (
            <a key={place} href="#destinationspage">
              {place}
            </a>
          ))}
        </div>
      </section>

      <div className="experience-strip">
        <span>
          <i className="bi bi-water" /> Shikara rides
        </span>
        <b>•</b>
        <span>
          <i className="bi bi-house" /> Houseboat stays
        </span>
        <b>•</b>
        <span>
          <i className="bi bi-signpost-split" /> Valley excursions
        </span>
        <b>•</b>
        <span>
          <i className="bi bi-snow" /> Mountain experiences
        </span>
        <b>•</b>
        <span>
          <i className="bi bi-flower1" /> Mughal Gardens
        </span>
      </div>

      <section className="section packages-section" id="packagespage">
        <div className="section-heading">
          <span className="eyebrow">FIND YOUR PERFECT GETAWAY</span>
          <h2>Explore Kashmir packages</h2>
          <div className="heading-rule" />
          <p>
            Whether you are travelling as a couple, with family or friends,
            let's plan a trip around you.
          </p>
        </div>
        <div className="package-grid">
          {tourPackages.map((item) => (
            <article
              className={`package-card package-card-${item.tier.toLowerCase().replace("-", "")}`}
              key={item.id}
            >
              <div className="package-photo">
                <img src={item.image} alt={item.name} />
                <span className="package-tag">{item.tier}</span>
                <span className="package-save">SAVE {item.save}</span>
                <span className="package-duration">
                  <i className="bi bi-clock" /> {item.duration}
                </span>
                {item.popular && (
                  <span className="package-popular">★ MOST POPULAR</span>
                )}
              </div>
              <div className="package-info">
                <h3>{item.name}</h3>
                <p className="package-route">{item.route}</p>
                <div className="package-price-row">
                  <div>
                    <small>
                      STARTING{" "}
                      <del>₹{item.originalPrice.toLocaleString("en-IN")}</del>
                    </small>
                    <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                  </div>
                  <span>
                    PER PAX
                    <br />
                    <small>Min. 2 Pax</small>
                  </span>
                </div>
                <ul className="package-highlights">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="package-actions">
                  <button
                    type="button"
                    className="details-link"
                    onClick={() => setActivePackage(item)}
                  >
                    VIEW DETAILS <i className="bi bi-arrow-right" />
                  </button>
                  <a
                    className="small-book"
                    href={wa(
                      `Hello Tamjeed Tours, I want to book ${item.name} (${item.duration}) at the displayed starting price ₹${item.price.toLocaleString("en-IN")} per person. Please confirm availability and final quote.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-grid">
          <div>
            <strong>10+</strong>
            <span>Beautiful destinations</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Travel package categories</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Enquiry support</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Personalised planning</span>
          </div>
        </div>
        <div className="stats-quote">
          <i className="bi bi-quote" />
          <p>
            “The world is a book, and those who do not travel read only one
            page.”
          </p>
          <span>— SAINT AUGUSTINE</span>
          <a href="#packagespage">
            Explore our packages <i className="bi bi-arrow-right" />
          </a>
        </div>
      </section>

      <section className="section destinations-section" id="destinationspage">
        <div className="destination-heading">
          <div>
            <span className="eyebrow">THE VALLEY IS WAITING</span>
            <h2>Discover Kashmir</h2>
            <p>From shimmering lakes to green meadows and mountain valleys.</p>
          </div>
          <div className="destination-arrows">
            <span>SCROLL TO EXPLORE</span>
            <i className="bi bi-arrow-right" />
          </div>
        </div>
        <div className="destination-grid">
          {destinations.slice(0, 6).map((dest, index) => (
            <article
              className={`destination-card destination-${index + 1}`}
              key={dest.id}
            >
              <img src={dest.image} alt={dest.name} />
              <div className="destination-overlay">
                <span>{dest.location}</span>
                <h3>{dest.name}</h3>
                <p>{dest.pere}</p>
                <a href="#contactpage">
                  Plan a visit <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section" id="aboutpage">
        <div className="why-image">
          <img src={aboutImage} alt="Kashmir travel landscape" />
          <div className="image-caption">
            <span>EXPERIENCE THE VALLEY</span>
            <strong>Kashmir, at your pace.</strong>
          </div>
        </div>
        <div className="why-content">
          <span className="eyebrow">TRAVEL WITH CONFIDENCE</span>
          <h2>
            More than a trip.
            <br />
            <em>A Kashmir experience.</em>
          </h2>
          <p>
            At Tamjeed Tours and Travels, we help you explore Kashmir with
            thoughtful planning and friendly local assistance. Tell us what you
            have in mind and we'll help shape your journey.
          </p>
          <div className="feature-grid">
            {features.map(([icon, title, desc]) => (
              <div className="feature" key={title}>
                <i className={`bi ${icon}`} />
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#contactpage" className="btn-primary">
            Talk to our team <i className="bi bi-arrow-right" />
          </a>
        </div>
      </section>

      <section className="team-section">
        <div className="team-photo">
          <img src={teamImage} alt="Kashmir scenery" />
        </div>
        <div className="team-copy">
          <span className="eyebrow">LOCAL PEOPLE, PERSONAL SERVICE</span>
          <h2>
            Your Kashmir trip,
            <br />
            planned with care.
          </h2>
          <p>
            Our team is here to help you choose destinations, discuss travel
            dates and find a package that suits your group and budget.
          </p>
          <div className="team-contact">
            <div>
              <strong>Tamjeed Hussain Wani</strong>
              <span>Founder</span>
            </div>
          </div>
          <a
            href={wa(
              "Hello Tamjeed Tours, I would like to plan a Kashmir trip.",
            )}
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            Connect with us <i className="bi bi-arrow-up-right" />
          </a>
        </div>
      </section>

      <section className="testimonial-section">
        <span className="eyebrow">TRAVEL MEMORIES</span>
        <h2>Stories from the journey</h2>
        <div className="testimonial-card">
          <i className="bi bi-quote" />
          <p>
            Every Kashmir journey is different. Let us help you make yours
            memorable, from the first conversation to the final day of your
            trip.
          </p>
          <span>TAMJEED TOURS &amp; TRAVELS</span>
        </div>
      </section>

      <section className="contact-section" id="contactpage">
        <div className="section-heading">
          <span className="eyebrow">LET'S PLAN SOMETHING SPECIAL</span>
          <h2>Plan your Kashmir escape</h2>
          <div className="heading-rule" />
          <p>
            Share a few details and our team will connect with you to discuss
            your trip.
          </p>
        </div>
        <div className="contact-layout">
          <aside className="contact-card">
            <span className="eyebrow">TAMJEED TOURS &amp; TRAVELS</span>
            <h3>Let's get your journey started.</h3>
            <p>
              Tell us your travel dates, preferences and questions. We're happy
              to help.
            </p>
            <a href="tel:+919541272705">
              <i className="bi bi-telephone" />
              <span>
                <small>CALL / WHATSAPP</small>+91 95412 72705
              </span>
            </a>
            <a href="mailto:tamjeedtours1@gmail.com">
              <i className="bi bi-envelope" />
              <span>
                <small>EMAIL US</small>tamjeedtours1@gmail.com
              </span>
            </a>
            <div className="contact-social">
              <span>FOLLOW &amp; CONNECT</span>
              <a
                href="https://www.instagram.com/tamjeedtours_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href={wa("Hello Tamjeed Tours!")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" />
              </a>
            </div>
          </aside>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <h3>Send us an enquiry</h3>
            <div className="form-grid">
              <label>
                YOUR NAME *
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
              </label>
              <label>
                PHONE / WHATSAPP *
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Your mobile number"
                />
              </label>
              <label>
                EMAIL ADDRESS
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                TRAVEL DATE
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </label>
              <label>
                TRAVELLERS
                <select
                  value={form.travellers}
                  onChange={(e) =>
                    setForm({ ...form, travellers: e.target.value })
                  }
                >
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                  <option>5+ Travellers</option>
                </select>
              </label>
              <label>
                PACKAGE OF INTEREST
                <select
                  value={form.interest}
                  onChange={(e) =>
                    setForm({ ...form, interest: e.target.value })
                  }
                >
                  <option value="">Choose a package</option>
                  {tourPackages.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} (₹{p.price.toLocaleString("en-IN")}/person)
                    </option>
                  ))}
                  <option>Custom Kashmir tour</option>
                </select>
              </label>
              <label className="full-field">
                MESSAGE
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us about your preferred destinations, activities or budget..."
                />
              </label>
            </div>
            <button type="submit" className="btn-primary form-submit">
              Send booking enquiry <i className="bi bi-arrow-right" />
            </button>
            <small className="form-note">
              Your enquiry will open in WhatsApp so our team can respond
              directly.
            </small>
          </form>
        </div>
      </section>

      {activePackage && (
        <div
          className="package-modal-backdrop"
          role="presentation"
          onClick={() => setActivePackage(null)}
        >
          <section
            className="package-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="package-modal-close"
              onClick={() => setActivePackage(null)}
              aria-label="Close package details"
            >
              ×
            </button>
            <div
              className="package-modal-hero"
              style={{
                backgroundImage: `linear-gradient(90deg,rgba(10,35,57,.84),rgba(10,35,57,.3)),url(${activePackage.image})`,
              }}
            >
              <span className="eyebrow">
                {activePackage.tier} KASHMIR PACKAGE
              </span>
              <h2 id="package-modal-title">{activePackage.name}</h2>
              <p>
                <i className="bi bi-clock" /> {activePackage.duration}{" "}
                <span>·</span> {activePackage.route}
              </p>
            </div>
            <div className="package-modal-body">
              <div className="package-modal-main">
                <h3>Tour overview</h3>
                <p>{activePackage.summary}</p>
                <h3>Day-by-day itinerary</h3>
                <p className="itinerary-note">
                  Suggested day plan based on the package route and highlights.
                  Confirm the final schedule, hotel category and activity
                  charges with Tamjeed Tours before booking.
                </p>
                <ol className="itinerary-list">
                  {activePackage.itinerary.map(([title, desc], i) => (
                    <li key={title}>
                      <span>{i + 1}</span>
                      <div>
                        <strong>
                          DAY {i + 1} — {title}
                        </strong>
                        <p>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="package-include-grid">
                  <div>
                    <h3>✓ Typical inclusions</h3>
                    <ul>
                      {commonInclusions.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>× Usually excluded</h3>
                    <ul>
                      {commonExclusions.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <aside className="package-modal-aside">
                <small>STARTING FROM</small>
                <del>
                  ₹{activePackage.originalPrice.toLocaleString("en-IN")}
                </del>
                <strong>₹{activePackage.price.toLocaleString("en-IN")}</strong>
                <span>per person · minimum 2 travellers</span>
                <p>
                  Final quote depends on travel dates, hotel category,
                  availability and selected activities. Confirm inclusions with
                  our team before payment.
                </p>
                <a
                  className="btn-primary"
                  href={wa(
                    `Hello Tamjeed Tours, please confirm availability and final quote for ${activePackage.name}, ${activePackage.duration}, displayed starting price ₹${activePackage.price.toLocaleString("en-IN")} per person.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire about this tour <i className="bi bi-arrow-right" />
                </a>
              </aside>
            </div>
          </section>
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-brand-name">
              TAMJEED
              <br />
              TOURS &amp; TRAVELS
            </div>
            <p>
              Discover Kashmir with local assistance and travel plans shaped
              around you.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/tamjeedtours_/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href={wa("Hello Tamjeed Tours!")}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp" />
              </a>
            </div>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <a href="#homepage">Home</a>
            <a href="#packagespage">Tour packages</a>
            <a href="#destinationspage">Destinations</a>
            <a href="#aboutpage">About us</a>
            <a href="#contactpage">Contact</a>
          </div>
          <div>
            <h4>POPULAR PLACES</h4>
            {destinations.slice(0, 5).map((d) => (
              <a key={d.id} href="#destinationspage">
                {d.name}
              </a>
            ))}
          </div>
          <div>
            <h4>CONTACT</h4>
            <a href="tel:+919541272705">
              <i className="bi bi-telephone" /> +91 95412 72705
            </a>
            <a href="mailto:tamjeedtours1@gmail.com">
              <i className="bi bi-envelope" /> tamjeedtours1@gmail.com
            </a>
            <a
              href="https://www.instagram.com/tamjeedtours_/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram" /> Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Tamjeed Tours and Travels. All rights
            reserved.
          </span>
          <span className="footer-credit">
            Designed & Developed by <strong>Gowhar Abbas Bhat</strong>
          </span>
          <span>Discover Kashmir. Travel with care.</span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={wa(
          "Hello Tamjeed Tours, I would like to enquire about a Kashmir tour.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" />
      </a>
    </main>
  );
}
