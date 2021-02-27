const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const posts = fs
  .readdirSync(path.resolve(__dirname, '../content/posts/'))
  .filter((file) => path.extname(file) === '.mdx')
  .map((file) => {
    const postContent = fs.readFileSync(`./content/posts/${file}`, 'utf8');
    const { data, content } = matter(postContent);
    const slug = file.replace(/\.mdx$/, '');
    return { ...data, slug, body: content };
  })
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

(async () => {
  const feed = new RSS({
    title: 'Alex Carpenter',
    site_url: 'https://alexcarpenter.me',
    feed_url: 'https://alexcarpenter.me/feed.xml',
    image_url: 'https://alexcarpenter.me/og-image.png',
    language: 'en',
  });

  posts.forEach((post) => {
    const url = `https://alexcarpenter.me/posts/${post.slug}`;

    feed.item({
      title: post.title,
      description: post.description,
      date: new Date(post.publishedAt),
      author: 'Alex Carpenter',
      url,
      categories: post.tags,
      guid: url,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss);
})();
