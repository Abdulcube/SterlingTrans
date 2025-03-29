import { IChangeEvent } from "@rjsf/core";
import Form from "@rjsf/material-ui";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { FormEvent, useRef, useState } from "react";
import { schema, uiSchema } from "./constants";
import { SuccessDialog } from "./SuccessDialog";
import { Box, ThemeProvider } from "@mui/material";
import { whiteTheme } from "../../theme";

export const ContactForm = () => {
  const formRef = useRef<any>(null);
  const [dialog, setDialog] = useState(false);

  const onSubmit = async (
    data: IChangeEvent<any, RJSFSchema, any>,
    event: FormEvent<any>
  ) => {
    console.log("Data submitted: ", data.formData);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.formData),
    }).then((res) => res.json())
    .then((data) => console.log(data.message));

    formRef.current.reset();
    setDialog(true);
    setTimeout(() => {
      setDialog(false);
    }, 3000);
  };

  // const [index, setIndex] = useState();
  // console.log(process.env.REACT_APP_API_BASE_URL);


  return (
    <Box
      sx={{
        flex: 1,
        padding: 2,
      }}
    >
      <ThemeProvider theme={whiteTheme}>
        <Form
          schema={schema}
          ref={formRef}
          validator={validator}
          onSubmit={onSubmit}
          uiSchema={uiSchema}
        />
      </ThemeProvider>
      <SuccessDialog dialog={dialog} setDialog={setDialog} />
    </Box>
  );
};
