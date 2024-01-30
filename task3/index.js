class i_area extends HTMLElement{
    constructor(){
        super()

        const root =  this.attachShadow({mode:"open"})
        this._input = document.createElement("textarea")
        this._prew = document.createElement("div")
        root.append(this._input,this._prew)
        this._input.style.width = '100%'
        this._prew.style.color= '#666'
        this._prew.style.padding= '10px 0'

        this._prew.textContent = this.max
        this._input.addEventListener('input',() => {
            this.dispatchEvent(new Event("change"))
            this.up()
        })

        this.up()

    }
    get value(){
        return this._input.value
     }

    get max(){
       return parseInt(this.getAttribute('max')) || 500
    }

    up(){
        const left = this.max - this._input.value.length
        let color = '#000'

        if (left < 0) {
            color ='red'
        }else if(left < this.max * 0.1){
            color = 'orange'
        }

        this._prew.innerHTML = `<span style="color:${color}">${left}</span>/${left > 0 ? this.max : `вы превысили лимит`}`
    }


}

customElements.define('limited-textarea',i_area)