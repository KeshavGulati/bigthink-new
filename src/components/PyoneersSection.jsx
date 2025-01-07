import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PyoneersImg from "../assets/vs-code-img.png";
import FadeInView from "./utils/FadeInView.jsx";

function PyoneersSection() {
    const pyoneersRef = useRef(null);

    return (
        <div className="pyoneers-container" ref={ pyoneersRef }>
            <div className="left-container">
                <div className="pyoneers-subcontainer">
                    <FadeInView externalRef={ pyoneersRef }>
                        <h3 className="pyoneers-heading">
                            Pyoneers
                        </h3>
                    </FadeInView>
                    <FadeInView externalRef={ pyoneersRef }>
                        <p className="pyoneer_p">
                        In pyoneers, we will take up different subtopics of AI, leads will go over the topic to explain and finally we will work on a project. Pyoneers is handled by three separate leads who go over AI, Data Science, and Python.
                        </p>
                    </FadeInView>
                </div>
                <div className="ai-container">
                    <FadeInView externalRef={ pyoneersRef }>
                        <h4 className="ai-heading">
                            AI
                        </h4>
                    </FadeInView>
                    <FadeInView externalRef={ pyoneersRef }>
                        <p className="ai_p">
                        We teach you how to use supervised machine learning models and measure performance metrics from them. Some machine learning models we’ve covered in the past include decision trees/random forests, neural networks, logistic regression, etc.
                        </p>
                    </FadeInView>
                </div>
                <div className="data-science-container">
                    <FadeInView externalRef={ pyoneersRef }>
                        <h4 className="data-science-heading">
                            Data Science
                        </h4>
                    </FadeInView>
                    <FadeInView externalRef={ pyoneersRef }>
                        <p className="data-science_p">
                        We teach you about the pipeline of cleaning raw data, performing exploratory data analysis and feature engineering so the data is ready for the model. Further, we teach you about data visualization using various python libraries like matplotlib, scikit-learn, and seaborn. These will help you notice any useful patterns that appear in the data.
                        </p>
                    </FadeInView>
                </div>
                <div className="python-container">
                    <FadeInView externalRef={ pyoneersRef }>
                        <h4 className="python-heading">
                            Python
                        </h4>
                    </FadeInView>
                    <FadeInView externalRef={ pyoneersRef }>
                        <p className="python_p">
                        We teach you the basics of python programming from scratch! Some fundamental topics include loops, functions, lists, conditionals, etc. Combining theory and practice, we equip you with tools that would get you through any situation related to machine learning, AI, or data science, and will help in any DSA related concepts as well!
                        </p>
                    </FadeInView>
                </div>
            </div>
            <div className="right-container">
                <img src={ PyoneersImg } alt="An img of vs code" />
            </div>
        </div>

    )

}

export default PyoneersSection;