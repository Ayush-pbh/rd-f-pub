import { Grid, GridItem, Hide, Show } from "@chakra-ui/react";
import "./App.css";

import NavbarLg from "./components/Navbar/NavbarLg";
import NavbarBase from "./components/Navbar/NavbarBase";
import RetractionDashboard from "./components/RetractionDashboard/RetractionDashboard";
import RetractionDashboardSmall from "./components/RetractionDashboard/RetractionDashboardSmall";
function App() {
	return (
		<Grid
			templateAreas={{
				base: `"navbase" "main"`,
				lg: `"navlg main"`,
			}}
		>
			<Show below="md">
				<GridItem area="navbase">
					<NavbarBase />
				</GridItem>
			</Show>
			<Hide below="md">
				<GridItem area="navlg">
					<NavbarLg />
				</GridItem>
			</Hide>
			<Show below="md">
				<GridItem area="main">
					<RetractionDashboardSmall></RetractionDashboardSmall>
				</GridItem>
			</Show>
			<Hide below="md">
				<GridItem area="main">
					<RetractionDashboard></RetractionDashboard>
				</GridItem>
			</Hide>
		</Grid>
	);
}

export default App;
