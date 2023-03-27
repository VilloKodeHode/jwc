export default function CallToActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-16 h-14 flex m-4 w-72 font-semibold text-white shadow-md font-Roboto shadow-JWC-tertiary btn-ghost btn bg-gradient-to-r from-JWC-primary to-JWC-secondary rounded-3xl"
    >
      <>{children}</>
    </button>
  );
}

export function CallToActionButtonAlt({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-16 py-4 w-48 m-4 text-white shadow-md font-Roboto shadow-JWC-black btn-ghost btn bg-gradient-to-r from-JWC-black75 to-JWC-black rounded-3xl"
    >
      <>{children}</>
    </button>
  );
}
