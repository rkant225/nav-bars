import React from "react";
import "./NavBarOne.css";
import { Link } from "react-router-dom";

const getRndomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const COLORS = [
  "#2c68dc",
  "#ff8040",
  "#52f7f7",
  "#6dabfc",
  "#cc6dfc",
  "#71f575",
];

const NAV_MENU_DATA = [
  {
    label: "Machines",
    icon: <i class="fa fa-cat"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Places",
    icon: <i class="fa fa-dog"></i>,
    link: "#",
    subMenu: [
      {
        label: "Nepal",
        icon: <i class="fa fa-truck"></i>,
        link: "#",
        subMenu: [
          {
            label: "Kathmandu",
            icon: <i class="fa fa-poo"></i>,
            link: "#",
            subMenu: [],
          },
          {
            label: "Madwa",
            icon: <i class="fa fa-book"></i>,
            link: "#",
            subMenu: [],
          },
          {
            label: "Bangla",
            icon: <i class="fa fa-bed"></i>,
            link: "#",
            subMenu: [],
          },
        ],
      },
      {
        label: "Bhutan",
        icon: <i class="fa fa-bus"></i>,
        link: "#",
        subMenu: [],
      },
      {
        label: "China",
        icon: <i class="fa fa-car"></i>,
        link: "#",
        subMenu: [
          {
            label: "Bejing",
            icon: <i class="fa fa-ruler"></i>,
            link: "#",
            subMenu: [],
          },
          {
            label: "Sanghai",
            icon: <i class="fa fa-id-card"></i>,
            link: "#",
            subMenu: [],
          },
          {
            label: "japan",
            icon: <i class="fa fa-hippo"></i>,
            link: "#",
            subMenu: [],
          },
        ],
      },
      {
        label: "London",
        icon: <i class="fa fa-bicycle"></i>,
        link: "#",
        subMenu: [],
      },
    ],
  },
  {
    label: "Items",
    icon: <i class="fa fa-mouse"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Engines",
    icon: <i class="fa fa-user"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Spare Parts",
    icon: <i class="fa fa-box"></i>,
    link: "#",
    subMenu: [
      {
        label: "Socket",
        icon: <i class="fa fa-cube"></i>,
        link: "#",
        subMenu: [],
      },
      {
        label: "Switch",
        icon: <i class="fa fa-circle"></i>,
        link: "#",
        subMenu: [],
      },
      {
        label: "Wire",
        icon: <i class="fa fa-star"></i>,
        link: "#",
        subMenu: [
          {
            label: "R.K",
            icon: <i class="fa fa-fish"></i>,
            link: "#",
            subMenu: [],
          },
          {
            label: "Havels",
            icon: <i class="fa fa-water"></i>,
            link: "#",
            subMenu: [],
          },
          {
            label: "TATA",
            icon: <i class="fa fa-github"></i>,
            link: "#",
            subMenu: [],
          },
        ],
      },
      {
        label: "Bulb",
        icon: <i class="fa fa-youtube"></i>,
        link: "#",
        subMenu: [],
      },
    ],
  },
  {
    label: "Contact",
    icon: <i class="fa fa-google"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Credits - @JDB ART",
    icon: <i class="fa fa-heart"></i>,
    link: "https://www.youtube.com/watch?v=NsHhKpR1ItA",
    isExternalLink: true,
    subMenu: [],
  },
];
const NavBarOne = () => {
  const INITIAL_CLASSNAME = "nav-bar-one";

  const renderNavList = (listItems, isMainMenu = true) => {
    const menuList = (
      <ul
        className={`${INITIAL_CLASSNAME}-${isMainMenu ? "main" : "sub"}-menu`}
      >
        {listItems?.map((menuItem) => {
          const { label, icon, link, isExternalLink, subMenu } = menuItem;
          const haveSubMenu = !!subMenu?.length;
          return (
            <li className={haveSubMenu ? `${INITIAL_CLASSNAME}-dropdown` : ""}>
              {isExternalLink ? (
                <a href={link} target="_blank" rel="noreferrer" className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <div
                    className={`${INITIAL_CLASSNAME}-menu-item-name-and-logo-container`}
                  >
                    <span className={`${INITIAL_CLASSNAME}-menu-item-logo`}>
                      {icon}
                    </span>
                    <span className={`${INITIAL_CLASSNAME}-menu-item-name`}>
                      {label}
                    </span>
                  </div>
                  {haveSubMenu && (
                    <span>
                      <i class="fa fa-caret-right"></i>
                    </span>
                  )}
                </a>
              ) : (
                <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={link}>
                  <div
                    className={`${INITIAL_CLASSNAME}-menu-item-name-and-logo-container`}
                  >
                    <span className={`${INITIAL_CLASSNAME}-menu-item-logo`}>
                      {icon}
                    </span>
                    <span className={`${INITIAL_CLASSNAME}-menu-item-name`}>
                      {label}
                    </span>
                  </div>
                  {haveSubMenu && (
                    <span>
                      <i class="fa fa-caret-right"></i>
                    </span>
                  )}
                </Link>
              )}

              {haveSubMenu && renderNavList(subMenu, false)}
            </li>
          );
        })}
      </ul>
    );
    console.log(menuList);
    return menuList;
  };
  return (
    <div className={`${INITIAL_CLASSNAME}-page`}>
      <div className={`${INITIAL_CLASSNAME}-nav-and-content-container`}>
        <div className={`${INITIAL_CLASSNAME}-side-nav-container`}>
          {/* Company Logo */}
          <Link to={"#"}>
            <div className={`${INITIAL_CLASSNAME}-logo-container`}>
              <div className={`${INITIAL_CLASSNAME}-logo`}>
                <i class="fa fa-globe"></i>
              </div>
              <div className={`${INITIAL_CLASSNAME}-company-name`}>
                EarthMovers
              </div>
            </div>
          </Link>

          {/* Menu List */}
          {renderNavList(NAV_MENU_DATA, true)}

          {/* Menu List - Expanded versiona */}
          {/* <div className={`${INITIAL_CLASSNAME}-nav-bar`}>
            <ul className={`${INITIAL_CLASSNAME}-main-menu`}>
              <li>
                <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                  <span>Machines</span>
                </Link>
              </li>
              <li className={`${INITIAL_CLASSNAME}-dropdown`}>
                <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                  <span>Places</span>
                  <span>
                    <i class="fa fa-caret-right"></i>
                  </span>
                </Link>
                <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                  <li>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>Nepal</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>London</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>France</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>China</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                  <span>Items</span>
                </Link>
              </li>
              <li>
                <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                  <span>Engines</span>
                </Link>
              </li>
              <li className={`${INITIAL_CLASSNAME}-dropdown`}>
                <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                  <span>Spare Parts</span>
                  <span>
                    <i class="fa fa-caret-right"></i>
                  </span>
                </Link>
                <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                  <li>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>Socket</span>
                    </Link>
                  </li>
                  <li className={`${INITIAL_CLASSNAME}-dropdown`}>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>Switch</span>
                      <span>
                        <i class="fa fa-caret-right"></i>
                      </span>
                    </Link>
                    <ul className={`${INITIAL_CLASSNAME}-sub-menu`}>
                      <li>
                        <Link
                          className={`${INITIAL_CLASSNAME}-menu-item`}
                          to={"#"}
                        >
                          <span>Havels</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${INITIAL_CLASSNAME}-menu-item`}
                          to={"#"}
                        >
                          <span>R.K.</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${INITIAL_CLASSNAME}-menu-item`}
                          to={"#"}
                        >
                          <span>Anchor</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>Board</span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                      <span>Wire</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className={`${INITIAL_CLASSNAME}-menu-item`} to={"#"}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div> */}

          {/* LoggedIn User Info */}
          <div className={`${INITIAL_CLASSNAME}-user-info-container`}>
            <div className={`${INITIAL_CLASSNAME}-urer-avatar`}>
              <i class="fa fa-user-secret"></i>
            </div>
            <div className={`${INITIAL_CLASSNAME}-urer-details`}>
              <div className={`${INITIAL_CLASSNAME}-urer-name`}>
                Stephen Grider
              </div>
              <div className={`${INITIAL_CLASSNAME}-urer-designation`}>
                UI Engineer
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
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

export default NavBarOne;
