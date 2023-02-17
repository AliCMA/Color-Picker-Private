class ColorCard{
    id;
    color;
    addToList;

    constructor(newId, newColor, addToList){
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;
    }

    render(){
        const listItemToBeRendered = document.createElement("li");
        listItemToBeRendered.classList = "colors__color";
        this.addToList.appendChild(listItemToBeRendered);
    }
}

const test = new ColorCard(101, "rgba(0,0,0,0)", document.getElementById("js--colors"));
test.render();
