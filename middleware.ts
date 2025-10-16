import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "id",
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!_next|.*..*).*)"],
};
