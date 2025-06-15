const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      alt: 'A fantasy creature resembling a humanoid alligator or swamp beast stands knee-deep in murky water. It has scaly skin, yellow eyes, and wears tattered leather and chainmail adorned with pouches and moss. The background shows a misty, eerie swamp with bare trees and fog. (gpt-4o)',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };


document.querySelector('#ogImg').setAttribute('content', character.image);
document.querySelector('#xCard').setAttribute('content', character.alt);



document.querySelector('.card > .image').setAttribute('src', character.image);
document.querySelector('.card > .image').setAttribute('alt', character.alt);
document.querySelector('.card > .name').textContent = character.name;
document.querySelector('#class').textContent = character.class;
document.querySelector('#level').textContent = character.level;
document.querySelector('#health').textContent = character.health;


const atckButn = document.querySelector('#attacked');
const lvelButn = document.querySelector('#levelup');

atckButn.addEventListener('click', function() {
    character.attacked();
    document.querySelector('#health').textContent = character.health;
});

lvelButn.addEventListener('click', function() {
    character.levelUp();
    document.querySelector('#level').textContent = character.level;
    document.querySelector('#health').textContent = character.health;
});