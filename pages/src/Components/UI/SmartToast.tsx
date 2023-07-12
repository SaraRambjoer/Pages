import React from 'react';

import { Toast, useToast } from '@chakra-ui/react';

export function SmartToastButton(props: any) {
    const toast = useToast();
    const [count, setCount] = React.useState(0);
    const toastFunc = () => {
        toast({
            title: props.title,
            description: props.description[count % props.description.length],
            status: props.status,
            duration: props.duration,
            isClosable: props.isClosable,
        });
        setCount(count + 1);
    };
    return (
        <button onClick={toastFunc}>
            {props.children}
        </button>
    )
}