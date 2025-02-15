import NextLink from "next/link";
import styles from "./Link.module.css";

type Props = React.ComponentProps<typeof NextLink> & {
  variant?: "underline" | "underline-inverse";
};

export default function Link({ href, variant, ...props }: Props) {
  return (
    <NextLink
      className={styles.root}
      href={href}
      data-variant={variant}
      {...props}
    />
  );
}
