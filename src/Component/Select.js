import React from "react";

import { Select } from "antd";
const { Option } = Select;

const MySelect = ({ handleChange, defaultValue }) => {
    return (
        <>
            <Select
                defaultValue={defaultValue}
                style={{ width: 150 }}
                onChange={handleChange}
            >
                <Option value="Asia/Vladivostok">Владивосток</Option>
                <Option value="Europe/Kaliningrad">Калининград</Option>
                <Option value="Asia/Krasnoyarsk">Красноярск</Option>
                <Option value="Europe/Moscow">Москва</Option>
            </Select>
        </>
    );
};

export default MySelect;
