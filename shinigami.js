class Shinigami{
  constructor(nama,bankai,power){
    this.nama = nama;
    this.bankai = bankai;
    this.power = power;
  }

  aktifkanBankai(){
    console.log(`${this.nama} mengaktifkan ${this.bankai}`);
    this.power += 10;
    console.log(`Kekuatan bertambah ${this.power} \n`);
  }
}

let shinigami = new Shinigami('Yamamoto','Zanka no Tachi',90);
shinigami.aktifkanBankai();
let shinigami2 = new Shinigami('Unohana','Minazuki',85);
shinigami2.aktifkanBankai();
