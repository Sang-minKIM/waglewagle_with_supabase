export const SpeechBubble = ({ width = 120, height = 120 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_135_636"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="110"
        height="110"
      >
        <path
          d="M110 60C110 87.615 87.615 110 60 110H10V60C10 32.385 32.385 10 60 10C87.615 10 110 32.385 110 60Z"
          fill="white"
          stroke="white"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 45H80M35 65H80M35 85H60"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_135_636)">
        <path d="M0 0H120V120H0V0Z" fill="#232834" />
      </g>
    </svg>
  );
};
