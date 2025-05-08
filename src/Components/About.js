import { Box, VStack, Heading, Divider, useColorModeValue, Text, Center } from '@chakra-ui/react';

const About = () => {
  const dividerColor = useColorModeValue('blue.900', 'gray.100');
  const sectionTitleGradient = 'linear(to-r, cyan.400, blue.500, purple.600)';

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
            Sobre mí
          </Heading>
          <Text textAlign="center" fontSize="lg" lineHeight="1.8">
            Soy Agustín Boasso, desarrollador Fullstack especializado en integración de datos, automatización de procesos y arquitectura Cloud. Actualmente trabajo creando soluciones escalables que conectan sistemas, manejan grandes volúmenes de información y permiten operaciones en tiempo real.
            <br /><br />
            Con experiencia en plataformas como Talend, GCP y Kubernetes, combino el desarrollo backend, la integración ETL y el control de infraestructura para resolver desafíos complejos con eficiencia y creatividad.
            <br /><br />
            Vengo de mundos creativos: la música, el arte y los videojuegos me formaron como alguien curioso, resolutivo y con mirada distinta. Disfruto construir productos útiles, explorar nuevas tecnologías y trabajar en equipo para desbloquear logros que dejen huella.
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};

export default About;
