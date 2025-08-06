const MIN_EMOJI_SIZE = 10;
const EMOJI_MULTIPLIER = 28;

class Emoji {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = MIN_EMOJI_SIZE + Math.floor(Math.random() * EMOJI_MULTIPLIER);
    this.emoji = "❤️";
  }

  render(fade=false) {
    const b = document.body;
    const emojiElement = document.createElement("div");
    emojiElement.innerText = this.emoji;
    emojiElement.style.position = "fixed";
    emojiElement.style.fontSize = this.size + "px";
    emojiElement.style.color = "#ffffff";
    emojiElement.style.userSelect = "none";
    emojiElement.style.left = this.x.toString() + "px";
    emojiElement.style.top = this.y.toString() + "px";
    b.appendChild(emojiElement);

    if (fade) {
      emojiElement.style.animation = 'fadeOut 2s forwards';
      setTimeout(() => {
        emojiElement.remove();
      }, 2000);
        }
  }
}

function stampEmoji(e) {
  const h = new Emoji(e.clientX, e.clientY);
  h.render();
}

function createEmojiToFade(e) {
  const offsetX = Math.random() * randomPositiveNegative() * 100 ;
  const offsetY = Math.random() * randomPositiveNegative() * 100 ; 
  const x = window.innerWidth/2 + offsetX;
  const y = window.innerHeight/2 + offsetY;
  const h = new Emoji(x, y);
  h.render(fade=true);
}

function randomPositiveNegative() {
  return Math.random() < 0.5 ? -1 : 1;
}

window.addEventListener("load", function(event) {
  document.addEventListener("click", stampEmoji);
  document.addEventListener('scroll', createEmojiToFade);
});