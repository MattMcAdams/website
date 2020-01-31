# mattmcadams.com
Welcome to the repo for my personal website! I'm not really sure what to say here since its just my website, but feel free to poke around.

[![Netlify Status](https://api.netlify.com/api/v1/badges/69ea7e24-27c8-410f-89d0-6a597c117be3/deploy-status)](https://app.netlify.com/sites/mattmcadams/deploys)

## Roadmap
I have always used my website as a testbed for things I'm interested in or learning. That being said, anything is subject to change at any time.

## Tools & workflow
I write my content in markdown and store my media assets in an S3 bucket at assets.mattmcadams.com. This ensures maximum content portability if I decide to change up how the website it built or hosted in the future. The website code itself is written in Vue with a GraphQL layer provided by the static site generator Gridsome.

The site is built on two branches, `master` for production which can be found at mattmcadams.com, and `dev` for major changes which can be previewed on dev.mattmcadams.com.

A few other things to note are that I use Hover as my domain registrar, but use Netlify's DNS because I couldn't figure out how to get everything to work properly while keeping the DNS with Hover (which would have been prefered). I'm also looking into a possible CMS solution that would allow me to upload images to S3 in the same content editor, but as of now I haven't found a solution I'm 100% happy with.

## Contribute!
If you see a spelling mistake, notice a bug, want to give feedback, or have any ideas / solutions to some of those problems; feel free to open an issue here on GitHub.
