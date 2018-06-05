/**
 * sketch example
 */
'use strict';

import React from 'react';
import { render, Document, Page, Artboard, View, Text } from 'react-sketchapp';

const styles = {
  page: {
    width: 2000,
    height: 1000,
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    width: 360,
    height: 640,
    marginRight: 20
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#bdbdbd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  }
};

const TestSketch = () => (
  <Page style={styles.page}>
    <Artboard name='테스트1' style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Test1</Text>
      </View>
    </Artboard>
    <Artboard name='테스트2' style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Test2</Text>
      </View>
    </Artboard>
  </Page>
);

export default (context) => {
  render(<TestSketch />, context.document.currentPage());
};