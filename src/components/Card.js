import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
    return (
        <VStack
            alignItems="flex-start"
            backgroundColor="white"
            color="black"
            borderRadius="md"
            overflow="hidden"
            spacing={0}
        >
            <Image
    src={imageSrc}
    alt={title}
    width="100%"
    height="260px"
    objectFit="cover"
/>
            

            <VStack
                alignItems="flex-start"
                padding={6}
                gap={3}
                width="100%"
            >
                <Heading as="h2" size="sm">
                    {title}
                </Heading>

                <Text>
                    {description}
                </Text>

                <HStack gap={2}>
                    <Text fontWeight="bold">
                        View project
                    </Text>

                    <FontAwesomeIcon icon={faArrowRight} />
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Card;