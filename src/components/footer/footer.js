import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ({
  footer:{
    backgroundColor: 'lightBlue',
    marginTop: '20px'
  }
});
export default function Footer(props) {

  const styles = useStyles();
  return (
    <>
      <footer className={styles.footer}>
                <Typography variant='h5' align='center' gutterBottom>&copy; 2020 Javascript 401</Typography>
        <Typography variant='subtitle1' align='center' component='p'>React + Redux + Material UI</Typography>
      </footer>
    </>
  )
}