import React from 'react';
import { BASE_FONT_STYLE, BASE_RESET_STYLE } from '../../../../shared/styles/commonStyles';
import { COLORS } from '../../../../theme';

interface InfoSectionItem {
  id: string | number;
  text: string;
  link?: string;
}

interface InfoSectionProps {
  title: string;
  moreLink: string;
  moreLinkText?: string;
  items: InfoSectionItem[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, moreLink, moreLinkText = '더보기', items }) => {
  const sectionStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    padding: '60px 20px',
  };

  const containerStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    backgroundColor: COLORS.GN_USE_COLOR_WHITE,
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  };

  const headerStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  };

  const titleStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    fontSize: '28px',
    fontWeight: 'bold',
    color: COLORS.GN_USE_COLOR_2,
    letterSpacing: '-0.025em',
  };

  const moreLinkStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    textDecoration: 'none',
    color: COLORS.GN_USE_COLOR_4,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'color 0.3s ease',
  };

  const listStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  };

  const itemStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  };

  const iconStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    color: '#3E7800',
    fontSize: '16px',
    lineHeight: '24px',
    flexShrink: 0,
  };

  const itemTextStyle = {
    ...BASE_RESET_STYLE,
    ...BASE_FONT_STYLE,
    fontSize: '16px',
    lineHeight: '24px',
    color: COLORS.GN_USE_COLOR_2,
    letterSpacing: '-0.025em',
  };

  const itemLinkStyle = {
    ...itemTextStyle,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>{title}</h2>
            <a
              href={moreLink}
              style={moreLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#3E7800')}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.GN_USE_COLOR_4)}
            >
              {moreLinkText}
              <span>→</span>
            </a>
          </div>
          <ul style={listStyle}>
            {items.map((item) => (
              <li key={item.id} style={itemStyle}>
                <span style={iconStyle}>■</span>
                {item.link ? (
                  <a
                    href={item.link}
                    style={itemLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#3E7800')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.GN_USE_COLOR_2)}
                  >
                    {item.text}
                  </a>
                ) : (
                  <span style={itemTextStyle}>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
