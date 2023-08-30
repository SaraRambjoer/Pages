import React from 'react';
import { Text } from '@chakra-ui/react';

export function CaptionText(props: any) {
    return <Text fontSize="xs" textColor="gray" textAlign="center"> 
        {props.children}
    </Text>
}