import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisable, setBrandVisable] = useState(false);
  const [deviceVisable, setDeviceVisable] = useState(false);
  const [typeVisable, setTypeVisable] = useState(false);
  return (
    <Container className={"d-flex flex-column"}>
      <Button
        onClick={() => setTypeVisable(true)}
        variant={"outline-dark"}
        className="mt-2 p-2"
      >
        Добавить тип
      </Button>
      <Button
        onClick={() => setBrandVisable(true)}
        variant={"outline-dark"}
        className="mt-2 p-2"
      >
        Добавить бренд
      </Button>
      <Button
        onClick={() => setDeviceVisable(true)}
        variant={"outline-dark"}
        className="mt-2 p-2"
      >
        Добавить дейвайс
      </Button>
      <CreateBrand show={brandVisable} onHide={() => setBrandVisable(false)} />
      <CreateDevice
        show={deviceVisable}
        onHide={() => setDeviceVisable(false)}
      />
      <CreateType show={typeVisable} onHide={() => setTypeVisable(false)} />
    </Container>
  );
};

export default Admin;
