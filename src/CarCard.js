import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {Grid, Card ,Modal} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  grid: {
    width: "400px",
    margin: "20px",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "5px solid white",
  },
  image: {
    maxHeight: "600px",
    maxWidth: "400px",
  },
});

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const CarCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const img = props.img;
  return (
      <Grid item className={classes.grid} xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" src={img.user.profile_image} />
              }
              title={img.user.name}
              subheader={img.user.location}
            />
            <CardMedia
              className={classes.media}
              image={img.url}
              title={img.alt_description}
              onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
              <div style={modalStyle} className={classes.paper}>
                <img src={img.url} alt="Car image" className={classes.image} />
              </div>
            </Modal>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {img.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton>
              <FavoriteIcon />
              {img.user.total_likes}
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
  );
};

export default CarCard;
