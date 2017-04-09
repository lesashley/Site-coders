var documentFragment = document.createDocumentFragment();
function Post() {
  this.coders = [];
  this.addCoders = function (autor,text) {
    this.coders.push({
      name : autor,
      publication : text
    });
  }
  this.createPost= function (autor,text) {
    var content = document.createElement("article");
    content.setAttribute("class","content-text");
    var status = document.createElement("div");
    status.setAttribute("class","estado");
    status.textContent = text;
    var name = document.createElement("div");
    name.setAttribute("class", "name");
    name.textContent=autor;
    var deleteContent = document.createElement("button");
    deleteContent.setAttribute("class", "delete-button");
    deleteContent.addEventListener("click",function () {
      content.removeChild(status);
      content.removeChild(name);
      content.removeChild(deleteContent);
      content.parentNode.removeChild(content);
    });
    content.appendChild(status);
    content.appendChild(name);
    content.appendChild(deleteContent);
    documentFragment.appendChild(content);
    document.getElementById("status").prepend(documentFragment);
    this.addCoders(autor,text);
    }
  }

var post = new Post();

document.getElementById("submit").addEventListener("click",function () {
  var author = document.getElementById("nickname");
  var textCoder = document.getElementById("text-coder");
  if(author.value != "" && textCoder.value != ""){
    post.createPost("author: "+author.value,textCoder.value);
    author.value="";
    textCoder.value="";
  }
});
