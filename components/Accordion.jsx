export default function Accordion({ text, children }) {
  return (
    <div className="collapse">
      <input type="checkbox" className="peer" />
      <div className="text-center collapse-title text-h3 text-JWC-black75 peer-checked:text-JWC-primary accordiontext">
        {text}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 peer-checked:min-h-[350px] peer-checked:py-12 peer-checked: peer-checked: collapse-content text-primary-content peer-checked:text-secondary-content">
        <>{children}</>
      </div>
    </div>
  );
}
