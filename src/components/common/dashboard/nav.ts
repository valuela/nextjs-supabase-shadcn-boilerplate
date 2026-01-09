export type NavItem = {
  href: string;
  label: string;
  icon: "overview" | "app" | "users" | "settings";
  badge?: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const DASHBOARD_NAV: NavSection[] = [
  {
    title: "Workspace",
    items: [
      { href: "/dashboard", label: "Overview", icon: "overview" },
      { href: "/dashboard/app", label: "App", icon: "app", badge: "New" },
    ],
  },
  {
    title: "Admin",
    items: [
      { href: "/dashboard/admin/users", label: "Users", icon: "users" },
      { href: "/dashboard/settings", label: "Settings", icon: "settings" },
    ],
  },
];