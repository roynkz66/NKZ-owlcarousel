import './style.scss';
import * as $ from 'jquery';
import 'owl.carousel';


//$(".elem").hide();
//$('.item').hide();

$(document).ready(function () {
     

    //basic
    var silde=$(".owl-carousel");

    silde.owlCarousel({
        loop: true,   //让它可以一直滑下去，不会滑了完停着
        nav: true,   //显示next 和prev的button
        responsive: {   //根据device 的 width来显示不同的width要多少个item
            0: {  //width
                items: 1  //show item quantity
            },
            600: {
                items: 2
            },
            1000: {
                items: 4,
                nav:true, //when width到达了条件的value，可以展现或隐藏起来
               // loop:false// same with nav
            }
        }
        })


        //event
                   //滑鼠滚动    //item
        silde.on('mousewheel','.item',function(e){

            var delta = (<WheelEvent>e.originalEvent).deltaY;//typescript use deltaY，js just use  e.deltaY

            if (delta > 0) {//当滑鼠滚轮（向下滑）大于0，silde向左滑           （y 是直线 ，x 是横线）
                silde.trigger('next.owl');
            } else { //当滑鼠滚轮（向上滑）小于0，silde向右滑
                silde.trigger('prev.owl');
            }
            e.preventDefault();
        })



})

//setup
// 1:下载官网的包，然后照着它的步骤去setup
// 2：将code写在ts里面
// 3：setting option放在jquery里面（option还没看完）


//其他的demo可以通过option，class和event来调整
//


