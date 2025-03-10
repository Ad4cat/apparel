import { unauth_supabase } from "@/supabase";
import Link from "next/link";
import Image from "next/image";
// import Narrowdown from "./components/_narrowdownber";
import Narrow_sidebar from "./narrow_sidebar";

export default async function ProductList() {
  // 🔹 `products` と `product_imgs` を JOIN して、各商品の代表画像を取得
  const { data: products, error } = await unauth_supabase
    .from("products")
    .select("id, name, products_variants(size, color) ,product_imgs(img_url)")
    .order("id", { ascending: true });

  console.log("Fetched products:", products);
  console.log("Fetch error:", error);

  //   const each_products_info = products.map(){
  //     name : [product.name],
  //     color: [],
  //     size: [],
  //     img_url: []
  //   }

  if (!products || error) {
    return (
      <p>
        商品一覧を取得できませんでした。
        <br />
        ネットワーク状況を確認して再度ページを開き直してください。
      </p>
    );
  }

  return (
    <>
      <Narrow_sidebar />

      {/* 🔹 商品一覧を表示 */}
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id} className="mt-4 border rounded-lg shadow-md p-3">
            <Link href={`/products/${product.name}`}>
              <div className="relative w-full h-96 rounded-xl aspect-[4/3]">
                {/* 🔹 商品画像を表示 (なければデフォルト画像) */}
                <Image
                  src={product.product_imgs?.[0]?.img_url || "/no-image.png"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-center mt-2 text-lg font-semibold">
                {product.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
