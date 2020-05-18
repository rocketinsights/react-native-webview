package com.reactnativecommunity.webview;

import android.os.Build;

import androidx.annotation.RequiresApi;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class GlobalRequestMap {
 public static Map requestMap = new HashMap();


 @RequiresApi(api = Build.VERSION_CODES.N)
 public static String getRequestMapAsString() {
    Map map = GlobalRequestMap.requestMap;
   String mapAsString = (String) map.keySet().stream().map(key -> key + ":" + map.get(key))
     .collect(Collectors.joining(",", "{", "}"));
   return mapAsString;
 }

 public static String getDataStringByRequestId(int requestId) {
   Object data = requestMap.get(requestId);

   return data.toString();
 }
}
