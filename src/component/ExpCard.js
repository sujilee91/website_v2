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
import theme from '../styles/theme'

const styles = (theme) => ({
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
  description: {
    fontFamily: 'Hind'
  },
  specs: {
    marginTop: theme.typography.pxToRem(10),
    fontStyle: 'italic'
  }
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
                <Typography component="p" className={classes.description}>
                    Create new component and page / Update page with responsiveness.
                    <div className={classes.specs}>
                      ReactJS, Typescript, Material-ui
                    </div>
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
                <Typography gutterBottom variant="h5" funncomponent="h2">
                    Showpass
                </Typography>
                <Typography component="p"  className={classes.description}>
                    Deliver new feature / Update existing page client Wordpress page, and Wordpress extension.
                    <div className={classes.specs}>
                      AngularJS, Angular Material, PHP, Wordpress
                    </div>
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
                <Typography component="p"  className={classes.description}>
                  Participated on team project for client and content management.Create personal projects using React.
                  <div className={classes.specs}>
                    Bitbucket/Jira, SASS, ReactJS, CMS
                  </div>
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
                <Typography component="p" className={classes.description}>
                  Build HTML5 based web, mobile App as a graduation project for oil & gas industry client.
                  <div className={classes.specs}>
                    Bootstrap, JavaEE, SpringMVC, MySQL
                  </div>
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
