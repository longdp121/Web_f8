// API => Application programing interface

// Backend -> API -> Fetch -> JSON/XML -> JSON.parse() -> JS types -> Render HTML

var postApi = "https://jsonplaceholder.typicode.com/posts";

// Stream => Fetch trả về luồng dữ liệu
fetch(postApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts)
    var htmls = posts.map(function(post) {
        return `
        <li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </li>
        `
    })
    var html = htmls.join("");
    document.getElementById("posts-block").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Co loi: ", err);
  });
