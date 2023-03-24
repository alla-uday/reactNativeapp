import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FullStory from '@fullstory/react-native';

FullStory.onReady().then(function(result) {
  const replayStartUrl = result.replayStartUrl;
  const replayNowUrl = result.replayNowUrl;
  const sessionId = result.sessionId;
  console.log('replayStartUrl', replayStartUrl);
  console.log('replayNowUrl', replayNowUrl);
  console.log('sessionId', sessionId);

});	

export default function App() {
  return (
    <><View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={{ margin: 30, padding: 20, backgroundColor: '#c1f5cf' }} fsClass='fs-unmask'>
        <Text style={{ fontSize: 16 }}>
          Text has no global rules.{'\n'}
        </Text>
        <Text style={{ fontSize: 16 }}>
          Views have no global rules.{'\n'}
        </Text>
        <Text style={{ fontSize: 16 }} fsClass='fs-mask'>
          This text is locally masked.{'\n'}
        </Text>
        <Text style={{ fontSize: 16 }}>
          The green view is locally unmasked.
        </Text>
        <View style={{
          backgroundColor: 'pink',
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: 'black'
        }}>
          <Text style={{ fontSize: 16 }} fsClass="fs-mask">
            This text is locally masked.
          </Text>
          <Text style={{ fontSize: 16 }}>
            The pink view has no local rules.
          </Text>
        </View>
      </View>
    </View><View style={{ margin: 30, padding: 20, backgroundColor: '#c1f5cf' }} fsClass='fs-unmask'>
        <Text style={{ fontSize: 16 }}>
          Text has no global rules.{'\n'}
        </Text>
        <Text style={{ fontSize: 16 }}>
          BOOOOOOOM Views have no global rules.{'\n'}
        </Text>
        <Text style={{ fontSize: 16 }} fsClass='fs-mask'>
          This text is locally masked.{'\n'}
        </Text>
        <Text style={{ fontSize: 16 }}>
          The green view is locally unmasked.
        </Text>
        <View style={{
          backgroundColor: 'pink',
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: 'black'
        }}>
          <Text style={{ fontSize: 16 }} fsClass="fs-mask">
            This text is locally masked.
          </Text>
          <Text style={{ fontSize: 16 }}>
            The pink view has no local rules.
          </Text>
        </View>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
