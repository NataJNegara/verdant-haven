import supabase, { supabaseUrl } from "./supabase";

// getPlants===================
export async function getPlants({ filter }) {
  let query = supabase
    .from("plants")
    .select("*")
    .order("created_at", { ascending: false });

  if (filter) {
    query = query.eq(filter.field, filter.value);
  }

  let { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("failed to fetch data");
  }

  return data;
}

// getPlant by id===================
export async function getPlant(id) {
  if (!id) return null;

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

// add plant===================
export async function addPlant(newPlant) {
  const imageName = `${Math.random()}-${newPlant.imageUrl.name}`;

  const imagePath = `${supabaseUrl}/storage/v1/object/public/plant-images/${imageName}`;

  const { data, error } = await supabase
    .from("plants")
    .insert([
      { ...newPlant, imageUrl: imagePath, rating: 5, tags: [newPlant.tags] },
    ])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Failed to create plant");
  }

  const { error: storageError } = await supabase.storage
    .from("plant-images")
    .upload(imageName, newPlant.imageUrl);

  if (storageError) {
    await supabase.from("plants").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Plant image could not be uploaded and failed to create a new plant"
    );
  }

  return data;
}

export async function deletePlant(id) {
  const { error } = await supabase.from("plants").delete().eq("id", id);

  if (error) {
    console.log(error.message);
    throw new Error("Failed to delete item");
  }
}

// update plant by id

export async function updatePlant(newPlant, id) {
  // getting old image
  const hasImagePath = newPlant.imageUrl?.startsWith?.(supabaseUrl);

  // generate file name if image changes
  const imageName = `${Math.random()}-${newPlant.imageUrl.name}`;

  const imagePath = hasImagePath
    ? newPlant.imageUrl
    : `${supabaseUrl}/storage/v1/object/public/plant-images/${imageName}`;

  const { data, error } = await supabase
    .from("plants")
    .update({ ...newPlant, imageUrl: imagePath })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("plant-images")
      .upload(imageName, newPlant.imageUrl);

    if (storageError) {
      await supabase.from("plants").delete().eq("id", data.id);
      console.log(storageError);
      throw new Error(
        "Plant image could not be uploaded and failed to create a new plant"
      );
    }
  }

  return data;
}
