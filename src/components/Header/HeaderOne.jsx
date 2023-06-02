import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import logoImage from "../../../src/assets/img/logo/incript-logo.png";
import $ from "jquery";
import { handleClickScroll } from "../../lib/helpers";

const HeaderOne = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      let mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      if ($(".mobile-menu .menu-box .menu-outer").is(":empty")) {
        let mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
      }

      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  }, []);

  // active link switching
  const { hash, pathname } = useLocation();
  const isActiveLink = (id) => {
    return id === hash ? "active" : "";
  };

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className="logo">
                    <Link to={"#banner"}>
                      <img src={logoImage} alt="Incript Logo" />
                    </Link>
                  </div>

                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li
                        className={cn(
                          hash === "" && "active",
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          to="#banner"
                          className={"section-link"}
                          onClick={() => handleClickScroll("banner")}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash === "#about" && "active")}>
                        <Link
                          to="#about"
                          className={"section-link"}
                          onClick={() => handleClickScroll("about")}
                        >
                          Sobre nós
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          to="#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          Como fazemos
                        </Link>
                      </li>
                      <li className={isActiveLink("#portfolio")}>
                        <Link
                          to="#portfolio"
                          className={"section-link"}
                          onClick={() => handleClickScroll("portfolio")}
                        >
                          Portfólio
                        </Link>
                      </li>
                      <li className={isActiveLink("#footer")}>
                        <Link
                          to="#footer"
                          className={"section-link"}
                          onClick={() => handleClickScroll("footer")}
                        >
                          Contato
                        </Link>
                      </li>
                    </ul>
                    <div className="social-navbar">
                      <ul className="clearfix">
                        <li>
                          <a href="https://www.linkedin.com/company/incript/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/incriptime/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={cn("header-action", "d-none d-md-block")}>
                      <ul>
                        <li className={"header-lang"}>
                          <span className={"selected-lang"}>PT-BR</span>
                          <ul className={"lang-list"}>
                            <li>
                              <Link to="#">EN-US</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={cn("header-action", "d-none d-md-block")}
                  ></div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link to="#banner">
                      <img src={logoImage} alt="Incript Logo" title="" />
                    </Link>
                  </div>

                  <div className={"menu-outer"}>
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->  */}
                  </div>
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;