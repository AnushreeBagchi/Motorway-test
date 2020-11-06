import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { DETAILS } from "./constants";

const textStyle = {
  width: "100%",
  marginBottom: "15px",
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        income: "",
        color: "",
        dob: "",
        isDisabled : true
   
    };
  }
  onChange = async (e, field) => {
    await this.setState(
        {[field] : e.target.value}
    );
    this.getIsDisabled();
  };

  getIsDisabled = () => {
      let isDisabled = false;
      DETAILS.textFields.forEach(field => {
          if (field.required && this.state[field.name]===""){
            isDisabled = true;
          }
      })
      this.setState({isDisabled}) ;
  }

  render() {
    const fields = DETAILS.textFields;

    return (
      <form>
        <Grid container>
          <Grid item lg={12} xs={12}>
            {fields.map((field) => (
              <TextField
                style={textStyle}
                key={field.name}
                variant="outlined"
                label={field.label}
                required={field.required}
                type={field.type}
                defaultValue={field.defaultValue}
                helperText={field.helperText}
                onChange={(e) => this.onChange(e, field.name)}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              disabled={this.state.isDisabled}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default LoginForm;
