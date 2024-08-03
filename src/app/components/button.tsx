import { Button as NextUiButton } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { motion } from "framer-motion";

export const Button = (props: any) => {
    return (
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <NextUiButton
                color={props.color}
                variant={props.variant}
                className=""
                onClick={() => {}}
                // startContent={<FontAwesomeIcon icon={props.icon} />}
                // endContent={<FontAwesomeIcon icon={props.endIcon} />}
            >
                {props.label}
            </NextUiButton>
        </motion.button>
    );
};
