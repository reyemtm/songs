---
layout: default
---
<section id="songs"></section>
<script>
var songs = [];

fetch("/search.json")
.then(res => {
return res.json()
})
.then(data => {
var main = document.getElementById("songs");
main.innerHTML = data[0].content
})
</script>
