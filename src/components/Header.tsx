import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#1e3a8a] text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <div className="mb-6 flex items-center gap-3">
                  <img src="/police-logo.png" alt="Police Logo" className="h-8 w-8" />
                  <h2 className="text-lg font-semibold">Police Operations Procedure</h2>
                </div>
                <nav className="space-y-1">
                  <Link to="/" className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">
                    HOME
                  </Link>
                  <Link
                    to="/chapter/general-principles"
                    className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    POP
                  </Link>
                  <a href="#" className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">
                    CONTACT US
                  </a>
                  <a href="#" className="block rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">
                    ABOUT
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
            <img src="/police-logo.png" alt="Police Logo" className="h-8 w-8" />
            <h1 className="text-lg font-semibold">Police Operations Procedure</h1>
          </div>
          {/* <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Search className="h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </header>
  );
};