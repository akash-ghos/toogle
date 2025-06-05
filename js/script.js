function google(){
var form = document.querySelector(".form");
    form.addEventListener("submit",()=>{
        
    var searchBarValue = document.querySelector(".search-bar").value;

    if (searchBarValue.trim()!=="") {
        
        var googleURL = `https://www.google.com/search?q=${encodeURIComponent(searchBarValue)}`;
        window.open(googleURL,"_blank")
    }

    else {

        alert("Enter a search query")
    }
    })
}

google();

function search(){

    google();
    console.log('click')
}
