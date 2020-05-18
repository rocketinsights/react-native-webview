package com.reactnativecommunity.webview;

public class RequestMessage {
  String data;
  int requestId;
  public int getRequestId() {
    return requestId;
  }

  public void setRequestId(int requestId) {
    this.requestId = requestId;
  }

  public String getData() {
    return data;
  }

  public void setData(String data) {
    this.data = data;
  }
}
