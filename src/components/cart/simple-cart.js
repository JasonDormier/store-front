import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { IconButton, makeStyles } from '@material-ui/core';
import { removeFromCart } from '../../store/cart.js'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  base: {
    width: '200px',
    color: 'darkGray',
  }
})

const SimpleCart = (props) => {
  const classy = useStyles();
  if (props.cart.cart.length > 0) {
    return (
      <Card className={classy.base}>
        <CardContent>
          {props.cart.cart.map((product, i) => {
            return (
              <>
                <Typography key={i}>
                  ${product.price} : {product.name}
                </Typography>
                <IconButton onClick={() => props.removeFromCart(product)}>
                  <DeleteIcon />
                </IconButton>
              </>
            )
          })}
        </CardContent>
      </Card>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {
  removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);