var nama = 'mutia'
var peran = ''
if (nama === '') {
    console.log('Selamat datang, nama harus diisi!');
} else if (peran === '') {
    console.log('Selamat datang, ' + nama + '! Peran harus diisi. Pilih peranmu untuk memulai game!');
} else if (peran === 'Kstaria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '! ' + 'Halo ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');   
} else if (peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '! ' + 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if (peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama + '! ' + 'Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}