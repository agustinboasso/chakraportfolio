import { Box, VStack, HStack, Heading, Divider, Text, useColorModeValue, Center, Icon } from '@chakra-ui/react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    type: 'work',
    title: 'Data Integration Developer',
    company: 'AYI Group – Cliente Arcor',
    period: 'Ago 2024 – Actualidad',
    description: 'Desarrollo y mantenimiento de integraciones en Talend OS 7.3.1 y Talend 8, con despliegues automatizados (ArgoCD, Rancher) y conexión a Oracle y JDE.',
  },
  {
    type: 'work',
    title: 'Fullstack Developer | Líder técnico',
    company: 'Tecytal Sistemas – Uruguay',
    period: 'Ene 2024 – Actualidad',
    description: 'Liderazgo de células, desarrollo de CRM para bots de WhatsApp, backend en Node.js y despliegues en GCP (Cloud Run / App Engine).',
  },
  {
    type: 'work',
    title: 'Three.js & Fullstack Developer',
    company: 'Aythen – España',
    period: 'Ago 2023 – Ene 2024',
    description: 'Desarrollo de editor 3D interactivo con React Three Fiber. Colaboración en backend con PostgreSQL y arquitectura de microservicios.',
  },
  {
    type: 'education',
    title: 'Bootcamp Fullstack Developer',
    company: 'Henry (virtual)',
    period: 'Abr – Jul 2023',
  },
  {
    type: 'education',
    title: 'Curso de React JS',
    company: 'Coderhouse (virtual)',
    period: 'Jul 2022 – Feb 2023',
  },
  {
    type: 'education',
    title: 'Carrera de Simulaciones y Videojuegos',
    company: 'IES 21, Córdoba',
    period: '2010 – 2012',
  },
];

const CareerTimeline = () => {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = 'linear(to-r, cyan.400, blue.500, purple.600)';

  return (
    <Center py="8">
      <Box maxW="800px" w="100%">
        <Divider borderColor={dividerColor} mb="4" maxW="50%" mx="auto" />
        <VStack spacing="6">
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb="4"
            bgGradient={sectionTitleGradient}
            bgClip="text"
            textTransform="uppercase"
          >
            Timeline Profesional
          </Heading>

          <VStack spacing={6} align="stretch">
            {experiences.map((exp, index) => (
              <HStack key={index} align="start">
                <Icon
                  as={exp.type === 'work' ? FaBriefcase : FaGraduationCap}
                  boxSize={6}
                  color={exp.type === 'work' ? 'blue.500' : 'purple.500'}
                />
                <Box>
                  <Text fontWeight="bold">{exp.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {exp.company} — {exp.period}
                  </Text>
                  {exp.description && (
                    <Text mt={1} fontSize="sm">
                      {exp.description}
                    </Text>
                  )}
                </Box>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default CareerTimeline;
