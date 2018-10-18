class Cake {
    constructor(name) {
      this.name = name;
    };

    getName() {
        return this.name;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setPublisher(publisher) {
        this.publisher = publisher;
    }

    getPublisher() {
        return this.publisher;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    getAmount() {
        return this.amount;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}
module.exports = Cake;