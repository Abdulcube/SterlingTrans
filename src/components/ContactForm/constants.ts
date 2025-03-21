import { RJSFSchema, UiSchema } from "@rjsf/utils";

export const schema: RJSFSchema = {
    title: "Contact Us",
    description: "Please provide the following information with any questions or for a quote.",
    type: "object",
    required: ["name", "email", "phone"],
    properties: {
      name: { type: "string", title: "Name" },
      email: { type: "string", title: "Email" },
      phone: {
        type: "string",
        title: "Phone Number",
      },
      message: {
        type: "string",
        title: "Message",
      },
    },
  };
export const uiSchema: UiSchema = {
    name: {
      "ui:emptyValue": "",
      "ui:placeholder": "Enter your name.",
    },
    email: {
      "ui:options": {
        inputType: "email",
      },
      "ui:placeholder": "Enter your email.",
    },
    phone: {
      "ui:options": {
        inputType: "tel",
      },
      "ui:placeholder": "Enter your phone number.",
    },
    message: {
      "ui:widget": "textarea",
    },
  };
