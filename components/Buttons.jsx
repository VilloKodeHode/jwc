export default function CallToActionButton({ children }) {
  return (
    <button className="px-16 py-4 m-4 font-semibold text-white shadow-md font-Roboto shadow-JWC-tertiary btn-ghost btn min-w-56 bg-gradient-to-r from-JWC-primary to-JWC-secondary rounded-3xl">
      <>{children}</>
    </button>
  );
}

export function CallToActionButtonAlt({ children }) {
  return (
    <button className="px-16 py-4 m-4 text-white shadow-md font-Roboto shadow-JWC-black btn-ghost btn min-w-56 bg-gradient-to-r from-JWC-black75 to-JWC-black rounded-3xl">
      <>{children}</>
    </button>
  );
}
