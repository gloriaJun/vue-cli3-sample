export default {
  brand: {
    label: 'BrandName',
    // router: {
    //   name: 'Home',
    // },
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
  locales: {
    ko: {
      label: '한국어',
      icon: 'flag_ko.png',
    },
    en: {
      label: '영어',
      icon: 'flag_en.png',
    },
  },
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
