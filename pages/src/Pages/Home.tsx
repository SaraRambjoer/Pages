import React from 'react';
import { Text, Stack, Card, CardHeader, CardBody, Box, Flex, Center, Spacer, Heading, Avatar, UnorderedList, ListItem, SimpleGrid, Wrap, Image, Link } from '@chakra-ui/react';
import pictureOfMe from '../media/itsapictureofme.jpg';
import neuronInteresting from '../media/interesting_neuron.png';
import { FlexCard } from '../Components/UI/FlexCard';
import { Accardion } from '../Components/UI/Accardion';
import { CaptionText } from '../Components/UI/CaptionText';
import { CardImage } from '../Components/UI/CardImage';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { SmartLink } from '../Components/UI/SmartLink';
export function Home(props: any) {
    return <Box sx={{columnCount: [1, 1, 2, 3], columnGap: "6px", paddingTop: "1rem"}}>
        {/* Lets try to get filterable tags on these, would be cool */}
        <FlexCard> 
            <CardHeader>
                <Heading size='md'>
                    Sara Rambjør
                </Heading>
            </CardHeader>
            <CardBody>
                <Flex>
                    <UnorderedList>
                        <ListItem> Master's in Computer Science, specialized in AI at NTNU </ListItem>
                        <ListItem> 1+ year of industry experience with fullstack ASP.NET + Angular </ListItem>
                        <ListItem> Interest in computer science outside of work and education </ListItem>
                    </UnorderedList>
                    <Avatar size='2xl' src={pictureOfMe}>
                    </Avatar>
                </Flex>
            </CardBody>
        </FlexCard>
        <Accardion title="Education" shortText="Sara completed a master's degree at the Norwegian University of Science and Technology, where she completed courses in a large variety of topics before specializing in Aritifical Intelligence">
            <Text>Notable projects:</Text>
            <UnorderedList>
                <ListItem>Implementing backpropagation gradient descent using Numpy</ListItem>
                <ListItem>Implementing backpropagation gradient descent for recurrent neural networks using Numpy</ListItem>
                <ListItem>Implementing and training reinforcement learning agent based on class material using Tensorflow</ListItem>
                <ListItem>Implementing and training a GAN for MNIST-FASHION and using adversarial training with autoencoders in Tensorflow</ListItem>
            </UnorderedList>
        </Accardion>
        <Accardion title="Master's Thesis" shortText="Sara used CGP to evolve Artificial Neurons to solve the One-Pole Balancing problem as well as a simple classification task">
            <Text>Sara wrote her master's thesis in Artificial Intelligence, where she investigated neuroevolution of artificial neurons.
                She implemented Cartesian Genetic Programming and used it to evolve controllers for an artificial neuron robot by evolving implementations of pre-defined functions.
                She tested this method against the One-Pole Balancing Problem, and found that it could evolve artificial neurons which performed well on the one-pole balancing problem, as well as the simple IRIS Flower Classification problem.
            </Text>
            <br></br>
            <CardImage srcImage={neuronInteresting} alt="Potentially interesting neural network" caption="Sara created a visualization tool, which made it possible to explore the neural structure in 3D. The above is a network Sara identified as a possibly interesting structure - namely, one with a neural structure, but not so large that it wouldn't be able to send network signals in alloted simulation steps.">
            </CardImage>
            <br></br>
            <SmartLink href="https://hdl.handle.net/11250/3028506" text="Sara's Master's Thesis is available online">

            </SmartLink>
        </Accardion>
        <FlexCard>
            <CardHeader>Work at Netcompany</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>This Website</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Flutter app</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>First videogame</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Buffy the Vampire Slayer RPG Character creator</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Building game</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Destroy the castle-like</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Patterner</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Neural Network Experiment</CardHeader>
            <CardBody><Text>Hard coded neural network which tries to "interpolate" between different images by learning to reproduce them from a simple number based index - effectively just opacity blending</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Special note to projects in the deep learning class</CardHeader>
            <CardBody><Text>Hard coded neural network which tries to "interpolate" between different images by learning to reproduce them from a simple number based index - effectively just opacity blending</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Image-Carry-Over - Image corruption through echo state reservoir</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Videos from old youtube channel</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Those two videos i made for tiktok with the thing</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Square picture format</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Tidal cycles loops</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>See if you can't dig up the old website</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>See if you can't dig up the old old java game</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Have a look around your PCs and see what you can find</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
    </Box>
}