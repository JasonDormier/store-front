import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CategoryViewer from './categories.js';
import { connect } from 'react-redux';
import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';

const productsViewer = (props) => {
  return (
    <>
      <CategoryViewer />
      <Paper>
        <Grid container justify="center" spacing={5}>
          {props.products.productList.map((product, index) => {
            if (product.category === props.activatedCategory) {

              return (
                <Grid item key={index}>
                  <Card>
                    <CardHeader title={product.name} />
                    <CardContent>
                      <Typography variant="p" component="p"> ${product.price}</Typography>

                    </CardContent>
                    <CardActions>
                      <IconButton onClick={() => props.addToCart(product)}> Add to Cart </IconButton>
                      <IconButton> View Details </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              )
            } else {
              return null;
            }
          })}
        </Grid>
      </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products, activatedCategory: state.categories.activatedCategory, activatedDescription: state.description
  }
}

const mapDispatchToProps = {
  inactive,
  active,
  getProducts,
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(productsViewer);