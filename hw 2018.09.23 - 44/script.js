class Module {
    constructor(selector) {
        this.selector = selector;
    }

    get(selector) {
        return this.container.querySelector(selector);
    }

    init() {
        this.container = document.querySelector(this.selector);
        this.loadComponents();
        this.bindEvents();
        this.onCreate();
    }
    loadComponents() {
    }
    bindEvents() {
    }
    onCreate() {
    }
}

class Page {
    constructor() {
        this.modules = [];
    }
    registerModule(module) {
        this.modules.push(module);
    }
    init() {
        this.modules.forEach(m => m.init())
    }
    start() {
        window.addEventListener("load", e => this.init());
    }
}

//---------------------------TODO_APPLICATION----------------------


class Note {
    constructor(name, text) {
        this.name = name;
        this.text = text;
        this.selected = false;
    }
    asElem() {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";
        if (this.selected) {
            noteDiv.className = "note select";
        }
        let text = document.createElement("div");
        text.className = "text";
        text.innerText = this.text;
        let name = document.createElement("div");
        name.className = "name";
        name.innerText = this.name;
        noteDiv.appendChild(name);
        noteDiv.appendChild(text);
        return noteDiv;
    }
    toggleColorr() {
        this.selected = !this.selected;
    }
}
class NoteManager {
    constructor() {
        let rawNotes = window.localStorage.getItem("value");
        this.notes = rawNotes === null ? [] : JSON.parse(rawNotes);
        this.notes = this.notes.map(note => new Note(note.name, note.text));
        console.log(this.notes);
    }
    addNote(note) {
        this.notes.push(note);
        let str = JSON.stringify(this.notes);
        window.localStorage.setItem("value", str);
    }
    getAll() {
        return this.notes;
    }
    toggle(index) {
        this.notes[index].toggleColorr();
    }
    remove() {
        this.notes= this.notes.filter(e => e.selected===false);
        let str = JSON.stringify(this.notes);
        window.localStorage.setItem("value", str);
    }
}
class NotesModule extends Module {
    constructor(selector) {
        super(selector);
        this.noteManager = new NoteManager();
    }
    loadComponents() {
        this.notelist = this.get(".list");
        this.noteNameInp = this.get(".notename");
        this.noteTextInp = this.get(".notetext");
        this.addNoteBtn = this.get(".addBtn");
        this.delNoteBtn = this.get(".delBtn");
    }
    bindEvents() {
        this.addNoteBtn.addEventListener("click", e => this.addNote());
        this.notelist.addEventListener("click", e => {
            if (e.target.closest(".note")) {
                this.toggleColor(e.target.closest(".note").dataset.index);
            }
        });
        this.delNoteBtn.addEventListener("click", e => this.removeNote());
        window.addEventListener("keydown", e => this.onKeyPress(e));
    }
    onCreate() {
        this.updateView();
    }
    addNote() {
        let note = new Note(this.noteNameInp.value, this.noteTextInp.value);
        this.noteManager.addNote(note);
        this.updateView();
    }
    updateView() {
        this.notelist.innerHTML = "";
        this.noteManager.getAll().forEach((note, i) => {
            let noteElem = note.asElem();
            noteElem.dataset.index = i;
            this.notelist.appendChild(noteElem)
        });
    }
    removeNote() {
        this.noteManager.remove();
        this.updateView();
    }
    toggleColor(index) {
        this.noteManager.toggle(index);
        this.updateView();
    }
    onKeyPress (e) {
        if (e.keyCode === 46) {
            this.removeNote(this.notes);
        }
        if (e.keyCode === 13) {
            this.addNote(this.notes);
        }
    }
}


let page = new Page();
page.registerModule(new NotesModule(".notes"));
page.start();