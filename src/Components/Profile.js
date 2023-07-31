import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { FaReact } from 'react-icons/fa';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">        
        <Flex align="center" justify="center" h="100px" >
        <Text fontSize="xl" fontWeight="bold">
          Agustin Boasso - 2023 - Todos los derechos reservados
        </Text>
      </Flex>
        </Flex>
    )
}

export default Profile
