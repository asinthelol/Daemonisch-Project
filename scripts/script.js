const bodyArea = $('body');
const lyricContainer = $('#lyric-container');
const songName = $('#song-name');
const downArrow = $('#down-arrow');
const anchorDownArr = $('#down-arrow-area > a');


// Allows scroll and makes down arrow clickable after fade-in
downArrow.one('animationend', () => {
  bodyArea.removeClass('no-scroll');
  anchorDownArr.attr('href', '#lyric-container');
})


// Parllax on scroll for background
let scrollValue;

$(window).scroll( () => {
  scrollValue = $(window).scrollTop();
  lyricContainer.css({'background-position': `center ${scrollValue / 2}px`});
});

let verse, prechorus, chorus = [];
let arrays = [verse, prechorus, chorus];

console.log()
async function getLyrics(arrays) {
  const files = ['verse', 'pre-chorus', 'chorus'];
  try {
    for(file of files) {
      let response = await fetch(`../json/${file}.json`);
      if(response.ok) {
        arrays[file] = await response.json();
        console.log(arrays[file]);
      }
    }
  } catch(err) {
    console.log(err);
  }
}

getLyrics(arrays);