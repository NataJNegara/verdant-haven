import { useForm } from "react-hook-form";
import FormRow from "../../components/FormRow";
import { useCreatePlant } from "./useCreatePlant";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { usePlant } from "./usePlant";
import { useUpdatePlant } from "./useUpdatePlant";

export default function CreatePlantForm() {
  const { plantId } = useParams();
  const isEdit = Boolean(plantId);

  const { isCreating, createPlant } = useCreatePlant();
  const { isUpdating, updatePlant } = useUpdatePlant();
  const { plant, isLoading } = usePlant();

  const isWorking = isCreating || isUpdating;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: isEdit ? plant : {} });

  useEffect(() => {
    reset(plant);
  }, [reset, plant]);

  function onSubmit(data) {
    const imageUrl =
      typeof data.imageUrl === "string" ? data.imageUrl : data.imageUrl[0];

    if (isEdit) {
      updatePlant({ newPlant: { ...data, imageUrl: imageUrl }, id: plantId });
    } else {
      createPlant({ ...data, imageUrl: imageUrl }, { onSettled: reset() });
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <input
          disabled={isWorking}
          className="w-full input input-bordered"
          type="text"
          id="name"
          placeholder="Enter product name"
          {...register("name", { required: "Product name is required" })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          disabled={isWorking}
          rows="5"
          className="w-full h-full input input-bordered"
          type="text"
          id="description"
          placeholder="Enter product description"
          {...register("description", {
            required: "Product description is required",
            minLength: {
              value: 10,
              message: "Plesae provide more details about product description",
            },
          })}
        />
      </FormRow>
      <FormRow label="Price" error={errors?.price?.message}>
        <input
          disabled={isWorking}
          className="w-full input input-bordered"
          type="number"
          id="price"
          {...register("price", {
            required: "Product price is required",
            min: {
              value: 1,
              message: "Minimum product price can't be 0",
            },
          })}
        />
      </FormRow>
      <FormRow label="Price Key" error={errors?.priceKey?.message}>
        <input
          disabled={isWorking}
          className="w-full input input-bordered"
          type="text"
          id="priceKey"
          {...register("priceKey", {
            required: "Please input price key from stripe",
          })}
        />
      </FormRow>
      <FormRow label="Light requirements" error={errors?.light?.message}>
        <select
          className="w-full select select-bordered"
          {...register("light")}>
          <option value={"low"}>Low</option>
          <option value={"high"}>Medium</option>
          <option value={"high"}>High</option>
        </select>
      </FormRow>
      <FormRow label="Category" error={errors?.category?.message}>
        <select
          className="w-full select select-bordered"
          {...register("category")}>
          <option value={"plant"}>Plant</option>
          <option value={"pot"}>Pot</option>
          <option value={"fertilizer"}>Fertilizer</option>
        </select>
      </FormRow>
      <FormRow label="Stock" error={errors?.stock?.message}>
        <input
          disabled={isWorking}
          className="w-full input input-bordered"
          type="number"
          id="stock"
          defaultValue={0}
          {...register("stock", {
            required: "Product stock is required",
            min: {
              value: 0,
              message: "Stock can't be lower than 0",
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          disabled={isWorking}
          className="w-full input input-bordered"
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "Product discount is required",
            min: {
              value: 0,
              message: "discount can't be lower than 0",
            },
            max: {
              value: 100,
              message: "discount can't be higher that 100",
            },
          })}
        />
      </FormRow>
      <FormRow label="Tags" error={errors?.tags?.message}>
        <input
          disabled={isWorking}
          className="w-full input input-bordered"
          type="text"
          id="tags"
          placeholder="E.g indoor, large, small"
          {...register("tags", { required: "Product tags is required" })}
        />
      </FormRow>
      <FormRow label="Plant photo">
        <input
          disabled={isWorking}
          type="file"
          id="image"
          className="w-full file:text-green-50 file:bg-green-500 file:border-green-500 file-input file-input-bordered file-input-success"
          accept="image/*"
          {...register("imageUrl", {
            required: isEdit ? false : "Product image is required",
          })}
        />
      </FormRow>
      <button
        className="bg-green-500 border-none btn hover:bg-green-600 btn-active text-green-50"
        disabled={isWorking}>
        {isEdit ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
