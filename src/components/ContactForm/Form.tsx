import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Typography,
} from "@mui/material";

const LOCATIONS = ["Houston", "Dallas"];

export const ContactMuiForm = ({
  onSubmit,
}: {
  onSubmit: (data: any) => void;
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: [] as string[],
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (loc: string) => {
    setForm((prev) => ({
      ...prev,
      location: prev.location.includes(loc)
        ? prev.location.filter((l) => l !== loc)
        : [...prev.location, loc],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    onSubmit(form);
    setTimeout(() => setSubmitted(false), 3000);
    // Reset form if needed
    setForm({ name: "", email: "", location: [], phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body2" gutterBottom>
        Please provide the following information with any questions or for a
        quote.
      </Typography>
      <TextField
        fullWidth
        required
        margin="normal"
        label="Name"
        name="name"
        placeholder="Enter your name."
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        required
        margin="normal"
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email."
        value={form.email}
        onChange={handleChange}
      />
      <Typography sx={{ mt: 2 }}>
        What location(s) are you interested in?
      </Typography>
      <FormGroup row>
        {LOCATIONS.map((loc) => (
          <FormControlLabel
            key={loc}
            control={
              <Checkbox
                checked={form.location.includes(loc)}
                onChange={() => handleLocationChange(loc)}
                name="location"
              />
            }
            label={loc}
          />
        ))}
      </FormGroup>
      <TextField
        fullWidth
        required
        margin="normal"
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="Enter your phone number."
        value={form.phone}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Message"
        name="message"
        multiline
        minRows={3}
        value={form.message}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        disabled={submitted}
      >
        Submit
      </Button>
    </form>
  );
};
