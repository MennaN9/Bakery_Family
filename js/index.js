let sideBar = $("#sideBar");
let colorBoxWidth = $(".color-box").innerWidth();
sideBar.css("left", `-${colorBoxWidth}`);
$(document).ready(function () {
    $("#sideBarToggle").click(function () {


        //$(".color-box").toggle(500);

        if (sideBar.css("left") == "0px") {
            sideBar.animate({ left: `-${colorBoxWidth}` }, 1000)
        }
        else {
            sideBar.animate({ left: `0px` }, 1000)

        }

    });

    let colorItems = $(".color-item");
    for (let i = 0; i < colorItems.length; i++) {

        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        colorItems.eq(i).css("backgroundColor", `rgb(${r},${g},${b})`);

    }

    colorItems.click(function (e) {

        let bgColor = $(e.target).css("backgroundColor");
        $("h2,h1,i").css("color", bgColor);
    });
    })