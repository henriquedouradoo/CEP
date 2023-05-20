import Address from "../models/address.js";
import * as requestService from '../services/request-service.js'


    function State () {

        this.address = new Address();
        this.BtnSave = null;
        this.BtnClear = null;

        this.inputCep = null;
        this.inputRua = null;
        this.inputNumber = null;
        this.inputCidade = null;
    }

    const state = new State();

    export function init () {
        state.inputCep = document.forms.newAddress.cep;
        state.inputRua = document.forms.newAddress.rua;
        state.inputNumber = document.forms.newAddress.number;
        state.inputCidade = document.forms.newAddress.cidade;

        state.BtnSave = document.forms.newAddress.BtnSave;
        state.BtnClear = document.forms.newAddress.BtnClear;
        state.BtnClear.addEventListener('click', handleBtnClearClick) ;
        state.BtnSave.addEventListener('click', handleBtnSaveClick) ;

        console.log(state);
    }

    async function handleBtnSaveClick(event) {
        event.preventDefault();
        const result = await requestService.getJson('https://viacep.com.br/ws/01001000/json/');
        console.log(result);

    }
    function handleBtnClearClick(event) {
        event.preventDefault ();
        ClearForm ();
    }   

    function ClearForm () {
        state.inputCep.value = "";
        state.inputRua.value = "";
        state.inputNumber.value = "";
        state.inputCidade.value = "";

        state.inputCep.focus();
    }
