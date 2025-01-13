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
  logo: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fspider.ws.126.net%2F3b05353ab14b07caf199a1a830058975.jpeg&thumbnail=660x2147483647&quality=80&type=jpg',
  description: '李一鸣的跑步世界',
  navLinks: [
    {
      name: 'ThanksTo',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
