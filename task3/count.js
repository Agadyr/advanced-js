const template = document.createElement("template")
template.innerHTML  = `
    <style>
    .wrapper{
        background-color: #fff;
        border: 2px solid teal;
        border-radius: 4px;
        padding: 20px;            
        margin: 20px 0;  
        width:200px;  

    }
    </style>
    <div class="wrapper">
        <h2>Count-down</h2>
        <div id="message"></div>
        <div id="count"></div>
        </div>
    </div>
`
class c_down extends HTMLElement{
    constructor(){
        super()
        const root = this.attachShadow({mode:"open"})
        root.append(template.content.cloneNode(true))

        this._message = root.getElementById('message')
        this._count = root.getElementById('count')
        this.running(new Date(this.date ?? Date.now() + 15 * 1000))
    }

    get message(){
        return this.getAttribute("message") ?? 'DONE'
    }    
    get date(){
        return this.getAttribute("date")
    }

    running(date){
        const intervalc = setInterval(() => {
            const now = new Date()
            const start  = Math.max(0, Math.floor(date - now) / 1000)
            if (start == 0) {
                clearInterval(intervalc)
                this._message.textContent = this.message
            }else{
                this._count.textContent =  this.formatDate(start)
            }
        })
    }
    formatDate(date){
        const day = Math.floor(date / (24 * 60 * 60))
        const hours = Math.floor(date % (24 * 60 * 60) / (60 * 60))
        const min = Math.floor(date % (60 * 60) / 60)
        const sec = Math.floor(date % 60)


        return `Date ${day} ${String(hours).padStart(2,'0')} ${String(min).padStart(2,'0')} ${String(sec).padStart(2,'0')}`
    }


}


customElements.define("c-down",c_down)