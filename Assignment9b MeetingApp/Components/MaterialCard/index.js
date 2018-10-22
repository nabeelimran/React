import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../../logo.svg";
import Carousal from '../Carousel'




const styles = {
  card: {
    maxWidth: 345,
    height:400,
  },
  media: {
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea disableTouchRipple = {true}>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="200"
          image={logo}
          draggable="false"
          title="Contemplative Reptile"
        /> */}
        <Carousal />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name
          </Typography>
          <Typography component="p">
            Nick name
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);