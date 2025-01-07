import React from "react";
import FadeInView from "./utils/FadeInView";

function FaqSection() {
    return (
        <div className="faq-container">
            <FadeInView>
                <h3 className="faq-heading">
                    Frequently Asked Questions
                </h3>
            </FadeInView>
            <div className="faq-content">
                <div className="left-container">
                    <FadeInView>
                        <div className="faq-item">
                            <h4 className="faq-subheading">
                                1. How do I join?
                            </h4>
                            <p className="faq-answer">
                            You can join by signing up for the club on TerpLink, and then signing up on the discord. Stay updated on our server where we post announcements for our meetings and more!
                            </p>
                        </div>
                    </FadeInView>
                    <FadeInView>
                        <div className="faq-item">
                            <h4 className="faq-subheading">
                                2. How much Machine Learning should I know in advance?
                            </h4>
                            <p className="faq-answer">
                            If you are joining Pyoneers, you do not need to have any experience with Machine Learning, Artificial Intelligence, Data Science, or Python. If you are joining EDGE, it is recommended to have some knowledge about either of these topics, at the level where you can complete an easy project on them.
                            </p>
                        </div>
                    </FadeInView>
                </div>
                <div className="right-container">
                    <FadeInView>
                        <div className="faq-item">
                            <h4 className="faq-subheading">
                                3. What will I gain from the experience?
                            </h4>
                            <p className="faq-answer">
                            If you are new to Machine Learning, you will gain the skills necessary to start off on the right foot in your journey. Our leads are all very accomplished in this side of Computer Science, and have curated the programs so that everyone learns something. If you already have experience with Machine Learning, the club will offer you better insights into the field, and the special talks featuring experts from the field will also be helpful. Also, the leads can offer some very helpful career advise that can help you in the professional world.
                            </p>
                        </div>
                    </FadeInView>
                    <FadeInView>
                        <div className="faq-item">
                            <h4 className="faq-subheading">
                                4. Who much time do I need to commit?
                            </h4>
                            <p className="faq-answer">
                            Each of the programs, Pyoneers and EDGE, has one weekly meeting where the leads will introduce a new topic and have a discussion on the same. They then give some homework to everyone which is preferred to be done before the next meeting. All deadlines, however, are soft and there is no pressure at any time. The leads themselves are students and understand that schoolwork can at times get very stressful, and will always urge you to place you grades above the club.
                            </p>
                        </div>
                    </FadeInView>
                </div>
            </div>
        </div>

    )

}

export default FaqSection;