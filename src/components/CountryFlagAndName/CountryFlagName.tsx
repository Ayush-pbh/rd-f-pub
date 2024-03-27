import React from "react";
import ReactCountryFlag from "react-country-flag";
import lookup from "country-code-lookup";

interface Props {
	country: string;
}
const CountryFlagName = ({ country }: Readonly<Props>) => {
	console.log(lookup.byCountry("Bosnia and Herzegovina"));
	return (
		<div>
			<ReactCountryFlag
				className=""
				countryCode={lookup.byCountry(country)?.fips}
				style={{
					fontSize: "2em",
					lineHeight: "2em",
				}}
				aria-label={country}
			/>
			<span style={{ margin: "10px" }}>{country}</span>
		</div>
	);
};

export default CountryFlagName;
