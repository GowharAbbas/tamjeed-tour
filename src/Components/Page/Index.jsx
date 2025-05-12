import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

//Data
import Destination from "./../../Destination.json";
import Honeymoon from "./../../Honeymoon.json";

import btnArrow from "./../../assets/btn-arrow.svg";
import plane from "./../../assets/plane.svg";
import about1 from "./../../assets/about-image-1.webp";
import about2 from "./../../assets/about-image-2.webp";
import checkImg from "./../../assets/about-check.svg";
import tst1 from "./../../assets/tst-1.webp";
import tst2 from "./../../assets/tst-2.webp";
import tst3 from "./../../assets/tst-3.webp";
import tst4 from "./../../assets/tst-4.webp";
import abElement1 from "./../../assets/about-element-1.webp";
import abElement2 from "./../../assets/about-element-2.webp";
import abElement3 from "./../../assets/about-element-3.webp";
function Index() {
  return (
    <>
      {/* Swiper */}
      <Swiper
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        effect={"fade"}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        className="overflow-hidden"
        id="homepage"
      >
        <SwiperSlide>
          <div className="hero hero1 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">THE PARADISE ON EARTH</h2>
              <h1 className="text-white">KASHMIR</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">THE PARADISE ON EARTH</h2>
              <h1 className="text-white">KASHMIR</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">THE PARADISE ON EARTH</h2>
              <h1 className="text-white">KASHMIR</h1>
            </div>
          </div>
        </SwiperSlide>
        <i className="bi bi-arrow-left-short swiper-btn swiper-prev"></i>
        <i className="bi bi-arrow-right-short swiper-btn swiper-next"></i>
      </Swiper>

      {/* Destinations */}

      <div className="destinations py-5 my-5">
        <div className="section-title">
          <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3">
            <span className="d-flex align-items-center gap-2">
              <img src={plane} className="img-fluid" alt="" />
              <span>Travel Destinations</span>
              <img src={plane} className="img-fluid" alt="" />
            </span>
            <h2>Top Destinations</h2>
            <p>
              Explore our top destinations voted by more than 10000+ customers
              around the world.
            </p>
          </div>
        </div>
        <div className="destinations-wrapper mt-5">
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              gap: 50,
              perPage: 3,
              arrow: false,
              Pagination: false,
              AutoScroll: {
                speed: 1,
                autoStart: true,
              },
              breakpoints: {
                1199: { perPage: 3 },
                911: { perPage: 2 },
                767: { perPage: 2 },
                575: { perPage: 1 },
                0: { perPage: 1 },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideTrack>
              {Destination.map((dest) => (
                <SplideSlide key={dest.id}>
                  <div className="dest-card     position-relative">
                    <div className="dest-img overflow-hidden rounded">
                      <img src={dest.image} className="img-fluid" alt="" />
                    </div>
                    <div className="dest-content p-4 rounded border top-0 start-0 mt-3 position-absolute">
                      <h2>{dest.name}</h2>
                      <p>{dest.pere}</p>
                      <p>{dest.location}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>

      {/* Package */}

      <div className="destinations py-5 my-5" id="packagespage">
        <div className="section-title">
          <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3">
            <h2>Packages</h2>
          </div>
        </div>
        <div className="destinations-wrapper mt-5">
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              gap: 50,
              perPage: 3,
              arrow: false,
              Pagination: false,
              AutoScroll: {
                speed: 1,
                autoStart: true,
              },
              breakpoints: {
                1199: { perPage: 3 },
                911: { perPage: 2 },
                767: { perPage: 2 },
                575: { perPage: 1 },
                0: { perPage: 1 },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideTrack>
              {Honeymoon.map((honey) => (
                <SplideSlide key={honey.id}>
                  <div className="honey-card     position-relative">
                    <div className="honey-img overflow-hidden rounded">
                      <img src={honey.image} className="img-fluid" alt="" />
                    </div>
                    <div className="honey-content p-4 rounded border top-0 start-0 mt-3 position-absolute">
                      <h2>{honey.name}</h2>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>

      {/* Whatsaaap Button */}

      <div className="d-flex justify-content-center mt-5 mb-5">
        <a
          href="https://wa.me/919541272705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn custom-btn1">
            Check Packages
            <img src={btnArrow} className="img-fluid ms-2" alt="" />
          </button>
        </a>
      </div>

      {/* About */}

      <div className="about py-5" id="aboutpage">
        <div className="container">
          <div className="row">
            <div className="section-title about-title">
              <div className="text-center d-flex flex-column align-items-start justify-content-start gap-3">
                <span className="d-flex align-items-center gap-2">
                  <img src={plane} className="img-fluid" alt="" />
                  <span>About our Company</span>
                  <img src={plane} className="img-fluid" alt="" />
                </span>
                <h2>Experience the World with Our Company</h2>
                <p>
                  Embark on a transformative journey as our company invites you
                  to experience the world, creating unforgettable memories
                  through exceptional travel adventures.
                </p>
              </div>
            </div>

            {/* START of about-cols row */}
            <div className="row about-cols align-items-center position-relative">
              {/* Left Column - Image */}
              <div className="col-lg-6">
                <div className="about-col-img position-relative">
                  <i className="bi bi-play-fill position-absolute"></i>
                  <img src={about2} className="img-fluid" alt="" />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="col-lg-6 about-cols p-3">
                <h4 className="my-3">
                  <img src={checkImg} className="img-fluid pe-2" alt="" />
                  Perfect Detailing
                </h4>
                <h4 className="my-3">
                  <img src={checkImg} className="img-fluid pe-2" alt="" />
                  Completed Certification
                </h4>
                <h4 className="my-3">
                  <img src={checkImg} className="img-fluid pe-2" alt="" />
                  Save Your Budget
                </h4>
                <h4 className="my-3">
                  <img src={checkImg} className="img-fluid pe-2" alt="" />
                  Free Consultation
                </h4>
              </div>

              {/* Background decorative image and overlay images */}
              <div className="about-img position-relative mt-4">
                <img src={about1} className="img-fluid w-100" alt="" />

                <img
                  src={abElement3}
                  className="img-fluid abElement-3 position-absolute"
                  alt=""
                />
                <img
                  src={abElement1}
                  className="img-fluid abElement-1 position-absolute"
                  alt=""
                />
              </div>
            </div>
            {/* END of about-cols */}

            {/* Button & Clients */}
            <div className="about-button mt-5 d-flex flex-wrap gap-4 align-items-center">
              <div className="btn-box">
                <a
                  href="https://wa.me/919541272705"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn custom-btn1">
                    Learn More
                    <img src={btnArrow} className="img-fluid ms-2" alt="" />
                  </button>
                </a>
              </div>
              <div className="about-col-box d-flex align-items-center">
                <div className="about-col-box-img d-flex">
                  <img src={tst1} className="img-fluid" alt="" />
                  <img src={tst2} className="img-fluid" alt="" />
                  <img src={tst3} className="img-fluid" alt="" />
                  <img src={tst4} className="img-fluid" alt="" />
                </div>
                <p className="ms-4 m-0 fs-5">5.2K+ Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3">
        <h2>Contact Us</h2>
      </div>
      {/* Banner */}

      <div className="blog-banner py-5 container-fluid d-flex justify-content-center align-items-center">
        <div className="container banner-title section-title d-flex text-center">
          <h2>Tamjeed Tours and Travels is Kashmirs Leading Travel Platfrom</h2>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-bottom container-fluid text-white bg-dark p-2 text-center">
        <p className="mb-0 small">
          Developer Gowhar Abbas <strong> +917006704123</strong>
        </p>
      </div>
    </>
  );
}

export default Index;
