import { unauth_supabase } from "@/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";

const supabase = unauth_supabase;

// Next.js 15.1.7 に合わせた型定義
type DesignerPageProps = {
  params: Promise<{ designer: string }>;
};

export default async function DesignerPage({ params }: DesignerPageProps) {
  // Promise を await して解決
  const resolvedParams = await params;
  const { designer } = resolvedParams;

  // ① デザイナー名から詳細情報を取得
  const { data: designerData, error: designerError } = await supabase
    .from("designers")
    .select("id, name, description")
    .eq("name", designer)
    .single();

  if (designerError || !designerData) {
    return notFound();
  }

  // ② `designer_id` に紐づく商品を取得
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("id, name, description, price, image_url")
    .eq("designer_id", designerData.id);

  if (productsError) {
    return notFound();
  }

  // 商品がない場合でも、デザイナーページ自体は表示する（エラーにはしない）
  const productsList = products || [];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">
        {designerData.name} の商品一覧
      </h1>
      {designerData.description && (
        <p className="text-gray-700 mb-6">{designerData.description}</p>
      )}

      {productsList.length === 0 ? (
        <p className="text-gray-500">現在商品はありません。</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productsList.map((product) => (
            <li
              key={product.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {product.image_url && (
                <div className="aspect-square w-full overflow-hidden rounded-md mb-3">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2 mb-3 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-semibold">
                ¥{product.price?.toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
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
