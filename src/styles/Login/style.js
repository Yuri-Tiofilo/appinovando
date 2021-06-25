import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  margin-bottom: 20px;
  padding: 20px;
  flex: 1;
  justify-content: flex-end;
`;

export const CardFormLogin = styled.View`
  background: ${(props) => props.theme.white};
  padding: 20px 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  elevation: 5;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 32px;
  font-weight: bold;
  margin-top: 45px;
`;

export const SubTitle = styled.Text`
  margin-bottom: 65px;
  color: ${(props) => props.theme.gray300};
`;
