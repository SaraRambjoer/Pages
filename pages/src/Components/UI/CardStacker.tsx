import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, CardHeader, Heading, Text, AccordionIcon, CardBody, Stack, Spacer, Flex } from '@chakra-ui/react';
import { FlexCard } from './FlexCard';
import { SimplerCardHeader } from './SimplerCardHeader';
import useWindowDimensions from './useWindowDimensions';

function filterByModulus(children: any, modulus: number, remainder: number) {
    return children.filter((child: any) => children.indexOf(child) % modulus === remainder);
}

export function CardStacker(props: any) {
    const { height, width } = useWindowDimensions();
    console.log(width);
    if (width > 1280) {
        return <Flex>
            <Stack margin='10px' width='33%'>
                {filterByModulus(props.children, 3, 0)}
            </Stack>
            <Spacer></Spacer>
            <Stack margin='10px' width='33%'>
                {filterByModulus(props.children, 3, 1)}
            </Stack>
            <Spacer></Spacer>
            <Stack margin='10px' width='33%'>
                {filterByModulus(props.children, 3, 2)}
            </Stack>
        </Flex>
    }
    else if (width > 768) {
        return <Flex>
            <Stack margin='10px' width='49%'>
                {filterByModulus(props.children, 2, 0)}
            </Stack>
            <Spacer></Spacer>
            <Stack margin='10px' width='49%'>
                {filterByModulus(props.children, 2, 1)}
            </Stack>
        </Flex>
    }
    else {
        return <Flex>
            <Stack margin='10px'>
                {props.children}
            </Stack>
        </Flex>
    }
}
