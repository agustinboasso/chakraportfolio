// import React, { useEffect, useState } from 'react';
// import { Box, VStack, HStack, Heading, Divider, Tooltip, useColorModeValue, Text, Center, Image } from '@chakra-ui/react';





// const token = 'BQAijpyZnDxIxkJDZwxk7x6HjOJkc_HY82XmbBkVUPleBKf4p5OfGLwxxgRts-WV0R0ZsQ-o2BpGzE8wpZTlhTOVcwCmf87ixNSmCh1NqAvfIPJpwJBBhBX10Am_wjD3G5MKC-JZpcV7_6crhtTHqUhJwFmMxKf22s6K_Hv-ke7Lu28XZeEPNfpGKEPvGJVmgAIKIXRIfYZpFKXSN5Ed0WTU0uwIApaVPYGXYjAMZNSmzAdDC_69Wq02MuRc832PA34';
// async function fetchWebApi(endpoint, method, body) {
//     const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       method,
//       body:JSON.stringify(body)
//     });
//     return await res.json();
//   }
// // Asumo que tienes el token y la función fetchWebApi() definidos en otro lugar

// const Spotify = () => {
//     const [topTracks, setTopTracks] = useState([]);
//     const dividerColor = useColorModeValue('blue.900', 'gray.100');
//     const sectionTitleGradient = "linear(to-r, cyan.400, blue.500, purple.600)";
//     const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  
//     useEffect(() => {
//       const getTopTracks = async () => {
//         // Tu función de obtención de datos aquí
//         const tracks = await fetchWebApi(
//           'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
//         );
//         setTopTracks(tracks.items);
//       };
  
//       getTopTracks();
//     }, []);
  
//     return (
//       <Center py="8">
//         <Box maxW="800px" w="100%" bg={useColorModeValue('gray.50', 'gray.900')} p={5} borderRadius="lg" shadow="md">
         
//           <VStack spacing="4">
//             <Heading as="h2" size="xl" textAlign="center" mb="4" bgGradient={sectionTitleGradient} bgClip="text" textTransform="uppercase">
//               Mis trabajos y lanzamientos
//             </Heading>
//             {topTracks.map((track, index) => (
//               <HStack key={index} w="100%" align="center" spacing="5">
//                 <Image
//                   borderRadius="full"
//                   boxSize="50px"
//                   src={track.album.images[0].url} // Asegúrate de ajustar este camino según la estructura de tus datos
//                   alt="Album Art"
//                 />
//                 <VStack align="start" spacing="1">
//                   <Text fontSize="lg" fontWeight="bold" color={textColor}>{track.name}</Text>
//                   <Text fontSize="sm" color={textColor}>{track.artists.map(artist => artist.name).join(', ')}</Text>
//                 </VStack>
//               </HStack>
//             ))}
//           </VStack>
//         </Box>
//       </Center>
//     );
//   };
  
//   export default Spotify;