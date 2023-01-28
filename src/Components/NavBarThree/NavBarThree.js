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
            className={`icons fa fa-bars ${INITIAL_CLASSNAME}-mobile-menu-button-open`}
            onClick={handleMobileButtonClick}
          ></i>

          {/* Company Logo */}
          <Link to={"#"} className={`${INITIAL_CLASSNAME}-company-logo`}>
            EarthMovers
          </Link>

          {/* Nav Bar */}
          <ul className={`${INITIAL_CLASSNAME}-menu-items`}>
            <li>
              {/* Mobile Menu Button - CLOSE */}
              <i
                className={`icons fa fa-close ${INITIAL_CLASSNAME}-mobile-menu-button-close`}
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
                <i class="icons fa fa-caret-down arrow"></i>
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
                    <i class="icons fa fa-caret-down arrow"></i>
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
                <i class="icons fa fa-caret-down arrow"></i>
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
                    <i class="icons fa fa-caret-down arrow"></i>
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
                <i class="icons fa fa-caret-down arrow"></i>
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
            <i class="icons fa fa-search" onClick={handleSearchIconClick}></i>
            <div className={`${INITIAL_CLASSNAME}-search-text-box-container`}>
              <input
                type="search"
                className={`${INITIAL_CLASSNAME}-search-text-box`}
              />
            </div>
          </div>
        </div>

        <div className={`${INITIAL_CLASSNAME}-page-container`}>
        <p className={`${INITIAL_CLASSNAME}-text-content`}>
            Artificial Intelligence (AI) is the simulation of human intelligence
            in machines that are programmed to think and learn. It has the
            ability to analyze, understand, and learn from data, and can perform
            tasks that typically require human intervention.
          </p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>
            The field of AI research began in the 1950s, but it has only
            recently seen significant advancements due to the availability of
            vast amounts of data and the development of powerful computational
            resources. Today, AI is being applied in a wide range of industries,
            including healthcare, finance, transportation, and manufacturing.
          </p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>
            One of the most important subfields of AI is machine learning, which
            involves using algorithms to enable machines to learn from data
            without being explicitly programmed. There are three main types of
            machine learning: supervised learning, unsupervised learning, and
            reinforcement learning.
          </p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>
            Supervised learning is the most commonly used type of machine
            learning, and it involves training a model on a labeled dataset,
            where the correct output is already known. This type of learning is
            used in applications such as image and speech recognition, and
            natural language processing.
          </p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>
            Unsupervised learning, on the other hand, involves training a model
            on an unlabeled dataset, where the correct output is not known. This
            type of learning is used in applications such as anomaly detection
            and clustering.
          </p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>
            Reinforcement learning is a type of learning that involves training
            a model through trial and error, where the model is rewarded for
            making the correct decision and penalized for making the wrong
            decision. This type of learning is used in applications such as game
            playing and robot control.
          </p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>
            AI also has the potential to greatly benefit society, such as
            helping to solve some of the world's most pressing problems, such as
            climate change, poverty, and disease. However, it also raises
            important ethical questions, such as how to ensure that AI is used
            responsibly and that its benefits are distributed fairly.
          </p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>
            In conclusion, Artificial Intelligence is a rapidly growing field
            that has the potential to revolutionize many industries and benefit
            society in numerous ways. However, it is important to consider the
            ethical implications of its development and use, and to ensure that
            it is used responsibly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBarThree;
