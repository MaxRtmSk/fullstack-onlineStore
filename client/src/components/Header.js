import React from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
	const history = useHistory();

	return (
		<>
			<div style={{ background: "#f4281f", height: 20 }}></div>
			<div
				style={{
					width: "100%",
					backgroundColor: "#f9f9f9",
					boxShadow: "-1px 10px 17px -12px rgba(0,0,0,0.75)",
				}}
			>
				<div style={{ position: "sticky", top: 0 }}>
					<NavBar />
				</div>
			</div>
		</>
	);
};
