const Ticket = require('../Models/Ticket');

// Get all tickets
const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get tickets by user ID
const getTicketsByUserId = async (req, res) => {
    try {
        const tickets = await Ticket.find({ userId: req.params.userId });
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get tickets by username
const getTicketsByUsername = async (req, res) => {
    try {
        const tickets = await Ticket.find({ name: req.params.name });
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a ticket
const createTicket = async (req, res) => {
    const ticket = new Ticket({
        title: req.body.title,
        description: req.body.description,
        product: req.body.product,
        name: req.body.name,
        userId: req.body.userId
    });

    try {
        const newTicket = await ticket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Remove a ticket
const removeTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndRemove(req.params.id);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found.' });
        }
        res.status(200).json({ message: 'Ticket removed successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single ticket by ID
const getTicketById = async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found.' });
      }
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// Update ticket status
const updateTicketStatus = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found.' });
        }
        res.status(200).json(ticket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getTickets, getTicketById , getTicketsByUserId, getTicketsByUsername, createTicket, removeTicket, updateTicketStatus };
