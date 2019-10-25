---
layout: default
---
<section id="songs"></section>
<script>
var songs = [];

fetch("/songs.json")
.then(res => {
return res.json()
})
.then(data => {
var main = document.getElementById("songs");
console.log(data);
main.innerHTML = data[0].content;
})
</script>
