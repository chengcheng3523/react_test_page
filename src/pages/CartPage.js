import React, { useState } from 'react';
import axios from 'axios';

const CartPage = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // 防止表單默認提交行為

        try {
            const response = await axios.post('http://localhost:5000/api/items/post', {
                name: name,
                id: id
            });
            console.log('成功發送請求，回應:', response.data);
        } catch (error) {
            console.error('發送請求失敗:', error);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    return (
        <div>
            <h1>Cart Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                    id:
                    <input type="text" value={id} onChange={handleIdChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CartPage;
