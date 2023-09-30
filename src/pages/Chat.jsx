import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Chat = (props) => {
    const [messages, setMessages] = useState([
      { from: "computer", text: `Hi, ${props.graphData.givenName}. I am Salvador! How can I assist you today!` },
    ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Flex pt="50px" w="100%" h="100vh" justify="center" align="center">
      <Flex w={["100%", "100%", "70%"]} h="80%" flexDir="column">
        <Header />
        <Divider/>
        <Messages messages={messages} />
        <Divider/>
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
