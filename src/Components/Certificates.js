import React from 'react';
import { Box, Center, VStack, Heading, Divider, Text, Image, Link, SimpleGrid, useColorModeValue, Icon, HStack, Grid } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import EFenglish from '../assets/certificados/EFenglish.jpg'
import coder from '../assets/certificados/coder.jpg'
import Henry from '../assets/certificados/Henry.jpg'

function Certificates() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";

 
  const certificatesData = [
    {
      id: 1,
      name: 'Full Stack Web Developer - HENRY-',
      description: 'Full Stack Web Developer. Tecnologias utilizadas: JavaScript, React Js, NodeJS, Redux, SQL, Typescript, CSS, HTML',
      imageSrc: Henry, 
      link: 'https://certificates.soyhenry.com/new-cert?id=0b91515b888f062e851eb5a562dbb63e86d54fcb4a4b2',
    },
    {
      id: 2,
      name: 'Carrera Desarrollo Frontend- Coder House-',
      description: 'Carrera desarrollo frontend. Tecnologias utilizadas: JavaScript, React Js, Firebase, React boostrap, CSS, HTML',
      imageSrc: coder, 
      link: 'https://www.coderhouse.com/certificados/6402198c9b6439000e3c0ec9',
    },
    {
      id: 3,
      name: 'EFSET English Certificate 49/100 (B1 Intermediate)',
      description: 'EF International Language Centers',
      imageSrc: EFenglish, 
      link: 'https://www.efset.org/cert/hoPNfg',
    },
    {
      id: 4,
      name: 'Teaching Assistant - HENRY - ',
      description: 'Coordinación de estudiantes para su mejor adaptación en el transcurso del bootcamp.',
      imageSrc: 'imagen3.jpg', 
      link: 'https://link-certificado-3.com',
    },
    // {
    //   id: 4,
    //   name: 'Certificado 4',
    //   description: 'Breve descripción del Certificado 4.',
    //   imageSrc: 'imagen4.jpg', 
    //   link: 'https://link-certificado-4.com',
    // },
   
  ];

  return (
    <Box w="100%" >
      <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
      <Center py="8">
        <VStack spacing="4">
          <Heading as="h2" size="xl" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            Certificados
          </Heading>
          <Text textAlign="center" mb="8">
            Aquí verás los certificados que avalan mis conocimientos:
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



