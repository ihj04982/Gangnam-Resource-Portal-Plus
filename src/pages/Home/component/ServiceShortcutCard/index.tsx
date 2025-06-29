import React from 'react';
import { BASE_FONT_STYLE, BASE_RESET_STYLE } from '../../../../shared/styles/commonStyles';
import { COLORS } from '../../../../theme';

interface ServiceShortcutCardProps {
  title: string;
}

const ServiceShortcutCard: React.FC<ServiceShortcutCardProps> = ({ title }) => {
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
    backgroundColor: COLORS.GN_USE_COLOR_WHITE,
    borderRadius: '20px',
  };

  const cardLinkStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    listStyle: 'none',
    textDecoration: 'none',
    color: COLORS.GN_USE_COLOR_2,
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
    color: COLORS.GN_USE_COLOR_2,
    marginBottom: '20px',
    letterSpacing: '-0.025em',
  };

  return (
    <li style={cardItemStyle}>
      <div style={cardBoxStyle}>
        <a href="#" style={cardLinkStyle}>
          <h4 style={cardTitleStyle}>{title}</h4>
        </a>
      </div>
    </li>
  );
};

export default ServiceShortcutCard;
