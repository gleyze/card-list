import { LitElement, html, css } from 'lit';
import "character-card2/src/character-card2.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      //display: inline-block;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <character-card2 
        characterName="Shiny Fuecoco" subtitle="#fuecocoslay"
        characterDetails="Shiny fuecoco is pink. what a slay. fuecoco loves fire and eating and chomping. he has no thought behind his eyes. not one. fuecoco best boy!!!"
        img="https://www.serebii.net/Shiny/SV/new/909.png">
        </div>
        <div slot="img">
          <meme-maker image-url="https://i.kym-cdn.com/photos/images/original/002/479/048/d21" top-text="<3"
            bottom-text="chomp chomp"></meme-maker>
        </div>
      </character-card2>


    <character-card2 
        characterName="Pikachu" subtitle="#mouse"
        characterDetails="Pikachu is a mouse pokemon"
        img="https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png">
        </div>
        <div slot="img">
          <meme-maker image-url="https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png" top-text="lol"
            bottom-text="woah"></meme-maker>
        </div>
      </character-card2>

      <character-card2 
        characterName="Meowscarada" subtitle="#zoro"
        characterDetails="meowscarada is a mysterious cat with a mask."
        img="https://img.pokemondb.net/sprites/scarlet-violet/normal/meowscarada.png">
        </div>
        <div slot="img">
          <meme-maker image-url="https://i.kym-cdn.com/photos/images/original/002/496/579/5bc" top-text="mask on"
            bottom-text="mask off"></meme-maker>
        </div>
      </character-card2>
    
      <character-card2 
        characterName="Quaquaval" subtitle="#3D"
        characterDetails="Quaquaval is a dancing duck that is for the girls and the gays only."
        img="https://www.models-resource.com/resources/big_icons/58/57703.png?updated=1669645494">
        </div>
        <div slot="img">
          <meme-maker image-url="https://i.kym-cdn.com/photos/images/facebook/002/478/658/7a5.png" top-text="stop crapping on quaquaval"
            bottom-text="hes doing his best"></meme-maker>
        </div>
      </character-card2>

      <character-card2 
        characterName="Small Ditto" subtitle="#PokemonOrNewJeans"
        characterDetails="Stay in the middle, Like you a little, Don't want no riddle, 말해줘 say it back, oh, say it ditto 아침은 너무 멀어 so say it ditto"
        img="https://img.pokemondb.net/sprites/scarlet-violet/normal/ditto.png">
        </div>
        <div slot="img">
          <meme-maker image-url="https://upload.wikimedia.org/wikipedia/en/9/97/DittoNewJeans.jpg" top-text="stream"
            bottom-text="ditto!"></meme-maker>
        </div>
      </character-card2>
    `;
  }
}

customElements.define('card-list', CardList);