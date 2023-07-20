import React from 'react'
import videoBg from './tesla.mp4';
import { Link } from "react-router-dom";
import './video.css';

import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import Typewriter from './Typewriter'; // Adjust the import path as per your folder structure.


  const texts = ['Welcome to the world of Electric Cars...','Click here to kick start your electric adventure'];

  const interval = 150; // Adjust the interval (in milliseconds) to control typing speed.


const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <Link to="/carlist">
          <div className="content">

            <ChakraProvider>
              <Box p={8}>
                <Heading className='text-border' mb={4}> <Typewriter texts={texts} interval={interval} /></Heading>
              </Box>
            </ChakraProvider>

        </div>
        </Link>

    </div>
  )
}

export default Main
