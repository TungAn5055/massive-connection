import React from 'react';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        // Thực hiện điều hướng bằng cách sử dụng history.push
        navigate('/about')
    };

    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the home page!</p>
            <Button type="primary" onClick={handleClick}>Primary Button</Button>
        </div>
    );
};

export default Home;
