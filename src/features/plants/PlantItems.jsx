import { LuFileEdit, LuTrash } from "react-icons/lu";
import { formatCurrency } from "../../utils/helpers";
import { useDelete } from "./useDelete";
import ConfirmModal from "../../components/ConfirmModal";
import { Link } from "react-router-dom";

export default function PlantItems({ plant }) {
  const { isDeleting, deletePlant } = useDelete();

  return (
    <>
      <li className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center">
        <div className="flex gap-4">
          <img src={plant.imageUrl} alt={plant.name} className="w-28" />
          <div className="flex flex-col justify-center gap-4">
            <p className="font-semibold">{plant.name}</p>
          </div>
        </div>
        <p className="text-center">{formatCurrency(plant.price)}</p>
        <p className="text-center">{plant.stock}</p>
        <p className="text-center">{plant.discount}%</p>
        <div className="flex gap-4 mx-auto">
          <Link
            to={`/update/${plant.id}`}
            className="btn btn-warning text-yellow-50">
            <LuFileEdit /> Update
          </Link>
          <button
            disabled={isDeleting}
            className="btn btn-error text-red-50"
            onClick={() =>
              document.getElementById("my_modal_delete" + plant.id).showModal()
            }>
            <LuTrash /> Delete
          </button>
        </div>
      </li>
      <div className="divider before:h-[1px] after:h-[1px]"></div>

      <ConfirmModal
        handleClick={() => deletePlant(plant.id)}
        title={`Are you sure want to delete item #${plant.id}?`}
        text="This item will be deleted permanently"
        btnText="Delete"
        modalId={"my_modal_delete" + plant.id}
      />
    </>
  );
}
