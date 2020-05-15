import React from 'react';
import {View, Text} from 'react-native';

import WebView from 'react-native-webview';
import {HTML2} from './sampleHTML';

const HTML = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
  <script>
  fetch("https://litipsum.com/api").then((response) => {   
    document.body.innerHTML = JSON.stringify( response );
  }).catch(r => alert(r))
  </script>
  </head>
  <style>
    body {
        color: black;
    }
  </style>
  <body>
    <p>Loading...</p>
    </body>

</html>
`;

const RequestInterception: React.FC = () => {
  return (
    <View>
      <View>
        <View style={{height: '100%'}}>
          <WebView
            source={{html: HTML2}}
            style={{backgroundColor: '#00000000'}}
            onNetworkRequest={(val: string) => {
              console.log(
                // @ts-ignore
                `onNetworkRequest::: ${JSON.stringify(val.nativeEvent)}`,
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default RequestInterception;
