CakeFactory = require('../cake/CakeFactory');
class CakeController {

    createCake(req, res, next) {
        const cakeRepository = req.app.get('repo');
        cakeRepository.create(req.cake)
            .then(data => res.send(data))
            .catch(next);
    }

    showCake(req, res, next) {
        const cakeRepository = req.app.get('repo');
        cakeRepository.show(req.cake)
            .then(data => res.send(data))
            .catch(next);
    }
    deleteCake(req, res, next) {
        req.cake.setId(req.params.id);
        const cakeRepository = req.app.get('repo');
        cakeRepository.delete(req.cake)
            .then(data => {
                res.send('success');
                console.log(data);
            })
            .catch(next);
    }

    updateCake(req, res, next) {
        req.cake.setId(req.params.id);
        const cakeRepository = req.app.get('repo');
        cakeRepository.update(req.cake)
            .then(data => res.send('succsess'))
            .catch(next);
    }
}
module.exports = CakeController;


// app.put('/:id', (req, res) => {
//     const cakeFactory = new CakeFactory;
//     const cake = cakeFactory.makeFromRequest(req.body);
//     cake.setId(req.params.id);
//     const cakeRepository = new CakeRepository(knex);
//     cakeRepository.update(cake);
//     res.send('done !');
// });
