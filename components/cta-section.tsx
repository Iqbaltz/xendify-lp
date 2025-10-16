"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("CTA");
  return (
    <section id="contact" className="relative px-4 py-24 overflow-hidden">
      {/* Background accents for glass/Apple style */}
      <div aria-hidden className="z-1 absolute inset-0 pointer-events-none">
        {/* Existing accents */}
        <div className="-top-32 left-full absolute bg-secondary/30 dark:bg-secondary/20 blur-3xl rounded-full w-[600px] h-[600px] -translate-x-1/2" />
        <div className="right-[-10%] -bottom-24 absolute bg-primary/10 dark:bg-primary/10 blur-2xl rounded-full w-[420px] h-[420px]" />

        {/* Light blue glow (solid blob) */}
        <div className="-top-16 -left-16 absolute bg-sky-300/40 dark:bg-sky-500/25 blur-3xl rounded-full w-[520px] h-[520px]" />

        {/* Light blue glow (radial gradient) — light mode */}
        <div className="hidden dark:hidden md:block top-1/3 left-1/2 absolute bg-[radial-gradient(closest-side,rgba(125,211,252,0.35),transparent_70%)] blur-3xl w-[700px] h-[700px] -translate-x-1/2" />
        {/* Light blue glow (radial gradient) — dark mode */}
        <div className="hidden dark:md:block top-1/3 left-1/2 absolute bg-[radial-gradient(closest-side,rgba(14,165,233,0.25),transparent_70%)] blur-3xl w-[700px] h-[700px] -translate-x-1/2" />

        {/* Bottom fade to blend accents */}
        <div className="bottom-0 absolute inset-x-0 bg-gradient-to-t from-background to-transparent h-40" />
      </div>

      <div className="z-10 relative mx-auto container">
        {/* Glass panel */}
        <div className="bg-white/60 supports-[backdrop-filter]:bg-white/10 dark:bg-black/30 shadow-xl backdrop-blur-2xl mx-auto p-10 border border-white/30 dark:border-white/10 rounded-3xl ring-1 ring-black/5 dark:ring-white/10 max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="font-bold text-foreground text-3xl md:text-4xl text-balance">
              {t("heading")}
            </h2>
            <div className="flex justify-center items-center">
              <Badge
                variant="secondary"
                className="bg-white/30 dark:bg-secondary/10 shadow-sm backdrop-blur-sm ring-1 ring-secondary/20 ring-inset text-secondary dark:text-foreground"
              >
                {t("badge")}
              </Badge>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg text-pretty">
              {t("desc")}
            </p>

            <div className="flex sm:flex-row flex-col justify-center gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 shadow-sm text-secondary-foreground"
              >
                {t("primary")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 hover:bg-white/30 dark:bg-white/5 dark:hover:bg-white/10 backdrop-blur-sm border-white/30 dark:border-white/10 text-foreground"
              >
                {t("secondary")}
              </Button>
            </div>
          </div>

          {/* Cards inside the glass panel */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-16">
            <Card className="bg-white/20 dark:bg-white/5 backdrop-blur-sm border-white/20 dark:border-white/10">
              <CardContent className="p-6 text-foreground text-center">
                <Mail className="mx-auto mb-3 w-8 h-8 text-secondary" />
                <h3 className="mb-2 font-semibold">{t("cards.email.title")}</h3>
                <p className="mb-4 text-muted-foreground text-sm">
                  {t("cards.email.desc")}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-white/30 dark:border-white/10 text-foreground"
                >
                  {t("cards.email.cta")}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/20 dark:bg-white/5 backdrop-blur-sm border-white/20 dark:border-white/10">
              <CardContent className="p-6 text-foreground text-center">
                <Phone className="mx-auto mb-3 w-8 h-8 text-secondary" />
                <h3 className="mb-2 font-semibold">{t("cards.phone.title")}</h3>
                <p className="mb-4 text-muted-foreground text-sm">
                  {t("cards.phone.desc")}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border-white/30 dark:border-white/10 text-foreground"
                >
                  {t("cards.phone.cta")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
