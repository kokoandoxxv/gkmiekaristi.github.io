// Initialization for ES Users
let time = document.getElementById("time");
    setInterval(() =>{
      let d = new Date();
      time.innerHTML = d.toLocaleTimeString();
    },1000)

    document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    });

// Renungan 
const rssUrl = 'https://rss.app/feeds/AEOLtSZwnnJyDVFI.xml';

fetch(rssUrl)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'text/xml');

        const items = xml.querySelectorAll('item');

        const newsFeedDiv = document.getElementById('newsFeed');
        items.forEach(item => {
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const description = item.querySelector('description').textContent;
            const thumbnailUrl= item.querySelector('enclosure').getAttribute("url");

            const newsItem = document.createElement('div');
            newsItem.classList.add('newsItem');
            newsItem.innerHTML = `<a href="${link}"><img src="${thumbnailUrl}" alt="Image"></a>
                                  <h2><a href="${link}">${title}</a></h2>`;

            newsFeedDiv.appendChild(newsItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });