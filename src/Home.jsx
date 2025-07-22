import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { Fade } from "react-awesome-reveal";
import "./styles/Home.css";

const gitHubUrl = "https://www.github.com/rhayes923";
const linkedInUrl = "https://www.linkedin.com/in/rhayes923/";

export default function Home() {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const updatePosition = () => {
      const container = containerRef.current;
      if (container) {
        const translateX = (mouse.current.x - window.innerWidth / 2) / 60;
        const translateY = (mouse.current.y - window.innerHeight / 2) / 60;
        container.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
      requestRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="text" ref={containerRef}>
      <Box className="Box">
        <Grid container spacing={1} direction="column" alignItems="center">
          <Fade cascade direction="up">
            <Grid item pb={2}>
              <Typography variant="h1">Ryan Hayes</Typography>
            </Grid>
            <Grid item pb={2}>
              <Typography variant="h2">Full Stack Engineer</Typography>
            </Grid>
            <Grid container spacing={5} mt={1} fontSize="50px">
              <Grid item>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", cursor: "pointer", display: "inline-block" }}
                >
                  <LinkedIn fontSize="inherit" />
                </a>
              </Grid>
              <Grid item>
                <a
                  href={gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", cursor: "pointer", display: "inline-block" }}
                >
                  <GitHub fontSize="inherit" />
                </a>
              </Grid>
            </Grid>
          </Fade>
        </Grid>
      </Box>
    </div>
  );
}