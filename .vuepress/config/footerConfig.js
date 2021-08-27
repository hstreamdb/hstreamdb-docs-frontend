const version = process.env.VERSION
const prefixEN = `/docs/en/${version ? `${version}/` : ''}`
const prefixZH = `/docs/zh/${version ? `${version}/` : ''}`

module.exports = {
  'zh-CN': {
    column: [
      {
        title: 'GitHub',
        link: 'https://github.com/hstreamdb/hstream/',
      },
      {
        title: '文档',
        link: prefixZH,
      },
      {
        title: '博客',
        link: 'https://www.emqx.com/zh/blog/category/hstream',
      },
      {
        title: '社区',
        link: 'https://hstream.io/zh/community',
      },
    ],
    followList: [
      { icon: 'icon-github', link: 'https://github.com/hstreamdb/hstream/' },
      {
        icon: 'icon-youtube',
        link: 'https://www.youtube.com/channel/UCir_r04HIsLjf2qqyZ4A8Cg',
      },
      { icon: 'icon-weibo', link: 'https://weibo.com/emqtt' },
      { icon: 'icon-linkedin', link: 'https://www.linkedin.com/company/emqtech' },
      { icon: 'icon-bilibili', link: 'https://space.bilibili.com/522222081' },
    ],
  },
  en: {
    column: [
      {
        title: 'GitHub',
        link: 'https://github.com/hstreamdb/hstream/',
      },
      {
        title: 'Docs',
        link: prefixEN,
      },
      {
        title: 'Blog',
        link: 'https://www.emqx.com/en/blog/category/hstream',
      },
      {
        title: 'Community',
        link: 'https://hstream.io/community',
      },
    ],
    followList: [
      { icon: 'icon-github', link: 'https://github.com/hstreamdb/hstream/' },
      { icon: 'icon-twitter', link: 'https://twitter.com/EMQTech' },
      {
        icon: 'icon-youtube',
        link: 'https://www.youtube.com/channel/UC5FjR77ErAxvZENEWzQaO5Q',
      },
      { icon: 'icon-linkedin', link: 'https://www.linkedin.com/company/emqtech' },
    ],
  },
}
