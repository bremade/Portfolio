function getRandomPosts(posts, n) {
  var randomPosts = [];
  var postIds = [];
  posts.forEach((el) => {
    postIds.push(el.id);
  });

  var result = new Array(n),
    len = postIds.length,
    taken = new Array(len);
  if (n > len) {
    throw new RangeError('getRandomPost: more elements taken than available.');
  }
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = postIds[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  result.forEach((id) => {
    posts.forEach((post) => {
      if (post.id == id) {
        randomPosts.push(post);
      }
    });
  });

  return randomPosts;
}

function beautifyDate(dateString) {
  const date = new Date(dateString);
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
  return dateTimeFormat.format(date);
}

export { getRandomPosts, beautifyDate };
