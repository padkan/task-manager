import { FC, ReactElement, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
//import { TextField } from '@mui/material';

export const TaskDateField: FC = (): ReactElement => {
  //state
  const [date, setDate] = useState<Date | null>(null);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          //renderInput={(params) => <TextField {...params} />} depricated
          slotProps={{ textField: { variant: 'outlined' } }}
        />
      </LocalizationProvider>
    </>
  );
};
