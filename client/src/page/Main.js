import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import banner from "../assets/banner.jpg";

const Wrapper = styled.div``;
const BannerWrapper = styled.div`
	height: 500px;
	width: 100%;
	background-image: url(${banner});
	background-size: cover;
`;
const Logo = styled.h1`
	color: "white";
	font-family: "Basketball";
	font-weight: "500";
	width: "50px";
	color: "#f9f9f9";
`;

export const Main = () => {
	return (
		<Wrapper>
			<BannerWrapper>
				<Container>
					<div>
						<Logo>React</Logo>
						<Logo>Sport</Logo>
						<Logo>Shop</Logo>
						<p></p>
					</div>
				</Container>
			</BannerWrapper>
			<div></div>
		</Wrapper>
	);
};
