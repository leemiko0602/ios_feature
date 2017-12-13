import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

export default class Main extends Component {
  render() {
    return (
      <Container>
          <Text>main test</Text>
      </Container>
    )
  }
}
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
