interface Props {
  fill?: string;
  className?: string;
}

function GasIcon({ fill = "currentColor", className }: Props) {
  return (
    <svg
      className={className}
      data-v-62118a93=""
      data-v-23e2e990=""
      viewBox="0 0 24 24"
    >
      <path
        d="M16 19.01v-2h3c1.65 0 3-1.35 3-3V7.58l-4.29-4.29L16.3 4.7l1.71 1.71V9c0 .55.45 1 1 1h1v4.02c0 .55-.45 1-1 1h-3V3l-.75-.2a24.67 24.67 0 0 0-12.51.01l-.75.2v16H0v2h24v-2zM14 4.55v4.44H4V4.56a22.8 22.8 0 0 1 10 0ZM4 19.01V11h10v8.02H4Z"
        fill={fill}
      ></path>
    </svg>
  );
}

export default GasIcon;
