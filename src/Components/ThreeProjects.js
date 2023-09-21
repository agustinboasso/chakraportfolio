
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Box, Center, VStack, Heading, Divider, Text, Image, Link, SimpleGrid, useColorModeValue, Icon, HStack, Grid } from '@chakra-ui/react';
import  fox from '../assets/images/three/fox.png'
import galaxyGenerator from '../assets/images/three/galaxyGenerator.png'
import hauntedHouse from '../assets/images/three/hauntedHouse.png'
import portfolio3d from '../assets/images/three/porfolio3d.png'


function ThreeProjects() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";

  
  const projectsData = [
    {
      id: 6,
      name: 'Generador de Galaxias - Three JS',
      description: 'Generador de galaxias que forma parte de la currícula del curso del francés Bruno Simon.',
      imageSrc: galaxyGenerator,
      deployLink:'https://galaxygeneratoragustinboasso.netlify.app/' ,
      repoLink:'https://github.com/agustinboasso/galaxyGenerator' ,
    },
    {
      id: 1,
      name: 'Animaciones - Three JS',
      description: 'Animando modelos importados en Three JS. Currícula del curso del francés Bruno Simon',
      imageSrc: fox  , 
      deployLink: 'https://animationsagustinboasso.netlify.app',
      repoLink: 'https://github.com/agustinboasso/animations',
    },
    {
      id: 2,
      name: 'Casa Embrujada - Three JS',
      description: 'Casa Embrujada que forma parte de la currícula del curso del francés Bruno Simon. ',
      imageSrc: hauntedHouse, 
      deployLink: 'https://hauntedhouseagustinboasso.netlify.app',
      repoLink: 'https://github.com/agustinboasso/mansionEmbrujada-three',
    },
    {
        id: 3,
        name: 'Plantilla Portfolio - Three JS',
        description: 'Plantilla portfolio con efecto parallax y animaciones. Parte del curso Three Js Journey de Bruno Simon',
        imageSrc: portfolio3d, 
        deployLink: 'https://plantillaportfolio3dagustinboasso.netlify.app',
        repoLink: 'https://github.com/agustinboasso/plantillaPortfolio3d',
      },
      // {
      //   id: 4,
      //   name: 'Proyecto Integrador bootcamp Henry',
      //   description: 'Pryecto integrador del bootcamp Henry. Consiste en consumir API de Rick and Morty y realizar diferentes acciones. Tecnologías: React JS, CSS, Redux, Express, Node JS',
      //   imageSrc: pokereact, 
      //   deployLink: 'https://agustin-boassso-react-js-proyecto-final.vercel.app/',
      //   repoLink: 'https://github.com/agustinboasso/agustinBoasssoReactJSProyectoFinal',
      // },
      // {
      //   id: 5,
      //   name: 'Naga Collectivo',
      //   description: 'Colaboración en Naga Colllectivo. Creacíon de nuevos perfiles, links, etc. Tecnologías: Wordpress, WooCommerce, Elementor',
      //   imageSrc: naga, 
      //   deployLink: 'https://nagacollectivo.com/',
      //   repoLink: 'https://nagacollectivo.com/',
      // },
      // {
      //   id: 6,
      //   name: 'Desarrollo de Plugin para Figma',
      //   description: 'Automatización de JSON desde Figma para colaboración eficiente. Tecnologías avanzadas, rendimiento optimizado y enfoque en innovación.',
      //   imageSrc: aythenPlugin,
      //   deployLink: 'https://github.com/agustinboasso/aythen-figma-plugin',
      //   repoLink: 'https://github.com/agustinboasso/aythen-figma-plugin',
      // },
      
    
  ];

  return (
    <Box maxW="800px" w="100%" >
      <Divider borderColor={dividerColor} mt="4" mb="4" maxW="50%" mx="auto" />
      <Center py="8">
        <VStack spacing="4">
          <Heading as="h2" size="xl" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            Proyectos Three JS - React-Three-Fiber
          </Heading>
          <Text textAlign="center" mb="8">
            Aquí verás los proyectos que he realizado con la libreria ThreeJS:
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

export default ThreeProjects;