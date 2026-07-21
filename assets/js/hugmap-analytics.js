(function (window, document) {
  "use strict";

  var config = window.HUGMAP_ANALYTICS_CONFIG || {};
  var measurementId = config.measurementId || "";
  var gtmContainerId = config.gtmContainerId || "";
  var mode = measurementId ? "gtag" : (gtmContainerId ? "gtm" : "disabled");

  window.dataLayer = window.dataLayer || [];

  function clean(params) {
    var result = {};
    Object.keys(params || {}).forEach(function (key) {
      var value = params[key];
      if (value === undefined || value === null || value === "") return;
      result[key] = typeof value === "string" ? value.slice(0, 100) : value;
    });
    return result;
  }

  function gtag() {
    window.dataLayer.push(arguments);
  }

  function loadScript(src) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  if (mode === "gtag") {
    window.gtag = window.gtag || gtag;
    if (config.consentDefault === "denied" || config.consentDefault === "granted") {
      window.gtag("consent", "default", {
        analytics_storage: config.consentDefault
      });
    }
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    loadScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId));
  } else if (mode === "gtm") {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    loadScript("https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(gtmContainerId));
  }

  window.HugMapAnalytics = {
    mode: mode,
    track: function (eventName, params) {
      var safeParams = clean(params);
      if (mode === "gtag") {
        window.gtag("event", eventName, safeParams);
      } else {
        window.dataLayer.push(Object.assign({ event: eventName }, safeParams));
      }
    },
    setConsent: function (granted) {
      if (mode !== "gtag") return;
      window.gtag("consent", "update", {
        analytics_storage: granted ? "granted" : "denied"
      });
    }
  };
})(window, document);
