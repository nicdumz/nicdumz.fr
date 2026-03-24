module.exports = {
  layout: "post",
  tags: "posts",
  permalink: function(data) {
    const year = data.page.date.getFullYear();
    const month = String(data.page.date.getMonth() + 1).padStart(2, '0');
    const slug = data.page.fileSlug;
    return `/blog/${year}/${month}/${slug}/index.html`;
  }
};
