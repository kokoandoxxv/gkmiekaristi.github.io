document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  let time = document.getElementById("time");
    setInterval(() =>{
      let d = new Date();
      time.innerHTML = d.toLocaleTimeString();
    },1000)

    function link_share() {
      var input1 = document.getElementById("name").value; 
      var input2 = document.getElementById("phone").value; 
      var input3 = document.getElementById("message").value;
    
      var message = 
      "Nama: " + input1 + "\n"+
      "Nomor Telepon: "+ input2 + "\n"+
      "Pesan: "+ input3 + "\n"; 
    
      var adminPhoneNumber = "+62 813-7360-9253";
      var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);
    
      window.open(whatsappURL);
  }