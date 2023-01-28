import React, { useState } from "react";
import "./NavBarThree.css";
import { Link } from "react-router-dom";

const NavBarThree = () => {
  const INITIAL_CLASSNAME = "n3";

  const handleModeButtonClick = () => {
    const page = document.querySelector(`.${INITIAL_CLASSNAME}-page`);
    page.classList.toggle("dark");
  };

  const handleMobileButtonClick = (e) => {
    e.stopPropagation();
    const menuItemsList = document.querySelector(
      `.${INITIAL_CLASSNAME}-menu-items`
    );
    menuItemsList.classList.toggle("open");
  };

  const closeSideMenu = () => {
    const menuItemsList = document.querySelector(
      `.${INITIAL_CLASSNAME}-menu-items`
    );
    if (menuItemsList.classList.contains("open"));
    menuItemsList.classList.remove("open");
  };

  const handleSearchIconClick = () => {
    const searchBoxContainer = document.querySelector(
      `.${INITIAL_CLASSNAME}-search-text-box-container`
    );
    const searchTextBox = document.querySelector(
      `.${INITIAL_CLASSNAME}-search-text-box`
    );
    searchBoxContainer.classList.toggle("show-search-box");
    searchTextBox.focus();
  };
  // className={`${INITIAL_CLASSNAME}`}
  return (
    <div className={`${INITIAL_CLASSNAME}-page`} onClick={closeSideMenu}>
      <div className={`${INITIAL_CLASSNAME}-nav-and-content-container`}>
        {/* NavBar Container */}
        <div className={`${INITIAL_CLASSNAME}-nav-container`}>
          {/* Dark mode - Light mode Switch */}
          <div
            className={`${INITIAL_CLASSNAME}-mode-switch`}
            onClick={handleModeButtonClick}
          ></div>

          {/* Mobile Menu Button - OPEN */}
          <i
            className={`fa fa-bars ${INITIAL_CLASSNAME}-mobile-menu-button-open`}
            onClick={handleMobileButtonClick}
          ></i>

          {/* Company Logo */}
          <Link to={"#"} className={`${INITIAL_CLASSNAME}-company-logo`}>
            EarthMovers
          </Link>

          {/* Nav Bar */}
          <ul className={`${INITIAL_CLASSNAME}-menu-items`}>
            <li>
              {/* Mobile Menu Button - OPEN */}
              <i
                className={`fa fa-close ${INITIAL_CLASSNAME}-mobile-menu-button-close`}
                onClick={handleMobileButtonClick}
              ></i>
            </li>
            <li className={`${INITIAL_CLASSNAME}-menu-item dropdown`}>
              <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                Home
              </Link>
            </li>
            <li className={`${INITIAL_CLASSNAME}-menu-item dropdown`}>
              <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                Services
                <i class="fa fa-caret-down arrow"></i>
              </Link>
              <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Cleaning
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item dropdown`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Washing
                    <i class="fa fa-caret-down arrow"></i>
                  </Link>
                  <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                    <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                      <Link
                        to={"#"}
                        className={`${INITIAL_CLASSNAME}-menu-link`}
                      >
                        Car Wash
                      </Link>
                    </li>
                    <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                      <Link
                        to={"#"}
                        className={`${INITIAL_CLASSNAME}-menu-link`}
                      >
                        Bike Wash
                      </Link>
                    </li>
                    <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                      <Link
                        to={"#"}
                        className={`${INITIAL_CLASSNAME}-menu-link`}
                      >
                        Truck Wash
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Fensing
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Baby Sitting
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${INITIAL_CLASSNAME}-menu-item`}>
              <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                About
              </Link>
            </li>
            <li className={`${INITIAL_CLASSNAME}-menu-item dropdown`}>
              <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                Products
                <i class="fa fa-caret-down arrow"></i>
              </Link>
              <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Baby Care
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Hardware
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item dropdown`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Electrical Items
                    <i class="fa fa-caret-down arrow"></i>
                  </Link>
                  <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                    <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                      <Link
                        to={"#"}
                        className={`${INITIAL_CLASSNAME}-menu-link`}
                      >
                        Wire
                      </Link>
                    </li>
                    <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                      <Link
                        to={"#"}
                        className={`${INITIAL_CLASSNAME}-menu-link`}
                      >
                        Bulb
                      </Link>
                    </li>
                    <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                      <Link
                        to={"#"}
                        className={`${INITIAL_CLASSNAME}-menu-link`}
                      >
                        Fan
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    Kitchen Ware
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${INITIAL_CLASSNAME}-menu-item`}>
              <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                Customers
              </Link>
            </li>
            <li className={`${INITIAL_CLASSNAME}-menu-item`}>
              <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                Contact
              </Link>
            </li>
            <li className={`${INITIAL_CLASSNAME}-menu-item dropdown`}>
              <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                Credits
                <i class="fa fa-caret-down arrow"></i>
              </Link>
              <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <a
                    href={"https://www.youtube.com/watch?v=AkMIwNpK5jQ"}
                    target="_blank"
                    rel="noreferrer"
                    className={`${INITIAL_CLASSNAME}-menu-link`}
                  >
                    @CodingLab
                  </a>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <a
                    href={"https://www.youtube.com/watch?v=Mj5YkDDhtXw"}
                    target="_blank"
                    rel="noreferrer"
                    className={`${INITIAL_CLASSNAME}-menu-link`}
                  >
                    @CodingFlag
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className={`${INITIAL_CLASSNAME}-search-box`}>
            <i class="fa fa-search" onClick={handleSearchIconClick}></i>
            <div className={`${INITIAL_CLASSNAME}-search-text-box-container`}>
              <input
                type="search"
                className={`${INITIAL_CLASSNAME}-search-text-box`}
              />
            </div>
          </div>
        </div>

        <div className={`${INITIAL_CLASSNAME}-page-container`}>
          Page content
        </div>
      </div>
    </div>
  );
};

export default NavBarThree;
