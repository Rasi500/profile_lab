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
            width="100%"
            backgroundColor="#18181b"
            padding="1rem"
            position="sticky"
            top="0"
            zIndex="1000"
        >
            <HStack
                width="100%"
                maxWidth="1280px"
                margin="0 auto"
                justifyContent="space-between"
                alignItems="center"
            >
                {/* Mark + Social icons - LEFT */}
                <HStack gap={{ base: 3, md: 5 }}>
                    <Link
                        href="#home"
                        color="white"
                        fontSize={{ base: "1.3rem", md: "1.5rem" }}
                        fontWeight="bold"
                        textDecoration="none"
                        onClick={(event) => {
                            event.preventDefault();
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        Mark
                    </Link>

                    {socials.map((social) => (
                        <Link
                            key={social.url}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="white"
                            fontSize={{ base: "1rem", md: "1.3rem" }}
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </Link>
                    ))}
                </HStack>

                {/* Navigation - RIGHT */}
                <HStack gap={{ base: 3, md: 6 }}>
                    <Link
                        href="#projects-section"
                        color="white"
                        fontSize={{ base: "0.75rem", md: "1rem" }}
                    >
                        Projects
                    </Link>

                    <Link
                        href="#contactme-section"
                        color="white"
                        fontSize={{ base: "0.75rem", md: "1rem" }}
                    >
                        Contact Me
                    </Link>
                </HStack>
            </HStack>
        </Box>
    );
};

export default Header;