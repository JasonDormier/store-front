import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToolBar from "@material-ui/core/Toolbar";
//import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/styles';
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    alignSelf: "left",
    textAlign: "left",
  },
});

function Header(props) {
  console.log('cart #: ', props.cart.cart.length);
  const styles = useStyles();
  return (
    <>
      <ToolBar className={styles.toolBar}>

        <Grid container style={{ backgroundColor: 'lightBlue' }}>
          <Grid item xs={4}>
            <h2>Thee Store</h2>
            <Grid item xs className={StylesProvider.button}>
              <NavLink to="/cart"><ShoppingCartIcon />Cart ({props.cart.cart.length})</NavLink>
            </Grid>
          </Grid>
        </Grid>
      </ToolBar>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Header);