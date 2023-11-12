import React from 'react';
import { Flex, Card, Center } from '@chakra-ui/react';
import { SlideFadeInOnScroll } from '../Animation/SlideFadeInOnScroll';
import Tilt from 'react-parallax-tilt';

export function FlexCard(props) {
  return <>
        <Tilt
        tiltEnable={props.tiltEnable ? true : false}
        glareEnable={true}
        glareMaxOpacity={0.2}
        tiltReverse={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        style={{
            marginBottom: '1rem',
        }}
        >
        <Center
            style={{
            breakInside: 'avoid',
            }}
            width='auto'
        >
            <SlideFadeInOnScroll>
            <Card width='auto'>{props.children}</Card>
            </SlideFadeInOnScroll>
        </Center>
        </Tilt>
    </>
}
