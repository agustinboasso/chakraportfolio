import Icon from '@chakra-ui/icon';
import { Box, VStack, HStack, Heading, Divider, Tooltip, useColorModeValue, Text, Center } from '@chakra-ui/react';


import { FaReact, FaJs, FaHtml5, FaCss3, FaNode, FaDatabase, FaCode, FaFire, FaBootstrap, FaGithub, FaWordpress, FaElementor, FaPostgres, FaFigma } from 'react-icons/fa';

function Social() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');

  const technologies = [
    { icon: FaReact, name: 'React' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3, name: 'CSS3' },
    { icon: FaNode, name: 'Node.js' },
    { icon: FaCode, name: 'Redux' },
    { icon: FaDatabase, name: 'PostgreSQL' },
    { icon: FaFigma, name: 'Figma' },
    { icon: FaWordpress, name: 'WordPress' },
    { icon: FaElementor, name: 'Elementor' },
    { icon: FaBootstrap, name: 'Bootstrap' },
    { icon: FaGithub, name: 'GitHub' },
    { icon: FaFire, name: 'Firebase' },
  ];
  const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";
  
  return (
    <Center py="8">
      <Box maxW="800px" w="100%">
        <Divider borderColor={dividerColor} mb="4" maxW="50%" mx="auto" />
        <VStack spacing="4">
          <Heading as="h2" size="xl" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
            Tech Skills
          </Heading>
          <Text textAlign="center" mb="8">
            Dentro de los skills técnicos me encuentro con sólidos conocimientos en:
            HTML, CSS y JavaScript, React JS, Vue JS, Express JS, Redux, Redux Toolkit, Node.js, Firebase, Bootstrap, Chakra UI, NodeJS, SQL (PostgreSQL).
            <br/> 
            Control de versiones: Git, GitHub, gitflow. 
            WordPress (Con los plugins Elementor y WooCommerce), entre otras tecnologías.
            <br/>
            Metodologías ágiles: scrum y kanban.
          </Text>
        </VStack>
        <br/>
        <VStack spacing="8" alignItems="center">
          <HStack spacing={{ base: "8", md: "24" }} flexWrap="wrap">
            {technologies.map(({ icon: IconComponent, name }) => (
              <Tooltip key={name} label={name}>
                <Box as="button" _hover={{ transform: "scale(1.1)" }}>
                  <Icon as={IconComponent} boxSize="50" />
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
        
      </Box>
    </Center>
  );
}

export default Social;