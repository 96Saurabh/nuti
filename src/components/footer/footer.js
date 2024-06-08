import React from "react";
import navIcon1 from "../../assets/nav-icon1.svg";
import navIcon2 from "../../assets/nav-icon2.svg";
import navIcon3 from "../../assets/nav-icon3.svg";
import "./footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
        <div className="sb_footer-links_div">
          <h4>For Business</h4>
          <a herf="/employ">
            <p>empoler</p>
          </a>
          <a herf="/healtplan">
            <p>healtplan</p>
          </a>
          <a herf="/individial">
            <p>individial</p>
          </a>
        </div>
        
        <div className="sb_footer-links_div">
          <h4>For Business</h4>
          <a herf="/employ">
            <p>empoler</p>
          </a>
          <a herf="/healtplan">
            <p>healtplan</p>
          </a>
          <a herf="/individial">
            <p>individial</p>
          </a>
        </div>
        <div className="sb_footer-links_div">
          <h4>For Business</h4>
          <a herf="/employ">
            <p>empoler</p>
          </a>
          <a herf="/healtplan">
            <p>healtplan</p>
          </a>
          <a herf="/individial">
            <p>individial</p>
          </a>
        </div>
        <div className="sb_footer-links_div">
          <h4>For Business</h4>
          <a herf="/employ">
            <p>empoler</p>
          </a>
          <a herf="/healtplan">
            <p>healtplan</p>
          </a>
          <a herf="/individial">
            <p>individial</p>
          </a>
        
        </div>
        <div className="sb_footer-links_div">
          <h4>Comming Soon</h4>
          <div className="socialmedia">
            <p>
              <img src={navIcon1} alt="Icon" />{" "}
            </p>
            <p>
              <img src={navIcon2} alt="Icon" />{" "}
            </p>
            <p>
              <img src={navIcon3} alt="Icon" />{" "}
            </p>
          </div>
        </div>
        </div>
        <hr></hr>
        <div className="sb_footer-bolow">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} CodeInn. All right reserved
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/teams"><div><p>term$ conditions</p></div></a>
                <a href="/teams"><div><p>term$ conditions</p></div></a>
                <a href="/teams"><div><p>term$ conditions</p></div></a>
                <a href="/teams"><div><p>term$ conditions</p></div></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
