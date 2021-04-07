import React from 'react';
import Grid from '@material-ui/core/Grid';



export default function Header(props) {
  return (
    <>
      <Grid container style={{ backgroundColor: 'lightBlue', padding: '0, 20px, 0, 20px' }}>
        <Grid item xs={4}>
          <h2>Thee Store</h2>
        </Grid>
      </Grid>
    </>
  )
}