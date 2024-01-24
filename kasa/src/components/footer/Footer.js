import React from "react";
import "./Footer.scss";
import logoFooter from "../../assets/images/logoFooter.png";

function Footer() {
    return (
        <footer>
            <div className="footer">
                <img src={logoFooter} alt="footer" />
                <p>
                    <span>C</span>2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    );
}
export default Footer;
