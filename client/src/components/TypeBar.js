import React from "react";
import { Checkbox } from "antd";
import { Menu } from "antd";

export const TypeBar = (device) => {
  return (
    <Menu>
      {device.types.map((type) => (
        <Menu.Item key={type.id}>
          <Checkbox
            name={type.name}
            checked={type.id === device.selectedType.id}
            onChange={() => {
              console.log("hello");
              device.setSelectedType(type);
            }}
          >
            {type.name}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );
};
