var searchBtn = document.querySelector("#searchBtn")
var displayContent = document.querySelector("#displayContent")

var apiKey = 'AIzaSyARQ1qCRDIdDsr2uR4uXZZnybC2lbkOA8w';

function getData(){
    var search = document.querySelector("#search");
    var data = search.value;
    console.log(data);

    var requestURL = 'https://www.googleapis.com/books/v1/volumes?q=' + data + '&key=' + apiKey;
    fetch(requestURL)
    .then(function(response){
    return response.json();
    })
    .then(function(data)
    {
    console.log(data);
    var books = data.items;
    console.log(books)

        for(i=0;i<books.length;i++){

            var title = document.createElement("h2")
            title.setAttribute('class','headingTwo')
            var content = document.createElement("p")
            var description = document.createElement("p");
            var img = document.createElement("img");
            var saveData = document.createElement('button');
            saveData.setAttribute("class","button");
            displayContent.append(title);
            displayContent.append(content);
            displayContent.append(description);
            displayContent.append(img);
            displayContent.append(saveData);
            title.textContent = books[i].volumeInfo.title;
            content.textContent = books[i].volumeInfo.authors;
            description.textContent = books[i].volumeInfo.description;
            img.src = books[i].volumeInfo.imageLinks.thumbnail ;
            saveData.textContent = "Save Me";
    }})
}
searchBtn.addEventListener('click', getData);