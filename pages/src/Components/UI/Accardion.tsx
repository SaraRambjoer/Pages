import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, CardHeader, Heading, Text, AccordionIcon, CardBody } from '@chakra-ui/react';
import { FlexCard } from './FlexCard';

export function Accardion(props: any) {
    return <FlexCard>
        <CardHeader>
            <Heading size='md'>
                {props.title}
            </Heading>
        </CardHeader>
        <CardBody>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Text fontWeight="bold">
                            {props.shortText}
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {props.children}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </CardBody>
    </FlexCard>
}
