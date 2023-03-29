export default function CallToActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex px-16 m-4 font-semibold shadow-md h-14 w-72 text-JWC-white font-Roboto shadow-JWC-tertiary btn-ghost btn bg-gradient-to-r from-JWC-primary to-JWC-secondary rounded-3xl"
    >
      <>{children}</>
    </button>
  );
}

export function CallToActionButtonAlt({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-48 px-16 py-4 m-4 shadow-md text-JWC-white font-Roboto shadow-JWC-black btn-ghost btn bg-gradient-to-r from-JWC-black75 to-JWC-black rounded-3xl"
    >
      <>{children}</>
    </button>
  );
}
