import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from '../component/Title';

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: '25px 50px',
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

      </div>
    </div>
  );
}

export default withStyles(styles)(Project);
