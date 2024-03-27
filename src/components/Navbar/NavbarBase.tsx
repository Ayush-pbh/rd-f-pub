import {
	Button,
	Card,
	CardBody,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
} from "@chakra-ui/react";
import gameHubLogo from "../../assets/logo.jpg";
import ColorModeSwitch from "../ColorModeSwitch";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./navbarbase.css";
const NavbarBase = () => {
	return (
		<Card className="navbar-sm">
			<CardBody>
				<Flex>
					<Heading as="h6" size="sm" padding="10px">
						Retraction Dashboard
					</Heading>
					<Spacer />

					<Menu>
						<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
							Menu
						</MenuButton>
						<MenuList>
							<MenuItem>Dashboard</MenuItem>
							<MenuItem>How it works</MenuItem>
							<MenuItem>Data</MenuItem>
							<MenuItem>About</MenuItem>
							<MenuItem>Contact</MenuItem>
							<MenuItem>
								<ColorModeSwitch></ColorModeSwitch>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default NavbarBase;
