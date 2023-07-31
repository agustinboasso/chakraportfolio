import Icon from '@chakra-ui/icon';
import { Box, VStack, HStack, Heading, Divider, Tooltip, useColorModeValue, Center, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react';

function Social() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";

  // Array de habilidades blandas destacadas
  const habilidadesBlandasDestacadas = [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Escucha activa",
    "Empatía",
    "Proactividad",
    "Creatividad",
    "Autodidactismo",
    "Aprendizaje ágil",
    "Colaboración",
    "Inteligencia emocional",
    "Sentido de pertenencia",
  ];

  // Dividir el array de habilidades blandas en dos mitades
  const mitad1 = habilidadesBlandasDestacadas.slice(0, Math.ceil(habilidadesBlandasDestacadas.length / 2));
  const mitad2 = habilidadesBlandasDestacadas.slice(Math.ceil(habilidadesBlandasDestacadas.length / 2));

  return (
    <Center py="8">
      <Box maxW="800px" w="100%">
        <VStack spacing="4">
          <Heading as="h2" size="md" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            Habilidades Blandas
          </Heading>
          <Text textAlign="center" mb="8">
            Soy una persona de muchas habilidades blandas. La comunicación efectiva y el buen trato con mis pares son una impronta que llevo como objetivo diario. Constantemente fomento el trabajo en equipo y planteo dinámicas que llevan a buenos resultados en el tiempo esperado, logrando un sentido de pertenencia en las personas. Mi escucha activa me permite ser asertivo en el trabajo. Soy empático, proactivo, creativo, artista, autodidacta, aprendo rápido y me gusta colaborar, entre muchas otras cualidades.
          </Text>
          <Text textAlign="center" mb="8">
            Poseo un gran sentido de pertenencia y pertinencia, que junto con mi inteligencia emocional logran generar un buen clima y una comunicación efectiva.
          </Text>
          <Text textAlign="center" mb="8">
            Estoy familiarizado con metodologías ágiles y scrum.
          </Text>
          <Text textAlign="center" fontWeight="bold">
            Habilidades destacadas:
          </Text>
          <HStack mt={4} spacing={8} justify="center" w="100%">
            <VStack alignItems="start" spacing={2} maxW="300px">
              {mitad1.map((habilidad) => (
                <HStack key={habilidad} w="100%">
                  <Icon as={CheckCircleIcon} color="green.500" boxSize={4} />
                  <Text>{habilidad}</Text>
                </HStack>
              ))}
            </VStack>
            <VStack alignItems="start" spacing={2} maxW="300px">
              {mitad2.map((habilidad) => (
                <HStack key={habilidad} w="100%">
                  <Icon as={CheckCircleIcon} color="green.500" boxSize={4} />
                  <Text>{habilidad}</Text>
                </HStack>
              ))}
            </VStack>
          </HStack>
        </VStack>
        <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
      </Box>
    </Center>
  );
}

export default Social;
