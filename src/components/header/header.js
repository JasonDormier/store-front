import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToolBar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/styles';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  button: {
    alignSelf: "right",
    textAlign: "right",
  },
});

export default function Header(props) {
  const styles = useStyles();
  return (
    <>
      <ToolBar className={styles.toolBar}>

        <Grid container style={{ backgroundColor: 'lightBlue', padding: '0, 20px, 0, 20px' }}>
          <Grid item xs={4}>
            <h2>Thee Store</h2>
            <Grid item xs className={StylesProvider.button}>
              <Button>Cart (0)</Button>
            </Grid>
          </Grid>
        </Grid>
      </ToolBar>
    </>
  )
}