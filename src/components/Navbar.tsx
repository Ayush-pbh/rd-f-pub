import { HStack, Image, Text } from "@chakra-ui/react";
import gameHubLogo from "../assets/logo.jpg";

const Navbar = () => {
	return (
		<HStack>
			<Image src={gameHubLogo} boxSize={"60px"} />
			<Text>Nav</Text>
		</HStack>
	);
};

export default Navbar;
