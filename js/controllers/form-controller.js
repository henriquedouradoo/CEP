import Address from "../models/address.js";
import * as addressService from '../services/address-service.js'


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
        state.inputNumber.addEventListener('change', handleInputNumberChange);
        state.inputNumber.addEventListener('keyup', handleInputNumberKeyup);
        state.BtnClear.addEventListener('click', handleBtnClearClick) ;
        state.BtnSave.addEventListener('click', handleBtnSaveClick) ;
        state.inputCep.addEventListener('change', handleInputCepChange);
        
    }

    function handleInputNumberKeyup(event) {
        state.address.number = event.target.value;
    }

    async function handleInputCepChange(event) {
        const cep = event.target.value;

        try{
        const address = await addressService.findByCep(cep);

        state.inputRua.value = address.rua;
        state.inputCidade.value = address.cidade;
        state.address = address;
        state.inputNumber.focus();

        console.log(address);
    }
    catch(e) {

    }
    }

    function handleInputNumberChange(event) {
        if (event.target.value == "") {
           
        }
        else {
            
        }
    }



    async function handleBtnSaveClick(event) {
        event.preventDefault();
        console.log(event.target);

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
