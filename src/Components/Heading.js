// import { Flex,  Heading, Spacer } from "@chakra-ui/layout";
// import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
// import { IconButton } from "@chakra-ui/button";
// import { useColorMode } from "@chakra-ui/color-mode";


// const Heading = () => {
//     const { colorMode, toggleColorMode } = useColorMode();
//     const isDark = colorMode === "dark";
  
//     // URLs de tus redes sociales
//     const linkedinURL = "https://www.linkedin.com/in/agustin-boasso-/";
//     const instagramURL = "https://www.instagram.com/boasso_agustin/?hl=en";
//     const githubURL = "http://github.com/agustinboasso";
  

//   return (
//     <Flex w="100%">
//     <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">Agustin Boasso</Heading>
//     <Spacer></Spacer>
//     <IconButton as="a" href={linkedinURL} target="_blank" rel="noopener noreferrer" icon={<FaLinkedin />} isRound='true' />
//     {/* <IconButton as="a" href={instagramURL} target="_blank" rel="noopener noreferrer" icon={<FaInstagram />} isRound='true' /> */}
//     <IconButton as="a" href={githubURL} target="_blank" rel="noopener noreferrer" icon={<FaGithub />} isRound='true' />
//     <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode} />
//   </Flex>
//   )
// }

// export default Heading