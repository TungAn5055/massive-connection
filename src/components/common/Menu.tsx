import React, {useCallback, useEffect, useState} from 'react';
import { Menu } from 'antd';
import {Link, Route, useLocation, useNavigate} from 'react-router-dom';
import routes from "@/routes";

const CustomMenu: React.FC = () => {
    let navigate = useNavigate();
    const location = useLocation()
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        setCurrent(e.key);
        navigate(`/${e.key}`)
    };

    useEffect(() => {
        if(location?.pathname) {
            if(location?.pathname === '/') {
                setCurrent('home')
            } else {
                setCurrent( location?.pathname.replace('/', ""))
            }
        }
    }, [location?.pathname]);

    return (
        <Menu mode="horizontal" selectedKeys={[current]}>
            {routes.map((route) => (
                <Menu.Item key={route?.key}>
                    <Link to={route?.path}>{route?.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default CustomMenu;
