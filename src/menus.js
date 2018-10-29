export default {
  header: {
    loginUser: {
      icon: 'fas fa-user-circle',
      children: [
        {
          labelKey: 'app.changePassword.title',
          icon: 'fas fa-key',
          action: 'ChangePassword',
          // path: 'ChangePassword',
        },
        {
          labelKey: 'app.button.logout',
          icon: 'fas fa-sign-out-alt',
          action: 'Logout',
          // path: 'Logout',
        },
      ],
    },
  },
  sidebar: [
    {
      labelKey: 'app.monitoring.title',
      icon: 'fas fa-tachometer-alt',
      children: [
        {
          labelKey: 'app.monitoring.dashboard',
          path: 'Dashboard',
        },
      ],
    },
    {
      labelKey: 'app.user.title',
      icon: 'fas fa-users',
      path: 'Users',
    },
  ],
};
