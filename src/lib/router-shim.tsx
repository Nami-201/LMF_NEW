import { Link as TLink, useRouterState } from "@tanstack/react-router";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type CommonProps = {
  to: string;
  children?: ReactNode;
  className?: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

function splitHash(to: string): { path: string; hash?: string } {
  const i = to.indexOf("#");
  if (i === -1) return { path: to };
  return { path: to.slice(0, i) || "/", hash: to.slice(i + 1) };
}

export const Link = forwardRef<HTMLAnchorElement, CommonProps>(
  ({ to, children, ...rest }, ref) => {
    const { path, hash } = splitHash(to);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (
      <TLink ref={ref} to={path as any} hash={hash} {...(rest as any)}>
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

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, className, children, end, ...rest }, ref) => {
    const { path, hash } = splitHash(to);
    const current = useRouterState({ select: (s) => s.location.pathname });
    const isActive = end ? current === path : current === path || current.startsWith(path + "/");
    const cls = typeof className === "function" ? className({ isActive, isPending: false }) : className;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (
      <TLink ref={ref} to={path as any} hash={hash} className={cls} {...(rest as any)}>
        {children}
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
    search: (location as unknown as { searchStr?: string }).searchStr ?? "",
    state: null,
    key: location.href,
  };
}
