const router = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'McDonalds',
        city: 'Cedar Falls',
        state: 'IA',
        cuisine: 'Fast Food',
        pic: 'https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/e/d1/ed1da782-0470-57f6-95b2-b3e40bf36512/5e7663f64b745.image.jpg?resize=1024%2C576',
    }, {
        name: 'Subway',
        city: 'Cedar Falls',
        state: 'IA',
        cuisne: 'Sandwich',
        pic: 'http://dossaniparadise.com/wp-content/uploads/2016/02/subway.jpg'
    }]
    res.render('places/index', { places })
  })

module.exports = router