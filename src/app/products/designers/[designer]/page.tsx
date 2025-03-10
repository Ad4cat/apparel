import { unauth_supabase } from "@/supabase";
import { notFound } from "next/navigation";

const supabase = unauth_supabase;

export default async function DesignerPage({
  params,
}: {
  params: { designer: string };
}) {
  // ① デザイナー名 (params.designer) から `designer_id` を取得
  const { data: designer, error: designerError } = await supabase
    .from("designers")
    .select("id")
    .eq("name", params.designer)
    .single();

  if (!designer || designerError) {
    return notFound();
  }

  // ② `designer_id` に紐づく商品を取得
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .eq("designer_id", designer.id);

  if (!products || productsError) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{params.designer} の商品一覧</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4 border-b pb-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🔹 SSG 用に `generateStaticParams` を定義
export async function generateStaticParams() {
  const { data: designers, error } = await supabase
    .from("designers")
    .select("name");

  if (error || !designers) return [];

  return designers.map((designer) => ({
    designer: designer.name, // `designers.name` を URL の `params.designer` に設定
  }));
}
