import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ pageName }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const pages = [
        // eslint-disable-next-line react/jsx-key
        ["Kalkulator", "/calculator", <StopwatchIcon />],
    ];
    return (
        <>
            <AppBar position="fixed" sx={{ mb: 2 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        {pageName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                >
                    <List>
                        {pages.map((page) => (
                            <ListItem key={page[0]} disablePadding>
                                <ListItemButton component={Link} to={page[1]}>
                                    <ListItemIcon>{page[2]}</ListItemIcon>
                                    <ListItemText primary={page[0]} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
