let page = {
    init: function () {
        this.lineModule.init();
    }
};

page.lineModule = {
    init: function () {
        this.list = document.querySelector(".list");
        this.controlls = document.querySelector(".ctrls");
        this.textInput = this.controlls.querySelector("input");
        this.buttonAdd = this.controlls.querySelector(".add");
        this.buttonDel = this.controlls.querySelector(".del");
        this.bindEvent();
    },
    bindEvent: function () {

        this.buttonAdd.addEventListener("click", e => this.addLine());
        this.list.addEventListener("click", e => this.color(e.target));
        this.buttonDel.addEventListener("click", e => this.removeSelected(this.list.childNodes));
    },
    removeSelected: function (childNodes) {
        let toDelete = [];
        childNodes.forEach(childNode => {
            console.log(childNode);
            if (childNode.selected) {
                toDelete.push(childNode);
            }
        });
        toDelete.forEach(e => e.remove());
    },
    addLine: function () {
        let node = document.createElement("LI");
        node.textContent = this.textInput.value;
        this.list.appendChild(node);
        this.textInput.value="";
    },
    color: function (elem) {
        if (elem.selected) {
            elem.selected = false;
            elem.className = 'notes';
        } else {
            elem.selected = true;
            elem.className = 'selected';
        }
    },
    onKeyPress: function (e) {
        if (e.keyCode === 46) {
            this.removeSelected(this.list.childNodes);
        }
        if (e.keyCode === 13) {
            this.addLine(this.list.childNodes);
        }
    }
};
window.addEventListener("keydown", e => page.lineModule.onKeyPress(e));

window.addEventListener("load", page.init.bind(page));
