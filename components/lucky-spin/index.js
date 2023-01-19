import React from 'react';
import dynamic from 'next/dynamic';

const Wheel = dynamic(
  () => import('react-custom-roulette').then((mod) => mod.Wheel),
  { ssr: false },
);

function LuckySpin({
  wheelSpinStatus,
  wheelData,
  onStopSpinning,
  prizeNumber,
  template,
}) {
  return (
    <Wheel
      mustStartSpinning={wheelSpinStatus}
      prizeNumber={prizeNumber}
      outerBorderColor={template?.first_color}
      outerBorderWidth={15}
      radiusLineWidth={1}
      radiusLineColor={template?.second_color}
      onStopSpinning={onStopSpinning}
      fontSize={15}
      data={wheelData}
      innerRadius={0}
      innerBorderColor="#D9D9D9"
      innerBorderWidth={20}
      backgroundColors={[
        '#E71618',
        '#21B26F',
        '#24CA69',
        '#514E50',
        '#46AEFF',
        '#9145B7',
      ]}
      textColors={['#ffffff']}
    />

  );
}

export default LuckySpin;
