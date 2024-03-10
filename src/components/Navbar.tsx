import { HStack, Image } from "@chakra-ui/react";
import gameHubLogo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
	return (
		<HStack justifyContent="space-between" padding="10px">
			<Image src={gameHubLogo} boxSize={"60px"} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default Navbar;
