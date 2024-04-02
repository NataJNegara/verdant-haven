export default function FormRow({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-semibold" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm italic text-red-500">{error}</span>}
    </div>
  );
}
