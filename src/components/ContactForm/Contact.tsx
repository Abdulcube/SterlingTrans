import { useState } from "react";
import { SuccessDialog } from "./SuccessDialog";
import { Box, Paper } from "@mui/material";
import { ContactMuiForm } from "./Form";

export const ContactForm = () => {
  const [dialog, setDialog] = useState(false);

  const onSubmit = (
    data: any
  ) => {
    console.log("Data submitted: ", data);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => console.log(resData.message));

    setDialog(true);
    setTimeout(() => {
      setDialog(false);
    }, 3000);
  };

  return (
    <Box
      sx={{
        flex: 1,
        padding: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          flex: 1,
          borderRadius: "24px",
          padding: 3,
        }}
      >
        <ContactMuiForm onSubmit={onSubmit}/>
        <SuccessDialog dialog={dialog} setDialog={setDialog} />
      </Paper>
    </Box>
  );
};
