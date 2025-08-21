import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Paper,
  Typography,
  Alert,
  Snackbar,
  Link,
  CircularProgress,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormHelperText,
} from "@mui/material";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  location: string[];
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  message?: string;
}

const LOCATIONS = ["Houston", "Dallas"];

export const RefactoredContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const validateField = (
    name: string,
    value: string | string[]
  ): string | undefined => {
    if (name === "name" && !value) {
      return "Name is required";
    }

    if (name === "email") {
      if (!value) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value as string))
        return "Please enter a valid email address";
    }

    if (name === "phone") {
      if (!value) return "Phone number is required";
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!(value as string).match(phoneRegex))
        return "Please enter a valid phone number";
    }

    if (name === "location" && (value as string[]).length === 0) {
      return "Please select at least one location";
    }

    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate each field
    Object.entries(formData).forEach(([key, value]) => {
      const fieldError = validateField(key, value);
      if (fieldError) {
        newErrors[key as keyof FormErrors] = fieldError;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Mark field as touched
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }

    // Validate the field
    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleLocationChange = (loc: string) => {
    const newLocations = formData.location.includes(loc)
      ? formData.location.filter((l) => l !== loc)
      : [...formData.location, loc];

    setFormData((prev) => ({
      ...prev,
      location: newLocations,
    }));

    // Mark field as touched
    if (!touched.location) {
      setTouched((prev) => ({ ...prev, location: true }));
    }

    // Validate the field
    const fieldError = validateField("location", newLocations);
    setErrors((prev) => ({
      ...prev,
      location: fieldError,
    }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate on blur
    const value = formData[field as keyof FormData];
    const fieldError = validateField(field, value);

    setErrors((prev) => ({
      ...prev,
      [field]: fieldError,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    // Validate all fields
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    // Submit form data
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData.message);
        setSuccessOpen(true);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          location: [],
        });
        setTouched({});
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: { xs: 2, sm: 3 },
        overflow: "hidden",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: { xs: 2.5, sm: 4 } }}
        noValidate
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Fill out the form below and we'll get back to you as soon as possible.
        </Typography>

        <TextField
          fullWidth
          required
          margin="normal"
          variant="outlined"
          label="Name"
          name="name"
          placeholder="Enter your name."
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          disabled={submitting}
          inputProps={{
            "aria-label": "Name",
            "aria-required": "true",
          }}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          required
          margin="normal"
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          placeholder="Enter your email."
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          disabled={submitting}
          inputProps={{
            "aria-label": "Email",
            "aria-required": "true",
          }}
          sx={{ mb: 2 }}
        />

        <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
          What location(s) are you interested in?*
        </Typography>

        <FormGroup row>
          {LOCATIONS.map((loc) => (
            <FormControlLabel
              key={loc}
              control={
                <Checkbox
                  checked={formData.location.includes(loc)}
                  onChange={() => handleLocationChange(loc)}
                  name="location"
                  disabled={submitting}
                  sx={{
                    minHeight: "44px",
                    minWidth: "44px",
                  }}
                />
              }
              label={loc}
            />
          ))}
        </FormGroup>

        {touched.location && errors.location && (
          <FormHelperText error sx={{ mt: -1, mb: 2 }}>
            {errors.location}
          </FormHelperText>
        )}

        <TextField
          fullWidth
          required
          margin="normal"
          variant="outlined"
          label="Phone Number"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="Enter your phone number."
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur("phone")}
          error={touched.phone && !!errors.phone}
          helperText={touched.phone && errors.phone}
          disabled={submitting}
          inputProps={{
            "aria-label": "Phone Number",
            "aria-required": "true",
          }}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Message"
          name="message"
          multiline
          minRows={4}
          maxRows={8}
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          error={touched.message && !!errors.message}
          helperText={touched.message && errors.message}
          disabled={submitting}
          inputProps={{
            "aria-label": "Message",
          }}
          sx={{ mb: 3 }}
        />

        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ flex: isMobile ? "auto" : 1 }}>
            <Link
              href="mailto:info@ridesterling.com"
              variant="body2"
              color="text.secondary"
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              Prefer email? info@ridesterling.com
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: isMobile ? "100%" : "auto",
              position: "relative",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={submitting}
              sx={{
                minHeight: "48px",
                fontWeight: 500,
                width: isMobile ? "100%" : "auto",
                minWidth: "180px",
              }}
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>

            {submitting && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: isMobile ? "50%" : "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your message has been sent successfully! We'll be in touch soon.
        </Alert>
      </Snackbar>
    </Paper>
  );
};
