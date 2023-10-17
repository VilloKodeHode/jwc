// Components to simplify the use of responsive text

import { useContext } from "react";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";

export default function ResponsiveH1({ children, className }) {
  return (
    <h1
      className={`lg:text-h1 sm:text-h2 text-h3 lg:leading-h1 sm:leading-h2 leading-h3 ${className}`}
    >
      {children}
    </h1>
  );
}

export const ResponsiveThemedH1 = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <h1
      className={`lg:text-h1  ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } sm:text-h2 text-h3 lg:leading-h1 sm:leading-h2 leading-h3 ${className}`}
    >
      {children}
    </h1>
  );
};

export function ResponsiveH2({ children, className }) {
  return (
    <h2 className={`sm:leading-h2 leading-h3 sm:text-h2 text-h3 ${className}`}>
      {children}
    </h2>
  );
}

export const ResponsiveThemedH2 = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <h2
      className={` ${Theme === "light"
        ? "text-Villo-light-black75"
        : "text-Villo-dark-white15"
        } sm:leading-h2 leading-h3 sm:text-h2 text-h3 ${className}`}
    >
      {children}
    </h2>
  );
};

export function ResponsiveH3({ children, className }) {
  return (
    <h3 className={`md:text-h3 text-h4 md:leading-h3 leading-h4 ${className}`}>
      {children}
    </h3>
  );
}

export const ResponsiveThemedH3 = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <h3
      className={` ${Theme === "light"
        ? "text-Villo-light-black75"
        : "text-Villo-dark-white15"
        } md:text-h3 text-h4 md:leading-h3 leading-h4 ${className}`}
    >
      {children}
    </h3>
  );
};

export function ThemedH3({ children, className }) {
  const { Theme } = useContext(ThemeContext);
  return (
    <h3
      className={`text-h3 leading-h3 ${Theme === "light"
        ? "text-Villo-light-black75"
        : "text-Villo-dark-white15"
        } ${className}`}
    >
      {children}
    </h3>
  );
}

export function ResponsiveH4({ children, className }) {
  return (
    <h4 className={`md:text-h4 text-h5 md:leading-h4 leading-h5 ${className}`}>
      {children}
    </h4>
  );
}

export const ResponsiveThemedH4 = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <h4
      className={` ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } md:text-h4 text-h5 md:leading-h4 leading-h5 ${className}`}
    >
      {children}
    </h4>
  );
};

export function ThemedH4({ children, className }) {
  const { Theme } = useContext(ThemeContext);
  return (
    <h3
      className={`text-h4 leading-h4 ${Theme === "light"
        ? "text-Villo-light-black75"
        : "text-Villo-dark-white15"
        } ${className}`}
    >
      {children}
    </h3>
  );
}

export function ResponsiveH5({ children, className }) {
  return (
    <h5 className={`md:text-h5 text-h6 md:leading-h5 leading-h6 ${className}`}>
      {children}
    </h5>
  );
}

export function ThemedH5({ children, className }) {
  const { Theme } = useContext(ThemeContext);
  return (
    <h3
      className={`text-h5 leading-h5 ${Theme === "light"
        ? "text-Villo-light-black75"
        : "text-Villo-dark-white15"
        } ${className}`}
    >
      {children}
    </h3>
  );
}

export const ResponsiveThemedH5 = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <h5
      className={` ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } md:text-h5 text-h6 md:leading-h5 leading-h6 ${className}`}
    >
      {children}
    </h5>
  );
};

export function ResponsiveP({ children, maxWidth, className }) {
  return (
    <p
      className={`md:text-p text-p0 md:leading-p leading-p0 ${className} ${maxWidth}`}
    >
      {children}
    </p>
  );
}

export const ResponsiveThemedP = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <p
      className={` ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } md:text-p text-p0 md:leading-p leading-p0 ${className}`}
    >
      {children}
    </p>
  );
};

export const ThemedP = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <p
      className={` ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } text-p leading-p ${className}`}
    >
      {children}
    </p>
  );
};

export function ResponsiveSmall({ children, maxWidth, className }) {
  return (
    <p
      className={`md:text-p0  text-small md:leading-p0 leading-small ${className} ${maxWidth}`}
    >
      {children}
    </p>
  );
}

export const ThemedSmall = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <p
      className={` ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } text-p0 leading-p0 ${className}`}
    >
      {children}
    </p>
  );
};

export const ResponsiveThemedSmall = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <p
      className={` ${Theme === "light" ? "text-Villo-light-black85" : "text-Villo-dark-white"
        } md:text-p0 text-small font-normal md:leading-p0 leading-small ${className}`}
    >
      {children}
    </p>
  );
};

export function ResponsiveMini({ children, maxWidth, className }) {
  return (
    <small
      className={`md:text-small text-mini md:leading-small leading-mini ${className} ${maxWidth}`}
    >
      {children}
    </small>
  );
}

export const ResponsiveThemedMini = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <small
      className={` ${Theme === "light"
        ? "text-Villo-light-black75"
        : "text-Villo-dark-white25"
        } md:text-small font-normal text-mini md:leading-small leading-mini ${className}`}
    >
      {children}
    </small>
  );
};

export function ResponsiveLi({ children, maxWidth, className }) {
  return (
    <li
      className={`md:text-p0 text-small md:leading-p0 leading-small ${className} ${maxWidth}`}
    >
      {children}
    </li>
  );
}

export const ThemedLi = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <li
      className={` ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } text-h5 leading-h5 ${className}`}
    >
      {children}
    </li>
  );
};

export const ResponsiveThemedLi = ({ children, className }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <li
      className={` ${Theme === "light" ? "text-Villo-light-black" : "text-Villo-dark-white"
        } md:text-h5 text-p md:leading-h5 leading-p ${className}`}
    >
      {children}
    </li>
  );
};


export function ResponsiveUL({ children, className }) {
  return (
    <ul
      className={`grid gap-4 md:text-p text-p0 md:leading-p leading-p0 [&>*]:font-mono p-12 ${className}`}
    >
      {children}
    </ul>
  );
}
