import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                        <Link style={{ color: "#000" }} to='/'>
                            Home
                        </Link>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                        <Link style={{ color: "#000" }} to='/about'>
                            AboutUs
                        </Link>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                        <Link style={{ color: "#000" }} to='/course'>
                            Course
                        </Link>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                        <Link style={{ color: "#000" }} to='/blog'>
                            Blog
                        </Link>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </>
    );
};

export default Links;