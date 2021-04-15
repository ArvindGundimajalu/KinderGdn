var usedElements = null;

function GetRandomLetter(){
    return String.fromCharCode(97 + 10 + Math.random() * 100 % 16).toUpperCase();
};

function GnenratePath(data, letter){
    if(letter == null)
    {
        letter = GetRandomLetter();
    }
    path = "img/" + letter + Math.floor((Math.random() * 10000 % data[letter] + 1)).toString() + '.png';
    return path;
};

$(window).on('load', function () {
    render = function () {
        $('#container').empty();
        $('#container').hide();

        $.get("data.json", function (data) {
            usedelements = new Map();
            for (let index = 0; index < 5; index++) {
                letter = GetRandomLetter();
                path1 = GnenratePath(data, letter);
                path2 = GnenratePath(data);
                path3 = GnenratePath(data);
                choice = Math.random() * 10000 % 6
                if (choice = 1) {
                    var temp = path2;
                    path2 = path3;
                    path3 = temp;
                }
                else if (choice = 2) {
                    var temp = path1;
                    path1 = path2;
                    path2 = path3;
                    path3 = temp;
                }
                else if (choice = 3) {
                    var temp = path1;
                    path1 = path2;
                    path2 = temp;
                }
                else if (choice = 4) {
                    var temp = path1;
                    path1 = path3;
                    path2 = temp;
                    path3 = path2;
                }
                else if (choice = 5) {
                    var temp = path1;
                    path1 = path3;
                    path3 = temp;
                }
                
                row = "<div class='row row-cols-4'><div class='col letter'>" 
                + letter + "</div><div class='col'><img src='" 
                + path3 + "' class='img-fluid'></div><div class='col'><img src='" 
                + path2 + "' class='img-fluid'></div><div class='col'><img src='" 
                + path1 + "' class='img-fluid'></div></div>";

                $('#container').append(row);
            }

            $(".img-fluid").click(function (event) {
                src = $(this).attr('src').split('/');
                answer = src[1].split('.')[0].charAt(0);

                question = this.parentNode.parentNode.firstChild.textContent;
                $(this).parent().addClass(question == answer ? "right" : "wrong");
            });
        });
        $('#container').show();
    }

    $("#Reset").click(function () {
        render();
    });


    /* Only register a service worker if it's supported */
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }

    render();
});