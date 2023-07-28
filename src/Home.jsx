import { Box, Grid, Typography } from "@mui/material/";
import { LinkedIn, GitHub } from "@mui/icons-material/";
import { Fade } from "react-awesome-reveal";
import "./assets/Home.css";

const gitHubUrl = "https://www.github.com/rhayes923";
const linkedInUrl = "https://www.linkedin.com/in/rhayes923/";

export default function Home() {
  return (
    <Box className="Box">
      <Grid container spacing={1} direction="column" alignItems="center">
        <Fade cascade direction="up">
          <Grid item>
            <Typography sx={{ fontSize: "5rem", fontFamily: "Caveat" }}>
              Ryan Hayes
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: "2rem", fontFamily: "Caveat" }}>
              Associate Full Stack Engineer
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: "2rem", fontFamily: "Caveat" }}>
              Lockheed Martin
            </Typography>
          </Grid>
          <Grid container spacing={5} sx={{ marginTop: "5px" }}>
            <Grid item>
              <LinkedIn
                sx={{ fontSize: 50, cursor: "pointer" }}
                onClick={() => window.open(linkedInUrl)}
              />
            </Grid>
            <Grid item>
              <GitHub
                sx={{ fontSize: 50, cursor: "pointer" }}
                onClick={() => window.open(gitHubUrl)}
              />
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
}
