import './App.css'; 
import { ChakraProvider, Heading, Box, Grid, GridItem, Card, CardHeader, CardBody, Flex, Text, Highlight, Avatar, Spacer} from '@chakra-ui/react'
import { FadeIn } from './FadeIn';
import theme from './theme';
import { SmartToastButton } from './SmartToast';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid templateColumns='repeat(12, 1fr)' templateRows='repeat(12, 1fr)' gap='6'>
          <GridItem rowSpan={4} colSpan={4} colStart={8} rowStart={4}>
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
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
