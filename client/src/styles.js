import styled from 'styled-components';
import {Field, Form, ErrorMessage} from 'formik';

// Service image imports
import cut from './assets/cut.svg';
import fade from './assets/fade.svg';
import groom from './assets/groom.svg';
import shave from './assets/shave.svg';
import dye from './assets/dye.svg';
import kids from './assets/kids.svg';
import consult from './assets/consult.svg';

// Barbers image imports
import richard from './assets/richard.png';
import anna from './assets/anna.png';
import kevin from './assets/kevin.png';
import roy from './assets/roy.png';
import hank from './assets/hank.png';
import kelly from './assets/kelly.png';
import logoDark from './assets/logoDark.png';
import logoLight from './assets/logoLight.png';
import logout from './assets/logout.svg';
import icon_delete from './assets/delete.svg';

// Forms
export const FormStyles = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const FieldStyles = styled(Field)`
  font-family: 'Lexend Deca', sans-serif;
  background-color: ${props => props.theme.background.default};
  border: 2px solid ${props => props.theme.border.default};
  border-radius: 3px;
  padding: 0.8rem;
  margin-bottom: 2rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.centered ? 'center' : 'space-between')};
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 47%;
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  padding-bottom: 0.5rem;
  color: ${props => props.theme.text.error};
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#3E5B75' : 'transparent')};
  border: 2px solid ${props => props.theme.border.buttonDefault};
  color: ${props => (props.dark ? '#ffffff' : '#3E5B75')};
  min-width: 5rem;
  border-radius: 3px;
  padding: 0.8rem;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  text-decoration: none;

  &:hover {
    box-shadow: ${props =>
      props.dark ? '0 0 8px 0 rgba(62, 91, 117, 0.5)' : 'none'};
    background-color: ${props => props.theme.border.buttonDefault};
    color: ${props => props.theme.background.primary};
  }

  &.disabled {
    background-color: ${props => props.theme.background.primary};
    border: lightgray;
    color: lightgray;
  }
`;

// Main Area
export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.text.default};
  background-color: ${props => props.theme.background.primary};
  box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  min-width: 30rem;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  color: ${props => props.theme.text.primary};
`;

export const Subtitle = styled.p`
  color: ${props => props.theme.text.default};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  html,
  body {
    font-size: 1rem;
    height: 100%;
    background-color: ${props => props.theme.background.default};
  }

  a {
    padding: 1rem 0;
    text-decoration: none;
  }
`;

// Login
export const LoginArea = styled(MainArea)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: ${props => (props.minimized ? '25rem' : '35rem')};
`;

// Header
export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background.dark};
  border-radius: 0 0 2rem 2rem;
  height: 7rem;
  padding: 0 2rem;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const BarbershopLogoLight = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background: url('${logoLight}') no-repeat 100% 0;
  background-position: center;
  width: 12rem;
  height: 7rem;
`;

export const LogoutButton = styled.button`
  border: none;
  padding: 18px;
  cursor: pointer;
  margin-left: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background: url('${logout}') no-repeat 100% 0;
  background-position: center;
`;

// List
export const List = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  transition: all 300ms;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const ListItemTitle = styled(Subtitle)`
  text-transform: uppercase;
  margin: 0;
`;

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ListItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background.primary};
  border: 1px solid ${props => props.theme.border.default};
  box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.1);
  margin: 1.8rem;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  transition: 0.3s;

  ${ListItem}:hover & {
    box-shadow: 1px 0px 20px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const ListItemImage = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;

  // Categories
  &.Cut {
    background: url('${cut}') no-repeat 100% 0;
    background-position: center;
  }
  &.Fade {
    background: url('${fade}') no-repeat 100% 0;
    background-position: center;
  }
  &.Groom {
    background: url('${groom}') no-repeat 100% 0;
    background-position: center;
  }
  &.Shave {
    background: url('${shave}') no-repeat 100% 0;
    background-position: center;
  }
  &.Dye {
    background: url('${dye}') no-repeat 100% 0;
    background-position: center;
  }
  &.Kids {
    background: url('${kids}') no-repeat 100% 0;
    background-position: center;
  }
  &.Consult {
    background: url('${consult}') no-repeat 100% 0;
    background-position: center;
  }

  // Barber
  &.Richard {
    background: url('${richard}') no-repeat 100% 0;
    background-position: center;
  }
  &.Anna {
    background: url('${anna}') no-repeat 100% 0;
    background-position: center;
  }
  &.Kevin {
    background: url('${kevin}') no-repeat 100% 0;
    background-position: center;
  }
  &.Roy {
    background: url('${roy}') no-repeat 100% 0;
    background-position: center;
  }
  &.Hank {
    background: url('${hank}') no-repeat 100% 0;
    background-position: center;
  }
  &.Kelly {
    background: url('${kelly}') no-repeat 100% 0;
    background-position: center;
  }
`;

// Selections
export const SelectionTitle = styled.p`
  display: flex;
  color: ${props => props.theme.text.primary};
  font-weight: bolder;
`;

export const SelectedCategory = styled(SelectionTitle)`
  display: flex;
  color: ${props => props.theme.text.default};
  font-weight: bolder;
  margin: 0;
`;

// Confirmation
export const BarbershopLogoDark = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background: url('${logoDark}') no-repeat 100% 0;
  background-position: center;
  width: 15rem;
  height: 10rem;
`;

// Appointments
export const AppointmentArea = styled(MainArea)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-bottom: 2rem;
`;

export const AppointmentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.centered ? 'center' : 'flex-start')};
`;

export const AppointmentTitle = styled(Title)`
  text-align: left;
`;

export const Upcoming = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Previous = styled(Upcoming)``;

export const AppointmentTime = styled(SelectionTitle)`
  display: flex;
  padding: 0.2rem 0;
  margin: 0;
`;

export const AppointmentDate = styled(AppointmentTime)`
  font-weight: normal;
  margin: 0;
`;

export const ServiceCategory = styled(AppointmentTime)`
  font-weight: bold;
  margin: 0;
`;

export const ModalMessage = styled(AppointmentTime)`
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
`;

export const ServiceProvider = styled(AppointmentTime)`
  font-weight: normal;
  margin: 0;
`;

// Confirmation Modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.background.primary};
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 25rem;
`;

// Admin View
export const CreateNewBarberContainer = styled.div`
  padding: 1rem 0;
`;

export const DeleteIcon = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: contain;
  background: url('${icon_delete}') no-repeat 100% 0;
  background-position: center;
  width: 5rem;
  height: 5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.border.buttonDefault};
  border: 5px solid ${props => props.theme.background.primary};
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  margin: -50px auto 0 auto;
`;
