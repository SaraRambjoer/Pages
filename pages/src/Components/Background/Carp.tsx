import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Vector3 } from "../Data classes/Vector3";
import { relative } from "path";

function adjustVectorAfterNormal(headPosition: Vector3, faceNormal: Vector3, absoluteDistance: number) {
    // assume normal vector is normalized
    return headPosition.add(faceNormal.multiplyScalar(absoluteDistance).multiplyScalar(-1.0));
}

function generatePoints(headPosition: Vector3, faceNormal: Vector3, relativeBaseNormal: Vector3, relativePositions: Vector3[]) {
    const newPositions: Vector3[] = [];
    const facingDirection: number = faceNormal.y > 0.0 ? 1.0 : -1.0;
    relativePositions.forEach((relativePosition) => {
        newPositions.push(headPosition.add(relativePosition.rotateAroundNormal(relativeBaseNormal.angle(faceNormal.multiplyScalar(facingDirection)), new Vector3(0.0, 0.0, 1.0))));
    });
    return newPositions;
}

function vector3ToStringPoints(vector3: Vector3[]): string {
    let result = "";
    vector3.forEach((vector) => {
        result += vector.x + "," + vector.y + " ";
    });
    return result;
}

function wiggle(vector: number, relOrder: number, time: number) {
    return vector + Math.sin((relOrder* time))*0.2;
}

export function Carp(props: any) {
    const [headPosition, setHeadPosition] = useState(props.headPosition);
    const [faceNormal, setFaceNormal] = useState(props.faceNormal); // so if the face is like flat this is the normal vector of the plane (the direction of the fish)
    const speed = 0.1;
    const relativeBaseNormal = new Vector3(0.0, 1.0, 0.0);
    const [goalLocation, setGoalLocation] = useState(new Vector3(Math.random()*100, Math.random()*100, 0.0));
    const [time, setTime] = useState(0.0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeadPosition(headPosition.add(faceNormal.multiplyScalar(speed)));
            setFaceNormal(
                faceNormal.rotateAroundNormal(
                    faceNormal.angle(
                        goalLocation.add(
                            headPosition.multiplyScalar(-1.0)
                        )
                    ) * speed, new Vector3(0.0, 0.0, 1.0)
                )
            );
            if (goalLocation.add(headPosition.multiplyScalar(-1.0)).length() < 1.0) {
                setGoalLocation(new Vector3(Math.random()*100, Math.random()*100, 0.0));
            }
            setTime(time + speed);
        }, 10);

        return () => clearInterval(interval);
    }, [headPosition, faceNormal]);

    return <> 
        {/* body */}
        <motion.circle cx={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 4.5).x, 0.0, time)} cy={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 4.5).y, 0.9, time)} r="0.5" fill="orange"></motion.circle>
        <motion.circle cx={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 3.8).x, 0.1, time)} cy={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 3.8).y, 0.5, time)} r="0.7" fill="white"></motion.circle>
        <motion.circle cx={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 3.0).x, 0.3, time)} cy={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 3.0).y, 0.7, time)} r="0.8" stroke="transparent" fill="white"></motion.circle>
        <motion.circle cx={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 2.1).x, 0.5, time)} cy={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 2.1).y, 0.2, time)} r="0.9" stroke="transparent" fill="orange"></motion.circle>
        <motion.circle cx={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 1.3).x, 0.7, time)} cy={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 1.3).y, 0.1, time)} r="1.1" stroke="transparent" fill="orange"></motion.circle>
        <motion.circle cx={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 0.4).x, 0.9, time)} cy={wiggle(adjustVectorAfterNormal(headPosition, faceNormal, 0.4).y, 0.6, time)} r="1" stroke="transparent" fill="white"></motion.circle>
        <motion.circle cx={headPosition.x} cy={headPosition.y} r="0.7" stroke="transparent" fill="orange"></motion.circle>
        {/* eyes */}
        <motion.circle cx={headPosition.x - 0.4} cy={headPosition.y} r="0.1" fill="black"></motion.circle>
        <motion.circle cx={headPosition.x + 0.4} cy={headPosition.y} r="0.1" fill="black"></motion.circle>
        {/* fins and tail */}
        <motion.polygon points={vector3ToStringPoints(generatePoints(headPosition, faceNormal, relativeBaseNormal, [new Vector3(-2.5, -1.5, 0.0), new Vector3(-1.0, 0.0, 0.0), new Vector3(-1.0, -1.0, 0.0)]))} fill="#ffffffaa"></motion.polygon>
        <motion.polygon points={vector3ToStringPoints(generatePoints(headPosition, faceNormal, relativeBaseNormal, [new Vector3(2.5, -1.5, 0.0), new Vector3(1.0, 0.0, 0.0), new Vector3(1.0, -1.0, 0.0)]))} fill="#ffffffaa"></motion.polygon>
        <motion.polygon points={vector3ToStringPoints(generatePoints(headPosition, faceNormal, relativeBaseNormal, [new Vector3(-1.7, -2.5, 0.0), new Vector3(-0.9, -1.5, 0.0), new Vector3(-0.9, -2.0, 0.0)]))} fill="#ffffffaa"></motion.polygon>
        <motion.polygon points={vector3ToStringPoints(generatePoints(headPosition, faceNormal, relativeBaseNormal, [new Vector3(1.7, -2.5, 0.0), new Vector3(0.9, -1.5, 0.0), new Vector3(0.9, -2.0, 0.0)]))} fill="#ffffffaa"></motion.polygon>
        <motion.polygon points={vector3ToStringPoints(generatePoints(headPosition, faceNormal, relativeBaseNormal, [new Vector3(0.0, -4.78, 0.0), new Vector3(1.5, -6.0, 0.0), new Vector3(0.0, -5.5, 0.0), new Vector3(-1.5, -6.0, 0.0)]))} fill="#ffffffaa"></motion.polygon>
    </>
}