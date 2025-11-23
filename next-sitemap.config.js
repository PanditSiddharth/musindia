// module.exports = {
//   siteUrl: "https://www.musindia.org.in",
//   generateRobotsTxt: true,
// };


// next-sitemap.config.js

import fs from "fs";
import { programs } from "./app/work/programs.js";

export default {
  siteUrl: "https://www.musindia.org.in",
  generateRobotsTxt: true,
  // sitemapSize: 7000,

  async additionalPaths() {

    return programs.map((program) => ({
      loc: `/work/${program.slug}`,
      changefreq: "monthly",
      priority: 0.8,
    }));
  },
};
