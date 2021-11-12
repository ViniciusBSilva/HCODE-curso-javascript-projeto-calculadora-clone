class CalcController {

    constructor() {

        // "this" means that this variable is an attribute for this class

        // "_" at the begining of the name of the variable is a convention to say 
        // that the attribute is private although it has no functionality to effectively
        // block the access to the attribute

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;

        this.initialize();

    }

    initialize() {

        // DOM = Document
        // BOM = Browser
        // Type "document" on console to see the DOM 
        // Type dir(document) on console to see the DOM in objetc format
        // Type "window" on console to see the BOM 
        // "window.close()" on console will close the window

        this.setDisplayDateTime()

        setInterval(() => {

            this.setDisplayDateTime()

        }, 1000);


    }


initButtonsEvent() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g");
}


    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}