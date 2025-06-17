interface Props {
  fill?: string;
  className?: string;
}

function CarChairIcon({ fill = "currentColor", className }: Props) {
  return (
    <svg
      className={className}
      data-v-62118a93=""
      data-v-23e2e990=""
      viewBox="0 0 24 24"
    >
      <path
        d="M19 18.5V5.2l-.7-.2C14.2 3.7 9.8 3.7 5.7 5l-.7.2v13.3l-.4.2-.6.3v5h16v-5l-.6-.3zM7 6.7c3.3-.9 6.7-.9 10 0v11.1c-3.3-1-6.7-1-10 0zM18 22H6v-1.7c1.9-.8 3.9-1.3 6-1.3s4.1.4 6 1.3zM7.7.6l.5 1.9c2.4-.7 5-.7 7.5 0l.5-1.9c-2.7-.8-5.7-.8-8.5 0m8.8 8.8-1.8-.9C13.6 10.9 13 13.4 13 16h2q0-3.45 1.5-6.6m-9 0c1 2 1.5 4.3 1.5 6.6h2c0-2.6-.6-5.1-1.7-7.4z"
        fill={fill}
      ></path>
    </svg>
  );
}

export default CarChairIcon;
