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
    id={boxProps.id}
    width="100%"
    backgroundColor={boxProps.backgroundColor}
    color={isDarkBackground ? "white" : "black"}
    gap={0}
>
        {children}
    </VStack>
</VStack>
    );
};

export default FullScreenSection;