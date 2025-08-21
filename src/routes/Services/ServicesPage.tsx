import { Box, Typography, Container, Grid } from "@mui/material";
import {
  LocalAirport,
  FlightTakeoff,
  Assignment,
  DriveEta,
  MeetingRoom,
} from "@mui/icons-material";
import { CTABanner } from "../../common/BookBanner";
import Suburban from "../../assets/Suburban.png";
import Sprinter from "../../assets/Sprinter.png";
import bmw from "../../assets/bmw.png";
import { VehicleCard, ServiceItem } from "./components";

export const ServicesPage = () => {
  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          py: { xs: 4, sm: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            Services
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            Premium, reliable transport — available 24/7.
          </Typography>
        </Container>
      </Box>

      {/* Fleet Section */}
      <Container maxWidth="lg" sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            mb: { xs: 3, sm: 4, md: 5 },
            textAlign: { xs: "center", md: "left" },
            fontWeight: 600,
          }}
        >
          Fleet
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <VehicleCard
              title="Suburban"
              image={Suburban}
              capacity="Capacity: 7 passengers + luggage"
              description="Enjoy spacious comfort in our premium Suburbans. Perfect for groups and families with plenty of room for luggage, these vehicles offer a smooth ride with all the amenities you need."
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <VehicleCard
              title="Sprinter"
              image={Sprinter}
              capacity="Capacity: 14 passengers + luggage"
              description="Our Mercedes Sprinters are ideal for larger groups. With ample headroom, luxury seating, and generous luggage space, they provide the perfect balance of comfort and capacity."
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              mx: { xs: "auto", sm: 0 },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <VehicleCard
              title="Highlander"
              image={bmw}
              capacity="Capacity: 5 passengers + luggage"
              description="Our Highlanders offer a refined experience with excellent fuel economy and a smooth ride. Perfect for smaller groups or executive transport with sufficient space for luggage."
            />
          </Grid>
        </Grid>
      </Container>

      {/* Services Section */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: { xs: 3, sm: 4, md: 5 },
              textAlign: { xs: "center", md: "left" },
              fontWeight: 600,
            }}
          >
            What We Provide
          </Typography>

          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceItem
                icon={<LocalAirport fontSize="medium" />}
                title="Airport Transport"
                description="Reliable airport pickups and drop-offs with flight tracking and 60 minutes of complimentary wait time. We ensure you never miss your flight."
                index={0}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <ServiceItem
                icon={<FlightTakeoff fontSize="medium" />}
                title="Flight Tracking"
                description="Our system monitors your flight in real-time and adjusts your pickup schedule automatically if there are any delays or early arrivals."
                index={1}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <ServiceItem
                icon={<Assignment fontSize="medium" />}
                title="Manifest Creation"
                description="For group travel, we create detailed manifests with pickup times, locations, and passenger details to ensure smooth coordination."
                index={2}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <ServiceItem
                icon={<DriveEta fontSize="medium" />}
                title="General Transport"
                description="From corporate events to special occasions, we provide reliable transportation for all your needs with professional chauffeurs and immaculate vehicles."
                index={3}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <ServiceItem
                icon={<MeetingRoom fontSize="medium" />}
                title="Door-to-Door Meetup"
                description="Our chauffeurs will meet you at your specified location, assist with luggage, and ensure a seamless transition from door to destination."
                index={4}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call-to-Action Banner */}
      <Box sx={{ mt: { xs: 4, sm: 5, md: 6 } }}>
        <CTABanner
          title="Ready to Book Your Ride?"
          subtitle="Get a quick quote and confirm in minutes."
          buttonText="Book Now"
          buttonPath="/booking"
        />
      </Box>
    </Box>
  );
};
