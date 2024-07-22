import { Button as NextUiButton } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Button = (props: any) => {
    return (
        <NextUiButton
            color={props.color}
            className=""
            onClick={() => {}}
            startContent={<FontAwesomeIcon icon={props.icon} />}
            endContent={<FontAwesomeIcon icon={props.endIcon} />}
        >
            {props.label}
        </NextUiButton>
    );
};
