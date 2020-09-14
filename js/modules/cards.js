function cards() {

    class Menu {
        constructor(src, alt, title, content, price, parentSelector, ...classes) {
            this.title = title;
            this.content = content;
            this.price = price;
            this.src = src;
            this.alt = alt;
            this.transfer = 27;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {

            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `

     <img src=${this.src}  alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.content}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                    
            `;
            this.parent.append(element);
        }


    }

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${await (res.status)}`);
        }

        return await res.json();
    };


    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new Menu(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}

module.exports = cards;