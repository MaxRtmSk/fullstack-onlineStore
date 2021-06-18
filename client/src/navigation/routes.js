import Admin from "../page/Admin";
import Auth from "../page/Auth";
import Basket from "../page/Basket";
import { About } from "../page/About";
import DevicePage from "../page/DevicePage";
import { Main } from "../page/Main";
import Shop from "../page/Shop";
import {
	ADMIN_ROUTE,
	BASKET_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SHOP_ROUTE,
	DEVICE_ROUTE,
	MAIN_ROUTE,
	ABOUT_ROUTE,
} from "../utils/consts";

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin,
	},
];

export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		Component: Main,
	},
	{
		path: SHOP_ROUTE,
		Component: Shop,
	},
	{
		path: ABOUT_ROUTE,
		Component: About,
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth,
	},
	{
		path: BASKET_ROUTE,
		Component: Basket,
	},
	{
		path: DEVICE_ROUTE + "/:id",
		Component: DevicePage,
	},
];
