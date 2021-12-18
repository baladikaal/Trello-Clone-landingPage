
        // untuk sticky navbar
        $(document).ready(function () {
            $(window).scroll(function () {
                if ($(window)
                    .scrollTop() >
                    10) {
                    $('nav')
                        .addClass(
                            'ubahnav'
                        );
                } else {
                    $('nav')
                        .removeClass(
                            'ubahnav'
                        );
                }
            });
        });

        // untuk dropdon
        $(document).ready(function () {
            $('select').formSelect();
        });

        // untuk testi
        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider);


        // untuk readmore fitur
        function readMore() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("readPg");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "+ Learn More"; 
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "- Learn less"; 
                moreText.style.display = "inline";
            }
        }
        
        function readMore1() {
            var dots = document.getElementById("dots1");
            var moreText = document.getElementById("more1");
            var btnText = document.getElementById("readPg1");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "+ Learn More"; 
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "- Learn less"; 
                moreText.style.display = "inline";
            }
        }
        function readMore2() {
            var dots = document.getElementById("dots2");
            var moreText = document.getElementById("more2");
            var btnText = document.getElementById("readPg2");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "+ Learn More"; 
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "- Learn less"; 
                moreText.style.display = "inline";
            }
        }

        function readMore3() {
            var dots = document.getElementById("dots3");
            var moreText = document.getElementById("more3");
            var btnText = document.getElementById("readPg3");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "+ Learn More"; 
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "- Learn less"; 
                moreText.style.display = "inline";
            }
        }
