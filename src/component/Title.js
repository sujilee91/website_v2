import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from '../styles/theme'
const styles = {
  root: {
    color: '#484848',
    marginBottom: '35px'
  }
};

function Title(props) {
  const { classes, value } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Typography variant="h2" className={classes.root}>
        {value.toUpperCase()}
      </Typography>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Title);
