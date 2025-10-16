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

export function Header() {
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
          <span className="font-bold text-foreground text-xl">Xendify</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#features">
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#dashboard">
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Get Started
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
                    <a href="#features">Features</a>
                  </Button>
                  <Button asChild variant="ghost" className="justify-start">
                    <a href="#dashboard">Dashboard</a>
                  </Button>
                  <Button asChild variant="ghost" className="justify-start">
                    <a href="#contact">Contact</a>
                  </Button>
                  <Button className="bg-secondary hover:bg-secondary/90 mt-2 text-secondary-foreground">
                    Get Started
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
