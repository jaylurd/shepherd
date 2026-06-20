(function () {
  const NAV_ITEMS = [
    { href: 'dashboard.html', label: 'Dashboard', icon: 'dashboard' },
    { href: 'first-timers.html', label: 'First-Timers', icon: 'person_add' },
    { href: 'members.html', label: 'Members', icon: 'groups' },
    { href: 'giving.html', label: 'Giving', icon: 'payments' },
    { href: 'broadcasts.html', label: 'Broadcasts', icon: 'campaign' },
    { href: 'analytics.html', label: 'Analytics', icon: 'analytics' },
    { href: 'settings.html', label: 'Settings', icon: 'settings' },
  ];

  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';

  function renderSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if (!sidebar) return;

    const navLinks = NAV_ITEMS.map(function (item) {
      const active = currentPage === item.href ? ' active' : '';
      return (
        '<a href="' + item.href + '" class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-colors' + active + '">' +
        (active ? '<span class="nav-active-indicator"></span>' : '') +
        '<span class="material-symbols-outlined text-xl">' + item.icon + '</span>' +
        '<span class="font-label-md text-label-md">' + item.label + '</span>' +
        '</a>'
      );
    }).join('');

    sidebar.innerHTML =
      '<div class="flex flex-col h-full bg-surface-container-lowest border-r border-outline-variant/20">' +
      '<div class="px-6 py-6 border-b border-outline-variant/10">' +
      '<a href="dashboard.html" class="flex items-center gap-3">' +
      '<span class="material-symbols-outlined text-primary text-3xl filled">church</span>' +
      '<div>' +
      '<p class="font-display text-headline-md text-on-surface font-bold leading-none">Shepherd</p>' +
      '<p class="text-label-sm text-on-surface-variant mt-1">Covenant Chapel Lagos</p>' +
      '</div>' +
      '</a>' +
      '</div>' +
      '<nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">' + navLinks + '</nav>' +
      '<div class="p-4 border-t border-outline-variant/10">' +
      '<div class="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-low">' +
      '<div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">PA</div>' +
      '<div class="min-w-0 flex-1">' +
      '<p class="font-label-md text-label-md text-on-surface truncate">Pastor Adeyemi</p>' +
      '<p class="text-label-sm text-on-surface-variant truncate">Signed in</p>' +
      '</div>' +
      '<a href="login.html" title="Sign out" class="text-on-surface-variant hover:text-primary transition-colors">' +
      '<span class="material-symbols-outlined">logout</span>' +
      '</a>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function bindMobileNav() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (!toggle || !sidebar || !overlay) return;

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    }

    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });

    overlay.addEventListener('click', closeSidebar);

    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeSidebar);
    });
  }

  function bindPasswordToggle() {
    document.querySelectorAll('[data-toggle-password]').forEach(function (button) {
      button.addEventListener('click', function () {
        const input = button.closest('.relative')?.querySelector('input');
        const icon = button.querySelector('.material-symbols-outlined');
        if (!input || !icon) return;

        const visible = input.type === 'text';
        input.type = visible ? 'password' : 'text';
        icon.textContent = visible ? 'visibility' : 'visibility_off';
      });
    });
  }

  function bindAuthForms() {
    document.querySelectorAll('[data-auth-form]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'dashboard.html';
      });
    });
  }

  function bindSearchFilters() {
    document.querySelectorAll('[data-table-search]').forEach(function (input) {
      const targetId = input.getAttribute('data-table-search');
      const table = document.getElementById(targetId);
      if (!table) return;

      input.addEventListener('input', function () {
        const query = input.value.toLowerCase();
        table.querySelectorAll('[data-row]').forEach(function (row) {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(query) ? '' : 'none';
        });
      });
    });
  }

  renderSidebar();
  bindMobileNav();
  bindPasswordToggle();
  bindAuthForms();
  bindSearchFilters();
})();
