"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Users, TrendingUp, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export function DashboardPreview() {
  const t = useTranslations("Dashboard");
  return (
    <section id="dashboard" className="px-4 py-20">
      <div className="mx-auto max-w-6xl container">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="font-bold text-foreground text-3xl md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            {t("subheading")}
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
          {/* Stats Overview */}
          <div className="space-y-4 lg:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="font-medium text-muted-foreground text-sm">
                  {t("stats.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{t("stats.messages")}</span>
                  </div>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{t("stats.activeChats")}</span>
                  </div>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{t("stats.conversions")}</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{t("stats.avgResponse")}</span>
                  </div>
                  <span className="font-semibold">2.3s</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="font-medium text-muted-foreground text-sm">
                  {t("segments.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{t("segments.hotLeads")}</Badge>
                  <span className="font-medium text-sm">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{t("segments.customers")}</Badge>
                  <span className="font-medium text-sm">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{t("segments.prospects")}</Badge>
                  <span className="font-medium text-sm">89</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Preview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-medium text-muted-foreground text-sm">
                {t("conversations.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 bg-muted/50 p-3 rounded-lg">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">
                        {t("conversations.items.one.name")}
                      </p>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {t("conversations.status.active")}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {t("conversations.items.one.message")}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t("conversations.items.one.time")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-muted/50 p-3 rounded-lg">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">
                        {t("conversations.items.two.name")}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {t("conversations.status.followUp")}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {t("conversations.items.two.message")}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t("conversations.items.two.time")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-muted/50 p-3 rounded-lg">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-sm">
                        {t("conversations.items.three.name")}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {t("conversations.status.hotLead")}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {t("conversations.items.three.message")}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t("conversations.items.three.time")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
