const navGroups = [
  { title: "Workspace", items: [{ href: "index.html", icon: "space_dashboard", label: "Overview", page: "overview" }] },
  { title: "Foundations", items: [
    { href: "colors.html", icon: "palette", label: "Colors", page: "colors" },
    { href: "typography.html", icon: "text_fields", label: "Typography", page: "typography" },
    { href: "logos.html", icon: "interests", label: "Logos", page: "logos" },
    { href: "icons.html", icon: "apps", label: "Icons", page: "icons" },
    { href: "layout.html", icon: "view_quilt", label: "Layout & tokens", page: "layout" }
  ] },
  { title: "Components", items: [
    { href: "ctas.html", icon: "smart_button", label: "CTAs", page: "ctas" },
    { href: "controls.html", icon: "tune", label: "Controls", page: "controls" },
    { href: "navigation.html", icon: "account_tree", label: "Navigation", page: "navigation" },
    { href: "blocks.html", icon: "view_agenda", label: "Blocks", page: "blocks" },
    { href: "databases.html", icon: "database", label: "Databases", page: "databases" },
    { href: "charts.html", icon: "monitoring", label: "Charts", page: "charts" },
    { href: "states.html", icon: "progress_activity", label: "States", page: "states" }
  ] },
  { title: "Guidelines", items: [{ href: "accessibility.html", icon: "accessibility_new", label: "Accessibility", page: "accessibility" }] }
];

const sidebar = document.querySelector("#system-sidebar");
const currentPage = document.body.dataset.page;
if (sidebar) {
  sidebar.innerHTML = `
    <a class="brand-link" href="index.html" aria-label="Nody UI overview">
      <img class="brand-image" src="logo/nody-icon-dark.png" alt=""><span class="brand-name">Nody UI</span>
    </a>
    ${navGroups.map(group => `
      <nav class="nav-section" aria-label="${group.title}">
        <div class="nav-label">${group.title}</div>
        ${group.items.map(item => `
          <a class="nav-link" href="${item.href}" ${item.page === currentPage ? 'aria-current="page"' : ""} title="${item.label}">
            <span class="material-symbols-outlined" aria-hidden="true">${item.icon}</span><span class="nav-text">${item.label}</span>
          </a>`).join("")}
      </nav>`).join("")}
    <div class="sidebar-footer">Nody design system · 0.1</div>`;
}

const toggle = document.querySelector("#menu-toggle");
if (toggle && sidebar) {
  const desktop = window.matchMedia("(min-width: 621px)");
  const setCollapsed = collapsed => {
    document.body.classList.toggle("sidebar-collapsed", collapsed && desktop.matches);
    sidebar.classList.toggle("mobile-open", !desktop.matches && !collapsed);
    toggle.setAttribute("aria-expanded", String(!collapsed));
  };
  setCollapsed(!desktop.matches);
  toggle.addEventListener("click", () => {
    const next = desktop.matches
      ? !document.body.classList.contains("sidebar-collapsed")
      : sidebar.classList.contains("mobile-open");
    setCollapsed(next);
  });
  desktop.addEventListener("change", () => setCollapsed(!desktop.matches));
  document.addEventListener("click", event => {
    if (!desktop.matches && sidebar.classList.contains("mobile-open") && !sidebar.contains(event.target) && !toggle.contains(event.target)) setCollapsed(true);
  });
}

const topbar = document.querySelector(".topbar");
if (topbar && !document.querySelector("#theme-toggle")) {
  const themeToggle = document.createElement("button");
  themeToggle.className = "theme-toggle";
  themeToggle.id = "theme-toggle";
  themeToggle.type = "button";
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
  themeToggle.setAttribute("aria-pressed", "false");
  themeToggle.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">dark_mode</span>';
  const meta = topbar.querySelector(".topbar-meta");
  if (meta) topbar.insertBefore(themeToggle, meta.nextSibling);
  else topbar.appendChild(themeToggle);
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";
    if (isDark) document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.querySelector(".material-symbols-outlined").textContent = isDark ? "light_mode" : "dark_mode";
  });
}
