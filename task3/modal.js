// const template = document.createElement("template")
// template.innerHTML  = `
//     <style>
//     .wrapper{
//         position: fixed;
//         inset: 0;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: rgba(0, 0,0 ,0.3);
//     }
//     .modal{
//         border: 4px solid #000;
//         background-color: #fff;
//         padding:20px ;
//     }
//     .div-btn{
//         display: flex;
//         align-items: center;
//         justify-content: end;
//     }
//     .btn{
//         padding: 5px;
//         margin: 20px 0 0 0;
//     }
//     .close{
//         display: none;
//     }
//     </style>
//     <div class="wrapper">
//         <div class="modal">
//             <h2>This is my modal</h2>
//             And this is some content.<br/>
//             I can be <b style="color: green">any</b> HTML.
//             <div class="div-btn">
//                 <button class="btn">
//                 </button>
//             </div>
//         </div>
//     </div>
// `
// class conf_modal extends HTMLElement{
//     constructor(){
//         super()
//         const root = this.attachShadow({mode:"open"})
//         root.append(template.content.cloneNode(true))

//         const wrapper = root.querySelector('.wrapper')
//         const btn = root.querySelector('.btn')

//         btn.textContent = this.label
//         btn.addEventListener('click',() => {
//             this.dispatchEvent(new Event("conf"))
//             wrapper.classList.add('close')
//             console.log("CONFIRMED");
//         })


//     }

//     get label(){
//         return this.getAttribute("label") || 'ok'
//     }


// }


// customElements.define("confirm-modal",conf_modal)