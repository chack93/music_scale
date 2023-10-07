import messages from "./translation/index";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages,
}));
