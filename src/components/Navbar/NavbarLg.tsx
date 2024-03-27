import { VStack, Image, useColorModeValue, Spacer } from "@chakra-ui/react";
import retraction_logo from "../../assets/rd-logo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import ListAction from "../ListAction/ListAction";
import th from "../../services/constants";
import "./style.css";
// import ic_dashboard from "../../assets/ic_dashboard.png";
// import ic_settings from "../../assets/ic_setting.png";
// import ic_retraction from "../../assets/ic_retraction.png";
// import ic_data from "../../assets/ic_data.png";
// import ic_info from "../../assets/ic_info.png";
// import ic_contact from "../../assets/ic_contact.png";
// import ic_arrow from "../../assets/ic_arrow.png";

export const NavbarLg = () => {
	const background = useColorModeValue(
		th.light.background_primary,
		th.dark.background_primary
	);
	return (
		<VStack
			backgroundColor={background}
			padding="10px"
			rowGap="10px"
			className="navbar-lg"
			height="100vh"
			gap={0}
		>
			<Image src={retraction_logo} boxSize={"250px"} />
			<ListAction onClick={() => {}}>Retraction Dashboard</ListAction>
			<ListAction onClick={() => {}}> How it works</ListAction>
			<ListAction onClick={() => {}}> Data</ListAction>
			<ListAction onClick={() => {}}> About</ListAction>
			<ListAction onClick={() => {}}> Contact </ListAction>
			<Spacer></Spacer>
			<ColorModeSwitch />
		</VStack>
	);
};

export default NavbarLg;
