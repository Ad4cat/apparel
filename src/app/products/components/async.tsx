import { unauth_supabase } from "@/supabase";
import Link from "next/link";
import Image from "next/image";

interface ProductVariant {
  size: string;
  color: string;
}

interface ProductImage {
  img_url: string;
}

interface Product {
  id: string;
  name: string;
  products_variants: ProductVariant[];
  product_imgs: ProductImage[];
}

export default async function ProductLists() {
  // 🔹 データ取得: products, variants, images を結合
  const { data: products, error } = await unauth_supabase
    .from("products")
    .select(
      `
      id,
      name,
      products_variants (size, color),
      product_imgs(img_url)
    `
    )
    .order("id", { ascending: true });

  if (!products || error) {
    console.error("データ取得エラー:", error);
    return (
      <p>
        商品一覧を取得できませんでした。
        <br />
        ネットワーク状況を確認して再度ページを開き直してください。
      </p>
    );
  }

  // 🔹 データ整形

  const formattedProducts = products.map((product: Product) => {
    const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];
    const sizes = [
      ...new Set(product.products_variants?.map((v: ProductVariant) => v.size)),
    ]
      .sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)) // 🔹 サイズ順にソート
      .join(", "); // 🔹 ソート後に文字列に変換

    const colors = [
      ...new Set(
        product.products_variants?.map((v: ProductVariant) => v.color)
      ),
    ]
      .sort()
      .join(", ");
    const img_url = product.product_imgs?.[0]?.img_url || "/no-image.png";

    return {
      id: product.id,
      name: product.name,
      sizes,
      colors,
      img_url,
    };
  });

  return (
    <>
      <div className="transform translate-y-20 max-w-6xl mx-auto px-6"></div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        商品一覧
      </h2>

      {/* 🔹 商品一覧を表示 */}
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {formattedProducts.map((product) => (
          <li key={product.id} className="mt-4 border rounded-lg shadow-md p-3">
            <Link href={`/products/${product.id}`}>
              <div className="relative w-full h-96 rounded-xl aspect-[4/3]">
                <Image
                  src={product.img_url}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-center mt-2 text-lg font-semibold">
                {product.name}
              </h2>
              <p className="text-center text-sm text-gray-600">
                サイズ: {product.sizes}
              </p>
              <p className="text-center text-sm text-gray-600">
                カラー: {product.colors}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
