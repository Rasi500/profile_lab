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
    spacing={0}
>
    <VStack
        width="100%"
        maxWidth="1280px"
        px={8}
        py={8}
        spacing={8}
        {...boxProps}
    >
        {children}
    </VStack>
</VStack>
    );
};

export default FullScreenSection;