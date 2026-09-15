import {
    Dialog,
    Portal,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();

    const isSuccess = type === "success";

    return (
        <Dialog.Root
            open={isOpen}
            onOpenChange={(e) => {
                if (!e.open) {
                    onClose();
                }
            }}
            role="alertdialog"
        >
            <Portal>
                <Dialog.Backdrop />

                <Dialog.Positioner>
                    <Dialog.Content
                        py={4}
                        backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
                    >
                        <Dialog.Header
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            {isSuccess ? "All good!" : "Oops!"}
                        </Dialog.Header>

                        <Dialog.Body>
                            {message}
                        </Dialog.Body>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}

export default Alert;