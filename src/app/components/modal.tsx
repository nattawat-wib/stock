import { Modal as NextUIModal, ModalHeader, ModalBody, ModalContent, ModalFooter } from "@nextui-org/react";
import { Button } from "./../components/button";
import { Input } from "./input";

export const Modal = (props: any) => {
    return (
        <NextUIModal isOpen={props.isOpen}>
            <ModalHeader className={props.headerClassName}>{props.header}</ModalHeader>
            <ModalBody>
                <Input label="username" />
            </ModalBody>
            <ModalFooter>
                <Button label="Confirm" color="primary"  />
                <Button label="Cancel" color="danger"  variant="light" />
            </ModalFooter>
        </NextUIModal>
    );
};
