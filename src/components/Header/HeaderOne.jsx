import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import logoImage from "../../../src/assets/img/logo/incript-logo.png";
import { handleClickScroll } from "../../lib/helpers";

const HeaderOne = () => {
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "sticky-menu",
  });

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    const stickNavbar = () => {
      let windowHeight = window.scrollY;
      setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    };

    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const { hash } = useLocation();
  const isActiveLink = (id) => {
    return id === hash ? "active" : "";
  };

  return (
    <header id="header">
      <div
        className={cn("menu-area", stickyClass.header, {
          "mobile-menu-visible": mobileMenuVisible,
        })}
      >
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link
                      className="section-link"
                      onClick={() => handleClickScroll("banner")}
                    >
                      <img src={logoImage} alt="Incript Logo" />
                    </Link>
                  </div>

                  <div className={cn("navbar-wrap", "main-menu", "d-none", "d-lg-flex")}>
                    <ul className="navigation">
                      <li
                        className={cn(
                          hash === "" && "active",
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          className="section-link"
                          onClick={() => handleClickScroll("banner")}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash === "#about" && "active")}>
                        <Link
                          className="section-link"
                          onClick={() => handleClickScroll("about")}
                        >
                          Sobre nós
                        </Link>
                      </li>
                      <li className={isActiveLink("#portfolio")}>
                        <Link
                          className="section-link"
                          onClick={() => handleClickScroll("portfolio")}
                        >
                          Portfólio
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          className="section-link"
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          Como fazemos
                        </Link>
                      </li>
                      <li className={isActiveLink("#footer")}>
                        <Link
                          className="section-link"
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
                    <div className={cn("header-action", "d-none", "d-md-block")}>
                      <ul>
                        <li className="header-lang">
                          <span className="selected-lang">PT-BR</span>
                          <ul className="lang-list">
                            <li>
                              <Link to="#">EN-US</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={cn("header-action", "d-none", "d-md-block")}></div>
                </nav>
              </div>

              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn" onClick={toggleMobileMenu}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <Link to="#banner">
                      <img src={logoImage} alt="Incript Logo" title="" />
                    </Link>
                  </div>

                  <div className="menu-outer">
                    <ul className="navigation">
                      <li
                        className={cn(
                          hash === "" && "active",
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          className="section-link"
                          onClick={() => {
                            handleClickScroll("banner");
                            toggleMobileMenu();
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash === "#about" && "active")}>
                        <Link
                          className="section-link"
                          onClick={() => {
                            handleClickScroll("about");
                            toggleMobileMenu();
                          }}
                        >
                          Sobre nós
                        </Link>
                      </li>
                      <li className={isActiveLink("#portfolio")}>
                        <Link
                          className="section-link"
                          onClick={() => {
                            handleClickScroll("portfolio");
                            toggleMobileMenu();
                          }}
                        >
                          Portfólio
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          className="section-link"
                          onClick={() => {
                            handleClickScroll("roadmap");
                            toggleMobileMenu();
                          }}
                        >
                          Como fazemos
                        </Link>
                      </li>
                      <li className={isActiveLink("#footer")}>
                        <Link
                          className="section-link"
                          onClick={() => {
                            handleClickScroll("footer");
                            toggleMobileMenu();
                          }}
                        >
                          Contato
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-backdrop" onClick={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
