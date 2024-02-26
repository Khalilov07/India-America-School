import { Box, Typography } from '@mui/material';
import React from 'react';

const SingleBlogPage = () => {
    return (
        <Box >
            <Box sx={{ background: "#1567F4" }} minHeight={"50vh"} width={"100%"}>
                <Box container width={'70%'} margin={'0 auto'} pt={10}>
                    <Typography variant='subtitle2' color={'#fff'} fontWeight={'bold'} textAlign='center'>
                        date
                    </Typography>
                    <Typography
                        variant='h3'
                        color={'#fff'}
                        fontWeight={'bold'}
                        textAlign='center' pb={5}
                        sx={{
                            '@media (max-width: 560px)': {
                                fontSize: '1.8rem',
                                lineHeight: 1.5 // Установите размер шрифта для экранов шириной меньше 600px
                            },


                        }}
                    >
                        Mastering Verification and Validation: A Comprehensive Guide for SDETs in Software Testing
                    </Typography>
                </Box>
            </Box>
            <Box
                container
                width={"50%"}
                margin='30px auto'
                sx={{
                    '@media (max-width: 850px)': {
                        width: '70%'
                    },
                    '@media (max-width: 600px)': {
                        width: '90%'
                    },
                }}
            >
                <Box mr={5} mb={3} width='100%'>
                    <Typography variant='h5' fontWeight={'bold'} textAlign='start' mb={2}>
                        Introduction
                    </Typography>
                    <Typography variant='subtitle1' letterSpacing={0.5} textAlign='start'>
                        In the dynamic world of software development, the role of a Software Development Engineer in Test (SDET) is crucial. Balancing between the realms of development and testing, SDETs are tasked with not just identifying bugs but ensuring the overall quality and functionality of software products. At the heart of this challenging yet rewarding profession lies a deep understanding of two fundamental concepts: Verification and Validation. Often used interchangeably, these processes are distinct in their purpose, execution, and impact on the product lifecycle. This blog aims to demystify these terms, offering clarity through practical examples and guiding SDETs in effectively applying these practices to ensure the delivery of high-quality software solutions.
                    </Typography>
                </Box>
                <Box mr={5} mb={3} width='100%'>
                    <Typography variant='h5' fontWeight={'bold'} textAlign='start' mb={2}>
                        Introduction
                    </Typography>
                    <Typography variant='subtitle1' letterSpacing={0.5} textAlign='start'>
                        In the dynamic world of software development, the role of a Software Development Engineer in Test (SDET) is crucial. Balancing between the realms of development and testing, SDETs are tasked with not just identifying bugs but ensuring the overall quality and functionality of software products. At the heart of this challenging yet rewarding profession lies a deep understanding of two fundamental concepts: Verification and Validation. Often used interchangeably, these processes are distinct in their purpose, execution, and impact on the product lifecycle. This blog aims to demystify these terms, offering clarity through practical examples and guiding SDETs in effectively applying these practices to ensure the delivery of high-quality software solutions.
                    </Typography>
                </Box>
                <Box mr={5} mb={3} width='100%'>
                    <Typography variant='h5' fontWeight={'bold'} textAlign='start' mb={2}>
                        Introduction
                    </Typography>
                    <Typography variant='subtitle1' letterSpacing={0.5} textAlign='start'>
                        In the dynamic world of software development, the role of a Software Development Engineer in Test (SDET) is crucial. Balancing between the realms of development and testing, SDETs are tasked with not just identifying bugs but ensuring the overall quality and functionality of software products. At the heart of this challenging yet rewarding profession lies a deep understanding of two fundamental concepts: Verification and Validation. Often used interchangeably, these processes are distinct in their purpose, execution, and impact on the product lifecycle. This blog aims to demystify these terms, offering clarity through practical examples and guiding SDETs in effectively applying these practices to ensure the delivery of high-quality software solutions.
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default SingleBlogPage;