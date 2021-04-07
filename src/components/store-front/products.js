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

import { connect } from 'react-redux';
import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';

const productsViewer = (props) => {
  return (
    <>
      <Paper>
        <Typography variant="h4" component='h4'> Browse our Categories </Typography>
        <Button onClick={() => props.active('Electronics')}>Electronics</Button>
        <Button onClick={() => props.active('Food')}>Food</Button>
        <Grid container justify="center" spacing={5}>
          {props.products.productList.map((product, index) => {
            if (product.category === props.activatedCategory) {

              return (
                <Grid item key={index}>
                  <Card>
                    <CardHeader title={product.name} />
                    <CardContent>
                      <Typography variant="p" component="p"> ${product.price}</Typography>
                      <Typography variant="p" component="p"> {product.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton> Add to Cart </IconButton>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(productsViewer);