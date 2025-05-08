import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  Box,
  Center,
  VStack,
  Heading,
  Divider,
  Text,
  Image,
  Link,
  SimpleGrid,
  useColorModeValue,
  Icon,
  HStack,
  Grid,
} from '@chakra-ui/react';

import Editor3d from '../assets/images/Editor3d.jpg';
import naga from '../assets/images/naga.jpg'; // usar una imagen más adecuada si tenés

function Projects() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = 'linear(to-r, cyan.400, blue.500, purple.600)';

  const featuredProjects = [
    {
      id: 1,
      name: 'CRM de Control de Chatbots',
      description:
        'Desarrollo fullstack de una plataforma en tiempo real para gestionar bots de WhatsApp con operadores humanos. Arquitectura escalable, despliegue automatizado y control de infraestructura cloud.',
      imageSrc: naga,
      deployLink: 'https://tudominio.com', // si no hay link público, podés dejarlo vacío
      repoLink: '',
    },
    {
      id: 2,
      name: 'Sistema de Integración de Datos',
      description:
        'Construcción y mantenimiento de pipelines ETL con Talend Open Studio. Automatización de despliegues con ArgoCD, Rancher y Docker. Integración con Oracle DB y JDE.',
      imageSrc: naga,
      deployLink: '',
      repoLink: '',
    },
    {
      id: 4,
      name: 'Editor 3D interactivo – Aythen',
      description: 'Desarrollo frontend de un editor 3D en tiempo real con React Three Fiber y colaboración en backend con PostgreSQL. Aplicación de técnicas de visualización avanzada y coordinación de equipo técnico.',
      imageSrc: Editor3d,
      deployLink: 'https://web2.aythen.com/es',
      repoLink: 'https://github.com/agustinboasso/aythen3dEditor',
    }
  ];

  const otherProjects = [
    {
      name: 'Plugin Figma para generación automática de JSON',
      deployLink: '',
      repoLink: 'https://github.com/agustinboasso/aythen-figma-plugin',
    },
    {
      name: 'Sitio institucional – Naga Collectivo',
      deployLink: 'https://nagacollectivo.com/',
      repoLink: '',
    },
    {
      name: 'Portfolio personal',
      deployLink: 'https://portfolioagustinboasso.vercel.app/',
      repoLink: 'https://github.com/agustinboasso/chakraportfolio',
    },
  ];

  return (
    <Box maxW="800px" w="100%" mx="auto">
      <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
      <Center py="8">
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
            Proyectos
          </Heading>
          <Text textAlign="center" mb="8">
            Selección de los proyectos más relevantes que reflejan mi experiencia profesional actual.
          </Text>
        </VStack>
      </Center>

      {/* Proyectos destacados */}
      <Heading size="lg" mb={6}>
        Proyectos Destacados
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
        {featuredProjects.map((project) => (
          <Box
            key={project.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
          >
            <Image
              src={project.imageSrc}
              alt={project.name}
              h="200px"
              w="100%"
              objectFit="cover"
            />
            <Box p="6">
              <Heading as="h3" size="md" mb="2">
                {project.name}
              </Heading>
              <Text mb="4">{project.description}</Text>
              <HStack spacing="4">
                {project.deployLink && (
                  <Link href={project.deployLink} isExternal color="blue.500">
                    <Icon as={FaExternalLinkAlt} mr="2" />
                    Ver proyecto
                  </Link>
                )}
                {project.repoLink && (
                  <Link href={project.repoLink} isExternal color="blue.500">
                    <Icon as={FaGithub} mr="2" />
                    Repositorio
                  </Link>
                )}
              </HStack>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Otros proyectos */}
      <Heading size="md" mt={12} mb={4}>
        Otras colaboraciones
      </Heading>
      <VStack align="start" spacing={3}>
        {otherProjects.map((project, idx) => (
          <Box key={idx}>
            <Text fontWeight="semibold">{project.name}</Text>
            <HStack spacing={4}>
              {project.deployLink && (
                <Link href={project.deployLink} isExternal color="blue.500">
                  <Icon as={FaExternalLinkAlt} mr="1" />
                  Demo
                </Link>
              )}
              {project.repoLink && (
                <Link href={project.repoLink} isExternal color="blue.500">
                  <Icon as={FaGithub} mr="1" />
                  Repo
                </Link>
              )}
            </HStack>
          </Box>
        ))}
      </VStack>

      <br />
    </Box>
  );
}

export default Projects;
