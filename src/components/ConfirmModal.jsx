export default function ConfirmModal({
  handleClick,
  title,
  text,
  btnText,
  modalId,
}) {
  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="py-4">{text}</p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="bg-red-500 btn hover:bg-red-600 text-red-50"
              onClick={handleClick}>
              {btnText}
            </button>
          </form>
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

ConfirmModal.defaultProps = {
  title: "Are you sure to logout?",
  text: "Change you made may not be saved. Make sure to complete the transactions before leaving.",
  btnText: "Logout",
  modalId: "my_modal_2",
};
