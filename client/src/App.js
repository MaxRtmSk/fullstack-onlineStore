import { observer } from "mobx-react-lite";
import { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./navigation/AppRouter";
import NavBar from "./components/NavBar";
import { check } from "./http/useAPI";
// import { Spinner } from "react-bootstrap";
import Shop from "./page/Shop";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Header, Content } = Layout;

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <Header>
          <NavBar />
        </Header>
        <Content>
          <AppRouter />
        </Content>
      </Layout>
    </BrowserRouter>
  );
});

export default App;
