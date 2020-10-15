const tabBtn = $(".profile__button").find("button");
const tabContent = $(".profile__content").find("article");

function showTab(num){
    for(let i = 0; i < tabContent.length; i++){
        if(num == i){
            tabContent.eq(i).addClass("active");
            $(tabBtn).eq(i).addClass("active");
        }else{
            tabContent.eq(i).removeClass("active");
            $(tabBtn).eq(i).removeClass("active");
        }
    }
}