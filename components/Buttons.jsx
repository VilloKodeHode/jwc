import { ResponsiveP } from "./Responsive text/ResponsiveText";

export default function CallToActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid items-center px-10 py-4 m-4 font-semibold uppercase duration-100 ease-in-out rounded-md shadow-sm text-JWC-black active:scale-95 text-p font-Roboto shadow-JWC-black bg-gradient-to-r hover:scale-105 from-JWC-primary to-JWC-secondary"
    >
      <>{children}</>
    </button>
  );
}

export function CallToActionButtonAlt({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="grid items-center px-10 py-4 m-4 font-semibold uppercase duration-100 ease-in-out rounded-md shadow-sm active:scale-95 text-p text-JWC-white font-Roboto shadow-JWC-black bg-gradient-to-r from-JWC-black hover:scale-105 to-JWC-black75"
    >
      <>{children}</>
    </button>
  );
}

export function BigButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-20 px-16 py-4 m-4 w-80 text-JWC-white font-Roboto shadow-JWC-black btn bg-gradient-to-r from-JWC-black75 to-JWC-black rounded-3xl"
    >
      <>{children}</>
    </button>
  );
}

export function SmallButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-1 rounded-md font-Roboto shadow-JWC-black text-[12px] bg-gradient-to-r from-JWC-black75 to-JWC-black"
    >
      <>{children}</>
    </button>
  );
}
