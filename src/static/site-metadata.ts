interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '奔跑着看看世界',
  siteUrl: 'https://lymrun.pages.dev/',
  logo: 'https://mumu-7p4.pages.dev/',
  description: '李一鸣的跑步世界',
  navLinks: [
    {
      name: 'ThanksTo',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
