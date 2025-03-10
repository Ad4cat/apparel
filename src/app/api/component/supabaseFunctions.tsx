import { serviceSupabase } from "@/supabase";

// ユーザー作成時に Supabase に id と email を保存する
export const OnUserCreate = async (id: string, email: string) => {
  try {
    const { error } = await serviceSupabase
      .from("users")
      .insert({ clerk_user_id: id, email: email });

    if (error) {
      console.error("Error inserting user:", error.message);
    } else {
      console.log(`User created successfully: ID=${id}, Email=${email}`);
    }
  } catch (err) {
    console.error("Unexpected error in OnUserCreate:", err);
  }
};

// ユーザー情報を更新したときにsupabaseも更新する
export const OnUserUpdate = async (id?: string, email?: string) => {
  try {
    if (!id && !email) {
      console.warn("No data provided for update.");
      return;
    }

    const { error } = await serviceSupabase.from("users").update({
      ...(id && { clerk_user_id: id }),
      ...(email && { email: email }),
    });

    if (error) {
      console.error("Error updating user:", error.message);
    } else {
      console.log(
        `User updated successfully: ID=${id ?? "N/A"}, Email=${email ?? "N/A"}`
      );
    }
  } catch (err) {
    console.error("Unexpected error in OnUserUpdate:", err);
  }
};
