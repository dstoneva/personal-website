import { PickersDay } from '@mui/x-date-pickers'
import { StaticDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import enLocale from 'date-fns/locale/en-GB'

const renderDay = (currentDate, selectedDate, props) => {
  return <PickersDay {...props} />
}

const useMinifiedStyles = makeStyles(() => ({
  calendar: {
    '& .MuiPickerStaticWrapper-content': {
      borderRadius: '30px',
      backgroundColor: 'rgba(40, 42, 54, 0.3)',
    },
    '& .MuiCalendarPicker-root': {
      width: '222px',
      height: '280px',
    },
    '& .MuiCalendarPicker-root > div:first-child': {
      paddingLeft: '5px',
      paddingRight: '0px',
    },
    "& [role='presentation'] + div": {
      width: '62px',
    },
    '& .MuiPickersCalendarHeader-label': {
      fontSize: '14px',
    },
    '& .MuiCalendarPicker-root > div:last-child': {
      marginTop: 'auto',
      marginBottom: 'auto',
      overflow: 'hidden',
    },
    '& .MuiCalendarPicker-root > div:last-child button': { backgroundColor: 'transparent' },
    '& .MuiCalendarPicker-root > div:last-child span, & .MuiCalendarPicker-root > div:last-child button': {
      height: '28px',
    },
    '& .MuiMonthPicker-root': {
      width: '100%',
      margin: '0 auto',
    },
    '& .MuiMonthPicker-root > button': {
      background: 'transparent',
      border: '0',
      borderRadius: '10px',
      transition: '300ms',
      fontSize: 14,
    },
    '& .MuiButtonBase-root-MuiPickersDay-root, & .Mui-selected': {
      backgroundColor: '#7038A8 !important',
      '&:hover': { backgroundColor: '#7038A8 !important' },
    },
    '& .MuiPickersDay-root:hover': {
      backgroundColor: '#00000022 !important',
    },
  },
}))

const MinifiedCalendarWrapper = ({ children }) => {
  const classes = useMinifiedStyles()
  return <div className={classes.calendar}>{children}</div>
}

export default function CalendarWidget() {
  const [date, setDate] = useState(Date.now)

  return (
    <LocalizationProvider adapterLocale={enLocale} dateAdapter={AdapterDateFns}>
      <MinifiedCalendarWrapper>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          renderInput={(props) => <TextField {...props} />}
          value={date}
          onChange={setDate}
          renderDay={renderDay}
          views={['month', 'day']}
        />
      </MinifiedCalendarWrapper>
    </LocalizationProvider>
  )
}
