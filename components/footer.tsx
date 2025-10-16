"use client";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-muted/30 dark:bg-muted/20 px-4 py-12 border-t border-border">
      <div className="mx-auto max-w-6xl container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-secondary p-1 rounded-full">
                <img
                  src="/xendify-logo-white.png"
                  alt="xendify logo"
                  className="w-6 h-6"
                />
              </div>
              <span className="font-bold text-foreground text-lg">Xendify</span>
            </div>
            <p className="text-muted-foreground text-sm">{t("tagline")}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("product")}</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#features">{t("links.features")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#contact">{t("links.pricing")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.api")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.integrations")}</a>
                </Button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("company")}</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.about")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.blog")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.careers")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#contact">{t("links.contact")}</a>
                </Button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("support")}</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.help")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.docs")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.status")}</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">{t("links.privacy")}</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
