import { Alarm, Delete, Fingerprint, Home } from "@mui/icons-material";
import { IconButton, Button as MUIButton } from "@mui/material";
import { FC, ReactNode, useState } from "react";

type IconType = "fingerprint" | "alarm" | "home" | "delete";

type ButtonProps = {
  variant?: "text" | "outlined" | "contained" | "icon";
  icon?: IconType;
  size?: "small" | "medium" | "large";
  options?: any;
  children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  variant = "contained",
  icon = "home",
  size = "medium",
  options = {},
  children = null,
  ...rest
}) => {
  const Icon = () => {
    // a contrived example because state makes no sense in this context,
    // but there are many cases where state WOULD be used in such a context.
    const [state, setState] = useState(0);

    function onClick() {
      setState((state) => state + 1);
    }

    switch (icon) {
      case "fingerprint":
        return (
          <Fingerprint
            fontSize="inherit"
            onClick={onClick}
            sx={{ mt: state }}
          />
        );
      case "alarm":
        return (
          <Alarm fontSize="inherit" onClick={onClick} sx={{ mt: state }} />
        );
      case "home":
        return <Home fontSize="inherit" onClick={onClick} sx={{ mt: state }} />;
      case "delete":
        return (
          <Delete fontSize="inherit" onClick={onClick} sx={{ mt: state }} />
        );
      default:
        return <Home fontSize="inherit" onClick={onClick} sx={{ mt: state }} />;
    }
  };

  const buttonAttributes = { size, ...options, ...rest };

  return variant === "icon" ? (
    <IconButton
      variant="icon"
      {...buttonAttributes}
      aria-label={icon || "icon-button"}
    >
      {children || <Icon />}
    </IconButton>
  ) : (
    <MUIButton variant={variant} {...buttonAttributes}>
      {children || "Click me!"}
    </MUIButton>
  );
};

export default Button;
