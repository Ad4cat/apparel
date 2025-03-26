import { unauth_supabase } from "@/supabase";
import FilterChange from "./filter";

export default async function Narrow_sidebar() {
  const { data: products_variants, error: error1 } = await unauth_supabase
    .from("products_variants")
    .select("color, size");

  const { data: category, error: error2 } = await unauth_supabase
    .from("category")
    .select("CategoryName");

  const { data: designers, error: error3 } = await unauth_supabase
    .from("designers")
    .select("name");

  if (error1 || error2 || error3) {
    console.log("Fetch error:", error1 || error2);
    return null;
  }

  // 取得したデータの処理
  // console.log("Products Variants:", products_variants);
  // console.log("Categories:", category);
  // console.log("Designers:", designers);

  // ABC順
  const uniqueColors = [
    ...new Set(products_variants.map((product) => product.color)),
  ].sort();

  const sizeOrder = ["XS", "S", "M", "L", "XL", "XXL"];
  const uniqueSize = [
    ...new Set(products_variants.map((product) => product.size)),
  ].sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));

  // あいうえお順
  const uniqueCategory = category
    .map((item) => item.CategoryName)
    .sort((a, b) => a.localeCompare(b, "ja"));

  const Designers: string[] = [
    ...new Set(designers.map((designers) => designers.name)),
  ].sort();

  return (
    <FilterChange
      colors={uniqueColors}
      size={uniqueSize}
      category={uniqueCategory}
      designer={Designers}
    />
  );
}
