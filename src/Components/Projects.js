import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Box, Center, VStack, Heading, Divider, Text, Image, Link, SimpleGrid, useColorModeValue, Icon, HStack, Grid } from '@chakra-ui/react';

function Projects() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";

  // Información de los proyectos
  const projectsData = [
    {
      id: 1,
      name: 'Proyecto 1',
      description: 'Breve descripción del Proyecto 1.',
      imageSrc: 'imagen1.jpg', // Ruta de la imagen del proyecto
      deployLink: 'https://link-deploy-proyecto-1.com',
      repoLink: 'https://link-repositorio-proyecto-1.com',
    },
    {
      id: 2,
      name: 'Proyecto 2',
      description: 'Breve descripción del Proyecto 2.',
      imageSrc: 'imagen2.jpg', // Ruta de la imagen del proyecto
      deployLink: 'https://link-deploy-proyecto-2.com',
      repoLink: 'https://link-repositorio-proyecto-2.com',
    },
    // Agregar más proyectos aquí
  ];

  return (
    <Box maxW="800px" w="100%" mb="8">
      <Center py="8">
        <VStack spacing="4">
          <Heading as="h2" size="md" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            Proyectos
          </Heading>
          <Text textAlign="center" mb="8">
            Descripción de la sección de proyectos. Puedes modificar este texto según tus necesidades.
          </Text>
        </VStack>
      </Center>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} maxW="800px" w="100%" justifyContent="center">
        {projectsData.map((project) => (
          <Box key={project.id} borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md" flex="1" maxH="400px">
            <Image src={project.imageSrc} alt={project.name} h="200px" w="100%" objectFit="cover" />
            <Box p="6">
              <Heading as="h3" size="md" mb="2">
                {project.name}
              </Heading>
              <Text mb="4">{project.description}</Text>
              <HStack spacing="4">
                <Link href={project.deployLink} color="blue.500" isExternal>
                  <Icon as={FaExternalLinkAlt} mr="2" />
                  Ver deploy del proyecto
                </Link>
                <Link href={project.repoLink} color="blue.500" isExternal>
                  <Icon as={FaGithub} mr="2" />
                  Ver repositorio
                </Link>
              </HStack>
            </Box>
          </Box>
        ))}
      </Grid>
      <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
    </Box>
  );
}

export default Projects;