import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export const InputWithLabel = ({ name, type, placeholder, setFormData, children, formData }) => {
  const { theme, language } = useContext(UserContext);
  const InputComponent = type === `textarea` ? `textarea` : `input`;
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`block font-bold mb-2 ${
          theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        }`}
      >
        {children}
      </label>
      <InputComponent
        type={type === `textarea` ? undefined : type}
        id={name}
        className={` ${
          theme === "light"
            ? "text-Villo-light-black bg-Villo-light-white border-Villo-light-black focus:border-Villo-light-primary focus:outline-Villo-light-primary"
            : "text-Villo-dark-white bg-Villo-dark-black focus:border-Villo-dark-primary border-Villo-dark-white focus:outline-Villo-dark-primary"
        } w-full px-4 py-2 border rounded-lg  focus:outline `}
        placeholder={placeholder}
        value={formData[name] || ""}
        onChange={(e) =>
            setFormData({ ...formData, [name]: e.target.value })}
        required
        rows={type === `textarea` ? 4 : undefined}
      />
    </div>
  );
};
