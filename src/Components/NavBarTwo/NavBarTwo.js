import React, { useState } from "react";
import "./NavBarTwo.css";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/companyLogo.png";

const NAV_MENU_DATA = [
  {
    label: "Machines",
    icon: <i className="fa fa-cat"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Places",
    icon: <i className="fa fa-dog"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Items",
    icon: <i className="fa fa-mouse"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Engines",
    icon: <i className="fa fa-user"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Spare Parts",
    icon: <i className="fa fa-box"></i>,
    link: "#",
    subMenu: [],
  },
  {
    label: "Contact",
    icon: <i className="fa fa-google"></i>,
    link: "#",
    subMenu: [],
  },
];

const NavBarTwo = () => {
  const INITIAL_CLASSNAME = "n2";

  const [mode, setMode] = useState('Light Mode');

  const handleModeButtonClick = ()=>{
    const page = document.querySelector(`.${INITIAL_CLASSNAME}-page`);
    page.classList.toggle('dark');

    if(page.classList.contains('dark')){
      setMode('Dark Mode');
    } else {
      setMode('Light Mode');
    }
  }

  const handleNavarToggleButtonClick = ()=>{
    const navBar = document.querySelector(`.${INITIAL_CLASSNAME}-nav-bar`);
    navBar.classList.toggle('close');
  }

  const handleSearchIconClick = ()=>{
    const navBar = document.querySelector(`.${INITIAL_CLASSNAME}-nav-bar`);
    navBar.classList.remove('close');
  }

  // <div className={`${INITIAL_CLASSNAME}`}></div>
  return (
    <div className={`${INITIAL_CLASSNAME}-page`}>
      <div className={`${INITIAL_CLASSNAME}-nav-and-content-container`}>
        {/* NavBar Container */}
        <div className={`${INITIAL_CLASSNAME}-side-nav-container`}>
          {/* NavBar */}
          <div className={`${INITIAL_CLASSNAME}-nav-bar`}>
            {/* Logo and Company Name */}
            <div className={`${INITIAL_CLASSNAME}-company-logo-container`}>
              <img
                className={`${INITIAL_CLASSNAME}-company-logo`}
                src={companyLogo}
                alt="company logo"
              />
              <span className={`${INITIAL_CLASSNAME}-company-name text`}>
                EarthMovers
              </span>
            </div>

            {/* NavBar toggle button */}
            <div className={`${INITIAL_CLASSNAME}-nav-bar-toggle-button`} onClick={handleNavarToggleButtonClick}>
              {/* <i className="fa fa-caret-right"></i> */}
              <i className="fa fa-bars"></i>
            </div>

            {/* Search Box */}
            {/* This style={{display: 'flex'}} is very impostant to stop the movement of inner items on reducing the width of nav-bar */}
            <div style={{display: 'flex'}}> 
              <div className={`${INITIAL_CLASSNAME}-search-container`} onClick={handleSearchIconClick}>
                <i className="fa fa-search icon"></i>
                <input
                  className={`${INITIAL_CLASSNAME}-search-text-box text`}
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
            
            <div
              className={`${INITIAL_CLASSNAME}-menu-list-and-logout-container`}
            >
              {/* Menu List */}
              <ul className={`${INITIAL_CLASSNAME}-menu-list`}>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-home icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-table icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Products
                    </span>
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-box icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Services
                    </span>
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-users icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Customers
                    </span>
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-hammer icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Support
                    </span>
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-phone icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Contact
                    </span>
                  </Link>
                </li>
                <li className={`${INITIAL_CLASSNAME}-menu-item`}>
                  <Link href="https://www.youtube.com/watch?v=bFvfqUMjvsA" target={'_blank'} rel="noreferrer" className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-heart icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Credits @CodingLab
                    </span>
                  </Link>
                </li>
              </ul>

              <div className={`${INITIAL_CLASSNAME}-logout-and-mode-container`}>
                {/* LogOut */}
                <div className={`${INITIAL_CLASSNAME}-login-container`}>
                  <Link to={"#"} className={`${INITIAL_CLASSNAME}-menu-link`}>
                    <i className="fa fa-lock icon"></i>
                    <span className={`${INITIAL_CLASSNAME}-menu-text text`}>
                      Sign Out
                    </span>
                  </Link>
                </div>

                {/* Dark mode switch */}
                <div className={`${INITIAL_CLASSNAME}-mode-container`}>
                  <i className="fa fa-moon icon"></i>
                  <i className="fa fa-sun icon"></i>
                  <div className={`${INITIAL_CLASSNAME}-mode-text-button-container`}>
                    <span className={`${INITIAL_CLASSNAME}-mode-text text`}>{mode}</span>
                    <span className={`${INITIAL_CLASSNAME}-mode-switch`} onClick={handleModeButtonClick}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${INITIAL_CLASSNAME}-page-container`}>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn. It has the ability to analyze, understand, and learn from data, and can perform tasks that typically require human intervention.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>The field of AI research began in the 1950s, but it has only recently seen significant advancements due to the availability of vast amounts of data and the development of powerful computational resources. Today, AI is being applied in a wide range of industries, including healthcare, finance, transportation, and manufacturing.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>One of the most important subfields of AI is machine learning, which involves using algorithms to enable machines to learn from data without being explicitly programmed. There are three main types of machine learning: supervised learning, unsupervised learning, and reinforcement learning.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>Supervised learning is the most commonly used type of machine learning, and it involves training a model on a labeled dataset, where the correct output is already known. This type of learning is used in applications such as image and speech recognition, and natural language processing.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>Unsupervised learning, on the other hand, involves training a model on an unlabeled dataset, where the correct output is not known. This type of learning is used in applications such as anomaly detection and clustering.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>Reinforcement learning is a type of learning that involves training a model through trial and error, where the model is rewarded for making the correct decision and penalized for making the wrong decision. This type of learning is used in applications such as game playing and robot control.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>AI also has the potential to greatly benefit society, such as helping to solve some of the world's most pressing problems, such as climate change, poverty, and disease. However, it also raises important ethical questions, such as how to ensure that AI is used responsibly and that its benefits are distributed fairly.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>In conclusion, Artificial Intelligence is a rapidly growing field that has the potential to revolutionize many industries and benefit society in numerous ways. However, it is important to consider the ethical implications of its development and use, and to ensure that it is used responsibly.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>Supervised learning is the most commonly used type of machine learning, and it involves training a model on a labeled dataset, where the correct output is already known. This type of learning is used in applications such as image and speech recognition, and natural language processing.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>Unsupervised learning, on the other hand, involves training a model on an unlabeled dataset, where the correct output is not known. This type of learning is used in applications such as anomaly detection and clustering.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>Reinforcement learning is a type of learning that involves training a model through trial and error, where the model is rewarded for making the correct decision and penalized for making the wrong decision. This type of learning is used in applications such as game playing and robot control.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>AI also has the potential to greatly benefit society, such as helping to solve some of the world's most pressing problems, such as climate change, poverty, and disease. However, it also raises important ethical questions, such as how to ensure that AI is used responsibly and that its benefits are distributed fairly.</p>
          <p className={`${INITIAL_CLASSNAME}-text-content`}>In conclusion, Artificial Intelligence is a rapidly growing field that has the potential to revolutionize many industries and benefit society in numerous ways. However, it is important to consider the ethical implications of its development and use, and to ensure that it is used responsibly.</p>
        </div>
      </div>
    </div>
  );
};

export default NavBarTwo;
