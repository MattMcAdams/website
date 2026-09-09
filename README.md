# mattmcadams.com

Personal website of Matthew McAdams.

## A brief history of my personal website

I start with a new repo each time I make major architectual changes, usually accompanied by a more drastic redesign. This is the third repository, which starts at v6, with a shift away from netlify large media and gridsome in favor of 11ty and google cloud storage.

Each major design change gets a new major version and I have kept zip archives of all previous major versions, but do not make those public.

The first two versions of my website were raw html files with a little css hosted on github pages. The next version I moved to wordpress. Versions 4 and 5 were on Gridsome and hosted on Netlify. Version 6 uses 11ty, Cloudflare, and Google Cloud Storage.

## Setup notes

Remember to create a .env file with the following variables:

```
RCLONE_CONFIG_MCDMS_ACCESS_KEY_ID
RCLONE_CONFIG_MCDMS_SECRET_ACCESS_KEY
```

These are used to authenticate with Cloudflare R2 and used to sync the images folder.
