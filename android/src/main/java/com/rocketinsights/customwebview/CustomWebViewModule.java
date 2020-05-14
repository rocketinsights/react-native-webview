package com.rocketinsights.customwebview;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class CustomWebViewModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;


  CustomWebViewModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "CustomWebView";
  }
}
