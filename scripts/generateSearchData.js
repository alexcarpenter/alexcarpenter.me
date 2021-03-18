const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const root = process.cwd();

(async () => {
  let allContent = [];
  ['posts', 'screencasts'].forEach((type) => {
    let content = getContentData(type);
    allContent.push(content);
  });

  fs.writeFileSync(
    path.resolve(process.cwd(), 'data/search.json'),
    JSON.stringify(allContent.flat()),
  );
})();

function getContentData(type) {
  return fs.readdirSync(path.join(root, 'content', type)).map((file) => {
    const source = fs.readFileSync(
      path.join(root, 'content', type, file),
      'utf8',
    );
    const { data } = matter(source);
    const slug = file.replace(/\.mdx$/, '');
    return {
      slug,
      type,
      title: data.title,
      tags: data.tags,
    };
  });
}
