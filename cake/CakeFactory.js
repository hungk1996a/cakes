const Cake = require('./Cake');

class CakeFactory {

    makeFromRequest(cakeRaw) {
        const cake = new Cake(cakeRaw.name);
        cake.setPublisher(cakeRaw.publisher);
        cake.setAmount(cakeRaw.amount);
        cake.setPrice(cakeRaw.price);
        return cake;
    };
}
module.exports = CakeFactory;