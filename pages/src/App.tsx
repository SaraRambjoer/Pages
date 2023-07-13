import './App.css'; 
import { ChakraProvider, Heading, Box, Grid, GridItem, Card, CardHeader, CardBody, Flex, Text, Highlight, Avatar, Spacer, Center, Stack, Image} from '@chakra-ui/react'
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
            <Sandevistian baseX="300" baseY="25" delay={6} from={[0, 250]} duration={2} steps={20} style={{position:'absolute', top:'25', left:'300'}}>
              <Card>
                <CardBody>
                  <Text>I guess I should say some things about myself..</Text>
                </CardBody>
              </Card>
            </Sandevistian>
            <Sandevistian baseX="300" baseY="100" delay={8} from={[0, 300]} duration={2} steps={20} style={{position:'absolute', top:'100', left:'300'}}>
              <Card>
                <CardBody>
                  <Text>I studied Comp-Sci + AI in university</Text>
                </CardBody>
              </Card>
            </Sandevistian>
            <Sandevistian baseX="300" baseY="175" delay={10} from={[0, 350]} duration={2} steps={20} style={{position:'absolute', top:'175', left:'300'}}>
              <Card>
                <CardBody>
                  <Text>I'm working as a Software Development consultant</Text>
                </CardBody>
              </Card>
            </Sandevistian>
            <Sandevistian baseX="300" baseY="250" delay={12} from={[0, 400]} duration={2} steps={20} style={{position:'absolute', top:'250', left:'300'}}>
              <Card>
                <CardBody>
                  <Text>I like doing silly side projects outside of work</Text>
                </CardBody>
              </Card>
            </Sandevistian>
            <Sandevistian baseX="300" baseY="325" delay={14} from={[0, 450]} duration={2} steps={20} style={{position:'absolute', top:'325', left:'300'}}>
              <Card>
                <CardBody>
                  <Text>Like this effect which ruins the DOM tree because I never wrote the cleanup code</Text>
                </CardBody>
              </Card>
            </Sandevistian>
            <Sandevistian baseX="300" baseY="400" delay={16} from={[0, 500]} duration={2} steps={20} style={{position:'absolute', top:'400', left:'300'}}>
              <Card>
                <CardBody>
                  <Text>Here's a photo of me</Text>
                </CardBody>
              </Card>
            </Sandevistian>
            <Sandevistian baseX="300" baseY="475" delay={19} from={[500, 550]} duration={2} steps={40} style={{position:'absolute', top:'475', left:'300'}}>
              <Card>
                <CardBody>
                  <SmartToastButton title="There it is!" description={["Woooo!", "Knew we had one lying around somewhere.", "Now if only we could find the way out."]} status='success' duration={9000} isClosable={true}>
                    <Image src="https://images.pexels.com/photos/2053815/pexels-photo-2053815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="found it" scale="0.5">
                    </Image>
                  </SmartToastButton>
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
                <Text color="gray.600">
                  It's from an earlier evolutionary era, before linear algebra had fully evolved.
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
