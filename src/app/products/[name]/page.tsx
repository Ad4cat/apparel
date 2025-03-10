import Header from "@/components/header";
import { unauth_supabase } from "@/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";

const supabase = unauth_supabase;

export default async function ProductPage({
  params,
}: {
  params: { name: string };
}) {
  // ① 商品情報を取得
  const { data: product, error: productError } = await supabase
    .from("products")
    .select("*")
    .eq("name", params.name)
    .single();

  if (!product || productError) {
    return notFound();
  }

  // ② `product_id` に紐づく画像を取得
  const { data: images, error: imgError } = await supabase
    .from("product_imgs")
    .select("img_url")
    .eq("product_id", product.id);

  if (!product || imgError) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className="transform translate-y-16 max-w-4xl mx-auto px-4">
        {/* 🔹 商品画像をループで表示 */}
        {images?.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img.img_url}
                alt={`Product Image ${index + 1}`}
                width={400} // 適切な幅を設定
                height={400} // 適切な高さを設定
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        ) : (
          <p>画像がありません。</p>
        )}

        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>
        <p className="text-2xl font-semibold mt-4">${product.price}</p>
      </div>
    </>
  );
}

// 🔹 SSG 用に `generateStaticParams` を定義
export async function generateStaticParams() {
  const { data: products, error } = await supabase
    .from("products")
    .select("name");

  if (error || !products) return [];

  return products.map((product) => ({
    name: product.name, // `params.name` に統一
  }));
}
