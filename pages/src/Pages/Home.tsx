import React from 'react';
import { Text, Stack, Card, CardHeader, CardBody, Box, Flex, Center, Spacer, Heading, Avatar, UnorderedList, ListItem, SimpleGrid, Wrap } from '@chakra-ui/react';
import pictureOfMe from '../media/itsapictureofme.jpg';
import { FlexCard } from '../Components/UI/FlexCard';
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
                        <br></br>
                        <ListItem> 1+ year of industry experience with fullstack ASP.NET + Angular </ListItem>
                        <br></br>
                        <ListItem> Interest in computer science outside of work and education </ListItem>
                    </UnorderedList>
                    <Avatar size='2xl' src={pictureOfMe}>
                    </Avatar>
                </Flex>
            </CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Education</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Masters Thesis</CardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
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