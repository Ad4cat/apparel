import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server"; // 型をインポート

export function middleware(req: NextRequest, evt: NextFetchEvent) {
  console.log("Middleware triggered for:", req.nextUrl.pathname);

  // Webhook のエンドポイントの場合は clerkMiddleware をスキップする
  if (req.nextUrl.pathname.startsWith("/api/clerk/webhooks")) {
    console.log("Skipping Clerk Middleware for Webhook");
    return NextResponse.next();
  }

  // それ以外は通常の clerkMiddleware を適用
  return clerkMiddleware()(req, evt);
}

export const config = {
  matcher: [
    // Next.js の内部や静的ファイル（_next や各種拡張子のファイル）を除外する
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // API ルートと trpc に対しても常にミドルウェアを適用する
    "/(api|trpc)(.*)",
  ],
};
