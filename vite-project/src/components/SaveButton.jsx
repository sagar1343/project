import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';

const SaveButton = () => {
  const [client, setClient] = useState('');
  const [commencementDate, setCommencementDate] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [rfqCode, setRfqCode] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSave = () => {
    console.log('Client:', client);
    console.log('Commencement Date:', commencementDate);
    console.log('Completion Date:', completionDate);
    console.log('RFQ Code:', rfqCode);

    setDialogOpen(false);
  };

  return (
    <div>
      <Button
        variant='contained'
        onClick={() => setDialogOpen(true)}
      >
        Save
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>Fill Details</DialogTitle>
        <DialogContent className='flex flex-col gap-2'>
          <Select
            value={client}
            onChange={(e) => setClient(e.target.value)}
            fullWidth
          >
            <MenuItem value=''>Select Client</MenuItem>
            <MenuItem value='A'>A</MenuItem>
            <MenuItem value='B'>B</MenuItem>
            <MenuItem value='C'>C</MenuItem>
          </Select>
          <TextField
            type='text'
            label='Commencement Date'
            placeholder='YYYY-MM-DD'
            value={commencementDate}
            onChange={(e) => setCommencementDate(e.target.value)}
            fullWidth
          />
          <TextField
            type='text'
            label='Completion Date'
            placeholder='YYYY-MM-DD'
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            fullWidth
          />
          <TextField
            type='text'
            label='RFQ Code'
            value={rfqCode}
            onChange={(e) => setRfqCode(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SaveButton;
