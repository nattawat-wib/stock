import { Checkbox as PrimeCheckbox } from "@nextui-org/react";

export function Checkbox(props: any) {
    return (
        <PrimeCheckbox>
            { props.label }
        </PrimeCheckbox>
    )
}