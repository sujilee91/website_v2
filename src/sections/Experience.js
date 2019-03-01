import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Title from '../component/Title';
import ExperienceTile from '../component/ExpTile';
import ExperienceCard from '../component/ExpCard';


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

class Experiences extends React.Component {
  constructor(props,state) {
    super(props)

    this.state = {
     selectedCard: ''
    }
  }

  render(){
    const { classes } = this.props;
    const skillList = 
    {
      tap: ['ReactJS', 'TypeScript', 'Material-UI', 'SCSS', 'Storybook JS', 'PouchDB'],
      showpass: ['AngularJS', 'Bootstrap', 'ES6', 'SCSS', 'Material-UI','Wordpress', 'PHP', 'JQuery', 'Python', 'PostgreSQL', 'Adobe Illustrator'],
      critical: ['ReactJS', 'CMS','ES6', 'CSS'],
      oil: ['Bootstrap', 'Spring MVC', 'MySQL','JavaEE']
    };

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Title value={'Experience'}/>
          <Grid container={true} spacing={40}>
            <Grid item={true} xs={12} md={8}>
              <ExperienceTile year={'2018'} from={'July'} to={'Current'} title={'Frontend Developer'} company={'TapTapQuote'} divider={true} description={skillList.tap} 
                onClick={()=>{
                  this.setState({selectedCard:'tap'})
                }}/>
              <ExperienceTile year={'2017'} from={'Sept'} to={'July, 2018'} title={'Frontend UX/UI Developer'} company={'Showpass'} divider={false} description={skillList.showpass} 
                onClick={()=>{
                  this.setState({selectedCard:'showpass'})
                }}/>
              <ExperienceTile from={'May'} to={'Aug'} title={'Developer Intern'} company={'CriticalMass'} divider={true} description={skillList.critical} 
                onClick={()=>{
                  this.setState({selectedCard:'critical'})
                }}/>
              <ExperienceTile year={'2016'} from={'June'} to={'April'} title={'Capstone Project'} company={'Oil & Gas Industry'} divider={false} description={skillList.oil}
               onClick={()=>{
                this.setState({selectedCard:'oil'})
              }}/>
            </Grid>
            <Grid item={true} xs={12} md={4}>
              {this.state.selectedCard && <ExperienceCard exp={this.state.selectedCard}/>}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };
}



export default withStyles(styles)(Experiences);
