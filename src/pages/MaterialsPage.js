import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MaterialEntry = ({ materialNumber, handleChange, materialData }) => (
    <div style={{ marginBottom: "20px" }}>
        <h3>資材 {materialNumber}</h3>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>資材名稱：</label>
            <input
                type="text"
                name={`materialName${materialNumber}`}
                value={materialData[`materialName${materialNumber}`]}
                onChange={(e) => handleChange(`materialName${materialNumber}`, e.target.value)}
                style={{ flex: "1" }}
            />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>廠商：</label>
            <input
                type="text"
                name={`manufacturer${materialNumber}`}
                value={materialData[`manufacturer${materialNumber}`]}
                onChange={(e) => handleChange(`manufacturer${materialNumber}`, e.target.value)}
                style={{ flex: "1" }}
            />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>供應商：</label>
            <input
                type="text"
                name={`supplier${materialNumber}`}
                value={materialData[`supplier${materialNumber}`]}
                onChange={(e) => handleChange(`supplier${materialNumber}`, e.target.value)}
                style={{ flex: "1" }}
            />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>包裝單位：</label>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label>
                    <input
                        type="radio"
                        name={`packagingUnit${materialNumber}`}
                        value="包"
                        checked={materialData[`packagingUnit${materialNumber}`] === "包"}
                        onChange={() => handleChange(`packagingUnit${materialNumber}`, "包")}
                    /> 包
                </label>
                <label>
                    <input
                        type="radio"
                        name={`packagingUnit${materialNumber}`}
                        value="瓶"
                        checked={materialData[`packagingUnit${materialNumber}`] === "瓶"}
                        onChange={() => handleChange(`packagingUnit${materialNumber}`, "瓶")}
                    /> 瓶
                </label>
                <label>
                    <input
                        type="radio"
                        name={`packagingUnit${materialNumber}`}
                        value="罐"
                        checked={materialData[`packagingUnit${materialNumber}`] === "罐"}
                        onChange={() => handleChange(`packagingUnit${materialNumber}`, "罐")}
                    /> 罐
                </label>
                <label>
                    <input
                        type="radio"
                        name={`packagingUnit${materialNumber}`}
                        value="其他"
                        checked={materialData[`packagingUnit${materialNumber}`] === "其他"}
                        onChange={() => handleChange(`packagingUnit${materialNumber}`, "其他")}
                    /> 其他
                </label>
                {materialData[`packagingUnit${materialNumber}`] === "其他" && (
                    <input
                        type="text"
                        name={`packagingUnit${materialNumber}`}
                        value={materialData[`packagingUnit${materialNumber}`]}
                        onChange={(e) => handleChange(`packagingUnit${materialNumber}`, e.target.value)}
                        placeholder="其他描述"
                    />
                )}
            </div>
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>包裝容量：</label>
            <input
                type="text"
                name={`packagingCapacity${materialNumber}`}
                value={materialData[`packagingCapacity${materialNumber}`]}
                onChange={(e) => handleChange(`packagingCapacity${materialNumber}`, e.target.value)}
                style={{ flex: "1" }}
            />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>日期：</label>
            <DatePicker
                selected={materialData[`date${materialNumber}`]}
                onChange={(date) => handleChange(`date${materialNumber}`, date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
                style={{ flex: "1" }}
            />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>購入量：</label>
            <input
                type="text"
                name={`purchaseQuantity${materialNumber}`}
                value={materialData[`purchaseQuantity${materialNumber}`]}
                onChange={(e) => handleChange(`purchaseQuantity${materialNumber}`, e.target.value)}
                style={{ flex: "1" }}
            />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>使用量：</label>
            <input
                type="text"
                name={`usageQuantity${materialNumber}`}
                value={materialData[`usageQuantity${materialNumber}`]}
                onChange={(e) => handleChange(`usageQuantity${materialNumber}`, e.target.value)}
                style={{ flex: "1" }}
            />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
            <label style={{ width: "150px", marginRight: "10px" }}>剩餘量：</label>
            <input
                type="text"
                name={`remainingQuantity${materialNumber}`}
                value={materialData[`remainingQuantity${materialNumber}`]}
                onChange={(e) => handleChange(`remainingQuantity${materialNumber}`, e.target.value)}
                style={{ flex: "1" }}
            />
        </div>
    </div>
);

const MaterialsPage = () => {
    const [materialData, setMaterialData] = useState({
        materialName1: "",
        manufacturer1: "",
        supplier1: "",
        packagingUnit1: "",
        packagingCapacity1: "",
        date1: null,
        purchaseQuantity1: "",
        usageQuantity1: "",
        remainingQuantity1: "",
        materialName2: "",
        manufacturer2: "",
        supplier2: "",
        packagingUnit2: "",
        packagingCapacity2: "",
        date2: null,
        purchaseQuantity2: "",
        usageQuantity2: "",
        remainingQuantity2: "",
        // 可根据需要添加更多材料
    });

    const handleChange = (name, value) => {
        setMaterialData({ ...materialData, [name]: value });
    };

    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
            <h2>Materials Page</h2>
            <MaterialEntry
                materialNumber={1}
                handleChange={handleChange}
                materialData={materialData}
            />
            <MaterialEntry
                materialNumber={2}
                handleChange={handleChange}
                materialData={materialData}
            />
            {/* 添加更多材料的 MaterialEntry 组件 */}
        </div>
    );
};

export default MaterialsPage;
