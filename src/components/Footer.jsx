import React from "react";
import Logo from "../assets/favicon.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="left-container">
                <div className="footer__logo">
                    <img src={ Logo } alt="" />
                </div>
                <p className="copyright_p">
                    Copyright &Copyright 2025 BigTh!nk AI
                </p>
            </div>
            <div className="right-container">
                <div className="right-container__subcontainer">
                    <h4 className="footer__subheading">Contact Us</h4>
                    <p>Email: bigthinkaiumd@gmail.com</p>
                </div>
                <div className="right-container__subcontainer">
                    <h4 className="footer__subheading">Important Links</h4>
                    <p>
                        TerpLink: some-link <br />
                        Newsletter
                    </p>
                </div>
                <div className="right-container__subcontainer">
                    <h4 className="footer__subheading">Company</h4>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>

    )

}

export default Footer;