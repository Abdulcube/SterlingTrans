import express from "express";

import dotenv from "dotenv";
import cors from "cors"; 

import nodemailer from "nodemailer";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("/api/weather", async (req, res) => {
  res.json({ message: process.env.WEATHER_API_KEY });
});

app.post("/api/contact", async (req, res) => {
  console.log(req.body);
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: "abdulrahman.shaaeldin@gmail.com",
    subject: "Sterling Website Contact: " + req.body.name,

    text: `Name: ${req.body.name}\nPhone: ${req.body.phone}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);

  res.json({ message: "Message sent: " + info.messageId });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
