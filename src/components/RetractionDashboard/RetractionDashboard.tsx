import React, { useEffect, useState } from "react";
import "./RetractionDashboard.css";
import { Skeleton } from "@chakra-ui/react";

import {
	Card,
	CardBody,
	CardHeader,
	Heading,
	// Divider,
	CardFooter,
	// Image,
	ButtonGroup,
	Button,
	TableContainer,
	Table,
	Thead,
	Tr,
	Text,
	Th,
	Tbody,
	Td,
	Alert,
} from "@chakra-ui/react";

import apiClient from "../../services/api-client";
import CountryFlagName from "../CountryFlagAndName/CountryFlagName";
import PointRowGraph from "../PointRowGraph/PointRowGraph";

interface CountryInfo {
	country: string;
	errors: string;
	grave: string;
	misconduct: string;
	normal: string;
	grand_total: string;
}

const RetractionDashboard = () => {
	const [cI, setCountryInfo] = useState<CountryInfo[]>([]);
	const [tablePage, setTablePage] = useState({ offset: 0, limit: 10 });

	const [err, setErr] = useState("");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		apiClient
			.get<CountryInfo[]>(
				`/data?offset=${tablePage.offset}&limit=${tablePage.limit}`
			)
			.then((res) => {
				setCountryInfo(res.data);
				setLoading(false);
			})
			.catch((err) => setErr(err.message));
	}, [tablePage.limit, tablePage.offset]);
	return (
		<div className="rd-container">
			<Card>
				<CardHeader>
					<Heading size="lg" mb={4}>
						Retraction Dashboard
					</Heading>
					<Text fontSize="xl">
						Retraction Dashboard by country. Showing output counts, number and
						percentage of retracted outputs published between 2000 and 2023. You
						can sort and filter by region, subregion, number of publications
						(default filter is 1000 publications), and open access levels. You
						may also search for a specific country in the search bar at the top
						right.
					</Text>
				</CardHeader>

				<CardBody>
					<TableContainer>
						{err && <Alert status="error">{err}</Alert>}
						<Table size="sm">
							<Thead>
								<Tr>
									<Th className="fixed-column">Country</Th>
									<Th textAlign="center">Visual</Th>
									<Th textAlign="center">Error</Th>
									<Th textAlign="center">grave</Th>
									<Th textAlign="center">misconduct</Th>
									<Th textAlign="center">normal</Th>
									<Th textAlign="center">grand total</Th>
								</Tr>
							</Thead>
							<Tbody>
								{loading && (
									<Tr>
										<Td>
											<Skeleton height="500px" width="100%" />
										</Td>
										<Td>
											<Skeleton height="500px" width="100%" />
										</Td>

										<Td>
											<Skeleton height="500px" width="100%" />
										</Td>
										<Td>
											<Skeleton height="500px" width="100%" />
										</Td>
										<Td>
											<Skeleton height="500px" width="100%" />
										</Td>
										<Td>
											<Skeleton height="500px" width="100%" />
										</Td>
										<Td>
											<Skeleton height="500px" width="100%" />
										</Td>
									</Tr>
								)}
								{cI.map((c) => {
									return (
										<Tr key={c.country}>
											<Td className="fixed-column">
												<CountryFlagName country={c.country}></CountryFlagName>
											</Td>

											<Td textAlign="center">
												<PointRowGraph
													errors={parseInt(c.errors == "-1" ? "0" : c.errors)}
													grave={parseInt(c.grave == "-1" ? "0" : c.grave)}
													misconduct={parseInt(
														c.misconduct == "-1" ? "0" : c.misconduct
													)}
													normal={parseInt(c.normal == "-1" ? "0" : c.normal)}
													grand_total={parseInt(
														c.grand_total == "-1" ? "0" : c.grand_total
													)}
												></PointRowGraph>
											</Td>

											<Td textAlign="center">
												{c.errors == "-1" ? "NaN" : c.errors}
											</Td>
											<Td textAlign="center">
												{c.grave == "-1" ? "NaN" : c.grave}
											</Td>
											<Td textAlign="center">
												{c.misconduct == "-1" ? "NaN" : c.misconduct}
											</Td>
											<Td textAlign="center">
												{c.normal == "-1" ? "NaN" : c.normal}
											</Td>
											<Td textAlign="center">
												{c.grand_total == "-1" ? "NaN" : c.grand_total}
											</Td>
										</Tr>
									);
								})}
							</Tbody>
							{/* <Tfoot>
								<Tr>
									<Th>To convert</Th>
									<Th>into</Th>
									<Th isNumeric>multiply by</Th>
								</Tr>
							</Tfoot> */}
						</Table>
					</TableContainer>
				</CardBody>
				<CardFooter>
					<ButtonGroup>
						<Button
							colorScheme={tablePage.offset - 10 < 0 ? "gray" : "twitter"}
							onClick={() => {
								if (tablePage.offset - 10 < 0) {
									alert("No more data to load");
								} else {
									setTablePage({ offset: tablePage.offset - 10, limit: 10 });
									console.log(tablePage);
								}
							}}
						>
							Prev
						</Button>
						<Button
							colorScheme={tablePage.offset + 10 > 170 ? "gray" : "twitter"}
							onClick={() => {
								if (tablePage.offset + 10 > 170) {
									alert("No more data to load");
								} else {
									setTablePage({ offset: tablePage.offset + 10, limit: 10 });
								}
							}}
						>
							Next
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
		</div>
	);
};

export default RetractionDashboard;
