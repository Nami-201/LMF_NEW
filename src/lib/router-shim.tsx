import { Link as TLink, useRouterState, type LinkProps as TLinkProps } from "@tanstack/react-router";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type CommonProps = {
  to: string;
  children?: ReactNode;
  className?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  "aria-label"?: string;
};

function splitHash(to: string): { path: string; hash?: string } {
  const i = to.indexOf("#");
  if (i === -1) return { path: to };
  return { path: to.slice(0, i) || "/", hash: to.slice(i + 1) };
}

export const Link = forwardRef<HTMLAnchorElement, CommonProps & Record<string, unknown>>(
  ({ to, children, ...rest }, ref) => {
    const { path, hash } = splitHash(to);
    const props = { to: path, hash, ...(rest as Partial<TLinkProps>) } as TLinkProps;
    return (
      <TLink ref={ref} {...props}>
        {children}
      </TLink>
    );
  },
);
Link.displayName = "Link";

export type NavLinkRenderProps = { isActive: boolean; isPending: boolean };
export type NavLinkProps = Omit<CommonProps, "className"> & {
  className?: string | ((p: NavLinkRenderProps) => string);
  end?: boolean;
};

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps & Record<string, unknown>>(
  ({ to, className, children, end, ...rest }, ref) => {
    const { path, hash } = splitHash(to);
    const current = useRouterState({ select: (s) => s.location.pathname });
    const isActive = end ? current === path : current === path || current.startsWith(path + "/");
    const cls = typeof className === "function" ? className({ isActive, isPending: false }) : className;
    const props = { to: path, hash, className: cls, ...(rest as Partial<TLinkProps>) } as TLinkProps;
    return (
      <TLink ref={ref} {...props}>
        {children as ReactNode}
      </TLink>
    );
  },
);
NavLink.displayName = "NavLink";

export function useLocation() {
  const location = useRouterState({ select: (s) => s.location });
  return {
    pathname: location.pathname,
    hash: location.hash ? `#${location.hash}` : "",
    search: location.searchStr ?? "",
    state: null,
    key: location.href,
  };
}
