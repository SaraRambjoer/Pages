import React from 'react';
import { Box, Text, Image, Center, Stack } from '@chakra-ui/react';
import { CaptionText } from './CaptionText';

export function CardImage(props: any) {
    return <Center>
        <Stack>
            <Image src={props.srcImage} alt={props.alt} maxH="50vh" maxW="auto" objectFit="contain">
            </Image>
            <CaptionText>{props.caption}</CaptionText>
        </Stack>
    </Center> 
}

