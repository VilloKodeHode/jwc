export default function CallToActionButton({ children }) {
  return (
    <button className="px-16 py-4 m-4 font-semibold text-white shadow-md shadow-JWC-tertiary btn-ghost btn min-w-56 bg-gradient-to-r from-JWC-primary to-JWC-secondary rounded-3xl">
      <>{children}</>
    </button>
  );
}
