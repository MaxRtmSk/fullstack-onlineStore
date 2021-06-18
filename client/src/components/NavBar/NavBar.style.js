import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiBasketballBall } from "react-icons/gi";

export const StyledNavLink = styled(NavLink)`
	margin: 0px 20px;

	position: relative;
	color: black;
	color: grey;
	font-family: "Basketball";
	font-size: 22px;
	font-weight: 500;
	letter-spacing: 4px;

	:hover {
		color: black;
	}
	&.${(props) => props.activeClassName} {
		color: #f4281f;

		:before {
			content: "🏀";
			position: absolute;
			font-size: 15px;
			left: -20px;
			top: 5px;
		}
	}
`;

export const BasketStyledNavLink = styled(NavLink)`
	margin: 0px 40px 0px 0px;
	font-size: 40px;
	position: relative;
	color: black;
	color: grey;
	font-weight: 500;

	:after {
		font-family: "Basketball";
		content: "(3)";
		font-size: 15px;
		position: absolute;
		left: 40px;
		top: 24px;
	}

	:hover {
		color: #f4281f;
	}
	&.${(props) => props.activeClassName} {
		color: #f4281f;

		:before {
			content: "🏀";
			position: absolute;
			font-size: 15px;
			left: 10.6px;
			top: 16px;
		}
	}
`;
