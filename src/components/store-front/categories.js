import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { inactive, active } from '../../store/categories.js';

//import * as action from '../../store/categories.js';


const CategoryViewer = (props) => {
  return (
    <>
      <Typography variant="h4" component='h4'> Browse our Categories </Typography>
      <Button onClick={() => props.active('Electronics', 'things that have batteries and plug in')}>Electronics</Button>
      <Button onClick={() => props.active('Food', 'things that you put in your mouth')}>Food</Button>
      <Typography variant="p" component="p"> {props.activatedDescription}</Typography>

    </>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    activatedCategory: state.categories.activatedCategory,
    activatedDescription: state.categories.activatedDescription
  }
}

const mapDispatchToProps = {
  inactive,
  active,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewer);