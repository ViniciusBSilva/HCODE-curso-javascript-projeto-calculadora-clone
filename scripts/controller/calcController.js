class CalcController {

    constructor() {

        // "this" means that this variable is an attribute for this class

        // "_" at the begining of the name of the variable is a convention to say 
        // that the attribute is private although it has no functionality to effectively
        // block the access to the attribute

        this._displayCalc = "0";
        this._dataAtual;

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(valor) {
        this._dataAtual = valor;
    }

}