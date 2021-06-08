import React from "react";
import { Checkbox } from "antd";
import { Menu, Dropdown } from "antd";

export const BrandBar = (device, fun) => {
  return (
    <Menu>
      {device.brands.map((brand) => (
        <Menu.Item key={brand.id}>
          <Checkbox
            name={brand.name}
            checked={brand.id === device.selectedBrand.id}
            onChange={() => {
              console.log("hello");
              device.setSelectedBrand(brand);
            }}
          >
            {brand.name}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );
};
