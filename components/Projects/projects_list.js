// A list of all projects that will be mapped out in the projects page

export const PROJECT_LIST = [
  {
    projectName: "Gift helper",
    textColor: "text-JWC-white",
    src: "/images/projects/GH-collage.png",
    mobileSrc: "/images/projects/GH1.png",
    alt: "Gift helper",
    cardColor: "bg-[#df64cf]",
    href: "https://villokodehode.github.io/gift-helper-web/",
    hrefCode: "https://github.com/VilloKodeHode/gift-helper-web",
    description:
      "En app for å hjelpe deg med å finne gaver til andre. Ingen kjente bugs, men gaveutvalget er ikke så stort enda. Kan endres etter behov og integreres inn i andre websider.",
  },
  {
    projectName: "Flerstegs skjema",
    textColor: "text-JWC-white",
    src: "/images/projects/MSF-collage.png",
    mobileSrc: "/images/projects/Multi page form.png",
    alt: "Flersteg skjema",
    cardColor: "bg-[#f8828e]",
    href: "https://villokodehode.github.io/multi-step-form/",
    hrefCode: "https://github.com/VilloKodeHode/multi-step-form",
    description:
      "Bestillingsskjema med flere steg. Kan styles om og endres for å bruke som et bestillingsskjema for en nettside.",
  },
  {
    projectName: "Pokedex v1 og v2",
    textColor: "text-JWC-white",
    src: "/images/projects/POKEDEXV1-collage.png",
    mobileSrc: "/images/projects/POKEDEXV1-1.png",
    alt: "Pokedex v1",
    cardColor: "bg-[#EECC38]",
    href: "https://villokodehode.github.io/PokeAPI/",
    hrefCode: "https://github.com/VilloKodeHode/PokeAPI",
    description:
      "En REST api app for å vise en mengde pokemon. Bruker 3 layered fetching for å hente alle dataene. Har nylig laget en forbedret versjon, men mangler noe styling (link inne i samme app). Kan lett endres for å vise andre data fra en REST api.",
  },
  {
    projectName: "Stein, sakser, papir app",
    textColor: "text-JWC-white",
    src: "/images/projects/RPS-collage.png",
    mobileSrc: "/images/projects/RPS.png",
    alt: "Stein sakser papir app",
    cardColor: "bg-[#427de9]",
    href: "https://villokodehode.github.io/Rock--Paper--Scissors--Lizard--Spock-game/#/",
    hrefCode:
      "https://github.com/VilloKodeHode/Rock--Paper--Scissors--Lizard--Spock-game",
    description:
      "Stein, saks papir spill med 2 utvidede versjoner: Versjon 2 legger til 2 nye muligheter og versjon 3 legger til hele 4 nye muligheter. Det er brukt useState og useEffect for å håndtere spilllogikken. Ingen bugs!",
  },
  {
    projectName: "App for gode råd",
    textColor: "text-JWC-white",
    src: "/images/projects/AG-collage.png",
    mobileSrc: "/images/projects/Advice generator.png",
    alt: "App for gode råd",
    cardColor: "bg-[#66e2b3]",
    href: "https://villokodehode.github.io/advice-generator/",
    hrefCode: "https://github.com/VilloKodeHode/advice-generator",
    description:
      "Enkel app som henter råd fra en API. Prosjektet var raskt å lage. Bugs: Oppdaget nylig at den ikke fungerer i Firefox (planlagt å fikse)",
  },
];

export default PROJECT_LIST;
