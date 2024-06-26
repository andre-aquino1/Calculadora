function criaCalculadora () {
    this.display = document.querySelector('.display');

    this.inicia =() => {
        this.capturarCliques();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        })
    };

    this.capturarCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        })
    };

    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
            }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
      };

    this.clear = () => this.display.value= '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new criaCalculadora();
calculadora.inicia();
