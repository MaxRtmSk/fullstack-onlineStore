import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../../index";
// import { ReactComponent as Exit } from "../assets/exit.svg";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { GiBasketballBasket } from "react-icons/gi";
import { ProfileMenu } from "../ProfileMenu";
import {
	ADMIN_ROUTE,
	LOGIN_ROUTE,
	SHOP_ROUTE,
	BASKET_ROUTE,
	MAIN_ROUTE,
	ABOUT_ROUTE,
} from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { BasketStyledNavLink, StyledNavLink } from "./NavBar.style";

export const NavBar = observer(() => {
	const { user } = useContext(Context);

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
	};

	return (
		<div>
			<Container>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div
						style={{
							minWidth: 300,
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							background: "#F9F9F9",
						}}
					>
						<StyledNavLink to={MAIN_ROUTE} activeClassName="a" exact>
							HOME
						</StyledNavLink>
						<StyledNavLink to={SHOP_ROUTE} activeClassName="a" exact>
							SHOP
						</StyledNavLink>
						<StyledNavLink to={ABOUT_ROUTE} activeClassName="a" exact>
							ABOUT
						</StyledNavLink>
					</div>
					<div
						style={{
							minWidth: 100,
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							background: "#F9F9F9",
							borderRadius: "10px",
						}}
					>
						<BasketStyledNavLink to={BASKET_ROUTE} activeClassName="a" exact>
							<div>
								<GiBasketballBasket />
							</div>
						</BasketStyledNavLink>
						{user.isAuth ? (
							<div
								style={{
									padding: "5px 5px 5px 5px",
									alignItems: "center",
									display: "flex",
								}}
							>
								<ProfileMenu />
							</div>
						) : (
							<StyledNavLink to={LOGIN_ROUTE}>SIGN UP</StyledNavLink>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
});
