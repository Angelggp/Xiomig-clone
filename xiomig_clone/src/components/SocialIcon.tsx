interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, ariaLabel, children }) => (
  <a 
    target="_blank" 
    href={href}
    aria-label={ariaLabel}
    className="hover:scale-110 transition-transform duration-200"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default SocialIcon;