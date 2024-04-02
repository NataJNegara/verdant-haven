import supabase from "./supabase";

// getPlants===================
export async function getPlants() {
  let { data, error } = await supabase.from("plants").select("*");

  if (error) {
    console.log(error);
    throw new Error("failed to fetch data");
  }

  return data;
}

// getPlant by id===================
export async function getPlant(id) {
  let { data, error } = await supabase
    .from("plants")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }

  return data;
}
