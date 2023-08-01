import Icon from '@chakra-ui/icon';
import { Box, VStack, HStack, Heading, Divider, Tooltip, useColorModeValue, Text, Center } from '@chakra-ui/react';

const About = () => {

    const dividerColor = useColorModeValue('blue.900', 'gray.100');
    const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";
  return (
    <Center py="8">
      <Box maxW="800px" w="100%">
        <Divider borderColor={dividerColor} mb="4" maxW="50%" mx="auto" />
        <VStack spacing="4">
          <Heading as="h2" size="xl" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            SOBRE MI
          </Heading>
          <Text textAlign="center" mb="8">
            Soy Agustin Boasso,
            <br/>
            Músico, compositor y desarrolador Fullstack de la ciudad de Córdoba, Argentina.
            <br/> 
            Soy un apasionado de las tecnologías, por lo que la inquietud me lleva a incorporarlas constantmente.
            <br/>
           Gamer por naturaleza, haciendo de los desafíos logros desbloqueables!
           <br/>
           Tengo un lado artístico a flor de piel, por lo que la creatividad y la desestructuración son fieles acompañantes en mi cotideaneidad. 
          </Text>
        </VStack>
        
        
        
      </Box>
    </Center>
  )
}

export default About;