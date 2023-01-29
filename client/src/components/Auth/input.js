import React from "react";
import { Grid, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const input = ({
  halfWidth,
  name,
  label,
  autoFocus,
  type,
  handleChange,
  handleShowPassword,
}) => {
  // const [showPassword, setShowPassword] = useState(false)
  // const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <Grid item xs={12} sm={halfWidth ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        autoFocus={autoFocus}
        variant="outlined"
        required
        fullWidth
        onChange={handleChange}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default input;
