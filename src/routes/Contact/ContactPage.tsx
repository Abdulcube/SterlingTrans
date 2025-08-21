import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { RefactoredContactForm } from "./components";
import { GoogleMapComponent } from "../../components/Maps/GoogleMap";
import { ContactItem, ContactInfoStrip } from "../../common";

export const ContactPage = () => {
  const theme = useTheme();
  // Theme will be used for spacing and responsive styling

  return (
    <Box
      sx={{
        pb: `calc(${theme.spacing(6)} + env(safe-area-inset-bottom, 0px))`,
      }}
    >
      {/* Page Header */}
      <Box
        sx={{
          py: { xs: 4, sm: 6, md: 8 },
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" color="text.secondary">
            We're available 24/7 for airport transfers and scheduled rides.
          </Typography>
        </Container>
      </Box>

      {/* Quick Contact Info Strip */}
      <Container maxWidth="lg" sx={{ my: { xs: 3, sm: 4 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                height: "100%",
                minHeight: "90px",
              }}
            >
              <ContactItem
                icon={<PhoneIcon />}
                label="Phone"
                value="+1 (800) 347-0577"
                linkType="phone"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                height: "100%",
                minHeight: "90px",
              }}
            >
              <ContactItem
                icon={<EmailIcon />}
                label="Email"
                value="info@ridesterling.com"
                linkType="email"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                height: "100%",
                minHeight: "90px",
              }}
            >
              <ContactItem
                icon={<TimeIcon />}
                label="Hours"
                value="24/7 Service"
                linkType="none"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                height: "100%",
                minHeight: "90px",
              }}
            >
              <ContactItem
                icon={<LocationIcon />}
                label="Service Areas"
                value="Houston & Dallas"
                linkType="none"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ my: { xs: 4, sm: 6 } }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <RefactoredContactForm />
          </Grid>

          {/* Reassurance Content */}
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
                Our Service Areas
              </Typography>
              <Box
                sx={{
                  height: { xs: "300px", md: "350px" },
                  mb: 4,
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <GoogleMapComponent />
              </Box>

              <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  How Booking Works
                </Typography>

                <Box sx={{ display: "flex", alignItems: "flex-start", mt: 2 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    1
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      Request
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Submit your transportation details using our simple form.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mt: 3 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    2
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      Confirm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Receive a quote and confirm your booking details.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mt: 3 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  >
                    3
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      Ride
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Enjoy a comfortable, professional transportation
                      experience.
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Frequently Asked Questions
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    gutterBottom
                  >
                    How quickly will I receive a response?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    We typically respond within 1-2 hours during business hours,
                    and within 12 hours outside of business hours.
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    gutterBottom
                  >
                    Do you offer flight tracking?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yes, we track all flights and adjust pickup times
                    automatically for early or delayed arrivals.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
