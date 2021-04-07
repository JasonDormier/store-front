import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';

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
              <Typography key={i}>
                ${product.price} : {product.name}
              </Typography>
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

export default connect(mapStateToProps)(SimpleCart);