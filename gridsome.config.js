// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matt McAdams',
  siteDescription: '',

  plugins: [

    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        baseDir: './content/projects',
        pathPrefix: '/work',
        path: '*.md',
        refs: {
          tags: {
            typeName: 'ProjectTag',
            create: true
          }
        }
      }
    },

    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        pathPrefix: '/thoughts',
        path: '*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'PostTag',
            create: true
          },
          series: {
            typeName: 'PostSeries',
            create: true
          }
        }
      }
    }
  ],

  templates: {
    PostTag: '/thoughts/tag/:title',
    ProjectTag: '/work/tag/:id'
  },

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs',
        ['remark-containers', { default: true }]

      ]
    }
  }
}
