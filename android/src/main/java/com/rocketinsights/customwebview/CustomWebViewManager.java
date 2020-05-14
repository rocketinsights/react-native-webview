package com.rocketinsights.customwebview;

import android.webkit.WebView;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.reactnativecommunity.webview.RNCWebViewManager;

import javax.annotation.Nullable;

public class CustomWebViewManager extends RNCWebViewManager {
  protected static final String REACT_CLASS = "RCustomWebview";

  protected static class CustomWebViewClient extends RNCWebViewClient {}

  protected static class CustomWebView extends RNCWebView {
    public CustomWebView(ThemedReactContext reactContext) {
      super(reactContext);
    }
    protected @Nullable String mFinalUrl;

    public void setFinalUrl(String url) {
      mFinalUrl = url;
    }

    public String getFinalUrl() {
      return mFinalUrl;
    }
  }

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected void addEventEmitters(ThemedReactContext reactContext, WebView view) {
    view.setWebViewClient(new CustomWebViewClient());
  }



  @ReactProp(name = "finalUrl")
  public void setFinalUrl(WebView view, String url) {
    ((CustomWebView) view).setFinalUrl(url);
  }

}
