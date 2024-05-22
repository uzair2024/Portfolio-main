import { Avatar, Box, Typography } from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "react-vertical-timeline-component/style.min.css";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="center" width="100%" margin>
        <Avatar alt="Remy Sharp" src="" sx={{ width: 300, height: 300 }} />
      </Box>
      <Typography align="center" variant="h1">
        Hi There
      </Typography>
      <Typography align="center" variant="h2">
        I am Uzair Ahmed
      </Typography>
      <Typography align="center" variant="h4">
        Founder @{" "}
        <a href="https://cloudinfosolution.com/">Cloud Infosolution</a>
      </Typography>
      <Box data-aos="zoom-out" margin padding>
        <Typography align="center" variant="h5">
          Experienced consultant with a proven track record in the information
          technology and services sector.
          <br /> Proficient in Azure Cloud, Windows Server, Active Directory,
          IBM Servers, Dell Power Edge Servers, and Office 365.
          <br />I hold a Bachelors degree with a focus on Business/Commerce from
          Mumbai University, Mumbai.
          <br /> My extensive experience and expertise enable me to provide
          valuable insights and solutions to enhance your IT infrastructure and
          operations.
        </Typography>
      </Box>
    </>
  );
}
export default Home;
