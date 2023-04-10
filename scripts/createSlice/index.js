const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layer.includes(layer)) {
    throw new Error(`[createSlice]: Enter the layer ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('[createSlice]: Enter the name of the slice');
}

createTemplate(layer, sliceName);
