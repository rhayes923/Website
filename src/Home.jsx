import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from "@mui/material/";
import { LinkedIn, GitHub } from "@mui/icons-material/";
import { Fade } from "react-awesome-reveal";
import "./styles/Home.css";

const gitHubUrl = "https://www.github.com/rhayes923";
const linkedInUrl = "https://www.linkedin.com/in/rhayes923/";

export default function Home() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector('.text');
    if (container) {
      const translateX = (mousePosition.x - window.innerWidth / 2) / 80;
      const translateY = (mousePosition.y - window.innerHeight / 2) / 80;
      container.style.setProperty('--translateX', `${translateX}px`);
      container.style.setProperty('--translateY', `${translateY}px`);
    }
  }, [mousePosition]);

  return (
    <Box className="Box">
      <Grid container spacing={1} direction="column" alignItems="center" className="text">
        <Fade cascade direction="up">
          <Grid item pb={2}>
            <Typography variant="h1">
              Ryan Hayes
            </Typography>
          </Grid>
          <Grid item pb={2}>
            <Typography variant="h2">
              Full Stack Engineer
            </Typography>
          </Grid>
          <Grid item pb={2}>
            <Typography variant="h2">
              Lockheed Martin
            </Typography>
          </Grid>
          <Grid container spacing={5} mt={1} fontSize="50px">
            <Grid item>
              <LinkedIn
                fontSize="inherit"
                cursor="pointer"
                onClick={() => window.open(linkedInUrl)}
              />
            </Grid>
            <Grid item>
              <GitHub
                fontSize="inherit"
                cursor="pointer"
                onClick={() => window.open(gitHubUrl)}
              />
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
}
