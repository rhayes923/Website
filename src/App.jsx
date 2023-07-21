import { Box, Grid, Typography } from "@mui/material/";
import { LinkedIn, GitHub } from "@mui/icons-material/";
import Fade from "react-reveal/Fade";
import "./assets/App.css";

const gitHubUrl = "https://www.github.com/rhayes923";
const linkedInUrl = "https://www.linkedin.com/in/rhayes923/";

export default function App() {
  return (
    <Box className="Box">
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "80vh" }}
      >
        <Fade bottom cascade>
          <Typography sx={{ fontSize: "5rem", fontFamily: "Caveat" }}>
            Ryan Hayes
          </Typography>
          <Typography sx={{ fontSize: "3rem", fontFamily: "Caveat" }}>
            Associate Full Stack Engineer
          </Typography>
          <Typography sx={{ fontSize: "3rem", fontFamily: "Caveat" }}>
            Lockheed Martin
          </Typography>
          <Grid container spacing={5} sx={{ marginTop: "5px" }}>
            <Grid item>
              <LinkedIn
                sx={{ fontSize: 50, color: "#0077B5", cursor: "pointer" }}
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
