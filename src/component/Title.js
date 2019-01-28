import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TypographyProps as MuiTypographyProps, default as MuiTypography } from '@material-ui/core/Typography'


const styles = {
  root: {
    fontFamily: '"Hind Vadodara", sans-serif',
    fontSize: '2.3rem',
    fontWeight: 900,
    lineHeight: 1.04,
    letterSpacing: '0em',
    color: '#484848',
    marginBottom: '30px'
  }
};

function Title(props) {
  const { classes, value } = props;
  return (
    <div className={classes.root}>
      {value.toUpperCase()}
    </div>
  );
}

export default withStyles(styles)(Title);
