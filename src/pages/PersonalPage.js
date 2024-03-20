import React, { useState } from "react";

const PersonalPage = () => {
    const [formData, setFormData] = useState({
        unitName: "",
        inch2frontPhoto: "",
        farmerName: "",
        contactPhone: "",
        phone: "",
        fax: "",
        city: "",
        district: "",
        section: "",
        subsection: "",
        number: "",
        email: "",
        totalCultivationArea: "",
        landNumber: "",
        area: "",
        crop: "",
        areaCode: "",
        areaSize: "",
        cropDetails: "",
        remarks: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const getAddressOptions = (type) => {
        const cityOptions = ["台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市", "基隆市", "新竹市", "嘉義市"];
        const districtOptions = {
            "台北市": ["中正區", "大同區", "松山區", "大安區", "萬華區", "信義區", "松山區", "大安區", "萬華區"],
            "新北市": ["板橋區", "新莊區", "中和區", "永和區", "三重區", "蘆洲區", "五股區", "泰山區", "林口區"],
            // 其他縣市區的範例資料
        };

        switch (type) {
            case "city":
                return cityOptions;
            case "district":
                return districtOptions[formData.city] || [];
            // 其他地址欄位的選項
            default:
                return [];
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Personal Page</h2>
            {Object.entries(formData).map(([key, value]) => (
                <div key={key} style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                    <label style={{ width: "150px", marginRight: "10px" }}>{key}</label>
                    {["city", "district", "section", "subsection", "number"].includes(key) ? (
                        <select
                            name={key}
                            value={value}
                            onChange={handleChange}
                            style={{ flex: "1" }}
                        >
                            <option value="" disabled>Select {key}</option>
                            {getAddressOptions(key).map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type="text"
                            name={key}
                            value={value}
                            onChange={handleChange}
                            style={{ flex: "1" }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default PersonalPage;
