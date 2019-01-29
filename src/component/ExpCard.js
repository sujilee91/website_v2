import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import CardContent from '@material-ui/core/CardContent';
import tap from '../images/tap.png';
import showpass from '../images/showpass.jpg';
import cm from '../images/cm.png';
import oil from '../images/client.png'

const styles = () => ({
  root: {
    animation: 'zoom 0.5s'
  },
  image: {
    height: '310px',
    maxWidth: '365px',
    width: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});

class ExperienceCard extends React.Component{
  constructor(props,state) {
    super(props)

    this.state = {
     enter: false,
     exp: this.props.exp
    }
  };
  componentDidUpdate(prevProps){
    if(prevProps.exp !== this.props.exp){
      this.setState({enter: !this.state.enter})
    }
  }
  render()
  {
    const {classes, exp} = this.props;
    return (
      <>
        {exp === 'tap' && (
          <Fade in={exp === 'tap'} timeout={{ enter: 1000, exit: 1000 }}>
            <Card className={classes.root}>
              <div className={classes.imageContianer}>
                <img src={tap} className={classes.image} alt={exp}/>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    TapTapQuote
                </Typography>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
              </CardContent>
            </Card>
          </Fade>
        )}
        {exp === 'showpass' && (
          <Fade in={exp === 'showpass'} timeout={{ enter: 1000, exit: 1000 }}>
            <Card className={classes.root}>
              <div className={classes.imageContianer}>
              <img src={showpass} className={classes.image} alt={exp}/>
            </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Showpass
                </Typography>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
              </CardContent>
            </Card>
          </Fade>
        )}
        {exp === 'critical' && (
          <Fade in={exp === 'critical'} timeout={{ enter: 1000, exit: 1000 }}>
            <Card className={classes.root}>
              <div className={classes.imageContianer}>
                <img src={cm} className={classes.image} alt={exp}/>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Critical Mass
                </Typography>
                <Typography component="p">

                </Typography>
              </CardContent>
            </Card>
          </Fade>
        )}
        {exp === 'oil' && (
          <Fade in={exp === 'oil'} timeout={{ enter: 1000, exit: 1000 }}>
            <Card className={classes.root}>
              <div className={classes.imageContianer}>
                <img src={oil} className={classes.image} alt={exp}/>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Oil & Gas Industry Client
                </Typography>
                <Typography component="p">
                  Build HTML5 based Web & Mobile App for the graduation project for oil & gas industry client.
                </Typography>
              </CardContent>
            </Card>
          </Fade>
        )}
      </>
      )
    }
}

export default withStyles(styles)(ExperienceCard);
