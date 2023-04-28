// $(selector).accion()

// $("h1").hide()

// $(document).ready(() => )
$(() => {
    // selectores
    // id="el-1" => "#el-1"
    // class="el-1"
    // $("#el-1").hide()

    $(".hide-btn").click(() => {
       // $("h1").hide()
       $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
       // $("h1").show()
       $("h1").fadein()
    })
    $("li").dbclick(() => {
        $("h1").css({color: "red"})
    })
    $(".new-Element").click(() =>{
        // $("ul").append("li"New Element</li>)
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mousenter(() => {
        Elem.target.style.color="black"
    })
})