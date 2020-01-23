// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matt McAdams',
  siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',

  plugins: [

    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        baseDir: './content/projects',
        pathPrefix: '/portfolio',
        path: '*.md'
      }
    },

    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        pathPrefix: '/blog',
        path: '*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],

  templates: {
    //Post: '/blog/:title',
    Tag: '/tag/:id',
    //Project: '/portfolio/:title'
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
