import styled from 'styled-components';
import { device } from '../../utils/media';

export const DivContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
`;

export const DivSize = styled.div`
  width: 100%;

  @media ${device.desktop} {
    width: 70%;
    margin-left: 10%;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 40px;
  margin: 20px;

  @media ${device.tablet} {
    max-width: 40%;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 40px;
`;
