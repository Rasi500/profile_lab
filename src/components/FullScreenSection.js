import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Reusable full-screen section component
 */
const FullScreenSection = ({
    
    children,
    isDarkBackground,
    ...boxProps
}) => {
    return (
        <VStack
    width="100%"
    backgroundColor={boxProps.backgroundColor}
    color={isDarkBackground ? "white" : "black"}
    gap={0}
>
    <VStack
        width="100%"
        maxWidth="1280px"
        boxSizing="border-box"
        px={{ base: 4, md: 8 }}
        py={{ base: 4, md: 8 }}
        gap={{ base: 4, md: 8 }}
        alignItems="center"
    >
        {children}
    </VStack>
</VStack>
    );
};

export default FullScreenSection;