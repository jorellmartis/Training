export default [
  {
    label: "Sidebar.Dashboard",
    href: "/dashboard",
    icon: "NavHome",
  },
  {
    label: "Sidebar.eServices",
    icon: "NavHome",
    href: "/dashboard/services",
    subItems: [
      {
        label: "Sidebar.Services.Applications",
        href: "/dashboard/services/applications",
      },
      {
        label: "Sidebar.Services.AllServices",
        href: "/dashboard/services",
        showPopup: true,
        popupType: "search-services",
      },
      {
        label: "Sidebar.Services.Policies",
        href: "/dashboard/services/policies",
      },
    ],
  },
  {
    label: "Sidebar.Announcements",
    href: "/dashboard/announcements",
    icon: "NavHome",
  },
  {
    label: "Sidebar.Events",
    href: "/dashboard/events",
    icon: "NavHome",
  },
  {
    label: "Sidebar.KnowledgeHub",
    href: "/dashboard/knowledge-hub",
    icon: "NavHome",
  },
  {
    label: "Sidebar.Insights",
    href: "/dashboard/insights",
    icon: "NavHome",
  },
  {
    label: "Sidebar.Entities",
    href: "/dashboard/entities",
    icon: "NavHome",
  },
  {
    label: "EmployeeDirectory.SidebarTitle",
    href: "/dashboard/employee-directory",
    icon: "NavHome",
    subItems: [
      {
        label: "EmployeeDirectory.AllEmployees",
        href: "/dashboard/employee-directory",
      },
      {
        label: "EmployeeDirectory.HappyMoments",
        href: "/dashboard/employee-directory/happy-moments",
        showPopup: true,
        popupType: "search-services",
      },
      {
        label: "EmployeeDirectory.Diagram",
        href: "/dashboard/employee-directory/diagram",
      },
    ],
  },
  {
    label: "Sidebar.Initiatives",
    href: "/dashboard/initiatives",
    icon: "NavHome",
  },
];

export const footerLinks = [
  {
    label: "Sidebar.HelpCenter",
    href: "/dashboard/help-center",
    icon: "NavHome",
  },
];
