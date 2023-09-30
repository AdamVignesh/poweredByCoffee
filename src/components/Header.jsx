import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";
import { ProfileData } from "./ProfileData";

const Header = () => {
  return (
    <Flex w="100%">
      <Avatar size="lg" name="Dan Abrahmov" src="https://cdn1.vectorstock.com/i/1000x1000/98/20/user-icon-with-laptop-computer-male-person-vector-19299820.jpg">
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <Flex flexDirection="column" mx="5" justify="center">
        <Text fontSize="lg" fontWeight="bold">
          Salvador
        </Text>
        <Text color="green.500">Online</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
