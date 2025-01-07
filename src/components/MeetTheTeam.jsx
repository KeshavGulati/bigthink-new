import React, { useRef } from "react";
import FadeInView from "./utils/FadeInView.jsx";
import President from "../assets/president.png";
import VicePresident from "../assets/vice-president.png";
import PyoneersLead from "../assets/pyoneers-lead.png";
import EdgeLead from "../assets/edge-lead.png";
import WebDeveloper from "../assets/web-developer.png";
import MarketingManager from "../assets/marketing-manager.png";

function MeetTheTeam() {
    const ref = useRef(null);
    return (
        <div className="meet-the-team-container" ref={ ref }>
            <div className="left-container">
                <FadeInView>
                    <h3 className="meet-the-team-heading">
                        Meet The Team
                    </h3>
                </FadeInView>
                <FadeInView externalRef={ ref }>
                    <p className="meet-the-team_p">
                        Our team consists of well-accomplished students, both undergraduates and graduates, who like teaching other students.They all have good academic results and professional experience.These are the people who continue the work and provide the quality of experience that the club is known for.
                        <br /><br />
                        Socials: <br />
                        Arvind <br />
                            <p className="socials__item">
                                Email: arvindsomething@gmail.com <br />
                                Github: github.com/arvindsomething <br />
                                Linkedin: linkedin.com/arvind <br /><br />
                            </p>
                        Janice <br />
                            <p className="socials__item">
                                Email: janicesomething@gmail.com <br />
                                Github: github.com/janicesomething <br />
                                Linkedin: linkedin.com/janice <br /><br />
                            </p>
                        Karen
                            <p className="socials__item">
                                Email: karensomething@gmail.com <br />
                                Github: github.com/karensomething <br />
                                Linkedin: linkedin.com/karen <br /><br />
                            </p>
                        Emmanuel
                            <p className="socials__item">
                                Email: emmanuelsomething@gmail.com <br />
                                Github: github.com/emmanuelsomething <br />
                                Linkedin: linkedin.com/emmanuel <br /><br />
                            </p>
                        Thomas
                            <p className="socials__item">
                                Email: thomassomething@gmail.com <br />
                                Github: github.com/thomassomething <br />
                                Linkedin: linkedin.com/thomas <br /><br />
                            </p>
                        Arsh
                            <p className="socials__item">
                                Email: arshsomething@gmail.com <br />
                                Github: github.com/arshsomething <br />
                                Linkedin: linkedin.com/arsh <br />
                            </p>
                    </p>
                </FadeInView>
            </div>
            <div className="right-container">
                <div className="img-container">
                    <div className="img-div">
                        <img src={ President } alt="" className="president-img" />
                    </div>
                    <caption>
                        <strong>President</strong>
                        <p>Arvind Agarwal</p>
                    </caption>
                </div>
                <div className="img-container">
                    <div className="img-div">
                        <img src={ VicePresident } alt="" className="vice-president-img" />
                    </div>
                    <caption>
                        <strong>Vice President</strong>
                        <p>Janice Jolly</p>
                    </caption>
                </div>
                <div className="img-container">
                    <div className="img-div">
                        <img src={ PyoneersLead } alt="" className="pyoneers-lead-img" />
                    </div>
                    <caption>
                        <strong>Pyoneers Lead</strong>
                        <p>Karen Kelly</p>
                    </caption>
                </div>
                <div className="img-container">
                    <div className="img-div">
                        <img src={ EdgeLead } alt="" className="edge-lead-img" />
                    </div>
                    <caption>
                        <strong>EDGE Lead</strong>
                        <p>Emmanuel Ezekiel</p>
                    </caption>
                </div>
                <div className="img-container">
                    <div className="img-div">
                        <img src={ WebDeveloper } alt="" className="web-developer-img" />
                    </div>
                    <caption>
                        <strong>Web Developer</strong>
                        <p>Thomas Dymowski</p>
                    </caption>
                </div>
                <div className="img-container">
                    <div className="img-div">
                        <img src={ MarketingManager } alt="" className="marketing-manager-img" />
                    </div>
                    <caption>
                        <strong>Marketing Manager</strong>
                        <p>Arsh Jain</p>
                    </caption>
                </div>

            </div>
        </div>

    )

}

export default MeetTheTeam;