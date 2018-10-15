export default {
  brand: {
    label: 'Aiden IOT',
    router: {
      name: 'Home',
    },
  },
  loginUser: [
    {
      label: '계정',
      router: {
        name: 'Account',
      },
    },
    {
      label: '로그아웃',
      router: {
        name: 'Logout',
      },
    },
  ],
  locales: [
    {
      label: '한국어',
      value: 'ko',
      icon: 'flag_ko.png',
    },
    {
      label: '영어',
      value: 'en',
      icon: 'flag_en.png',
    },
  ],
  nav: [
    {
      label: '매뉴1',
      items: [
        {
          label: '서브매뉴1',
          router: {
            name: 'SubMenu1',
          },
        },
        {
          label: '서브매뉴2',
          router: {
            name: 'SubMenu2',
          },
        },
      ],
    },
    {
      label: '사용자',
      router: {
        name: 'User',
      },
    },
  ],
};
