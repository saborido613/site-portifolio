interface SectionHeaderProps {
  subtitle: string;
  title: string;
  dark?: boolean;
}

function SectionHeader({ subtitle, title, dark = false }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
      <div className={`header-divider${dark ? "" : ""}`} />
    </div>
  );
}

export default SectionHeader;
