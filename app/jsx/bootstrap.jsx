import ReactDOM from "react-dom";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// global.API = require("./API");

import Locales from "./Locales";
t.registerTranslations("en", Locales.English);
t.registerTranslations("vn", Locales.Vietnamese);
t.setLocale(config.locale || "en");
t.setFallbackLocale("en");

String.prototype.escape = function() {
  return this.replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// import router from "./router";

// $(document).on('ready', function() {
//   $.ajaxSetup({
//     headers: {
//       "X-CSRF-TOKEN": $("meta[name='csrf-token']").attr("content")
//     },
//   });

//   ReactDOM.render(router, document.getElementById('react-wrapper'));
// });
