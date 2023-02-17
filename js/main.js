class ColorCard {
    id;
    color;
    addToList;
    htmlElement;

    constructor(newId, newColor, addToList) {
        /* Setting properties*/
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;


        /* Make htmlElement to render */
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";
        const figureToBeRendered = document.createElement("figure");
        figureToBeRendered.classList = "colors__circle";
        figureToBeRendered.style.background = this.color;
        this.htmlElement.appendChild(figureToBeRendered);
        this.element.onclick = onHTMLElementClicked();
        this.render();

    }

    onHTMLElementClicked = function(){
        console.log("Ik ben geklikt" + this.color);
    }

    render() {
        this.addToList.appendChild(this.htmlElement);
    }
}

const test = new ColorCard(101, "rgba(255,0,0,1)", document.getElementById("js--colors"));
