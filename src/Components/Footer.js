import React from 'react';
import { useColorModeValue, HStack, IconButton } from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const bgColor = useColorModeValue('gray.900', 'gray.100');
  const textColor = useColorModeValue('gray.900', 'white');

  const linkedinURL = "https://www.linkedin.com/in/agustin-boasso-/";
  const instagramURL = "https://www.instagram.com/boasso_agustin/?hl=en";
  const githubURL = "http://github.com/agustinboasso";

  return (
    <HStack  color={textColor} py="4" px="8" spacing="4" justify="center">
      <HStack spacing="4">
        <IconButton as="a" href={linkedinURL} target="_blank" rel="noopener noreferrer" icon={<FaLinkedin />} aria-label="LinkedIn" />
        <IconButton as="a" href={instagramURL} target="_blank" rel="noopener noreferrer" icon={<FaInstagram />} aria-label="Instagram" />
        <IconButton as="a" href={githubURL} target="_blank" rel="noopener noreferrer" icon={<FaGithub />} aria-label="GitHub" />
      </HStack>
      <span>&copy; Agustin Boasso - 2023 - Todos los derechos reservados</span>
    </HStack>
  );
}

export default Footer;