import React from "react";
import "./style.css";
import { Tooltip } from "@chakra-ui/react";

interface CountryInfo {
	errors: number;
	grave: number;
	misconduct: number;
	normal: number;
	grand_total: number;
}
// const CustomToolTip = (text: string) => (
// 	<Tooltip label="Hover me">{text}</Tooltip>
// );

const PointRowGraph = ({
	errors,
	grave,
	misconduct,
	normal,
	grand_total,
}: Readonly<CountryInfo>) => {
	const width_errors = `${(errors / grand_total) * 100}%`;
	const width_grave = `${(grave / grand_total) * 100}%`;
	const width_misconduct = `${(misconduct / grand_total) * 100}%`;
	const width_normal = `${(normal / grand_total) * 100}%`;

	return (
		<div className="prg-holder">
			<Tooltip label="Errors" aria-label="A tooltip">
				<div className="errors" style={{ width: width_errors }}></div>
			</Tooltip>
			<Tooltip label="Grave" aria-label="A tooltip">
				<div className="grave" style={{ width: width_grave }}></div>
			</Tooltip>
			<Tooltip label="Misconduct" aria-label="A tooltip">
				<div className="misconduct" style={{ width: width_misconduct }}></div>
			</Tooltip>
			<Tooltip label="Normal" aria-label="A tooltip">
				<div className="normal" style={{ width: width_normal }}></div>
			</Tooltip>
		</div>
	);
};

export default PointRowGraph;
