"use client";

import { UserButton } from "@clerk/nextjs";
import { Truck } from "lucide-react";

export default function page() {
  return (
    <div>
      <UserButton>
        <UserButton.UserProfilePage
          label="Custom Page"
          url="custom"
          labelIcon={<Truck />}
        >
          <div className="border-b p-4">
            <div className="place-content-start w-full font-semibold">
              DeliveryAddress
            </div>
          </div>
        </UserButton.UserProfilePage>
      </UserButton>
    </div>
  );
}
