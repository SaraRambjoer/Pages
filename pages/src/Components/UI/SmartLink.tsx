import { Flex, Link, Spacer } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react';

export function SmartLink(props: any) {
    return <Flex>
        <Spacer></Spacer>
        <Link href={props.href} color='teal.500'>
            {props.text} <ExternalLinkIcon></ExternalLinkIcon>
        </Link>
    </Flex>
}