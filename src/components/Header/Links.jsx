import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, MenuItem, Menu } from '@mui/material';

const Links = () => {
    const menuItems = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Course', to: '/course' },
        { label: 'Blog', to: '/blog' },
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <Link style={{ color: "#000" }} to={item.to}>
                                {item.label}
                            </Link>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
};

export default Links;