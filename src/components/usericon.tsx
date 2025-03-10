import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { CircleUserIcon } from "lucide-react";
import React from "react";

const UserIcon = () => {
  return (
    <div className="flex items-center text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <CircleUserIcon />
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default UserIcon;
