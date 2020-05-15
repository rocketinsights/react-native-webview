package com.reactnativecommunity.webview.events

import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.Event
import com.facebook.react.uimanager.events.RCTEventEmitter

class TopRequestInterceptionEvent(viewId: Int, private val mData: WritableMap): Event<TopRequestInterceptionEvent>(viewId) {
  companion object {
    const val EVENT_NAME = "topRequestInterception"
  }

  override fun getEventName(): String  = EVENT_NAME

  override fun canCoalesce(): Boolean = false

  override fun getCoalescingKey(): Short = 0

  override fun dispatch(rctEventEmitter: RCTEventEmitter) {
    rctEventEmitter.receiveEvent(viewTag, EVENT_NAME, mData)
  }

}