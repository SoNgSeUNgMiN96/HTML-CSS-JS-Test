var Links = {
    setColor : function (color){
        /*var links = document.querySelectorAll('a');
        for (var i=0;i<links.length;i++){
          links[i].style.color = color;
        }*/
        $('a').css('color',color);
    }
}

var Body = {
    setBackgroundColor : function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    },
    setColor : function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    }
}


function nightDayHandler(self){
    var target = document.querySelector('body');

    if(self.value ==='day'){
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('black');
    }else{
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Links.setColor('white');
    }      
}