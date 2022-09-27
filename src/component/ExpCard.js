import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Fade from '@material-ui/core/Fade'
import CardContent from '@material-ui/core/CardContent'
import tap from '../images/tap.png'
import showpass from '../images/showpass.jpg'
import cm from '../images/cm.png'
import oil from '../images/client.png'

const styles = (theme) => ({
  root: {
    animation: 'zoom 0.5s',
  },
  image: {
    height: '310px',
    maxWidth: '365px',
    width: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    fontFamily: 'Hind',
  },
  specs: {
    marginTop: theme.typography.pxToRem(10),
    fontStyle: 'italic',
    display: 'block',
  },
})

const ExperienceCard = ({ classes, exp }) => {
  return (
    <>
      {exp === 'sh' && (
        <Fade in={exp === 'sh'} timeout={{ enter: 1000, exit: 1000 }}>
          <Card className={classes.root}>
            <div className={classes.imageContianer}>
              <img src={tap} className={classes.image} alt={exp} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                ShipHero
              </Typography>
              <Typography component="p" className={classes.description}>
                Create new component and page / Update page with responsiveness.
                <span className={classes.specs}>
                  ReactJS, Typescript, StorybookJS, Figma,
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      )}
      {exp === 'tap' && (
        <Fade in={exp === 'tap'} timeout={{ enter: 1000, exit: 1000 }}>
          <Card className={classes.root}>
            <div className={classes.imageContianer}>
              <img src={tap} className={classes.image} alt={exp} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                PaintScout
              </Typography>
              <Typography component="p" className={classes.description}>
                Create new component and page / Update page with responsiveness.
                <span className={classes.specs}>
                  ReactJS, Typescript, Material-ui
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      )}
      {exp === 'showpass' && (
        <Fade in={exp === 'showpass'} timeout={{ enter: 1000, exit: 1000 }}>
          <Card className={classes.root}>
            <div className={classes.imageContianer}>
              <img src={showpass} className={classes.image} alt={exp} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h3" funncomponent="h3">
                Showpass
              </Typography>
              <Typography component="p" className={classes.description}>
                Deliver new feature / Update existing page client Wordpress
                page, and Wordpress extension.
                <span className={classes.specs}>
                  AngularJS, Angular Material, PHP, Wordpress
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      )}
      {exp === 'critical' && (
        <Fade in={exp === 'critical'} timeout={{ enter: 1000, exit: 1000 }}>
          <Card className={classes.root}>
            <div className={classes.imageContianer}>
              <img src={cm} className={classes.image} alt={exp} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Critical Mass
              </Typography>
              <Typography component="p" className={classes.description}>
                Participated on team project for client and content
                management.Create personal projects using React.
                <span className={classes.specs}>
                  Bitbucket/Jira, SASS, ReactJS, CMS
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      )}
      {exp === 'oil' && (
        <Fade in={exp === 'oil'} timeout={{ enter: 1000, exit: 1000 }}>
          <Card className={classes.root}>
            <div className={classes.imageContianer}>
              <img src={oil} className={classes.image} alt={exp} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Oil & Gas Industry Client
              </Typography>
              <Typography component="p" className={classes.description}>
                Build HTML5 based web, mobile App as a graduation project for
                oil & gas industry client.
                <span className={classes.specs}>
                  Bootstrap, JavaEE, SpringMVC, MySQL
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      )}
    </>
  )
}

export default withStyles(styles)(ExperienceCard)
