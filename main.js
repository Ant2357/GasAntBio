function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    "name": "Ant",
    "bio": "🖕(´・ω・｀)",
    "age": -1,
    "location": "Tokyo",
    "email": "ryu4979@gmail.com",
    "website": "https://ant2357.github.io/ant-blog/",
    "twitter": "https://twitter.com/ant2357"
  })).setMimeType(ContentService.MimeType.JSON);
}
