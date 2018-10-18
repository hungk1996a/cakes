class CakeRepository {
    constructor(knex) {
        this.knex = knex;
    }

    create(cake) {
        return this.knex('cakes').insert({
           name: cake.getName(),
           publisher: cake.getPublisher(),
           amount: cake.getAmount(),
           price: cake.getPrice()
        });
    }

    delete(cake) {
        return this.knex('cakes').where({id: cake.getId()}).del();
    }

    update(cake) {
        return this.knex('cakes').where({id: cake.getId()}).update({
            name: cake.getName(),
            publisher: cake.getPublisher(),
            amount: cake.getAmount(),
            price: cake.getPrice()
        });
    }

    show(cake) {
        return this.knex.select().from('cakes');
    }

}
module.exports = CakeRepository;