import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, CardHeader, Heading, Text, AccordionIcon, CardBody } from '@chakra-ui/react';
import { FlexCard } from './FlexCard';
import { SimplerCardHeader } from './SimplerCardHeader';

export function Accardion(props: any) {
    return <FlexCard>
        <SimplerCardHeader tags={props.tags}>
            {props.title}
        </SimplerCardHeader>
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
