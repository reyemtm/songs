---
layout: default
---
<section id="sidebar" class="col-3">
  <h2>Songs</h2>
  <ul class="song-list">
  </ul>
</section>
<section role="main" id="songs" class="col-9">
</section>
<script>
var songs = [];

fetch("/songs.json")
.then(res => {
  return res.json()
})
.then(data => {
  console.log(data);
  var main = document.getElementById("songs");
  main.innerHTML = data[0].properties.content;
  var sidebar = document.getElementById("sidebar");
  data.map(song => {
    sidebar.children[1].innerHTML += `<li>${song.title}</li>`
  });
})
</script>
