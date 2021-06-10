import React, { useContext } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { Button, Tooltip, Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Container>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <NavLink to={SHOP_ROUTE}>Магазин</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={BASKET_ROUTE} style={{ color: "white" }}>
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
          </NavLink>
        </Menu.Item>
        {user.isAuth ? (
          <SubMenu key="SubMenu" title="Пользователь" className="ml-auto">
            <Menu.Item key="3" onClick={() => history.push(ADMIN_ROUTE)}>
              Админ панель
            </Menu.Item>
            <Menu.Item key="4" onClick={() => logOut()}>
              Выйти
            </Menu.Item>
          </SubMenu>
        ) : (
          <Menu.Item
            className="ml-auto"
            onClick={() => history.push(LOGIN_ROUTE)}
          >
            Авторизация
          </Menu.Item>
        )}
      </Menu>
    </Container>
  );
});

export default NavBar;
