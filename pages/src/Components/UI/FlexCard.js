import { Flex, Card, Center, Spacer, Text } from '@chakra-ui/react';
import { SlideFadeInOnScroll } from '../Animation/SlideFadeInOnScroll';
import Tilt from 'react-parallax-tilt';

export function FlexCard(props) {
  return (
    <>
      <Tilt
        tiltEnable={true}
        glareEnable={false}
        glareMaxOpacity={0.2}
        tiltReverse={true}
        tiltMaxAngleX={5}
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
            <Card
              width='auto'
              style={{}}
              _hover={{
                boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)',
                transition: '0.3s',
                animate: 'glow',
              }}
            >
              {props.children}
            </Card>
          </SlideFadeInOnScroll>
        </Center>
      </Tilt>
    </>
  );
}