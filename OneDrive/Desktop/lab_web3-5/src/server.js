const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

let gems = [
    { id: '1', name: 'Діамант', type: 'Безколірний', weight: 2.5, price: 25000 },
    { id: '2', name: 'Рубін', type: 'Червоний корунд', weight: 3.2, price: 18500 },
    { id: '3', name: 'Смарагд', type: 'Зелений берил', weight: 4.1, price: 22000 },
    { id: '4', name: 'Сапфір', type: 'Синій корунд', weight: 2.8, price: 15000 },
    { id: '5', name: 'Аквамарин', type: 'Блакитний берил', weight: 5.3, price: 8500 },
    { id: '6', name: 'Топаз', type: 'Жовтий топаз', weight: 6.2, price: 5200 },
    { id: '7', name: 'Аметист', type: 'Фіолетовий кварц', weight: 7.5, price: 3800 },
    { id: '8', name: 'Опал', type: 'Райдужний', weight: 3.9, price: 12000 }
];

app.get('/api/gems', (req, res) => {
    const { search, sort } = req.query;

    let result = [...gems];

    if (search) {
        const lowerSearch = search.toLowerCase();
        result = result.filter(g => 
            g.name.toLowerCase().includes(lowerSearch) || 
            g.type.toLowerCase().includes(lowerSearch)
        );
    }

    if (sort) {
        const lastHyphenIndex = sort.lastIndexOf('-');
        const field = sort.substring(0, lastHyphenIndex);
        const direction = sort.substring(lastHyphenIndex + 1);

        result.sort((a, b) => {
            let valA = a[field];
            let valB = b[field];

            if (typeof valA === 'string') {
                return direction === 'asc' 
                    ? valA.localeCompare(valB) 
                    : valB.localeCompare(valA);
            }
            else {
                return direction === 'asc' 
                    ? valA - valB 
                    : valB - valA;
            }
        });
    }

    res.json(result);
});

app.get('/api/gems/:id', (req, res) => {
    const gem = gems.find(g => g.id === req.params.id);
    gem ? res.json(gem) : res.status(404).json({ message: 'Камінь не знайдено' });
});

app.post('/api/gems', (req, res) => {
    const newGem = {
        id: Date.now().toString(),
        name: req.body.name,
        type: req.body.type,
        weight: parseFloat(req.body.weight),
        price: parseInt(req.body.price)
    };
    if (!newGem.name || !newGem.type) return res.status(400).json({ message: 'Error' });
    gems.push(newGem);
    res.status(201).json(newGem);
});

app.put('/api/gems/:id', (req, res) => {
    const index = gems.findIndex(g => g.id === req.params.id);
    if (index !== -1) {
        gems[index] = { ...req.body, id: req.params.id };
        res.json(gems[index]);
    } else {
        res.status(404).json({ message: 'Not Found' });
    }
});

app.delete('/api/gems/:id', (req, res) => {
    gems = gems.filter(g => g.id !== req.params.id);
    res.json({ message: 'Deleted' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`💎 Gems API available at http://localhost:${PORT}/api/gems`);
});
