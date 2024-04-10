import { Alarm, Delete, Fingerprint, Home } from "@mui/icons-material";
import { IconButton, Button as MUIButton } from "@mui/material";
import { FC, ReactNode } from "react";

type IconType = "fingerprint" | "alarm" | "home" | "delete";

type ButtonProps = {
  variant?: "text" | "outlined" | "contained" | "icon";
  icon?: IconType;
  size?: "small" | "medium" | "large";
  options?: any;
  children?: ReactNode;
};

function Icon({ icon }: { icon: string }) {
  switch (icon) {
    case "fingerprint":
      return <Fingerprint fontSize="inherit" />;
    case "alarm":
      return <Alarm fontSize="inherit" />;
    case "home":
      return <Home fontSize="inherit" />;
    case "delete":
      return <Delete fontSize="inherit" />;
    default:
      return <Home fontSize="inherit" />;
  }
}

export const Button: FC<ButtonProps> = ({
  variant = "contained",
  icon = "home",
  size = "medium",
  options = {},
  children = null,
  ...rest
}) => {
  const buttonAttributes = { size, ...options, ...rest };

  return variant === "icon" ? (
    <IconButton
      variant="icon"
      {...buttonAttributes}
      aria-label={icon || "icon-button"}
    >
      {children || <Icon icon={icon} />}
    </IconButton>
  ) : (
    <MUIButton variant={variant} {...buttonAttributes}>
      {children || "Click me!"}
    </MUIButton>
  );
};

export default Button;
