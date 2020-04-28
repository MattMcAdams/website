# mattmcadams.com

Welcome to the repo for my personal website! I'm not really sure what to say here since its just my website, but feel free to poke around.

[![Netlify Status](https://api.netlify.com/api/v1/badges/69ea7e24-27c8-410f-89d0-6a597c117be3/deploy-status)](https://app.netlify.com/sites/mattmcadams/deploys)

## Tools & workflow

This website is built with [Gridsome](https://gridsome.org/) and hosted on [Netlify](https://www.netlify.com/).

### Requirements

1. Install [Node & NPM](https://nodejs.org/en/download/)
2. Install [git LFS](https://git-lfs.github.com/)
3. Install [Netlify CLI](https://docs.netlify.com/cli/get-started/)
4. Install [Netlify Large Media](https://docs.netlify.com/large-media/setup/)
5. Install [node-gyp](https://github.com/nodejs/node-gyp)

Clone this repo, (Optional) Switch to the Dev branch for major work

```txt
git clone https://github.com/MattMcAdams/website.git
git checkout dev
```

Install dependancies

```txt
npm install
```

### Working with Netlify Large Media

If you have trouble pushing a commit using large media, reinstall Netlify Large Media like so:

```txt
netlify lm:install
netlify lm:setup
```

This will usually solve any lfs errors you get during the push.

## Technology & Links

* [Vue.js](https://vuejs.org/)
* [Sass](https://sass-lang.com/)
* [Remark containers](https://github.com/Nevenall/remark-containers)
* [Tiny helpers](https://tiny-helpers.dev/)
* [Github Calendar](https://github.com/IonicaBizau/github-calendar)
* [How to fix node-gyp on MacOS](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)
* [Parallax](https://simpleparallax.com/)

## Contribute

If you see a spelling mistake, notice a bug, want to give feedback, or have any ideas / solutions to some of those problems; feel free to open an issue here on GitHub or reach out to me at mattmcadams@outlook.com

All code in this project is licensed under the Mozilla Public License 2.0 exclusive to any intellectual property in the form of blog post content, visual design, or any other material that may be considered "website content". If you have any questions please fell free to reach out to me at mattmcadams@outlook.com

## Browser Support

My website supports all modern browsers: Chrome, Firefox, Edge, Opera, and Safari. I do not support Internet Explorer on this site. If you'd like to read more about this decision, see these related articles.

* [Why you should have ditched IE support long ago](https://areknawo.com/why-you-should-have-ditched-ie-support-long-ago/)
* [Why We Abandoned IE11](https://www.vieodesign.com/blog/why-we-abandoned-ie11)
* [Microsoft really doesn’t want you to use Internet Explorer anymore](https://www.theverge.com/2019/2/8/18216767/microsoft-internet-explorer-warning-compatibility-solution)
* [Supporting Internet Explorer is hell](https://www.theregister.co.uk/2019/12/20/web_devs_identify_top_needs_in_new_survey/)
* [Microsoft security chief: IE is not a browser, so stop using it as your default](https://www.zdnet.com/article/microsoft-security-chief-ie-is-not-a-browser-so-stop-using-it-as-your-default/)
* [A Business Case for Dropping Internet Explorer](https://css-tricks.com/a-business-case-for-dropping-internet-explorer/)
* [The End of Life of Internet Explorer 11](https://medium.com/@burger.neal/the-end-of-life-of-internet-explorer-11-12736f9ff75f)

Ultimately, I want to use this website to learn and grow. It should be fun to develop and able to respond to the fast pace world of web development.
