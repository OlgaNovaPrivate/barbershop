import React from 'react';
import PropTypes from 'prop-types';
import {TimeSlotPicker} from '../TimeSlotPicker';

export default {
  title: 'TimeSlotPicker',
  component: TimeSlotPicker,
  argTypes: {
    duration: {
      control: {type: 'number', value: 15, min: 15, max: 60, step: 15},
    },
  },
};

const DefaultStory = props => {
  const {duration, bookedSlots} = props;
  return (
    <TimeSlotPicker
      duration={duration || 15}
      bookedSlots={bookedSlots}
      onSelectTime={time => console.log('Selected time ', time)}
    />
  );
};

DefaultStory.propTypes = {
  duration: PropTypes.number,
  bookedSlots: PropTypes.arrayOf(PropTypes.number),
};

export const TimeSelect = {
  render: args => {
    const {duration} = args;
    return <DefaultStory duration={duration} />;
  },
};

export const BookedSlots = {
  argTypes: {
    duration: {
      control: {type: 'number', min: 15, max: 60, step: 15},
      table: {
        defaultValue: {summary: 15},
      },
    },
  },
  render: args => {
    const {duration} = args;
    return (
      <DefaultStory
        duration={duration}
        bookedSlots={[1685534400000, 1685537100000]}
      />
    );
  },
};
