import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import classes from '*.module.css';

import logo from '../../assets/logo.png';
import useStyles from './styles';
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color="inherit">
         <Toolbar>
           <Typography varient='h6' className={classes.title} color='inherit'>
             <img src={logo} alt='stopNshop' height='25px' className={classes.image} />
              stopNshop
           </Typography>
           <div className={classes.grow} />
           <div className={classes.button}>
             <IconButton aria-label='Show cart items' color='inherit'>
               <Badge badgeContent={2} color='Secondary'>
                 <ShoppingCart />
               </Badge>
             </IconButton>
           </div>
         </Toolbar>
      </AppBar>    
    </>
  )
}

export default Navbar
