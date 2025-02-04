"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Dashboard() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      // API Routeを呼び出してSupabaseにユーザー情報を作る
      fetch("/api/ensure-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkUserId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
        }),
      });
    }
  }, [user]);

  return <div>Dashboard</div>;
}
