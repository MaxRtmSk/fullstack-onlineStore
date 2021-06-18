import { observer } from "mobx-react-lite";
import { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./navigation/AppRouter";
import { Header } from "./components/Header";
import { check } from "./http/useAPI";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Content, Footer } = Layout;

const App = observer(() => {
	const { user } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(process.env.REACT_APP_API_URL);
		check()
			.then((data) => {
				user.setUser(data);
				user.setIsAuth(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		// return <Spinner animation={"grow"} />;
		return "loading";
	}

	return (
		<BrowserRouter>
			<Layout>
				<Header />

				<AppRouter />

				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2012 Created by Ant UED
				</Footer>
			</Layout>
		</BrowserRouter>
	);
});

export default App;
