const openBtn = $(".hambuger__open--btn");
const closeBtn = $(".hambuger__close--btn");
const menu = $(".menu");
const dim = $(".dim");

openBtn.click(()=>{
    menu.css({"right":0});
    dim.css({
        "opacity":1,
        "z-index":99999
    });
})
closeBtn.click(()=>{
    menu.css({"right":-360});
    dim.css({
        "opacity":0,
        "z-index":-999999
    });
})
dim.click(()=>{
    menu.css({"right":-360});
    dim.css({
        "opacity":0,
        "z-index":-999999
    });
})