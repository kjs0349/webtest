var style = {
  backgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }

}

  function nightDayHandler(self){
    var target = document.querySelector('body');
      if(self.name === 'black'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';

      self.name = 'white';


      var Acount = document.querySelectorAll('a');
      var i = 0;
      while(i < Acount.length){
        Acount[i].style.color='white';
        i = i + 1;
    }
    } else {
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.name = 'black';

      var Acount = document.querySelectorAll('a');
      var i = 0;
      while(i < Acount.length){
        Acount[i].style.color='black';
        i = i + 1;
    }
  }
}
