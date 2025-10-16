"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, MessageSquare, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl container">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="font-bold text-foreground text-4xl md:text-6xl text-balance leading-tight">
              {t("title")}
              <span className="block bg-clip-text bg-gradient-to-r from-secondary to-secondary/60 text-transparent">
                {t("titleHighlight")}
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-muted-foreground text-xl text-pretty">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 shadow-sm text-secondary-foreground"
            >
              {t("primary")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="supports-[backdrop-filter]:bg-background/50 backdrop-blur"
            >
              {t("secondary")}
            </Button>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-16">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Bot className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">
                {t("features.aiTitle")}
              </h3>
              <p className="text-muted-foreground text-sm text-center">
                {t("features.aiDesc")}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="bg-secondary/10 p-3 rounded-full">
                <MessageSquare className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">
                {t("features.chatTitle")}
              </h3>
              <p className="text-muted-foreground text-sm text-center">
                {t("features.chatDesc")}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">
                {t("features.contactTitle")}
              </h3>
              <p className="text-muted-foreground text-sm text-center">
                {t("features.contactDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
