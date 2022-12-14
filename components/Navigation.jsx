import Link from "next/link";
import styles from "./Navigation.module.css"

/*preset>*/
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </nav>
    </header>
  );
}
