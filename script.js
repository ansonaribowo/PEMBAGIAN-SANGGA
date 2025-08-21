let dataSangga = [];
let nomor = 1;

function tambahSangga() {
  const namaSangga = document.getElementById("namaSangga").value.trim();
  const kelas = document.getElementById("kelas").value;
  const peserta = document.getElementById("peserta").value.trim();

  if (namaSangga === "" || peserta === "") {
    alert("Nama Sangga dan Peserta wajib diisi!");
    return;
  }

  const sangga = {
    no: nomor++,
    namaSangga: namaSangga,
    kelas: kelas,
    peserta: peserta
  };

  dataSangga.push(sangga);
  tampilkanTabel();
  resetForm();
}

function tampilkanTabel() {
  const tbody = document.getElementById("tabelSangga").getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  dataSangga.forEach((s) => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = s.no;
    row.insertCell(1).textContent = s.namaSangga;
    row.insertCell(2).textContent = s.kelas;
    row.insertCell(3).textContent = s.peserta;
  });
}

function resetForm() {
  document.getElementById("namaSangga").value = "";
  document.getElementById("kelas").selectedIndex = 0;
  document.getElementById("peserta").value = "";
}
