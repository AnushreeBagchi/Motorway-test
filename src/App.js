import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import CarCard from "./CarCard";
import NavBar from "./NavBar";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    
    <Grid container>
      <Grid item xs={12}>
        <NavBar/>
        <Grid container justify="center" spacing={1}>
          {images && images.map((img) => <CarCard key={img.id} img={img} />)}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
