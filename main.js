
          // humne ek naya function add kiya fancy time format//
          function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

    
    // formatted proper time
    function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
} 


     // Adding song list file name artist list album list and duration list//
     
      // var songList = ['Badri Ki Dulhania (Title Track)','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
      // var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
      // var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
      // var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
      // var durationList = ['2:56','3:15','2:34','2:29'];
         
        
         var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image':'img/song 1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image':'img/song 2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image':'img/song 3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image':'img/song 4.jpg'
    }];
          
          window.onload = function() {

            changeCurrentSongDetails(songs[0]);
            for(var i =0; i < songs.length;i++) {
              var obj = songs[i];
              var name = '#song' + (i+1);
              var song = $(name);
              song.find('.song-name').text(obj.name);
              song.find('.song-artist').text(obj.artist);
              song.find('.song-album').text(obj.album);
              song.find('.song-length').text(obj.duration);
              addSongNameClickEvent(obj,i+1)
            }
          updateCurrentTime();
         setInterval(function() {
        updateCurrentTime()
        },1000);

//    $('#songs').DataTable({
//        paging: false
//    });  
      }

          // $('#songs').DataTable();
          
          // for(var i =0; i < songs.length;i++) {
   //      var obj = songs[i];
   //      var name = '#song' + (i+1);
   //      var song = $(name);
   //      ...
   //      addSongNameClickEvent(obj.fileName,i+1)
   //  }

      
        
                       
    
      // Welcome screen button
      $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } 
        else {
      
            $('#name-input').addClass('error');
        }
          
});
            // agar song.paused true hai to song play hoga warna paused hoga

         function toggleSong() {
            var song = document.querySelector('audio');
        if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
    
    }
        else {
            console.log('Pausing');
            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
        
    }
}
        
      
    
         $('.play-icon').on('click', function() {
           toggleSong();
});


 

         $('.volume-button').on('click',function() {
          $('.volume-button').toggleClass('disabled');
        });


         // we add keypress function

       $('body').on('keypress', function(event) {
         // if (event.keyCode == 32) 
         //    { 
                var target = event.target;
                
                console.log(event)
                  if (event.keyCode == 32 && target.tagName !='INPUT')
                  {
                      toggleSong();
                  }
              });
      
      // humne ek function add kiya click event jis mei hum song obj aur uske position btate hai 

    function addSongNameClickEvent(songObj,position) {
    var songName = songObj.fileName; // New Variable 
       var id = '#song' + position;
            $(id).click(function() {
            var audio = document.querySelector('audio');
            var currentSong = audio.src;
            if(currentSong.search(songName) != -1)
            {
            toggleSong();
            }
        else {
            audio.src = songName;
            toggleSong();
            changeCurrentSongDetails(songObj); // Function Call
       }
    });
}

//  for (var i = 0; i < fileNames.length ; i++) {
//             addSongNameClickEvent(fileNames[i],i+1)
            
// }  

   // in this function we use  current song image,name & album

     function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src',songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}
    // we use data table in ready function
  var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon

 $('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});
  $('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});


$('.fa-music').on('click', function() {
            console.log("button clicked")
                $('.dataTables_wrapper').addClass('hidden');
                $('.visualizer').removeClass('hidden');
           
        });


 $('.fa-home').on('click', function() {
     
                $('.visualizer').addClass('hidden');       
                $('.dataTables_wrapper').removeClass('hidden');
           
        });


function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}
$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow

        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})


 var songList = ['Badri Ki Dulhania (Title Track)','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
 var count= songList.length;
 $('.number').text(count);

$(document).ready(function () {

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById('audioElement');
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();

  // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);

  //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  var frequencyData = new Uint8Array(200);

  var svgHeight = '300';
  var svgWidth = '1200';
  var barPadding = '1';

  function createSvg(parent, height, width) {
    return d3.select(parent).append('svg').attr('height', height).attr('width', width);
  }

  var svg = createSvg('.visualizer', svgHeight, svgWidth);

  // Create our initial D3 chart.
  svg.selectAll('rect')
     .data(frequencyData)
     .enter()
     .append('rect')
     .attr('x', function (d, i) {
        return i * (svgWidth / frequencyData.length);
     })
     .attr('width', svgWidth / frequencyData.length - barPadding);

  // Continuously loop and update chart with frequency data.
  function renderChart() {
     requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

     // Update d3 chart with new data.
     svg.selectAll('rect')
        .data(frequencyData)
        .attr('y', function(d) {
           return svgHeight - d;
        })
        .attr('height', function(d) {
           return d;
        })
        .attr('fill', function(d) {
           return 'rgb(0, 0, ' + d + ')';
        });
  }

  // Run the loop
  renderChart();

});

 
