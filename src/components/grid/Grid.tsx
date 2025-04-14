import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import styles from "./Grid.module.scss";

type GridProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<C>;

export default function Grid<C extends ElementType>({
  as,
  children,
  className,
  ...delegated
}: GridProps<C>) {
  const PolymorphicComponent = as || "div";

  return (
    <PolymorphicComponent
      className={`${styles["grid"]} ${className}`}
      {...delegated}
    >
      {children}
    </PolymorphicComponent>
  );
}
