import styled from 'styled-components/native';

interface ContainerType {
  width: number;
  backgroundColor: string;
}

export const Container = styled.View<ContainerType>`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.width}px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
