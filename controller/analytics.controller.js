const ButtonClick = require("../models/button.model");
const PageVisit = require("../models/page.model");

exports.handleEvent = async (req, res) => {
    const { buttonLabel, eventName, hostName } = req.body;

    try {
        const newEvent = new ButtonClick({ buttonLabel, eventName, hostName });
        await newEvent.save();
        return res.status(201).json({ message: 'Event registered successfully.' });
    }
    catch (err) {
        console.error('Error handling user registration:', err.message);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}

exports.handlePage = async (req, res) => {
    const { pageName, eventName, hostName } = req.body;

    try {
        const newEvent = new PageVisit({ pageName, eventName, hostName });
        await newEvent.save();
        return res.status(201).json({ message: 'Page registered successfully.' });
    }
    catch (err) {
        console.error('Error handling user registration:', err.message);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}
