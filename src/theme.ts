import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
};

const customtheme = extendTheme({ config });
export default customtheme;
