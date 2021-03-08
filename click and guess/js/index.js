$(window).on('load', function () {
    render = function () {
        $('#container').empty();

        $.get("data.json", function (data) {
            for (let index = 0; index < 5; index++) {
                letter1 = String.fromCharCode(97 + 10 + Math.random() * 100 % 16).toUpperCase();
                letter2 = String.fromCharCode(97 + 10 + Math.random() * 100 % 16).toUpperCase();
                letter3 = String.fromCharCode(97 + 10 + Math.random() * 100 % 16).toUpperCase();
                //TODO: pick 2 images that start with letter and 1 that dosen't

                path1 = "img/" + letter1 + Math.floor((Math.random() * 1000 % data[letter1] + 1)).toString() + '.png';
                path2 = "img/" + letter2 + Math.floor((Math.random() * 1000 % data[letter2] + 1)).toString() + '.png';
                path3 = "img/" + letter3 + Math.floor((Math.random() * 1000 % data[letter3] + 1)).toString() + '.png';
                choice = Math.random() * 10000 % 6
                if (choice = 0) {
                    row = "<div class='row row-cols-4'><div class='col letter'>" + letter1 + "</div><div class='col'><img src='" + path1 + "' class='img-fluid'></div><div class='col'><img src='" + path2 + "' class='img-fluid'></div><div class='col'><img src='" + path3 + "' class='img-fluid'></div></div>";
                }
                else if (choice = 1) {
                    row = "<div class='row row-cols-4'><div class='col letter'>" + letter1 + "</div><div class='col'><img src='" + path1 + "' class='img-fluid'></div><div class='col'><img src='" + path3 + "' class='img-fluid'></div><div class='col'><img src='" + path2 + "' class='img-fluid'></div></div>";
                }
                else if (choice = 2) {
                    row = "<div class='row row-cols-4'><div class='col letter'>" + letter1 + "</div><div class='col'><img src='" + path2 + "' class='img-fluid'></div><div class='col'><img src='" + path3 + "' class='img-fluid'></div><div class='col'><img src='" + path1 + "' class='img-fluid'></div></div>";
                }
                else if (choice = 3) {
                    row = "<div class='row row-cols-4'><div class='col letter'>" + letter1 + "</div><div class='col'><img src='" + path2 + "' class='img-fluid'></div><div class='col'><img src='" + path1 + "' class='img-fluid'></div><div class='col'><img src='" + path3 + "' class='img-fluid'></div></div>";
                }
                else if (choice = 4) {
                    row = "<div class='row row-cols-4'><div class='col letter'>" + letter1 + "</div><div class='col'><img src='" + path3 + "' class='img-fluid'></div><div class='col'><img src='" + path1 + "' class='img-fluid'></div><div class='col'><img src='" + path2 + "' class='img-fluid'></div></div>";
                }
                else if (choice = 5) {
                    row = "<div class='row row-cols-4'><div class='col letter'>" + letter1 + "</div><div class='col'><img src='" + path3 + "' class='img-fluid'></div><div class='col'><img src='" + path2 + "' class='img-fluid'></div><div class='col'><img src='" + path1 + "' class='img-fluid'></div></div>";
                }

                $('#container').append(row);
            }
            $(".img-fluid").click(function (event) {
                src = $(this).attr('src').split('/');
                answer = src[1].split('.')[0].charAt(0);

                question = this.parentNode.parentNode.firstChild.textContent;
                if(question == answer)
                {
                    $(this).parent().addClass("right");
                }
                else
                {
                    $(this).parent().addClass("wrong");
                }
            });
        });
    }

    $("#Reset").click(function () {
        render();
    });

    render();
});