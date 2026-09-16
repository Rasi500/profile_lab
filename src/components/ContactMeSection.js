import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    Field,
    Heading,
    Input,
    NativeSelect,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "hireMe",
            comment: "",
        },

        onSubmit: (values) => {
            submit(values);
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("Required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),

            type: Yup.string()
                .required("Required"),

            comment: Yup.string()
                .required("Required"),
        }),
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
        }
    }, [response, onOpen]);

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack
                w="100%"
                maxW="1024px"
                p={{ base: 4, md: 8 }}
                alignItems="flex-start"
            >
                <Heading as="h1" id="contactme-section">
                    Contact me
                </Heading>

                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack gap={4}>

                            {/* Name */}
                            <Field.Root
                                invalid={
                                    formik.touched.firstName &&
                                    !!formik.errors.firstName
                                }
                            >
                                <Field.Label>
                                    Name
                                </Field.Label>

                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <Field.ErrorText>
                                    {formik.errors.firstName}
                                </Field.ErrorText>
                            </Field.Root>


                            {/* Email */}
                            <Field.Root
                                invalid={
                                    formik.touched.email &&
                                    !!formik.errors.email
                                }
                            >
                                <Field.Label>
                                    Email Address
                                </Field.Label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <Field.ErrorText>
                                    {formik.errors.email}
                                </Field.ErrorText>
                            </Field.Root>


                            {/* Type of enquiry */}
                            <Field.Root>
                                <Field.Label>
                                    Type of enquiry
                                </Field.Label>

                                <NativeSelect.Root>
                                    <NativeSelect.Field
                                        id="type"
                                        name="type"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="hireMe">
                                            Freelance project proposal
                                        </option>

                                        <option value="openSource">
                                            Open source consultancy session
                                        </option>

                                        <option value="other">
                                            Other
                                        </option>
                                    </NativeSelect.Field>

                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>


                            {/* Message */}
                            <Field.Root
                                invalid={
                                    formik.touched.comment &&
                                    !!formik.errors.comment
                                }
                            >
                                <Field.Label>
                                    Your message
                                </Field.Label>

                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={{ base: "180px", md: "250px" }}
                                    value={formik.values.comment}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                <Field.ErrorText>
                                    {formik.errors.comment}
                                </Field.ErrorText>
                            </Field.Root>


                            {/* Submit */}
                            <Button
                                type="submit"
                                width="full"
                                loading={isLoading}
                            >
                                Submit
                            </Button>

                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ContactMeSection;