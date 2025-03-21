import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export const SuccessDialog = ({
  dialog,
  setDialog,
}: {
  dialog: boolean;
  setDialog: (value: boolean) => void;
}) => {
  return (
    <Dialog open={dialog}>
      <DialogTitle>Success</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your message has been sent successfully.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => setDialog(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
