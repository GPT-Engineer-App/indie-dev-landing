import { Box, Button, Container, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaArrowRight, FaDiscord, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box align="center">
          <Heading as="h1" size="2xl" mb={2}>
            DevBoost
          </Heading>
          <Text fontSize="xl">Empowering Indie Developers to Launch and Grow</Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGdhbWUlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTM2OTUzNjR8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <Box>
          <Heading as="h2" size="lg">
            Why Choose DevBoost?
          </Heading>
          <Text mt={4}>DevBoost offers a suite of tools specifically designed to help indie developers streamline their development process, market their games, and connect with a vibrant community of fellow developers.</Text>
        </Box>

        <Box>
          <Heading as="h3" size="md">
            Join Our Community
          </Heading>
          <Text mt={2}>Connect, learn, and grow with other indie developers.</Text>
          <Button leftIcon={<FaDiscord />} colorScheme="purple" mt={4}>
            Join Discord
          </Button>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" mt={4} ml={2}>
            Follow on Twitter
          </Button>
        </Box>

        <Box>
          <Heading as="h3" size="md">
            Get Started Today
          </Heading>
          <Text mt={2}>Sign up for free and start using our tools immediately.</Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="teal" mt={4}>
            Sign Up Now
          </Button>
        </Box>

        <Box align="center">
          <Text fontSize="sm">© 2023 DevBoost. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
