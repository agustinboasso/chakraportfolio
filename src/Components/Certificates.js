import React from 'react';
import { Box, Center, VStack, Heading, Divider, Text, Image, Link, SimpleGrid, useColorModeValue, Icon, HStack, Grid } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Certificates() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";

 
  const certificatesData = [
    {
      id: 1,
      name: 'Certificado 1',
      description: 'Breve descripción del Certificado 1.',
      imageSrc: 'imagen1.jpg', 
      link: 'https://link-certificado-1.com',
    },
    {
      id: 2,
      name: 'Certificado 2',
      description: 'Breve descripción del Certificado 2.',
      imageSrc: 'imagen2.jpg', 
      link: 'https://link-certificado-2.com',
    },
    {
      id: 3,
      name: 'Certificado 3',
      description: 'Breve descripción del Certificado 3.',
      imageSrc: 'imagen3.jpg', 
      link: 'https://link-certificado-3.com',
    },
    {
      id: 4,
      name: 'Certificado 4',
      description: 'Breve descripción del Certificado 4.',
      imageSrc: 'imagen4.jpg', 
      link: 'https://link-certificado-4.com',
    },
   
  ];

  return (
    <Box w="100%" mb="8">
      <Center py="8">
        <VStack spacing="4">
          <Heading as="h2" size="md" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            Certificados
          </Heading>
          <Text textAlign="center" mb="8">
            Descripción de la sección de certificados. Puedes modificar este texto según tus necesidades.
          </Text>
        </VStack>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} maxW="1600px" w="100%" mx="auto" justifyContent="center">
        {certificatesData.map((certificate) => (
          <Box key={certificate.id} borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md" flex="1" maxW="400px" w="100%" minH="400px">
            <Image src={certificate.imageSrc} alt={certificate.name} h="200px" w="100%" objectFit="cover" />
            <Box p="6" h="100%">
              <Heading as="h3" size="md" mb="2">
                {certificate.name}
              </Heading>
              <Text mb="4">{certificate.description}</Text>
              <HStack spacing="4">
                <Link href={certificate.link} color="blue.500" isExternal>
                  <Icon as={FaExternalLinkAlt} mr="2" />
                  Ver certificado
                </Link>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <br />
      <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
    </Box>
  );
}

export default Certificates;



