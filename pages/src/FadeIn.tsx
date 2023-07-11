import { motion } from "framer-motion";
import React from "react";

export function FadeIn(props: any) {
    return <motion.div 
        initial={{ opacity: 0, scale: 0.99}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: props.duration, delay: props.delay, repeat: 0}}>{props.children}
    </motion.div>
}
