import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("Features");
  const features = [
    {
      icon: CheckCircle,
      titleKey: "items.autoChat.title",
      descKey: "items.autoChat.desc",
    },
    { icon: Clock, titleKey: "items.support.title", descKey: "items.support.desc" },
    { icon: TrendingUp, titleKey: "items.followup.title", descKey: "items.followup.desc" },
    { icon: Zap, titleKey: "items.instant.title", descKey: "items.instant.desc" },
    { icon: Shield, titleKey: "items.secure.title", descKey: "items.secure.desc" },
    { icon: BarChart3, titleKey: "items.analytics.title", descKey: "items.analytics.desc" },
  ];

  return (
    <section id="features" className="bg-muted/30 dark:bg-muted/20 px-4 py-20">
      <div className="mx-auto max-w-6xl container">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="font-bold text-foreground text-3xl md:text-4xl">{t("heading")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">{t("subheading")}</p>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg border-border transition-all hover:-translate-y-0.5"
            >
              <CardHeader>
                <div className="bg-secondary/10 p-2 rounded-lg w-fit">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">
                  {t(feature.titleKey as any)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {t(feature.descKey as any)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
