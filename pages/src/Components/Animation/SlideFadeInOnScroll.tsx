import { motion } from "framer-motion";
import React from "react";

export function SlideFadeInOnScroll(props: any) {
    return <motion.div 
        initial={{ translateX: -50, translateY: 50, opacity: 0.5, width:'100%'}}
        whileInView={{ translateX: 0, translateY: 0, opacity: 1, width:'100%'}}
        viewport={{ once: true }}>{props.children}
    </motion.div>
}
