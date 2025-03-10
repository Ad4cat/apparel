"use client";

import { UserProfile } from "@clerk/nextjs";
import { Home } from "lucide-react";

const CustomPage = () => {
  return (
    <div>
      <h1>Custom Profile Page</h1>
      <p>This is the custom profile page</p>
    </div>
  );
};

const UserProfilePage = () => (
  <UserProfile path="/user-profile" routing="path">
    {/* You can pass the content as a component */}
    <UserProfile.Page
      label="Custom Page"
      labelIcon={<Home />}
      url="custom-page"
    >
      <CustomPage />
    </UserProfile.Page>

    {/* You can also pass the content as direct children */}
    <UserProfile.Page label="Terms" labelIcon={<Home />} url="terms">
      <div>
        <h1>Custom Terms Page</h1>
        <p>This is the custom terms page</p>
      </div>
    </UserProfile.Page>
  </UserProfile>
);

export default UserProfilePage;
