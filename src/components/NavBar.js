import React, { useState } from "react";
import Logo from "../Media/Images/afcCrest2.jpg";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";


function NavBar() {

    const [numberOfItems, setNumberOfItems] = useState(3);
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(numberOfItems);


  return (
    <div>
      <div className="header">
        <a className="logo" href="/">
          <img className="logo-img" src={Logo} alt="richmond logo" />
        </a>
        <div className="links">
          <div className="social-media">
            <ul className="social-links">
              <li>
                <a
                  href="https://wbshop.com/pages/ted-lasso?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNIkK5zvHD6-4Ew8BTrTKvRLjRv7NcBnqgUiInfq5vIPRQReXa9Pe7xoCUt0QAvD_BwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-cart-plus" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://mobile.twitter.com/afcrichmond" target="blank">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?ctx_brand=tvs.sbd.4000&ign-itscg=MC_20000&ign-itsct=atvp_brand_omd&mttn3pid=Google%20AdWords&mttnagencyid=a5e&mttncc=US&mttnsiteid=143238&mttnsubad=OUS2019863_1-550313429253-c&mttnsubkw=125491392688__haJ0YKw5_&mttnsubplmnt="
                  target="blank"
                >
                  <i className="fa fa-apple" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/tedlassofans/" target="blank">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=3u7EIiohs6U"
                  target="blank"
                >
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar">
            <ul className="page-links">
              <li className="li-link">
                <a href="/history" className="a-link">History</a>
              </li>
              <li className="li-link">
                <a href="/characters" className="a-link">Characters</a>
              </li>
              <li className="li-link">
                <a href="quiz" className="a-link">Quiz</a>
              </li>
              <li className="li-link">
                <a href="hateNate" className="a-link">Hate Nate</a>
              </li>
              {/* <li>
                <button {...buttonProps}>Example</button>
                <div className={isOpen ? "visible" : ""} role="menu">
                  <a {...itemProps[0]} href="https://example.com">
                    Regular link
                  </a>
                  <a {...itemProps[1]}>With click handler</a>
                </div>
              </li> */}
              {/* <div className="dropdown">
                <li
                  className="dropdown-content" 
                >
                  <a href="www.google.com">Link 1</a>
                  <a href="www.google.com">Link 2</a>
                  <a href="www.google.com">Link 3</a>
                </li>
              </div> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
