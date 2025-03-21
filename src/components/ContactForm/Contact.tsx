import { IChangeEvent } from "@rjsf/core";
import Form from "@rjsf/material-ui";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { FormEvent, useRef, useState } from "react";
import { schema, uiSchema } from "./constants";
import { SuccessDialog } from "./SuccessDialog";
import { ThemeProvider } from "@mui/material";
import { whiteTheme } from "../../theme";

export const ContactForm = () => {
  const formRef = useRef<any>(null);
  const [dialog, setDialog] = useState(false);

  const onSubmit = (
    data: IChangeEvent<any, RJSFSchema, any>,
    event: FormEvent<any>
  ) => {
    console.log("Data submitted: ", data.formData);

    formRef.current.reset();
    setDialog(true);
    setTimeout(() => {
      setDialog(false);
    }, 3000);
  };

  return (
    <>
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
    </>
  );
};
