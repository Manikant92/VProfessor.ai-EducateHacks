$(document).ready(function(){
    var key= "---------------------------------"
    var video=''
    $("#vidSearch").submit(function(event){
        document.getElementById("videos").length=0
        event.preventDefault()
        var query=$("#search").val()
        vidSearch(key, query, 9)
    })
    


    function vidSearch(apiKey, query, results){
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + 
        "&type=video&part=snippet&maxResults="+results + "&q="+ query, function(data) {
            console.log(data)
        $("#videos").empty();
            data.items.forEach(item=> {
                video=`
                <iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder=0 allowfullscreen> </iframe>
                `
                $("#videos").append(video)
            });
        })
    }
})

