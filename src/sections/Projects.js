import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from '../component/Title';
import theme from '../styles/theme'
import { MuiThemeProvider } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  resumeButton: {
    fontSize: '1rem',
    padding: '10px 30px',
    justifyContent: 'center'
  }
});

function Project(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'Latest Projects'}/>
        {/* <MuiThemeProvider theme={theme}>

        </MuiThemeProvider> */}
      </div>
    </div>
  );
}

export default withStyles(styles)(Project);
