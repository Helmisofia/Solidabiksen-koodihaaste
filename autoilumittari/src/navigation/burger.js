import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CarOne from '../components/carOne';
import CarTwo from '../components/carTwo';
import CarThree from '../components/carThree';
import MenuIcon from '@material-ui/icons/Menu';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    const [value, setValue] = useState(0);
    const ChangeToCarOne = (event, val) => { setValue(0); }
    const ChangeToCarTwo = (event, val) => { setValue(1); }
    const ChangeToCarThree = (event, val) => { setValue(2); }

    return (

        <div>
            <appBar position='static'>
                <toolbar>
                    <IconButton onClick={handleOpen}><MenuIcon /></IconButton>
                </toolbar>
            </appBar>

            <Drawer
                anchor='left' open={open} onClick={handleClose}>
                <List>
                    <ListItem button value={value} onClick={ChangeToCarOne}>
                        <ListItemIcon><DirectionsCar /></ListItemIcon>
                        <ListItemText>Auto A</ListItemText>

                    </ListItem>

                    <ListItem button value={value} onClick={ChangeToCarTwo}>
                        <ListItemIcon><DirectionsCar /></ListItemIcon>
                        <ListItemText>Auto B</ListItemText>
                    </ListItem>

                    <ListItem button value={value} onClick={ChangeToCarThree}>
                        <ListItemIcon><DirectionsCar /></ListItemIcon>
                        <ListItemText>Auto C</ListItemText>
                    </ListItem>

                </List>

            </Drawer>

            {value === 0 && <CarOne />}
            {value === 1 && <CarTwo />}
            {value === 2 && <CarThree />}

        </div>
    );
}

ResponsiveDrawer.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;