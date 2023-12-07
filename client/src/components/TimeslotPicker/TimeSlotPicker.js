import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {DateSlotPicker} from 'react-dateslot-picker';
import 'react-dateslot-picker/dist/style.css';
//import './style.css';

export const StyledPicker = styled(DateSlotPicker)`
  div {
    background-color: white;
  }
`;

// Pass start time and end times as unix timestamps
// and get back all the fifteen minute slots in-between
export const getBookedTimes = (startTime, endTime) => {
  const bookedTimes = [];
  bookedTimes.push(startTime * 1000);
  let start = new Date(startTime * 1000);
  while (start.getTime() < endTime * 1000) {
    start.setMinutes(start.getMinutes() + 15);
    bookedTimes.push(start.getTime());
  }
  return bookedTimes;
};

const calcEndTime = duration => {
  const endTime = new Date();
  endTime.setHours(18);
  endTime.setMinutes(0);
  endTime.setMinutes(-duration + 15);
  return endTime;
};

export const TimeSlotPicker = props => {
  const {duration, onSelectTime, bookedSlots} = props;
  const endTime = calcEndTime(duration);
  return (
    <DateSlotPicker
      duration={15}
      timezone={'Europe/Helsinki'}
      currentDate={Date.now()}
      startTime={Date.now()}
      dailyTimePair={[
        {
          startTime: [9, 0],
          endTime: [endTime.getHours(), endTime.getMinutes()],
        },
      ]}
      fullBooking={bookedSlots || []}
      onSelectDatetime={time => {
        console.log(time);
        onSelectTime(time);
      }}
    />
  );
};

TimeSlotPicker.propTypes = {
  duration: PropTypes.number,
  onSelectTime: PropTypes.func,
  bookedSlots: PropTypes.arrayOf(PropTypes.number),
};
