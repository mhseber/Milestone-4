/**
 * bus = 50;
 * micro = 15
 * uber = 20
 * 
 * 
 * 
 * borjatri = 234
 * bus (4) = 200 , remaining =34
 * micro (2) = 30, remaining = 4
 * uber (4) = 20*4= 80 taka
 */

function uberVara(peoples) {
    const bus = 50;
    const micro = 15;
    const uber = 20;

    const remainAfterBus = peoples % bus;
    const remainAfterMicro = remainAfterBus % micro;
    return remainAfterMicro * uber
}

console.log(uberVara(234))
