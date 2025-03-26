// LatestArrivals.server.tsx

import { unauth_supabase } from "@/supabase";
import LatestArrivalsClient from "./latest_arrivals";

export default async function LatestArrivalsServer() {
  // 最新の商品を6件取得（id の降順）
  const { data, error } = await unauth_supabase
    .from("products")
    .select("id, name, main_img")
    .order("id", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching latest arrivals:", error);
    return <div>商品データの取得に失敗しました。</div>;
  }

  const products = data || [];
  return <LatestArrivalsClient products={products} />;
}
