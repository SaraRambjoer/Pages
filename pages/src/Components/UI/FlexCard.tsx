import React from 'react';
import { Flex, Card, Center } from '@chakra-ui/react';
import { SlideFadeInOnScroll } from '../Animation/SlideFadeInOnScroll';

export function FlexCard(props: any) {
    return <Center style={{breakInside: 'avoid', marginBottom: "1rem"}}>
        <SlideFadeInOnScroll>
            <Flex>
                <Card>{props.children}
                </Card>
            </Flex>
        </SlideFadeInOnScroll>
    </Center>
}