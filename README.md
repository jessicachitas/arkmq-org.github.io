# ArkMQ Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

**Please fork and make a PR if you would like to make any changes to the docs!**

### Previewing your Changes
Install the node modules required to build your development server:

```
$ npm install
```

**IMPORTANT: Before starting your development server, please edit the [Docusaurus config](docusaurus.config.js) to match your own credentials**

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## BEFORE DOING A PULL REQUEST (PR)

1. [Make sure you are familiar with how Docusaurus builds their Markdown files.](https://docusaurus.io/docs/markdown-features)
2. Make sure there are no relative links to any ArkMQ specific files in your Markdown. If they do exist, please change them to URLs linking to the right material within the ArkMQ GitHub. 
3. Fork the website repo and deploy a preview version of your proposed changes using the above method. This will make obvious any missed links from step 2.
