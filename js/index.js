/**
 * Created by Administrator on 2017/9/14.
 */
!function(){
  var myLocation=$('#location')
    $.ajax('https://weixin.jirengu.com/weather').done(function(info){
        var weather=info.weather[0]
        var loInfo=info.weather[0]['city_name']
        myLocation.text(loInfo)
        showWeather(weather)

    })

    function setTime() {
        var currentTime=new Date();
        var currentHour=currentTime.getHours()
        var currentMinutes=currentTime.getMinutes()
        if (currentMinutes<10){
            currentMinutes='0'+currentMinutes
        }
        $('#time').text(currentHour+':'+currentMinutes)
        setTimeout(setTime,60*1000)
    }
    setTime()
   function showWeather(weather) {
    var todayInfo=weather.now
       var todayTemp=$('#temp')
       todayTemp.text(todayInfo.temperature+'℃')
       var todayImg=$('#toImg')
       todayImg.attr('src',`http://weixin.jirengu.com/images/weather/code/${todayInfo.code}.png`)
       var tWind=$('#wind')
       tWind.text(parseInt(todayInfo['wind_speed']+'mph'))
       var future=weather.future
       var fdates=document.querySelectorAll('.future .f-date')
       var fimgs=document.querySelectorAll('.future .f-img')
       var ftemps=document.querySelectorAll('.future .f-temp')
      for(var i=0;i<fdates.length;i++){
          fdates[i].textContent=future[i].day
          fimgs[i].src=`http://weixin.jirengu.com/images/weather/code/${future[i].code1}.png`
          ftemps[i].textContent=future[i].high+'℃'
      }
   }



}()



