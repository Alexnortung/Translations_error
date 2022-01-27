import i18n from "sveltekit-i18n";
import lang from "./lang.json";
export const config = {
  translations: {
    en: { lang },
    da: { lang },
    se: { lang },
  },
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default,
    },
    {
      locale: "da",
      key: "common",
      loader: async () => (await import("./da/common.json")).default,
    },
    {
      locale: "se",
      key: "common",
      loader: async () => (await import("./se/common.json")).default,
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
);

loading.subscribe(
  ($loading) => $loading && console.log("Loading translations...")
);
