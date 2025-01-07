import React from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

function FadeIn({ children, className }) {
    return (
        <motion.div
        className={ `fade-in ${ className }` }
        initial={{
            opacity: 0,
            y: "50%",
        }}
        animate={{
            opacity: 1,
            y: "0",
        }}
        transition={{
            duration: 0.6,
            ease: "easeInOut"
        }}>
        { children }
        </motion.div>

    )

}

export default FadeIn;