import { type ReactNode } from "react";
import styles from "./PageLayout.module.scss";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles["page-layout"]}>
      <main className={styles["main"]}>{children}</main>
    </div>
  );
}
