interface Props {
  fill?: string;
  className?: string;
}

function CarBodyIcon({ fill = "currentColor", className }: Props) {
  return (
    <svg
      className={className}
      data-v-62118a93=""
      data-v-23e2e990=""
      viewBox="0 0 24 24"
    >
      <path
        d="M16.35 1.79a12.4 12.4 0 0 0-8.7 0L7 2.03v6.8c-.19.06-.38.11-.57.18l-2.79 1.04.7 1.87 2.65-.99v11.02l.65.24c1.41.53 2.88.79 4.35.79s2.93-.27 4.35-.79l.65-.24V10.94l2.65.99.7-1.87-2.79-1.04c-.19-.07-.38-.12-.57-.18V2.03l-.65-.24ZM9 3.45c1.97-.59 4.03-.59 6 0v4.86c-1.98-.38-4.02-.38-6 0zm6 13.1c-1.97.59-4.03.59-6 0v-6.19c1.98-.44 4.02-.44 6 0zm-6 4.01v-1.94c.99.25 1.99.38 3 .38s2.01-.13 3-.38v1.94c-1.97.59-4.03.59-6 0"
        fill={fill}
      ></path>
    </svg>
  );
}

export default CarBodyIcon;
