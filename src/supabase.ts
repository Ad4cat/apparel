import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! as string;
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY! as string;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY! as string;

// Create a single supabase client for interacting with your database
// 認証なしで使いたいときよう
export const unauth_supabase = createClient(supabaseUrl, supabaseKey);

// service keyを利用してsupabaseにあれこれする
export const serviceSupabase = createClient(supabaseUrl, serviceRoleKey);

export async function getSupabaseWithAuth() {
  // The `useAuth()` hook is used to access the `getToken()` method
  const { getToken } = await auth();

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      global: {
        // Get the custom Supabase token from Clerk
        fetch: async (url, options = {}) => {
          const clerkToken = await getToken({
            template: "supabase",
          });

          // Insert the Clerk Supabase token into the headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          // Now call the default fetch
          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    }
  );
}
