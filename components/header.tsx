"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "./locale-switcher";

export function Header() {
  const t = useTranslations("Header");
  return (
    <header className="top-0 z-50 sticky bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b border-border w-full">
      <div className="flex justify-between items-center mx-auto px-4 h-16 container">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-secondary p-1 rounded-full">
            <img
              src="/xendify-logo-white.png"
              alt="xendify logo"
              className="w-6 h-6"
            />
          </div>
          <span className="font-bold text-foreground text-xl">
            {t("brand")}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features">
                  {t("nav.features")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#dashboard">
                  {t("nav.dashboard")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact">
                  {t("nav.contact")}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LocaleSwitcher />
          <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            {t("cta")}
          </Button>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="gap-2 grid mt-6">
                  <Button asChild variant="ghost" className="justify-start">
                    <a href="#features">{t("nav.features")}</a>
                  </Button>
                  <Button asChild variant="ghost" className="justify-start">
                    <a href="#dashboard">{t("nav.dashboard")}</a>
                  </Button>
                  <Button asChild variant="ghost" className="justify-start">
                    <a href="#contact">{t("nav.contact")}</a>
                  </Button>
                  <Button className="bg-secondary hover:bg-secondary/90 mt-2 text-secondary-foreground">
                    {t("cta")}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
