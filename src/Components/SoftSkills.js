import { Box, VStack, HStack, Heading, Divider, Tooltip, useColorModeValue, Center, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react';

function SoftSkills() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = 'linear(to-r, cyan.400, blue.500, purple.600)';

  const habilidadesBlandasDestacadas = [
    'Comunicación efectiva',
    'Trabajo en equipo',
    'Escucha activa',
    'Inteligencia emocional',
    'Autodidactismo',
    'Proactividad',
    'Resolución de problemas',
    'Adaptabilidad',
    'Creatividad',
    'Colaboración',
    'Liderazgo técnico',
  ];

  const mitad1 = habilidadesBlandasDestacadas.slice(0, Math.ceil(habilidadesBlandasDestacadas.length / 2));
  const mitad2 = habilidadesBlandasDestacadas.slice(Math.ceil(habilidadesBlandasDestacadas.length / 2));

  return (
    <Center py="8">
      <Box maxW="800px" w="100%">
        <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
        <VStack spacing="4">
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb="4"
            bgGradient={sectionTitleGradient}
            bgClip="text"
            textTransform="uppercase"
          >
            Habilidades Blandas
          </Heading>

          <Text textAlign="center" mb="8" fontSize="lg" lineHeight="1.8">
            A lo largo de mi experiencia profesional, he cultivado habilidades interpersonales que potencian tanto el trabajo colaborativo como el liderazgo técnico. 
            <br /><br />
            He liderado células de desarrollo, coordinando equipos multidisciplinarios para alcanzar objetivos técnicos dentro de entornos ágiles. 
            <br />
            Me destaco por la comunicación clara, la escucha activa y la empatía, cualidades que aplico para fomentar un entorno de trabajo saludable, productivo y alineado a los objetivos del equipo.
            <br />
            Además, soy proactivo, autodidacta y creativo, con una fuerte orientación al aprendizaje continuo y la mejora constante.
          </Text>

          <Text textAlign="center" fontWeight="bold">
            Habilidades destacadas:
          </Text>

          <HStack mt={4} spacing={8} justify="center" w="100%">
            <VStack alignItems="start" spacing={2} maxW="300px">
              {mitad1.map((habilidad) => (
                <HStack key={habilidad} w="100%">
                  <CheckCircleIcon color="green.500" boxSize={4} />
                  <Text>{habilidad}</Text>
                </HStack>
              ))}
            </VStack>
            <VStack alignItems="start" spacing={2} maxW="300px">
              {mitad2.map((habilidad) => (
                <HStack key={habilidad} w="100%">
                  <CheckCircleIcon color="green.500" boxSize={4} />
                  <Text>{habilidad}</Text>
                </HStack>
              ))}
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default SoftSkills;
