import React from 'react';
import { CONTAINER_STYLE, FLEX_LIST_STYLE, SECTION_STYLE } from '../../../../shared/styles/commonStyles';
import ServiceShortcutCard from '../ServiceShortcutCard';

const ServiceShortcutSection: React.FC = () => {
  const shortcutItems = [
    '생활쓰레기 처리 절차',
    '사업장 폐기물 신고',
    '투명페트병 분리배출',
    '커피박(커피찌꺼기) 수거',
    '자원순환 통계',
  ];

  return (
    <div style={SECTION_STYLE}>
      <div style={CONTAINER_STYLE}>
        <ul style={FLEX_LIST_STYLE}>
          {shortcutItems.map((title, index) => (
            <ServiceShortcutCard key={index} title={title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceShortcutSection;
