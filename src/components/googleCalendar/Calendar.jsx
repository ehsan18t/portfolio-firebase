import React from 'react'
import './calendar.css'

const Calendar = (props) => {
  const calendarURL =
    'https://calendar.google.com/calendar/embed?wkst=7&bgcolor=%23ffffff&ctz=Asia%2FDhaka&showTitle=0&showPrint=0&showCalendars=0&showTz=1&mode=WEEK&src=' +
    props.id +
    '&color=%237986CB&hl=en'
  return (
    <iframe
      src={calendarURL}
      className={`google-calendar ${props.className}`}
    ></iframe>
  )
}

export default Calendar
