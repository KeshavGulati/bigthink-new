import React from "react";
import FadeIn from "./utils/FadeIn";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-title">
                <FadeIn>
                    <h1 className="heading-1">
                        BigTh!nk AI
                    </h1>
                </FadeIn>
                <FadeIn>
                    <h3 className="subtitle">
                        We are UMD's own and longest running Machine Learning and Artificial Intelligence club
                    </h3>
                </FadeIn>
                <FadeIn>
                    <a href="#" className="sign-up-btn button">
                        Sign Up
                    </a>
                </FadeIn>
            </div>
            <FadeIn>
                <div className="hero-info-container">
                    <div className="hero-info">
                        <div className="hero-info__div">
                            <span className="info-stats">200 members</span><br />
                            in the community
                        </div>
                        <div className="hero-info__div">
                            <span className="info-stats">12 weeks</span><br />
                            of learning content
                        </div>
                        <div className="hero-info__div">
                            <span className="info-stats">48%</span><br />
                            growth in members since last year
                        </div>
                        <div className="hero-info__div">
                            <span className="info-stats">4 years</span><br />
                            of trusted teaching and collaboration
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>

    )

}

export default Hero;