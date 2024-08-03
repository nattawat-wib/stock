import { Button as NextUiButton } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { motion } from "framer-motion";

const MotionButton = motion(NextUiButton);

export interface ButtonProps {
    color?: "primary" | "secondary" | "success" | "warning" | "default" | "danger" | undefined;
    variant?: "solid" | "shadow" | "bordered" | "light" | "flat" | "faded" | "ghost" | undefined;
    label?: string;
    className?: string;
    whileTap?: { scale: number };
    whileHover?: { scale: number };
    onClick?: any;
    icon?: any;
    endIcon?: any;
}

export const Button: React.FC<ButtonProps> = ({
    color = "primary",
    variant = "solid",
    label = "",
    className = "",
    whileTap = { scale: 1.1 },
    whileHover = { scale: 0.9 },
    onClick = () => {},
    icon = null,
    endIcon = null,
}) => {
    return (
        <MotionButton
            whileHover={whileHover}
            whileTap={whileTap}
            color={color}
            variant={variant}
            className={className}
            onClick={onClick}
            startContent={icon && <FontAwesomeIcon icon={icon} />}
            endContent={endIcon && <FontAwesomeIcon icon={endIcon} />}
        >
            {label}
        </MotionButton>
    );
};
