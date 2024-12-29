const prisma = require('../config/prisma-client');

const addContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contactForm = await prisma.contactForm.create({
      data: {
        name,
        email,
        message,
      },
    });
    res.status(201).json(contactForm);
  } catch (error) {
    res.status(500).json({ message: 'Error adding contact form', error });
  }
};

const getContactForms = async (req, res) => {
  try {
    const contactForms = await prisma.contactForm.findMany();
    res.status(200).json(contactForms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact forms', error });
  }
};

const getContactFormById = async (req, res) => {
  const { id } = req.params;

  try {
    const contactForm = await prisma.contactForm.findUnique({
      where: {
        id: id,
      },
    });

    if (!contactForm) {
      return res.status(404).json({ message: 'Contact form not found' });
    }

    res.status(200).json(contactForm);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact form', error });
  }
};

const deleteContactForm = async (req, res) => {
  const { id } = req.params;

  try {
    const contactForm = await prisma.contactForm.delete({
      where: {
        id: id,
      },
    });

    if (!contactForm) {
      return res.status(404).json({ message: 'Contact form not found' });
    }

    res.status(200).json({ message: 'Contact form deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact form', error });
  }
};

module.exports = {
  addContactForm,
  getContactForms,
  getContactFormById,
  deleteContactForm,
};
