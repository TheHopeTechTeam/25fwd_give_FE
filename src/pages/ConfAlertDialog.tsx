import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { ReactNode } from "react";

interface AlertDialogProps {
    open: boolean;
    title?: ReactNode;
    message: string;
    enMessage: string;
    onClose: () => void;
    onConfirm?: () => void;
    confirmText?: string;
    cancelText?: string;
}


const ConfAlertDialog: React.FC<AlertDialogProps> = ({
    open,
    title = (
        <>
            <span className="text-zh">錯誤</span>
            <span className="text-en"> Error</span>
        </>
    ),
    message,
    onClose,
    enMessage,
    cancelText = "CLOSE",
}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText className="dialog-message">
                    {message && (
                        enMessage
                            ? <span className="text-zh">{message}</span>
                            : <span className="text-en">{message}</span>
                    )}
                    {message && enMessage && <br></br>}
                    {enMessage && <span className="text-en">{enMessage}</span>}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} className="dialog-button">
                    {cancelText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfAlertDialog;
