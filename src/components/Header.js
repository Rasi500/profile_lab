import React from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto:hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const Header = () => {
    return (
        <Box
            position="relative"
            width="100%"
            backgroundColor="#18181b"
            padding="1rem"
        >
            <HStack
                maxWidth="1280px"
                margin="0 auto"
                justifyContent="space-between"
                alignItems="center"
            >
                {/* Name */}
                <Link
                    href="#"
                    color="white"
                    fontSize="1.5rem"
                    fontWeight="bold"
                    textDecoration="none"
                >
                    Pete
                </Link>

                {/* Social icons */}
                <HStack gap={5}>
                    {socials.map((social) => (
                        <Link
                            key={social.url}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="white"
                            fontSize="1.3rem"
                            _hover={{
                                color: "gray.300",
                            }}
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </Link>
                    ))}
                </HStack>
            </HStack>
        </Box>
    );
};

export default Header;