import { MapsTile } from "../../../components/Maps/MapsTile";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Paper,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime,
  AccessTime as TimeIcon,
  DirectionsCar as CarIcon,
  VerifiedUser as VerifiedIcon,
  FlightTakeoff as FlightIcon,
  Directions as DirectionsIcon,
} from "@mui/icons-material";
import Dallas from "../../../assets/Dallas.jpeg";
import Houston from "../../../assets/Houston.jpeg";
import { Link as RouterLink } from "react-router-dom";
import { ContactItem, ContactInfoStrip, ServiceAreas } from "../../../common";

// Location Card Component
interface LocationCardProps {
  title: string;
  image: string;
  address: string[];
  hours: string;
  phone: string;
  email: string;
  serviceAreas: string[];
  pickupInfo: string;
  locationParam: string;
  mapsUrl: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  title,
  image,
  address,
  hours,
  phone,
  email,
  serviceAreas,
  pickupInfo,
  locationParam,
  mapsUrl,
}) => {
  return (
    <Card
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={`${title} office location`}
        sx={{ objectFit: "cover" }}
      />
      <CardContent
        sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>

        <Box sx={{ mb: 2.5 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            ADDRESS
          </Typography>
          {address.map((line, index) => (
            <Typography key={index} variant="body1">
              {line}
            </Typography>
          ))}
        </Box>

        <Grid container spacing={2} sx={{ mb: 2.5 }}>
          <Grid item xs={12} sm={6}>
            <ContactItem
              icon={<TimeIcon />}
              label="HOURS"
              value={hours}
              linkType="none"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <ContactItem
              icon={<PhoneIcon />}
              label="PHONE"
              value={phone}
              linkType="phone"
            />
          </Grid>

          <Grid item xs={12}>
            <ContactItem
              icon={<EmailIcon />}
              label="EMAIL"
              value={email}
              linkType="email"
            />
          </Grid>
        </Grid>

        <ServiceAreas areas={serviceAreas} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            PICKUP INFORMATION
          </Typography>
          <Typography variant="body2">{pickupInfo}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: "auto",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DirectionsIcon />}
            sx={{
              minHeight: "44px",
              flex: { xs: "1", sm: "1 1 auto" },
            }}
          >
            Get Directions
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to={`/booking?location=${locationParam}`}
            startIcon={<CarIcon />}
            sx={{
              minHeight: "44px",
              flex: { xs: "1", sm: "1 1 auto" },
            }}
          >
            Book a Ride
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export const Locations = () => {
  return (
    <>
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
            Locations
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Serving Greater Houston and Dallas with 24/7 premium transport.
          </Typography>
        </Container>
      </Box>

      {/* Quick Contact Info Strip */}
      <ContactInfoStrip
        items={[
          {
            icon: <PhoneIcon />,
            label: "Phone",
            value: "+1 (800) 347-0577",
            linkType: "phone",
          },
          {
            icon: <EmailIcon />,
            label: "Email",
            value: "info@ridesterling.com",
            linkType: "email",
          },
          {
            icon: <TimeIcon />,
            label: "Hours",
            value: "24/7 Service",
            linkType: "none",
          },
        ]}
      />

      {/* Location Cards */}
      <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 5 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <LocationCard
              title="Houston, TX"
              image={Houston}
              address={[
                "2800 Post Oak Blvd",
                "Suite 4100",
                "Houston, TX 77056",
              ]}
              hours="Open 24/7"
              phone="(713) 555-1234"
              email="houston@ridesterling.com"
              serviceAreas={[
                "George Bush Intercontinental Airport (IAH)",
                "William P. Hobby Airport (HOU)",
                "Greater Houston metropolitan area",
                "Corporate and event transport",
              ]}
              pickupInfo="For airport pickups, our driver will meet you at baggage claim with a name sign. For hotel pickups, we'll meet you in the lobby."
              locationParam="houston"
              mapsUrl="https://maps.google.com/?q=2800+Post+Oak+Blvd+Houston+TX+77056"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocationCard
              title="Dallas, TX"
              image={Dallas}
              address={["1700 Pacific Ave", "Suite 3200", "Dallas, TX 75201"]}
              hours="Open 24/7"
              phone="(214) 555-5678"
              email="dallas@ridesterling.com"
              serviceAreas={[
                "Dallas/Fort Worth International Airport (DFW)",
                "Dallas Love Field Airport (DAL)",
                "Greater Dallas-Fort Worth metropolitan area",
                "Corporate and event transport",
              ]}
              pickupInfo="For airport pickups, our driver will meet you at baggage claim with a name sign. For hotel pickups, we'll meet you in the lobby."
              locationParam="dallas"
              mapsUrl="https://maps.google.com/?q=1700+Pacific+Ave+Dallas+TX+75201"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Proof Points */}
      <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 5 } }}>
        <Paper
          elevation={1}
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            backgroundColor: "background.paper",
          }}
        >
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={6} sm={3} sx={{ textAlign: "center" }}>
              <VerifiedIcon color="primary" sx={{ fontSize: 36, mb: 1 }} />
              <Typography variant="body2" fontWeight="medium">
                Licensed & Insured
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} sx={{ textAlign: "center" }}>
              <FlightIcon color="primary" sx={{ fontSize: 36, mb: 1 }} />
              <Typography variant="body2" fontWeight="medium">
                Flight Tracking
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} sx={{ textAlign: "center" }}>
              <CarIcon color="primary" sx={{ fontSize: 36, mb: 1 }} />
              <Typography variant="body2" fontWeight="medium">
                Premium Fleet
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} sx={{ textAlign: "center" }}>
              <AccessTime color="primary" sx={{ fontSize: 36, mb: 1 }} />
              <Typography variant="body2" fontWeight="medium">
                24/7 Availability
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Map Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 4, sm: 5 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            fontWeight: "bold",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Our Coverage Areas
        </Typography>
        <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
          <MapsTile />
        </Box>
      </Container>
    </>
  );
};
