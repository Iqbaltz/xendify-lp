import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Fallback to English if the locale isn't supported
  if (!["en", "id"].includes(locale)) {
    return {
      messages: (await import("../messages/en.json")).default,
    };
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
