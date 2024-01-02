import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text, IconButton, HStack } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons'; // Importamos el ícono de descarga
import './Header.css'

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  const emailAddress = 'boassoagustin@gmail.com';

  const handleDownloadCV = () => {
    window.open(
      'https://www.mediafire.com/file/pa04r4sb8mdk4ul/CV_AGUSTIN_BOASSO_FULL_STACK_DEV.pdf/file',
      '_blank'
    );
  };

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        spacing="200px"
        p={isNotSmallerScreen ? '32' : '0'}
        alignSelf="flex-start"
      >
        <Box
          mt={isNotSmallerScreen ? '0' : 16}
          align="flex-start"
          mr={isNotSmallerScreen ? '1rem' : '5rem'}
        >
          <Text fontSize="5xl" fontWeight="semibold">
            Hola! Soy
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            className="rotate-diagonal-1"
          >
            Agustin <br />Boasso
          </Text>
          <Text color={isDark ? 'gray.200' : 'gray.500'}>
            Desarrollador Fullstack <br /> Córdoba, Argentina. 🗣
          </Text>
          <HStack mt={8} spacing={4}>
        <Box>
          <IconButton
            colorScheme="blue"
            icon={<span>Contactame  </span>}
            onClick={() => (window.location.href = `mailto:${emailAddress}`)}
          />
        </Box>
        <Box>
          <IconButton
            colorScheme="blue"
            leftIcon={<span>Descargar CV</span> }
            onClick={handleDownloadCV}
          >
            Descargar CV
          </IconButton>
        </Box>
      </HStack>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? '0' : '12'}
          mb={isNotSmallerScreen ? '0' : '12'}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://media.licdn.com/dms/image/D4D35AQHsQ_NGptbP1A/profile-framedphoto-shrink_200_200/0/1704223563795?e=1704844800&v=beta&t=NtfTUe5bSSZ9q43tTzEg2y765JViXK61viwOWMi_xJE"
        />
      </Flex>
    </Stack>
  );
}

export default Header;