const express = require('express');
const router = express.Router();
const { getTickets, getTicketsByUsername , getTicketById , getTicketsByUserId, createTicket, removeTicket, updateTicketStatus } = require('../Controller/TicketController');

router.get('/', getTickets);
router.get('/user/:userId', getTicketsByUserId);
router.get('/username/:name', getTicketsByUsername); // New route
router.get('/:id', getTicketById);
router.post('/', createTicket);
router.delete('/:id', removeTicket);
router.put('/:id/status', updateTicketStatus);

module.exports = router;
