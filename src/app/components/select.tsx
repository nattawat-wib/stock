import { Select as NextUiSelect, SelectItem, SelectSection } from "@nextui-org/select";

export const Select = (props: any) => {
    return (
        <NextUiSelect label={props.label}>
            {props.selectList.map((select: string | number) => (
                <SelectItem key={select}> {select} </SelectItem>
            ))}
        </NextUiSelect>
    );
};
