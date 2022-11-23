import fs from "fs";
import { Feed } from "feed";
import { allActivities } from "contentlayer/generated";

const feed = new Feed({
  title: "Activity // Alex Carpenter",
  description: "Short form thoughts and updates.",
  id: "http://alexcarpenter.me/activity",
  link: "http://alexcarpenter.me/activity",
  language: "en",
  image: "http://alexcarpenter.me/apple-touch-icon.png",
  favicon: "http://alexcarpenter.me/favicon.svg",
  copyright: `All rights reserved ${new Date().getFullYear()}, Alex Carpenter`,
  author: {
    name: "Alex Carpenter",
    email: "im.alexcarpenter@gmail.com",
    link: "https://alexcarpenter.me",
  },
  feedLinks: {
    rss2: `http://alexcarpenter.me/activity/rss.xml`,
  },
});

export const generateActivityRss = () => {
  allActivities.forEach((item) => {
    feed.addItem({
      title: `Update: ${new Date(item.date)}`,
      id: item.slug,
      link: `https://alexcarpenter.me/activity/${item.slug}`,
      date: new Date(item.date),
      // content: item.body,
    });
  });

  fs.writeFileSync("public/activity/rss.xml", feed.rss2());
};
