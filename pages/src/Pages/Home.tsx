import { Text, CardBody, Flex, Avatar, UnorderedList, ListItem } from '@chakra-ui/react';
import pictureOfMe from '../media/itsapictureofme.jpg';
import neuronInteresting from '../media/interesting_neuron.png';
import { FlexCard } from '../Components/UI/FlexCard';
import { Accardion } from '../Components/UI/Accardion';
import { CardImage } from '../Components/UI/CardImage';
import { SmartLink } from '../Components/UI/SmartLink';
import { SimplerCardHeader } from '../Components/UI/SimplerCardHeader';
import { CardStacker } from '../Components/UI/CardStacker';

export function Home(props: any) {
    return <CardStacker style={{paddingLeft: 'calc(100vw - 100%)'}}>
        {/* Lets try to get filterable tags on these, would be cool */}
        <FlexCard tiltEnable={true}> 
            <SimplerCardHeader years="1998-∞">
                Sara Rambjør
            </SimplerCardHeader>
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
        <Accardion years='2017-2022' tags={['Comp-Sci', 'General Software Engineering', 'AI', 'Python for Data-Science']} title="Education" shortText="Sara completed a master's degree at the Norwegian University of Science and Technology, where she completed courses in a large variety of topics before specializing in Aritifical Intelligence">
            <Text>Notable projects:</Text>
            <UnorderedList>
                <ListItem>Implementing backpropagation gradient descent using Numpy</ListItem>
                <ListItem>Implementing backpropagation gradient descent for recurrent neural networks using Numpy</ListItem>
                <ListItem>Implementing and training reinforcement learning agent based on class material using Tensorflow</ListItem>
                <ListItem>Implementing and training a GAN for MNIST-FASHION and using adversarial training with autoencoders in Tensorflow</ListItem>
            </UnorderedList>
            <Text>Otherwise classes covered typical software engineering, with topics like: Object oriented programming, functional programming, databases, operating systems, computer hardware and lower level languages, </Text>
        </Accardion>
        <Accardion years='2022-now' tags={['ASP.NET', 'Angular', 'PostgreSQL', 'Architecture & Solution Design', 'Tender Writing']} title="Work at Netcompany" shortText="I began working at Netcompany in June 2022 as a software development consultant">
            <UnorderedList>
                    <ListItem>Fullstack development of ASP.NET + PostgreSQL + Angular web application</ListItem>
                    <ListItem>Working within a team: Techincal and functional code review, collaboration, improving project documentation</ListItem>
                    <ListItem>Arranging and holding sprint meetings, such as sprint reviews, retrospectives, and planning meetings</ListItem>
                    <ListItem>Assisting PM with project planning in the form of ticket/work package breakdown + estimation</ListItem>
                    <ListItem>Working closely with customers to agree on new features - both in terms of UI/UX + functionality and integration design</ListItem>
                    <ListItem>Tender writing with focus on functional and technical design</ListItem>
                </UnorderedList>
        </Accardion>
        <Accardion years='2021' tags={['AI', 'Python', 'Object Detection', 'Segmentation']} title="Summer internship: ML research at DNV-GL" shortText='Investigating how to evaluate machine vision in maritime environments.'>
            <Text>I worked in the Group Research & Development at DNV-GL for three months during the summer of 2021. Me and another student worked on finding methods for evaulating object detection and segmentation models in the maritime environment. The goal was essentially to see which ideas we could come up with, and for us to investigate those ideas. Work included:</Text>
            <UnorderedList>
                <ListItem>Refactoring and continuing development on an internal evaluation tool based on PyQt.</ListItem>
                <ListItem>Writing a scientific report detailing the domain and suggesting evaluation approaches along with experimental results, for example image clustering based on latent-space representations in a vision model.</ListItem>
            </UnorderedList>
        </Accardion>
        <Accardion years='2021-2022' tags={['AI', 'Genetic Programming', 'Python']} title="Master's Thesis" shortText="I used CGP to evolve Artificial Neurons to solve the One-Pole Balancing problem as well as a simple classification task">
            <Text>I wrote my master's thesis about Artificial Intelligence, where I investigated neuroevolution of artificial neurons.
                I implemented Cartesian Genetic Programming and used it to evolve controllers for an artificial neuron robot by evolving implementations of pre-defined functions.
                I tested this method against the One-Pole Balancing Problem, and found that it could evolve artificial neurons which performed well on the one-pole balancing problem, as well as the simple IRIS Flower Classification problem.
            </Text>
            <br></br>
            <CardImage srcImage={neuronInteresting} alt="Potentially interesting neural network" caption="I created a visualization tool, which made it possible to explore the neural structure in 3D. The above is a network I identified as a possibly interesting structure - namely, one with a neural structure, but not so large that it wouldn't be able to send network signals in alloted simulation steps.">
            </CardImage>
            <br></br>
            <SmartLink href="https://hdl.handle.net/11250/3028506" text="My Master's Thesis is available online">

            </SmartLink>
        </Accardion>
        <FlexCard>
            <SimplerCardHeader years='2023' tags={['React', 'ChakraUI', 'framer-motion']}>
                    This Website
            </SimplerCardHeader>
            <CardBody>
                <Text>Made with React and ChakraUI</Text>
                <SmartLink href="https://sararambjoer.github.io/Pages/" text="This website is available online"></SmartLink>
            </CardBody>
        </FlexCard>
        <Accardion years='2020-2021' tags={['GOFAI', 'Research', 'Education', 'Video Production']} title='NTNU: Several part-time jobs' shortText='Helping produce course material during transition to Covid-19 and assisting with research'>
            <Text>
                During this period I worked three jobs focused on respectively: Producing course material for a GOFAI symbolic AI course in close collaboration with the professor for the crucial transition to Covid-19, helping lead the other teacher's aides during the course year, and then doing some research with the professor.
            </Text>
            <Text>In summary:</Text>
            <UnorderedList>
                <ListItem>Producing written exercises and video-lectures</ListItem>
                <ListItem>Assisting students and leading teacher's aides</ListItem>
                <ListItem>Reading research papers and drafting a scientific paper focused on Ethical-AI</ListItem>
            </UnorderedList>
        </Accardion>
        <Accardion years='2019' tags={['Flutter', 'Android']} title="Flutter dice rolling app" shortText="Supported storage and advanced rolls">
            <Text>I made a simple Flutter dice rolling app. It allowed to create dice rolls for tabletop RPGs. It had feature such as storing rolls in a database locally as well as advanced features like expanding dice and a "graphical dice roll syntax" with a simple parser allowing it do more advanced operations than simple rolls. Unfortunately I don't have much content related to this app anymore.</Text>
        </Accardion>
        <Accardion years='2020' tags={['C#', 'Unity', 'Shader Programming']} title="3D-building prototype" shortText="A 3D building game made in Unity">
            <Text>I always thought that building larger things in games like Minecraft were a bit cumbersome, where you typically need to be close to what you are placing, which may require building temporary platforms and such, so I wanted to see if I could think of other ways of implementing something. The prototype uses raycasting for placing, as well as being able to place blocks separately from your own position, rescaling, and a shader to "look through" things which are in the way.</Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3LY7UFViNgQ?si=4LT4DAXc3IPyDgyo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <SmartLink href="https://sararam.itch.io/builditquick" text="The game is available online"></SmartLink>
        </Accardion>
        <Accardion years='2018' tags={['C#', 'Unity']} title="Sling: A 'Destroy the Castle'-like" shortText="A Unity game where you throw cannonballs at a structure to destroy the inhabitants.">
            <Text>The game is similar to games like "Destroy the Castle", except that the mechanic for firing cannonballs is based on accelerating the projectile towards the mouse, making it move like a 'Sling'</Text>
            <CardImage srcImage="https://img.itch.zone/aW1hZ2UvMzQ5NTcwLzE3Mzc0ODIucG5n/original/YOj7lF.png" alt="Image showing the game" caption="A screenshot from the game."></CardImage>
            <Text>This is the second game I made in unity. Unlike the first, it is in 3D, and has sounds. Although it uses the 3D engine, it is mainly 2D, except for using 3D for collision effects. That also means that there may be some wonky physics bugs at times.</Text>
            <SmartLink href="https://sararam.itch.io/slings" text="The game is available online"></SmartLink> 
        </Accardion>
        <Accardion years="2018" tags={['C#', 'Unity']} title="Hyperspace Hovercraft: First game" shortText="This was the first game I made in Unity.">
            <Text>The game is very simple, inspired by Flappy Bird and Space Invaders, where sprite "blocks" keep trying to push the players ship to the bottom of the screen, and the player has a limited ability to dodge to the right and the left. The game was made very simply using sprites which move and spawn, and a slightly wonky mobile port was on Android for a while but I think it is gone now.</Text>
            <CardImage srcImage="https://img.itch.zone/aW1hZ2UvMzEwNTI0LzE1MjY0MzIucG5n/original/vCzTo2.png" alt="Image from the game" caption="A screenshot from the game."></CardImage>
            <SmartLink href="https://sararam.itch.io/hyperspace-hovercraft" text="The game is available online"></SmartLink>
        </Accardion>
        {/* Other possible cards
        <FlexCard>
            <SimplerCardHeader>Patterner</SimplerCardHeader>
            <CardBody><Text>This is a test</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>Neural Network Experiment</SimplerCardHeader>
            <CardBody><Text>Hard coded neural network which tries to "interpolate" between different images by learning to reproduce them from a simple number based index - effectively just opacity blending</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>Special note to projects in the deep learning class</SimplerCardHeader>
            <CardBody><Text>Hard coded neural network which tries to "interpolate" between different images by learning to reproduce them from a simple number based index - effectively just opacity blending</Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>Image-Carry-Over - Image corruption through echo state reservoir</SimplerCardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>Videos from old youtube channel</SimplerCardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>Those two videos i made for tiktok with the thing</SimplerCardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <CardHeader>Square picture format</CardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>Tidal cycles loops</SimplerCardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>See if you can't dig up the old website</SimplerCardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>See if you can't dig up the old old java game</SimplerCardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        <FlexCard>
            <SimplerCardHeader>Have a look around your PCs and see what you can find</SimplerCardHeader>
            <CardBody><Text></Text></CardBody>
        </FlexCard>
        */}
    </CardStacker>
}
