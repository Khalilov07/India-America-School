import * as React from 'react';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import Links from './Links';

const drawerWidth = 280;

const Header = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                India & America School
            </Typography>
            <Divider />
            <List>
                <Links />
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', position: "sticky", zIndex: 99 }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar
                    sx={{
                        background: '#12161F',
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end'
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        India & America School
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={Link} to='/' sx={{ color: '#fff' }}>
                            Home
                        </Button>
                        <Button component={Link} to='/about' sx={{ color: '#fff' }}>
                            About Us
                        </Button>
                        <Button component={Link} to='/course' sx={{ color: '#fff' }}>
                            Courses
                        </Button>
                        {/* <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Button component={Link} to='/' sx={{ color: '#000', mx: 2 }}>
                                    Blog
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button component={Link} to='/' sx={{ color: '#000', mx: 2 }}>
                                    Blog
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button component={Link} to='/' sx={{ color: '#000', mx: 2 }}>
                                    Blog
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Button component={Link} to='/' sx={{ color: '#000', mx: 2 }}>
                                    Blog
                                </Button>
                            </MenuItem>
                        </Menu> */}
                        <Button component={Link} to='/blog' sx={{ color: '#fff' }}>
                            Blog
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'flex', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 0 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;