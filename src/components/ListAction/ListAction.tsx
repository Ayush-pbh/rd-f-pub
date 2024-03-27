import React, { ReactNode } from "react";
import "./style.css";
import { Card, CardBody, Text } from "@chakra-ui/react";
// import th from "../../services/constants";
interface Props {
	children: ReactNode;
	onClick: () => void;
}

const ListAction = ({ children, onClick }: Readonly<Props>) => {
	return (
		<Card width="100%" onClick={onClick} cursor="pointer">
			<CardBody padding="10px">
				<Text>{children}</Text>
			</CardBody>
		</Card>
	);
};

export default ListAction;
