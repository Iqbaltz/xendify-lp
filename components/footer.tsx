import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
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
            <p className="text-muted-foreground text-sm">
              Transforming business communications with intelligent WhatsApp
              automation.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#features">Features</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#contact">Pricing</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">API</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">Integrations</a>
                </Button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">About</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">Blog</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">Careers</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#contact">Contact</a>
                </Button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">Help Center</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">Documentation</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">Status</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start px-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                >
                  <a href="#">Privacy Policy</a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Xendify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
