import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {SERVICE_TYPES} from './ServiceTypes';

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

const ServiceList = styled(List)`
  list-style-type: none;
`;

const ServiceListItem = styled(ListItem)``;

const ServiceListItemImageWrapper = styled(ListItemImageWrapper)``;

const ServiceListItemImage = styled(ListItemImage)`
  width: 75px;
  height: 75px;
`;

export const ServiceSelection = props => {
  const {onSelect} = props;
  return (
    <Container>
      <ServiceList>
        {Object.keys(SERVICE_TYPES).map((service, index) => {
          return (
            <ServiceListItem
              key={index}
              onClick={() => onSelect('service', service)}
            >
              <ServiceListItemImageWrapper>
                <ServiceListItemImage className={service} />
              </ServiceListItemImageWrapper>

              <ListItemTitle>
                {`${service} - ${SERVICE_TYPES[service]}min`}
              </ListItemTitle>
            </ServiceListItem>
          );
        })}
      </ServiceList>
    </Container>
  );
};

ServiceSelection.propTypes = {
  onSelect: PropTypes.func,
};
