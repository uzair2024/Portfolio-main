import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const [state, setState] = useState({
    email: "",
    name: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const { name, number, email, message } = state;

  const handleChange = (name) => (event) => {
    setState({ ...state, error: false, [name]: event.target.value });
  };
  useEffect(() => {
    emailjs.init("5_4dS0oVbfs51lEG_");
  }, []);
  const handleDialogClose = () => {
    // Close the success dialog
    setSuccessDialogOpen(false);
  };
  const templateParams = {
    name: name,
    number: number,
    message: message,
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_lyvx20d",
        "template_wxqc6q8",
        templateParams,
        "5_4dS0oVbfs51lEG_"
      );
      console.log("SUCCESS!", response.status, response.text);
      setSuccessDialogOpen(true);
    } catch (err) {
      console.log("FAILED...", err);
    } finally {
      setLoading(false);
    }
    console.log("I'm inside");

    // Reset the form to its initial state
    setState({
      email: "",
      name: "",
      message: "",
      number: "",
    });
  };

  return (
    <div data-aos="zoom-in">
      <Box margin={1} justifyContent="center">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 450,
            mx: "auto",
            p: 2,
            border: "2px solid  #000000",
            borderRadius: "12px",
            boxShadow: 1,
          }}
        >
          <Typography variant="h4" align="center" mb={2}>
            Get in Touch{" "}
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={handleChange("name")}
              margin="normal"
              required
              // color="skyblue"
            />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={handleChange("email")}
              margin="normal"
              required
              type="email"
              //color="back"
            />
            <TextField
              fullWidth
              label="Number"
              value={number}
              onChange={handleChange("number")}
              margin="normal"
              required
              type="number"
            />
            <TextField
              fullWidth
              label="Message"
              value={message}
              onChange={handleChange("message")}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: "skyblue",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#111",
                },
              }}
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit"
              )}
            </Button>
            <Dialog open={successDialogOpen} onClose={handleDialogClose}>
              <DialogTitle>Success</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Message sent successfully!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleDialogClose}
                  sx={{
                    mt: 2,
                    backgroundColor: "skyblue",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#111",
                    },
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
