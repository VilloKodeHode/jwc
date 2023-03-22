export default function ResponsiveH1({ children }) {
  return (
    <h1 className="max-w-4xl text-center lg:text-h1 sm:text-h2 text-h3 lg:leading-h1 sm:leading-h2 leading-h3">
      {children}
    </h1>
  );
}

export function ResponsiveH2({ children }) {
  return (
    <h2 className="font-light lg:leading-h2 md:leading-h3 leading-h4 lg:text-h2 md:text-h3 text-h4">
      {children}
    </h2>
  );
}

export function ResponsiveH3({ children }) {
  return (
    <h3 className="text-center md:text-h3 text-h4 md:leading-h3 leading-h4">
      {children}
    </h3>
  );
}

export function ResponsiveH4({ children }) {
  return (
    <h4 className="underline md:text-h4 text-h5 md:leading-h4 leading-h5">
      {children}
    </h4>
  );
}

export function ResponsiveP({ children }) {
  return (
    <p className="md:text-p text-p0 md:leading-p leading-p0">{children}</p>
  );
}

export function ResponsiveUL({ children }) {
  return (
    <ul className="md:text-p text-p0 md:leading-p leading-p0">{children}</ul>
  );
}
