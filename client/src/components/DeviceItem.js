import React, { useContext, useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from "../utils/consts";
import { Card } from "antd";

const { Meta } = Card;

const DeviceItem = ({ device }) => {
  const history = useHistory();
  const { device: devices } = useContext(Context);
  const [deviceBrand, setDeviceBrand] = useState({});

  useEffect(() => {
    devices.brands.forEach((brand) => {
      if (brand.id === device.brandId)
        setDeviceBrand({
          id: brand.id,
          name: brand.name,
        });
    });
  }, []);

  return (
    <Col md={3} onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}>
      <Card
        cover={
          <img alt="example" src={process.env.REACT_APP_API_URL + device.img} />
        }
      >
        <Meta title={device.name} description={deviceBrand.name} />
      </Card>
    </Col>
  );
};

export default DeviceItem;
