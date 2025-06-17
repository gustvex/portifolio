import * as React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/nav-links";

type HamburgerMenuProps = {
  className?: string;
};

type MenuItem = {
  title: string;
  href: string;
};

const menuItems: MenuItem[] = navLinks.map((item) => ({
  title: item.label,
  href: item.path,
}));

// Passa a função onClick para fechar o menu quando clicar
const MenuItemComponent: React.FC<{ item: MenuItem; onClick: () => void }> = ({
  item,
  onClick,
}) => {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={cn(
        "block py-2 text-lg font-medium transition-colors hover:text-primary"
      )}
    >
      {item.title}
    </a>
  );
};

export default function HamburgerMenu({ className }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", className)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col p-4">
          {menuItems.map((item) => (
            <MenuItemComponent key={item.title} item={item} onClick={handleClose} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
