import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
        title: "React Space",
        description:
            "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware",
        getImageSrc: () => require("../images/photo1.jpg"),
    },
    {
        title: "Infinite Website development",
        description:
            "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land",
        getImageSrc: () => require("../images/photo2.jpg"),
    },
    {
        title: "Photo Gallery",
        description:
            "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
        getImageSrc: () => require("../images/photo30.png"),
    },
    {
        title: "Event planner",
        description:
            "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        getImageSrc: () => require("../images/photo40.png"),
    },
];

const ProjectsSection = () => {
    return (
        <FullScreenSection
            backgroundColor="#14532d"
            isDarkBackground
            p={{ base: 4, md: 8 }}
            alignItems="flex-start"
            spacing={8}
        >
     <Heading
    as="h1"
    id="projects-section"
    alignSelf="flex-start"
    scrollMarginTop="100px"
>
    Featured Projects
</Heading>

            <Box
                display="grid"
                gridTemplateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
                gap={8}
                width="100%"
            >
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
};

export default ProjectsSection;