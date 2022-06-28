var users = [
  { id: 1, name: "Long" },
  { id: 2, name: "Phuong Anh" },
  { id: 3, name: "PA" },
  { id: 4, name: "Quan Cong" },
  // ...
];

var comments = [
  { id: 1, user_id: 1, content: "I like you!" },
  { id: 2, user_id: 2, content: "<3" },
  { id: 3, user_id: 2, content: "You're cute!" },
  { id: 4, user_id: 3, content: "Happy!" },
  // ...
];

// 1. Get comments
// 2. Get user_id from comments
// 3. Get user from user_id

// API

function getComments() {
  return new Promise(function (resolve) {
    resolve(comments);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    resolve(result);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      return { users: users, comments: comments };
    });
  })
  .then(function (data) {
    console.log("This is data", data);
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });
