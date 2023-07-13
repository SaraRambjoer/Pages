import { motion } from "framer-motion";
import React, { Component, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import ReactDOM from "react-dom";

export function Sandevistian(props: any) {
    const from: [number, number] = props.from;
    const duration: number = props.duration;
    const steps: number = props.steps;
    const totalLength = from[0] + from[1];
    const stepLength = totalLength / steps;
    const xSteps = Math.floor(from[0] / stepLength);
    const xStepLength = Math.floor(from[0] / xSteps);
    const ySteps = Math.floor(from[1] / stepLength);
    const yStepLength = Math.floor(from[1] / ySteps)
    const allPlacedTime = duration*0.75;
    const startLoseTime = duration*0.85;
    var baseX = Number(props.baseX);
    var baseY = Number(props.baseY);
    return <>
        {generateSandevistanEntries(xSteps, xStepLength, ySteps, yStepLength, allPlacedTime, startLoseTime, props.children, from, duration, props.delay, baseX, baseY)}
    </>
}

function generateSandevistanEntries(xSteps: any, xStepLength: any, ySteps: any, yStepLength: any, allPlacedTime: any, startLoseTime: any, children: any, from: any, duration: number, delay: number, baseX: number, baseY: number) {
    const initialColor = [55, 164, 237];
    const endColor = [158, 63, 235];
    const steps = xSteps + ySteps;
    const colorStep = [(endColor[0] - initialColor[0]) / steps, (endColor[1] - initialColor[1]) / steps, (endColor[2] - initialColor[2]) / steps];
    const backgroundColors = [];
    for (var i0 = 0; i0 < steps; i0++) {
        backgroundColors.push(`rgb(${initialColor[0] + colorStep[0] * i0}, ${initialColor[1] + colorStep[1] * i0}, ${initialColor[2] + colorStep[2] * i0})`);
    }
    const positions = [];
    for (var i0 = 0; i0 < xSteps; i0++) {
        positions.push([baseX + from[0] - xStepLength * i0, baseY+from[1]]);
    }
    for (var i0 = 0; i0 < ySteps; i0++) {
        positions.push([baseX, baseY + from[1] - yStepLength * i0]);
    }
    const visibleTimes = [];
    for (var i0 = 0; i0 < steps; i0++) {
        visibleTimes.push(allPlacedTime/steps*i0);
    }
    const invisibleTimes = [];
    for (var i0 = 0; i0 < steps; i0++) {
        invisibleTimes.push(startLoseTime + (duration - startLoseTime)/steps*i0);
    }
    const sandevistanEntries = [];
    for (var i0 = 0; i0 < steps; i0++) {
        // Todo fix DOM Tree
        sandevistanEntries.push(<SandevistanEntry backgroundColor={backgroundColors[i0]} position={positions[i0]} visibleTimes={visibleTimes[i0]} invisibleTimes={invisibleTimes[i0]} children={children} delay={delay}></SandevistanEntry>);
    }
    sandevistanEntries.push(<motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.00, delay: allPlacedTime+delay, repeat: 0}}
        style={{position:"absolute", left:baseX, top:baseY}}
        >
        {children}
    </motion.div>)
    return <>
        {sandevistanEntries}
    </>
}

function SandevistanEntry(props: any) {
    return <div style={{ position: "absolute", top:props.position[1], left: props.position[0]}}>
        <motion.div         
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.0, delay: props.delay+props.visibleTimes, repeat: 0}}>
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.0, delay: props.invisibleTimes+props.delay, repeat: 0}}>
            {props.children}
            <div style={{ backgroundColor:props.backgroundColor, opacity:0.6, position:"absolute", zIndex:2, inset:0}}>
            </div>
    </motion.div>
    </motion.div>
    </div>
}