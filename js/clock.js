let guest = prompt("Kullanıcı Adınızı giriniz: ")
  if (guest.length < 1) {
    alert("Lütfen geçerli bir kullanıcı adı giriniz!")
    window.location.reload()
  } else {
    document.getElementById("myName").innerHTML = guest
  }


  function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
  }
  function showDate() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    date = dd + '/' + mm + '/' + yyyy;
    document.getElementById("myDate").innerHTML = date;
  }
  setInterval(showDate, 1000);

  function showTime() {
    const weekday = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    var date = new Date()
    let saat = addZero(date.getHours());
    let dakika = addZero(date.getMinutes());
    let saniye = addZero(date.getSeconds());
    let day = weekday[date.getDay()];
    let time = saat + ":" + dakika + ":" + saniye + " - " + day;
    document.getElementById("myClock").innerHTML = time;
  }
  setInterval(showTime, 1000); 