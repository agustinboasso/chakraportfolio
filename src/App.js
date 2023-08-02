import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from './Components/About'
import TechSkills from "./Components/TechSkills";
import SoftSkills from "./Components/SoftSkills";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";


  const linkedinURL = "https://www.linkedin.com/in/agustin-boasso-/";
  const instagramURL = "https://www.instagram.com/boasso_agustin/?hl=en";
  const githubURL = "http://github.com/agustinboasso";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">Agustin Boasso</Heading>
        <Spacer></Spacer>
        <IconButton as="a" href={linkedinURL} target="_blank" rel="noopener noreferrer" icon={<FaLinkedin />} isRound='true' />
        {/* <IconButton as="a" href={instagramURL} target="_blank" rel="noopener noreferrer" icon={<FaInstagram />} isRound='true' /> */}
        <IconButton as="a" href={githubURL} target="_blank" rel="noopener noreferrer" icon={<FaGithub />} isRound='true' />
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode} />
      </Flex>
      <Header />
      <About />
      <TechSkills />
      <SoftSkills/>
      <Projects/>
     
      <Certificates/>
      <Footer />
    </VStack>
  );
}

export default App;