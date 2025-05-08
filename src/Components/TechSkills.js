import { Box, VStack, HStack, Heading, Divider, Tooltip, useColorModeValue, Text, Center } from '@chakra-ui/react';
import { FaReact, FaJs, FaHtml5, FaCss3, FaNode, FaDatabase, FaGitAlt, FaDocker, FaLinux, FaGithub, FaCloud, FaPython, FaJava } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiTalend, SiGooglecloud, SiTypescript, SiKubernetes, SiRedux, SiChakraui, SiSocketdotio, SiRabbitmq } from 'react-icons/si';

function TechStack() {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = 'linear(to-r, cyan.400, blue.500, purple.600)';

  const technologies = [
    { icon: FaNode, name: 'Node.js' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: SiRedux, name: 'Redux' },
    { icon: SiSocketdotio, name: 'Socket.IO' },
    { icon: FaDatabase, name: 'SQL' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiTalend, name: 'Talend' },
    { icon: SiRabbitmq, name: 'RabbitMQ' },
    { icon: FaDocker, name: 'Docker' },
    { icon: SiKubernetes, name: 'Kubernetes (Rancher)' },
    { icon: SiGooglecloud, name: 'Google Cloud Platform' },
    { icon: FaGithub, name: 'GitHub' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: FaJava, name: 'Java (básico)' },
    { icon: FaPython, name: 'Python (básico)' },
    { icon: SiChakraui, name: 'Chakra UI' },
    { icon: FaCloud, name: 'Cloud Run / App Engine' },
  ];

  return (
    <Center py="8">
      <Box maxW="800px" w="100%">
        <Divider borderColor={dividerColor} mb="4" maxW="50%" mx="auto" />
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
            Stack Tecnológico
          </Heading>
          <Text textAlign="center" mb="8" fontSize="lg" lineHeight="1.8">
            Tengo experiencia en el desarrollo de soluciones fullstack, con fuerte foco en integraciones, backend y despliegue en infraestructura Cloud.
            <br /><br />
            <b>Lenguajes y Frameworks:</b> JavaScript, TypeScript, Node.js, React, Redux, Express.js, Socket.IO.
            <br />
            También he trabajado en proyectos puntuales con Java y Python.
            <br />
            <b>Base de datos:</b> PostgreSQL, MongoDB, Oracle DB.
            <br />
            <b>ETL & Data Integration:</b> Talend OS 7.3.1 / Talend 8, JDE Edwards.
            <br />
            <b>Cloud & DevOps:</b> Docker, Kubernetes (Rancher), GCP (Cloud Run, App Engine), GitHub Actions, Argo Workflows/CD.
            <br />
            <b>UI & Diseño:</b> Chakra UI, Figma.
            <br />
            <b>Metodologías:</b> Scrum, Kanban.
          </Text>
        </VStack>

        <VStack spacing="8" alignItems="center">
          <HStack spacing={{ base: '8', md: '24' }} flexWrap="wrap" justifyContent="center">
            {technologies.map(({ icon: IconComponent, name }) => (
              <Tooltip key={name} label={name}>
                <Box as="button" _hover={{ transform: 'scale(1.1)' }}>
                  <IconComponent size={50} />
                </Box>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default TechStack;
