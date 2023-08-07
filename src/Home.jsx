import { Box, Grid, Typography } from "@mui/material/";
import { LinkedIn, GitHub } from "@mui/icons-material/";
import { Fade } from "react-awesome-reveal";
import "./styles/Home.css";

const gitHubUrl = "https://www.github.com/rhayes923";
const linkedInUrl = "https://www.linkedin.com/in/rhayes923/";

export default function Home() {
  return (
    <Box className="Box">
      <Grid container spacing={1} direction="column" alignItems="center">
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
