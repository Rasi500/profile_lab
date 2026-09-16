import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mark!";
const bio1 = "A full-stack developer";
const bio2 = "specializing in building web applications with React and Node.js.";

const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
        minH="100vh"
    >
        <VStack>
            <Avatar.Root size="lg">
                <Avatar.Image
  src={`${process.env.PUBLIC_URL}/avatar.png`}
  alt="Profile avatar"
/>
                <Avatar.Fallback name="Mark" />
            </Avatar.Root>
            <Heading as="h1">
                {greeting}
            </Heading>

            <Heading as="h2" size="xl">
                {bio1}
            </Heading>

            <Heading as="h2" size="xl">
                {bio2}
            </Heading>        </VStack>
    </FullScreenSection>
);

export default LandingSection;