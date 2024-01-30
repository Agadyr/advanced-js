let news = [];
let windowHidden = false;
window.addEventListener('load', async () => {
    if (navigator.serviceWorker) {
        await navigator.serviceWorker.register("ws.js");
    }
});

async function loadNews() {
    if (navigator.onLine) {
        const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-12-29&sortBy=publishedAt&apiKey=17ded3a4635642f1b59b327f9879a274`);
        return (await res.json()).articles;
    }else{
        const data = localStorage.getItem("newlist") || "[]";
        return JSON.parse(data);
    }
}

function setNewsToLocal(news) {
    localStorage.setItem("newlist", JSON.stringify(news));
}

function refresh() {
    const contentDiv = document.getElementById('posts');
    contentDiv.innerHTML = '';
    
    news.slice(90, 100).forEach(element => { 
        contentDiv.insertAdjacentHTML('beforeend', `
            <div class="cardbox shadow">
                <h1 class="p1">${element.title}</h1>
                <img src="${element.urlToImage}">
                <p class="p1">Author: ${element.author}</p>
            </div>`);
    });
}

function createNotificationElement() {
    const notify = document.createElement('div');
    notify.classList.add("notify");
    document.body.appendChild(notify);
    return notify;
}

function notification() {
    const notify = createNotificationElement();

    setInterval(async () => {
        const newlistData = await loadNews();
        for (let index = 0; index < newlistData.length; index++) {
            if (windowHidden && news[index]?.author !== newlistData[index]?.author) {
                notify.insertAdjacentHTML('beforeend', `<p>${newlistData[index].title}</p><br/>`);
            }
        }
        news = newlistData;
        refresh();
    }, 3000);
}

function handleVisibilityChange() {
    windowHidden = document.hidden;
}

async function start() {
    news = await loadNews();
    setNewsToLocal(news);
    refresh();
    notification();
    document.addEventListener('visibilitychange',handleVisibilityChange)
}

document.addEventListener("DOMContentLoaded", start);
