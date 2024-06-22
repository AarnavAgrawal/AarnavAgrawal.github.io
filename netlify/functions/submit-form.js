// netlify/functions/submit-form.js
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const data = JSON.parse(event.body);
    const filePath = path.join('/tmp', `form-data-${Date.now()}.json`);

    try {
        fs.writeFileSync(filePath, JSON.stringify(data));
        return {
            statusCode: 200,
            body: 'Data saved successfully'
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'Server error'
        };
    }
};
