const en = require("./translations.en.json");
const nl = require("./translations.nl.json");


const i18n = {
    translations: {
      en,
      nl,
    },
    defaultLang: "nl",
    useBrowserDefault: true,
    // optional property will default to "query" if not set
    languageDataStore: "query" || "localStorage",
  };
  
  module.exports = i18n;