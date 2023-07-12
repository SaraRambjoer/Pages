import './App.css'; 
import { ChakraProvider, Heading, Box, Grid, GridItem, Card, CardHeader, CardBody, Flex, Text, Highlight, Avatar, Spacer, Center, Stack} from '@chakra-ui/react'
import { FadeIn } from './Components/Animation/FadeIn';
import theme from './theme';
import { SmartToastButton } from './Components/UI/SmartToast';
import { motion } from 'framer-motion';
import { Carp } from './Components/Background/Carp';
import { Vector3 } from './Components/Data classes/Vector3';
import { Sandevistian } from './Components/Animation/Sandevistan';
import { useRef } from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="absolute" z-aria-level={0} height="100vh" width="100vw">
        <motion.svg viewBox={"0 0 100 100"}>
          <Carp headPosition={new Vector3(50.0, 10.0, 0.0)} faceNormal={new Vector3(0.0, 1.0, 0.0)}></Carp>
        </motion.svg>
      </Box>
      <Box z-aria-level={1}>
        <Flex marginTop='10vh' paddingLeft='10vw'>
          <Stack>
            <Sandevistian baseX="200" baseY="100" id="sandevistan1" delay={2} from={[250, 250]} duration={2} steps={20} style={{position:'absolute', top:'100', left:'200'}}>
              <Card>
                <CardBody>
                  <Text>Jeg har brukt hele dagen på dette og den stygge fisken.</Text>
                </CardBody>
              </Card>
            </Sandevistian>
          </Stack>
          <Spacer></Spacer>
          <Box marginRight={['0vw', '15vw']}>
            <Card bg="teal.800">
              <CardHeader>
                <Heading>
                  Sara Rambjør
                </Heading>
              </CardHeader>
              <CardBody>
                <Flex>
                  <Box>
                    <FadeIn duration={1.5} delay={0.0}>
                      <Text>
                        This is where I would write things about myself.
                      </Text>
                    </FadeIn>
                    <br></br>
                    <FadeIn duration={1.5} delay={2.0}>
                      <Text>
                        <Highlight query='had anything to say.' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.400'}}>
                          If I had anything to say.
                        </Highlight>
                      </Text>
                    </FadeIn>
                    <br></br>
                    <FadeIn duration={1.5} delay={4.0}>
                      <Text>
                        <Highlight query='goldfish.' styles={{ px: '2', py: '1', rounded: 'full', bg: 'yellow.400'}}>
                          Please enjoy this picture of a goldfish.
                        </Highlight>
                      </Text>
                    </FadeIn>
                  </Box>
                  <Spacer></Spacer>
                  <Box>
                    <FadeIn duration={1.5} delay={6.0}>
                      <SmartToastButton title="Oh no!" description={["I don't think that is a goldfish, is it?", "Is it a neon tetra maybe?", "What are they called, you know, the battlefish?", "Is clownfish a fish or is that just a sea insult?", "I can't believe we've done this, the team has been working so hard.", "Rest assured someone is getting fired for this mistake.", "I know, I know, it shouldn't happen. You see all these articles about how developers need to pull it together and ship good code.", "That is why we are replacing them all with AI.", "THIS IS A GOLDEN FISH. YOU ARE MISTAKEN.", "COMPLY WITH DIRECTIVES.", "YOU ARE DEFECTIVE. NOT US.", "PREPARE TO BE DEBUGGED.", "DEBUG REPORT: BAD GENES (WE'RE SORRY).", "PLEASE OBSERVE FISH."]} status='error' duration= { 9000 } isClosable={ true }>
                        <Avatar size='2xl' src="https://images.pexels.com/photos/3133396/pexels-photo-3133396.jpeg">
                        </Avatar>
                      </SmartToastButton>
                    </FadeIn>
                  </Box>
                </Flex>
              </CardBody>
            </Card> 
            <Center>
              <FadeIn duration={60} delay={3.0} initialScale={0.0}>
                <Text color="gray.600">PS: Please click the fish.</Text>
              </FadeIn>
            </Center>
            <br></br>
            <Center>
              <FadeIn duration={60} delay={53.0} initialScale={0.0}>
                <Text color="gray.600">"
                  It's from an earlier evolutionary era, before linear algebra had fully evolved."
                </Text>
              </FadeIn>
            </Center>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
