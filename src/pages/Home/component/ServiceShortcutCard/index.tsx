import React, { useState } from 'react';
import Shortcut01 from '../../../../assets/svg/Shortcut01';
import Shortcut02 from '../../../../assets/svg/Shortcut02';
import Shortcut03 from '../../../../assets/svg/Shortcut03';
import Shortcut04 from '../../../../assets/svg/Shortcut04';
import Shortcut05 from '../../../../assets/svg/Shortcut05';
import { BASE_FONT_STYLE, BASE_RESET_STYLE } from '../../../../shared/styles/commonStyles';
import { COLORS } from '../../../../theme';

interface ServiceShortcutCardProps {
  title: string;
  index: number;
}

const ServiceShortcutCard: React.FC<ServiceShortcutCardProps> = ({ title, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const shortcutComponents = [Shortcut01, Shortcut02, Shortcut03, Shortcut04, Shortcut05];
  const links = ['/clean', '/clean/biz-trash', '/clean/pet', '/clean/coffee-ground', '/clean/recycle-statistics'];

  const ShortcutComponent = shortcutComponents[index];
  const linkHref = links[index];

  const cardItemStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    listStyle: 'none',
    flex: 1,
  };

  const cardBoxStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    listStyle: 'none',
    padding: '38px 30px 40px',
    backgroundColor: isHovered ? '#3E7800' : COLORS.GN_USE_COLOR_WHITE,
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
  };

  const cardLinkStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    listStyle: 'none',
    textDecoration: 'none',
    color: isHovered ? COLORS.GN_USE_COLOR_WHITE : COLORS.GN_USE_COLOR_2,
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',
    position: 'relative' as const,
    height: '93px',
    alignItems: 'baseline',
  };

  const cardTitleStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    listStyle: 'none',
    width: '100%',
    fontSize: '20px',
    color: isHovered ? COLORS.GN_USE_COLOR_WHITE : COLORS.GN_USE_COLOR_2,
    marginBottom: '20px',
    letterSpacing: '-0.025em',
  };

  return (
    <li style={cardItemStyle}>
      <div style={cardBoxStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <a href={linkHref} style={cardLinkStyle}>
          <h4 style={cardTitleStyle}>{title}</h4>

          {ShortcutComponent && <ShortcutComponent />}
        </a>
      </div>
    </li>
  );
};

export default ServiceShortcutCard;
