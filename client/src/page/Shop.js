import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
//Components
import { BrandBar } from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import Pages from "../components/Pages";
import { TypeBar } from "../components/TypeBar";
//Api
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((types) => {
      device.setTypes(types);
    });
    fetchBrands().then((brand) => {
      device.setBrands(brand);
    });
    fetchDevices(null, null, 1, 2).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      2
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className={"mt-4"}>
        <Col md={3}>
          <Dropdown overlay={() => TypeBar(device)} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <h4>
                {device.selectedType.name
                  ? `Type (${device.selectedType.name})`
                  : "Types"}{" "}
                <DownOutlined />
              </h4>
            </a>
          </Dropdown>
        </Col>
        <Col md={3}>
          <Dropdown overlay={() => BrandBar(device)} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <h4>
                {device.selectedBrand.name
                  ? `Brand (${device.selectedBrand.name})`
                  : "Brands"}{" "}
                <DownOutlined />
              </h4>
            </a>
          </Dropdown>
        </Col>
      </Row>
      <Row className={"mt-2"}>
        <Col md={9}>
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
