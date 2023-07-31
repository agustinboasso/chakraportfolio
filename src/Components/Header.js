import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hola!, <br/>soy</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Agustin Boasso</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Desarrollador Fullstack de la ciudad de Córdoba, Argentina.
              🗣</Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://pawan.live")
                    }>Contáctame</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://media.licdn.com/dms/image/D4D03AQEO8Bj8Ae5HDQ/profile-displayphoto-shrink_800_800/0/1670810727142?e=1696464000&v=beta&t=pw-Pzk4RIN0ytVE9fol-Jf9eYUgTx-CDAZKsT6mkEzM' />
            </Flex>

        </Stack>
    )
}

export default Header
