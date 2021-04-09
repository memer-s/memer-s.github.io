function hideall() {
    $("#golp").hide();
    $("#bbp").hide();
    $("#olexp").hide();
}


$("#gol").hover(() => {
    hideall();
    $("#golp").show();
})

$("#bb").hover(() => {
        hideall();
        $("#bbp").show();
})

$("#olex").hover(() => {
    hideall();
    $("#olexp").show();
})

// this shit is retarded.