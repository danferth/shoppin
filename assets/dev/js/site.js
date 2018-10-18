//go nuts!
//to have something parse before anything else add the code to ../lib/AAA.js it is the first file in the concatenation process
//initialize foundation
$(document).foundation();


//doc ready
$(document).ready(function(){


//is there a tally record?

//if so populate list

//function to get tally if is exsist and ad them up to get the total so far
var getTally = function(array){
  var hold = 0;
  for(var i = 0; i<array.length; i++){
    hold = hold + parseInt(array[i]);
  }
  $('.tally-input').attr('placeholder', hold);
  $('.tally-input').blur().val('');
  return hold;
};


localforage.keys().then(function(keys){
  if(keys == 'tally'){
    localforage.getItem('tally').then(function(tally){
      getTally(tally);
      console.log(tally);
    });
  }
}).catch(function(err){
  console.log(err);
});








$('.tally-add').on('click', function(e){

  if($('.tally-input').val()){
  var iv = $('.tally-input').val();
  
  localforage.keys().then(function(keys){
    if(keys == 'tally'){
      console.log('tally exsist');
      localforage.getItem('tally').then(function(item){
        item.push(iv);
        getTally(item);
        localforage.setItem('tally', item).then(function(value){
          console.log(value);
        }).catch(function(err){
          console.log(err);
        });
      }).catch(function(err){
        console.log(err);
      });
    }else{
      localforage.setItem('tally', [iv]).then(function(value){
        console.log(value);
        getTally(value);
        console.log('tally did not exsist');
      }).catch(function(err){
        console.log(err);
      });
    }
  }).catch(function(err){
      console.log(err);
    });
  }else{
    console.log('tally-input was empty');
  }

});



$('.tally-clear-list').on('click', function(e){
  localforage.clear().then(function(){
    console.log('db clear');
    $('.tally-input').blur().val('').attr('placeholder', '0');
  }).catch(function(err){
    console.log(err);
  });
});
  
  
  
  
  
$('.tally-last').on('click', function(e){
  swal({
    title: 'remove last entry?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'yes!'
  }).then(function(result){
    if(result.value){
      localforage.getItem('tally').then(function(tally){
        tally.pop();
        localforage.setItem('tally', tally).then(function(){
          localforage.getItem('tally').then(function(tally){
            getTally(tally);
          }).catch(function(err){
            console.log(err);
          });
        }).catch(function(err){
            console.log(er);
          });
        }).catch(function(err){
          console.log(err);
      });
    }
  });
  
}); 










}); //END Doc.ready


//doc load
$(window).on('load', function(){

  
  //if loader play()
  var loaded = function(){
    if($('.loader').is(':visible')){
      console.log('loader detected <br/>');
      //loader animation  
      var loaderExit = new TimelineMax({onComplete: function(){console.log('loader removerd <br/>')}});
          loaderExit.add(TweenMax.to('.loader', .5, {autoAlpha:0}));
	  }
  };
	
  loaded();
}); //END WIN.load

