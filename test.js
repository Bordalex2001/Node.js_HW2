import JsonServerAPI from './server/JsonServerAPI.js';
const api = new JsonServerAPI()

api.get('products');

//api.post('products', { name: '4K Monitor 27 inch', category: 'Screens', price: 379.99, description: 'Ultra-HD 4K monitor with 144Hz refresh rate.', stock: 15 });

//api.put('products/2', { name: 'Microphone', category: 'Audio', price: 159.59, description: 'Microphone processes and transmits signal in frequency range from 20Hz to 20kHz.', stock: 40 });

//api.delete('products/a574');
//api.delete('products/24ee');