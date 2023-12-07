import React, {useContext} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useBarbers} from '../../hooks/useBarbers';
import {UserContext} from '../../utils/context';

import {
  List,
  ListItem,
  ListItemImageWrapper,
  ListItemImage,
  ListItemTitle,
} from '../../styles';

const Container = styled.div`
  color: black;
`;

const BarberList = styled(List)``;

const BarberListItem = styled(ListItem)``;

export const BarberListItemImageWrapper = styled(ListItemImageWrapper)``;

export const BarberListItemImage = styled(ListItemImage)`
  width: 100px;
  height: 100px;
`;

export const BarberSelection = props => {
  const {onSelect} = props;
  const {user} = useContext(UserContext);
  const {barbers} = useBarbers(user);

  return (
    <Container>
      <BarberList>
        {barbers?.map((barber, index) => {
          return (
            <BarberListItem
              key={index}
              onClick={() => onSelect('employee', barber)}
            >
              <BarberListItemImageWrapper>
                <BarberListItemImage className={`${barber.firstName}`} />
              </BarberListItemImageWrapper>
              <ListItemTitle>{`${barber.firstName}`}</ListItemTitle>
            </BarberListItem>
          );
        })}
      </BarberList>
    </Container>
  );
};

BarberSelection.propTypes = {
  onSelect: PropTypes.func,
};
