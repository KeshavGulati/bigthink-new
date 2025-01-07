import React from "react";
import img from "../assets/edge-img.png";
import FadeInView from "./utils/FadeInView";

function EdgeSection() {
    return (
        <div className="edge-container">
            <div className="left-container">
                <FadeInView>
                    <h3 className="edge-heading">
                        EDGE
                    </h3>
                </FadeInView>
                <FadeInView>
                    <div className="edge_p">
                    EDGE is a group of hard working, knowledgeable, and passionate students, who already have a good understanding of Machine Learning, that conduct a self-guided research project on AI. We begin the semester by looking at literature in AI and formulating ideas on potential projects. From there, we discuss research projects of interest as a group and decide on one or two to pursue. The team is divided into groups, and each group selects a project at the beginning of the Fall semester, and works on it throughout the entire school year. We write code, establish research questions, and execute the project, and the goal is to produce a research paper by the end of the year!
                    </div>
                </FadeInView>
            </div>
            <div className="right-container">
                <img src={ img } alt="" />
            </div>
        </div>

    )

}

export default EdgeSection;