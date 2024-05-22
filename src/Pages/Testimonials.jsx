import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";

function Testimonials() {
  const Testimonial = [
    {
      id: 1,
      company: "XYZ",
      name: "Name",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ratings: "",
      desc: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all",
    },
    {
      id: 2,
      company: "XYZ",
      name: "Name",
      image:
        "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ratings: "",
      desc: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all",
    },
    {
      id: 3,
      company: "XYZ",
      name: "Name",
      image:
        "https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ratings: "",
      desc: "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all",
    },
  ];

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div data-aos="zoom-out">
      <Box margin justifyContent="center">
        <Grid container spacing={1}>
          {Testimonial.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Adjust the xs, sm, md values based on your design preferences */}
              <Card style={{ border: "2px solid black" }}>
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt={testimonial.name}
                      src={testimonial.image}
                      sx={{
                        width: isMobile ? 50 : 70,
                        height: isMobile ? 50 : 70,
                      }}
                    />
                    <Typography variant="body1" style={{ marginLeft: "10px" }}>
                      - {testimonial.company}
                    </Typography>
                  </div>
                  <Typography variant="h5">{testimonial.name}</Typography>
                  <Typography variant="body1">{testimonial.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Testimonials;
