export const DETAILS = {
  textFields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      helperText: "Required",
    },
    {
      name: "email",
      label: "Email",
      required: true,
      type: "text",
      helperText: "Provide a valid email",
    },
    {
      name: "income",
      label: "Annual Income",
      type: "number",
      required: true,
      helperText: "Required",
    },
    {
      name: "dob",
      label: "Birthday",
      type: "date",
      defaultValue: "2017-05-24",
    },

    {
      name: "colour",
      label: "Favourite Colour",
      type: "text",
    },
  ],
};
