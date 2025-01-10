import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Raise({ props }) {
    // console.log(itemClassList);
    // let elList = [];
    // for (const name of itemClassList) {
    //     elList.push(document.querySelector(name));

    // }

    // console.log(elList);

    return (
        <div className="RaiseWrapper">
            {(props.children).map((item, index) => {
                const el = document.querySelector(item);
                // console.log(item);
                return (
                    <motion.div
                    initial={{y: 0}}
                    animate={{y:-5}}
                    transition={{
                        delay: index*5,
                        duration: 0.5,
                        repeat: Infinity
                    }}
                    >
                        {el}
                    </motion.div>

                )

            })}
        </div>

    )

}

export default Raise;