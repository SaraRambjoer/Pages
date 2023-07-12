import { motion } from "framer-motion";
import React from "react";

export function FadeIn(props: any) {
    return <motion.div 
        initial={{ opacity: props.initialOpacity != null ? props.initialOpacity : 0, scale: props.initialScale != null ? props.initialScale : 0.9}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: props.duration, delay: props.delay, repeat: 0}}>{props.children}
    </motion.div>
}
