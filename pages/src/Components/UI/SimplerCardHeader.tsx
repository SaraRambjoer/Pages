import React from 'react';
import { Box, CardHeader, Flex, Heading, Highlight, Spacer, Text } from '@chakra-ui/react';

const colors = ['pink.200', 'purple.200', 'cyan.200', 'blue.200', 'teal.200', 'green.200', 'yellow.200', 'orange.200', 'red.200', 'gray.200']


export function SimplerCardHeader(props: any) {
    let tagElements = [];
    if (props.tags != null) {
        props.tags.forEach((x, i) => {
            tagElements.push(<Highlight
                query={x}
                styles={{ px: '2', py: '0.5', rounded: 'full', bg: colors[i % colors.length], marginRight: '5px', marginBottom: '5px'}}
              >{x}</Highlight>);
        });
    };

    return <CardHeader style={{paddingBottom: '0px'}}>
        <Flex>
            <Heading style={{paddingBottom: '10px'}} size='md'>
                {props.children}
            </Heading>
            <Spacer></Spacer>
            <Text 
                fontSize='sm'
                color='gray.400'
                as='i'
                paddingLeft='5px'
            >{props.years}</Text>
        </Flex>
        <Flex style={{flexWrap: 'wrap'}}>
            {tagElements}
        </Flex>    
    </CardHeader>;
}
