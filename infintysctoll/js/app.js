const col1 = document.getElementById('col1')
const col2 = document.getElementById('col2')
const col3 = document.getElementById('col3')
const imgcontainer = document.getElementById('img-container')
const loader = document.getElementById('loader')
const cols = [col1, col2, col3]
let x = 0
let img = document.getElementById("img");
let imgs = []
let j = 0, size = 10;
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
const apiurl = 'https://api.unsplash.com/photos/random/?client_id=JJwuI-IPXhJ5LM1-z98bMSiNXWqMq_dQI4sGtWf6RcE&count=30';
async function getimgs() {
    try {
        let response = await fetch(apiurl)
        imgs = await response.json()
        console.log(imgs)
        displayimgs()
    }
    catch (e) {
        console.log(e);
    }
}
function setAttributes(el, attr) {
    for (let key in attr) {
        el.setAttribute(key, attr[key])
    }
}
function imageLoaded() {
    x += 1
}

function displayimgs() {
    x = 0;
    totalImages = imgs.length;
    for (let i = 0; i < 3; i++) {
        console.log("hi")
        for (j; j < size; j++) {

            let item = document.createElement("a")
            // item.setAttribute("href", imgs[j].links.html)
            // item.setAttribute("target", '_blank')
            setAttributes(item, {
                href: imgs[j]?.links?.html,
                target: '_blank'
            })
            const img = document.createElement("img")
            // img.setAttribute("src", imgs[j].urls.regular)
            // img.setAttribute("alt", imgs[j].alt_description)
            // img.setAttribute("title", imgs[j].alt_description)
            setAttributes(img, {
                src: imgs[j].urls.regular,
                alt: imgs[j].alt_description,
                title: imgs[j].alt_description
            })
            img.addEventListener('load', imageLoaded);
            item.appendChild(img)
            cols[i].appendChild(item)
            imgcontainer.appendChild(cols[i])


        }
        size += 10
    }
    j = 0;
    size = 10;
}





window.addEventListener('scroll', () => {


    if (window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight && x==30) {
        ready = false;
        getimgs()
    }

})
getimgs()

