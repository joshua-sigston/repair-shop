import React from "react";
import NavButton from "./nav-button";
import { File, HomeIcon, UsersRound, LogOut } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="h-12 p-2 border-b sticky top-0 z-20 animate-slide">
      <div className="flex items-center h-8 justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="logout"
            title="Logout"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
