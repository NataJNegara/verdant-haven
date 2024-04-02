import { useNavigate } from "react-router-dom";

export default function NotFound({ message, btnText, onNavigate }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-8">
      <p>{message}</p>
      <button
        className="bg-green-500 border-none btn hover:bg-green-600 btn-active text-green-50"
        onClick={onNavigate ? onNavigate : handleClick}>
        {btnText}
      </button>
    </div>
  );
}

NotFound.defaultProps = {
  message: "Theres no data to show.",
  btnText: "Back to previous page",
};
