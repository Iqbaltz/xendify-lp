"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LocaleSwitcher() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(nextLocale: string) {
    if (nextLocale === locale) return;
    // Pathname shape: /[locale]/... or /
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${nextLocale}`);
      return;
    }
    // Replace first segment if it matches a locale
    if (["en", "id"].includes(segments[0])) {
      segments[0] = nextLocale;
    } else {
      segments.unshift(nextLocale);
    }
    router.push("/" + segments.join("/"));
  }

  return (
    <Select value={locale} onValueChange={onChange}>
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder={t("language")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t("english")}</SelectItem>
        <SelectItem value="id">{t("indonesian")}</SelectItem>
      </SelectContent>
    </Select>
  );
}
