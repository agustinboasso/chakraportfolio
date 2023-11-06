
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Box, Center, VStack, Heading, Divider, Text, Image, Link, SimpleGrid, useColorModeValue, Icon, HStack, Grid } from '@chakra-ui/react';
import henryfood from '../assets/images/henryfood.jpg'
import ProFinder from '../assets/images/ProFinder.jpg'
import aythenPlugin from '../assets/images/aythenPlugin.jpeg'
import portfolio from '../assets/images/portfolio.jpg'
import naga from '../assets/images/naga.jpg'
import Editor3d from '../assets/images/Editor3d.jpg'

function Projects() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";

  
  const projectsData = [
    {
      id: 6,
      name: 'Desarrollo de Plugin para Figma',
      description: 'Automatización de JSON desde Figma para colaboración eficiente. Tecnologías avanzadas, rendimiento optimizado y enfoque en innovación.',
      imageSrc: aythenPlugin,
      deployLink: 'https://github.com/agustinboasso/aythen-figma-plugin',
      repoLink: 'https://github.com/agustinboasso/aythen-figma-plugin',
    },
    {
      id: 1,
      name: 'ProFinder',
      description: 'Proyecto final bootcamp Henry- julio 2023 -',
      imageSrc: ProFinder  , 
      deployLink: 'https://profinder-client.vercel.app/',
      repoLink: 'https://github.com/agustinboasso/ProFinder-ProyectoFinalHenry-',
    },
    {
      id: 2,
      name: 'Henry Foods',
      description: 'Proyecto individual bootcamp Henry. Consumo de API spoonacular.',
      imageSrc: henryfood, 
      deployLink: 'https://henryfoodfrontend.vercel.app/',
      repoLink: 'https://github.com/agustinboasso/henryfoodfrontend',
    },
    {
        id: 3,
        name: 'Portfolio Agustin Boasso',
        description: 'Tecnologías: React JS, Chakra UI, vercel, Git, GitHub.',
        imageSrc: portfolio, 
        deployLink: 'https://portfolioagustinboasso.vercel.app/',
        repoLink: 'https://github.com/agustinboasso/chakraportfolio',
      },
      // {
      //   id: 4,
      //   name: 'Proyecto Integrador bootcamp Henry',
      //   description: 'Pryecto integrador del bootcamp Henry. Consiste en consumir API de Rick and Morty y realizar diferentes acciones. Tecnologías: React JS, CSS, Redux, Express, Node JS',
      //   imageSrc: pokereact, 
      //   deployLink: 'https://agustin-boassso-react-js-proyecto-final.vercel.app/',
      //   repoLink: 'https://github.com/agustinboasso/agustinBoasssoReactJSProyectoFinal',
      // },
      {
        id: 5,
        name: 'Naga Collectivo',
        description: 'Colaboración en Naga Colllectivo. Creacíon de nuevos perfiles, links, etc. Tecnologías: Wordpress, WooCommerce, Elementor',
        imageSrc: naga, 
        deployLink: 'https://nagacollectivo.com/',
        repoLink: 'https://nagacollectivo.com/',
      },
      {
        id: 6,
        name: 'Desarrollo Editor 3d web, Aythen Company',
        description: 'Desarrollo de un editor 3d web completamente funcional. Desarrollo de front y colaboración en backend.',
        imageSrc: Editor3d,
        deployLink: 'https://web2.aythen.com/es',
        repoLink: 'https://github.com/agustinboasso/aythen-figma-plugin',
      },
      
    
  ];

  return (
    <Box maxW="800px" w="100%" >
      <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
      <Center py="8">
        <VStack spacing="4">
          <Heading as="h2" size="xl" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            Proyectos
          </Heading>
          <Text textAlign="center" mb="8">
            Aquí verás los proyectos de mi autoría y algunas colaboraciones:
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
      <br/>
      
    </Box>
  );
}

export default Projects;