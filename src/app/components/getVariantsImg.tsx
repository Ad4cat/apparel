import { unauth_supabase } from "@/supabase";
import LookBookClient from "./lookbook";

export default async function LookBookServer() {
  // products_variants テーブルから id と img_url を7件取得
  const { data, error } = await unauth_supabase
    .from("products_variants")
    .select("id, img_url")
    .limit(7);

  if (error) {
    console.error("Supabase fetch error for LookBook:", error);
    return <div>LookBook画像の取得に失敗しました。</div>;
  }

  const variants = data || [];
  return <LookBookClient variants={variants} />;
}
