import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DarkGrayBut } from "../Button";

export default function AlertModal({alert, closeAlert}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(!alert);
    closeAlert(!alert)
  };

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"\"Moodment\" wants to know your location "}
          
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

          Please allow location access before start an assessment
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <DarkGrayBut style={{fontWeight: 'bold', padding: '10px 25px'}} onClick={handleClose} autoFocus>
            Agree
          </DarkGrayBut>
        </DialogActions>
      </Dialog>
    </div>
  );
}