document.addEventListener('DOMContentLoaded', (event) =>
{
    getImages();
    getBreeds();
})

function getImages()
{
    const imgDiv = document.getElementById('dog-image-container')
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((element) =>
    {
        element.message.forEach((e) =>
        {
            const img = document.createElement('img')
            img.src = e
            imgDiv.append(img)
        })
    })
}

function getBreeds()
{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then((element) =>
    {
        const ul = document.getElementById('dog-breeds')
        for (const key in element.message) 
        {
            const li = document.createElement('li')
            li.innerText = key
            li.addEventListener('click', () =>
            {
                console.log("I was clicked")
                li.style.color = "pink"
            })
            ul.append(li)
        }
    })
}