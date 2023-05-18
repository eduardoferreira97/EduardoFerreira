window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

            document.getElementById("navbar").style.transition = "background-color 0.2s linear";
            document.getElementById("navbar").style.background = "#4C35D2";

        } else {

            document.getElementById("navbar").style.background = "none";
        }
    }