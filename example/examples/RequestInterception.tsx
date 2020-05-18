import React from 'react';
import {View, Text, Button} from 'react-native';

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
  const ref = React.useRef();

  return (
    <View style={{height: '100%'}}>
      <Button
        title="click"
        onPress={() => {
          // @ts-ignore
          ref.current.sendRequestData(
            JSON.stringify({
              // Nested objects currently throw on Java side
              // data: {
              //   content: 'I am request data from SDL webview ',
              //   headers: {
              //     'Content-Type': 'application/json',
              //   },
              // },
              data: 'I am request data from SDL webview ',
              requestId: 32,
            }),
          );
        }}
      />
      <WebView
        source={{html: HTML}}
        style={{backgroundColor: '#00000000'}}
        ref={ref}
        onNetworkRequest={(val: string) => {
          console.log(
            // @ts-ignore
            `onNetworkRequest::: ${JSON.stringify(val.nativeEvent)}`,
          );
        }}
      />
    </View>
  );
};

export default RequestInterception;
