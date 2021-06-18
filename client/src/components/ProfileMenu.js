import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE } from "../utils/consts";

const menu = (
	<Menu>
		<Menu.Item key="0">
			<NavLink to={ADMIN_ROUTE}>ADMIN PANEL</NavLink>
		</Menu.Item>
		<Menu.Item key="1">
			<a onClick={() => {}}>LOG OUT</a>
		</Menu.Item>
	</Menu>
);

export const ProfileMenu = () => {
	return (
		<Dropdown overlay={menu} trigger={["click"]} placement="bottomRight" arrow>
			<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
				<Avatar icon={<UserOutlined />} />
			</a>
		</Dropdown>
	);
};

{
	/* <StyledNavLink to={ADMIN_ROUTE} activeClassName="a" exact>
ADMIN PANEL
</StyledNavLink>
<div style={{ height: 35, width: 35 }}>
<a onClick={() => logOut()}>
	{/* LOG OUT */
}
// 	<Exit />
// </a>
// </div>
// </> */}
