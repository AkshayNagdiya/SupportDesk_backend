// const mongoose = require('mongoose');

// const TicketSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     product: { // Add product field
//         type: String,
//         required: true
//     },
//     status: {
//         type: String,
//         default: 'New'
//     },
//     name : {
//         type: String,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('Ticket', TicketSchema);


const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    status: {
        type: String,
        default: 'New'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Ticket', TicketSchema);

