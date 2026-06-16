import { brands } from "../../data/content";

function BrandLogo({ name, href, img }: { name: string; href: string | null; img: string }) {
  const content = <img src={img} alt={name} loading="lazy" />;

  if (!href) {
    return (
      <div className="brand-item no-link" aria-label={name}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="brand-item"
      aria-label={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

function BrandTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className={`brands-marquee-track${ariaHidden ? " brands-marquee-track--clone" : ""}`} aria-hidden={ariaHidden}>
      {brands.map((brand) => (
        <BrandLogo key={brand.name} name={brand.name} href={brand.href} img={brand.img} />
      ))}
    </div>
  );
}

function SectionBrands() {
  return (
    <section className="section-brands">
      <div className="brands-marquee" aria-label="Marcas parceiras">
        <div className="brands-marquee-inner">
          <BrandTrack />
          <BrandTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}

export default SectionBrands;
