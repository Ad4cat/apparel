import { unauth_supabase } from "@/supabase";
import Link from "next/link";
import Image from "next/image";
import Narrow_sidebar from "./narrow_sidebar";

// Props の型定義を Promise 型に統一
interface ProductListProps {
  searchParams: Promise<{
    color?: string;
    size?: string;
    category?: string;
    designer?: string;
  }>;
}

export default async function ProductList({ searchParams }: ProductListProps) {
  // searchParams を await して plain オブジェクトにする
  const params = await searchParams;
  const {
    color = "all",
    size = "all",
    category = "all",
    designer = "all",
  } = params;

  // Supabase のクエリを組み立てる
  let query = unauth_supabase
    .from("products")
    .select("id, name, main_img, products_variants(size, color)");

  // 商品バリアントのフィルター処理（color, size）
  if (color !== "all" || size !== "all") {
    let variantQuery = unauth_supabase
      .from("products_variants")
      .select("product_id");

    if (color !== "all") {
      variantQuery = variantQuery.eq("color", color);
    }
    if (size !== "all") {
      variantQuery = variantQuery.eq("size", size);
    }

    const { data: variantData, error: variantError } = await variantQuery;
    if (variantError || !variantData) {
      return <p>商品のバリアント情報の取得に失敗しました。</p>;
    }
    const productIds = [
      ...new Set(variantData.map((v: { product_id: number }) => v.product_id)),
    ];
    query = query.in("id", productIds);
  }

  // category によるフィルター（カテゴリ名 → id 変換）
  if (category !== "all") {
    const { data: categoryData, error: categoryError } = await unauth_supabase
      .from("category")
      .select("id")
      .eq("CategoryName", category)
      .single();
    if (categoryError || !categoryData) {
      return <p>カテゴリ情報の取得に失敗しました。</p>;
    }
    query = query.eq("category", categoryData.id);
  }

  // designer によるフィルター（デザイナー名 → id 変換）
  if (designer !== "all") {
    const { data: designersData, error: designersError } = await unauth_supabase
      .from("designers")
      .select("id")
      .eq("name", designer)
      .single();
    if (designersError || !designersData) {
      return <p>デザイナー情報の取得に失敗しました。</p>;
    }
    query = query.eq("designer_id", designersData.id);
  }

  query = query.order("id", { ascending: true });
  const { data: products, error } = await query;
  console.log("Fetch error:", error);

  if (!products || error) {
    return (
      <>
        <Narrow_sidebar />
        <p className="gap-6">
          商品一覧を取得できませんでした。
          <br />
          ネットワーク状況を確認して再度ページを開き直してください。
        </p>
      </>
    );
  }

  return (
    <>
      <Narrow_sidebar />
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id} className="mt-4 border rounded-lg shadow-md p-3">
            <Link href={`/products/${product.name}`}>
              <div className="relative w-full h-96 rounded-xl aspect-[4/3]">
                <Image
                  src={product.main_img || "/no-image.png"}
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
