import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "system",
	useSystemColorMode: false,
};

const customtheme = extendTheme({ config });
export default customtheme;
