// =========================================================================
// PENGATURAN APLIKASI CLIENT PORTAL
// Silakan ubah teks di dalam tanda kutip ("...") dengan data studio Anda.
// =========================================================================

const CONFIG_APP = {
    // 1. Nama Studio Foto Anda (Akan tampil di header dan portal klien)
    //    Jika mode server aktif, nama ini bisa diubah dari generatorLink (Pengaturan Studio)
    //    dan nilai di sini hanya menjadi cadangan.
    //namaVendor: "Yumna Production",

    // 2. Google Drive API Key (Penting agar galeri bisa memuat foto)
    //googleApiKey: "AIzaSyAZczbLeVTXl-QKqLDJFWQLCd-lW9jqqxo",

    // 3. URL Server (Google Apps Script Web App) - OPSIONAL
    //    Isi dengan URL hasil Deploy > Web app dari Code.gs (lihat PANDUAN_SERVER.md).
    //    Jika diisi: pilihan klien tersimpan otomatis ke Google Sheet, batas waktu dicek
    //    oleh server, dan link ke klien menjadi pendek (?c=KODE).
    //    Jika dikosongkan (""): aplikasi berjalan seperti biasa tanpa server.
    urlServer: "https://script.google.com/macros/s/AKfycbx5qmk4GyuA9EGQv7W0trpiGWTylRyajMolcWZAEq8KguwKJpfk77HcJZosNBm30thH/exec",

    // 4. Nomor WA admin (penerima list foto). Format 628xxx.
    //    Jika mode server aktif, nomor ini bisa diubah dari generatorLink (Pengaturan Studio)
    //    dan nilai di sini hanya menjadi cadangan.
    //whatsappAdmin: "6285273318422" // <-- Ganti dengan nomor WA admin
};
