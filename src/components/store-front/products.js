import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';

const Products = (props) => {
  return (
    <>
      <Paper>
        <Typography variant="h4" component='h4'> Browse our Categories </Typography>
        <Button>Electronics</Button>
        <Button>Foods</Button>
        <Grid container justify="center" spacing={5}>
          {props.products.productList.map(product => {
            return (
              <Grid item>
                <Card>
                  <CardHeader title={product.name} />
                  <CardContent>
                    <Typography variant="p" component="p"> filler text for now...</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton> Add to Cart </IconButton>
                    <IconButton> View Details </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = {
  inactive,
  active,
  getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);