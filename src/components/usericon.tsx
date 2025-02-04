"use client";

import { useUser, useSession, UserButton, SignInButton } from "@clerk/nextjs";
import { CircleUserIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabaseクライアントの作成関数
const createSupabaseClient = (getToken: () => Promise<string | null>) => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      global: {
        fetch: async (url, options = {}) => {
          const token = await getToken();
          const headers = new Headers(options?.headers);
          if (token) {
            headers.set("Authorization", `Bearer ${token}`);
          }
          return fetch(url, { ...options, headers });
        },
      },
    }
  );
};

const UserIcon = () => {
  const { isSignedIn, user } = useUser(); // ユーザー情報を取得
  const { session } = useSession(); // セッション情報を取得
  const [userExists, setUserExists] = useState(false); // ユーザーが登録済みかどうか
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session || !isSignedIn) return;

    const supabase = createSupabaseClient(() =>
      session.getToken({ template: "supabase" })
    );

    const checkAndRegisterUser = async () => {
      setLoading(true);

      // ユーザーが既に登録済みか確認
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("clerk_user_id", user?.id);

      if (error) {
        console.error("Failed to fetch user data:", error.message);
      } else if (data.length === 0) {
        // ユーザーが存在しない場合、新規登録
        const { error: insertError } = await supabase.from("users").insert({
          id: user?.id,
          email: user?.primaryEmailAddress, // メールアドレスを登録
        });
        if (insertError) {
          console.error("Failed to register user:", insertError.message);
        } else {
          setUserExists(true);
        }
      } else {
        setUserExists(true); // ユーザーが既に存在
      }

      setLoading(false);
    };

    checkAndRegisterUser();
  }, [session, isSignedIn, user]);

  return (
    <nav className="flex items-center text-gray-700 hover:text-rose-600 transition-colors cursor-pointer">
      {isSignedIn ? (
        <>
          <UserButton />
          {loading && <p className="ml-4">Checking user...</p>}
          {userExists && !loading && <p className="ml-4">Welcome back!</p>}
        </>
      ) : (
        <div>
          <SignInButton>
            <CircleUserIcon />
          </SignInButton>
        </div>
      )}
    </nav>
  );
};

export default UserIcon;
