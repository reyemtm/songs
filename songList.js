var songs = [];

fetch("/songs.json")
.then(res => {
  return res.json()
})
.then(data => {
  console.log(data);
  var songIds = Object.keys(data);
  var main = document.getElementById("songs");
  // main.innerHTML = `<h2>${data[ids[0]].title}</h2><p>${data[ids[0]].properties.content}`;
  var sidebar = document.getElementById("sidebar");

  songIds.map(id => {
    var div = document.createElement("div");
    var link = document.createElement("button");
    link.classList = "button clear";
    link.style.textAlign = "left";
    link.style.fontFamily = "inherit";
    link.style.padding = 0;
    link.innerText = data[id].title;
    link.id = id;
    link.style.cursor = "pointer";
    link.onclick = function() {
      console.log(this.id)
      var id = this.id;
      main.innerHTML = `<h2>${data[id].title}</h2><p>${data[id].content}`;
    }
    div.appendChild(link);
    sidebar.children[1].appendChild(div)
  });
})