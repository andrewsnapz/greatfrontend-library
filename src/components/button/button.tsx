import {
  type ElementType,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from "react";
import { Link, type LinkProps } from "react-router-dom";
import styles from "./button.module.scss";

type BaseProps = {
  children?: ReactNode;
  size?: "md" | "lg" | "xl" | "2xl";
  icon?: ElementType;
  iconAlignment?: "left" | "right";
  iconDescription?: string;
  hasIconOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  to?: never;
} & BaseProps & { kind?: "primary" | "secondary" | "tertiary" | "danger" };

type ButtonLinkProps = LinkProps &
  BaseProps & { to: string } & { kind?: "default" | "grey" };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    const {
      children,
      kind = "default",
      size = "md",
      icon: BaseIconElement,
      iconAlignment = "left",
      iconDescription,
      hasIconOnly = false,
      ...delegated
    } = props;
    const buttonImage = !BaseIconElement ? null : (
      <BaseIconElement
        aria-label={iconDescription}
        aria-hidden="true"
        className={`${styles[`button__icon-alignment-${iconAlignment}`]} ${
          styles[`button-icon-size-${size}`]
        }`}
      />
    );

    return (
      <Link
        className={`${styles["button"]} ${styles["button-link"]} ${
          styles[`button-link-${kind}`]
        } ${styles[`button-${size}`]}`}
        {...delegated}
      >
        {buttonImage} {!hasIconOnly && children}
      </Link>
    );
  }

  /* 
     Destructuring after the `if` statement to ensure TypeScript "understands" that `props` is of type `ButtonProps` 
     and `delegated` will therefore only contain props that work on <button> 
  */

  const {
    children,
    kind = "primary",
    size = "md",
    icon: BaseIconElement,
    iconAlignment = "left",
    iconDescription,
    hasIconOnly = false,
    ...delegated
  } = props;

  const buttonImage = !BaseIconElement ? null : (
    <BaseIconElement
      aria-label={iconDescription}
      aria-hidden="true"
      className={`${styles[`button__icon-alignment-${iconAlignment}`]} ${
        styles[`button-icon-size-${size}`]
      }`}
    />
  );

  return (
    <button
      className={`${styles["button"]} ${styles[`button-${kind}`]} ${
        styles[`button-${size}`]
      }`}
      {...delegated}
    >
      {buttonImage}
      {!hasIconOnly && children}
    </button>
  );
}
