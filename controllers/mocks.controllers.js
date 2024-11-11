const bcrypt = require('bcrypt');
const User = require('../models/user.model'); // Modelo de usuario

// Función para generar usuarios mock
const generateMockUsers = (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    users.push({
      username: `user${i + 1}`,
      password: bcrypt.hashSync('coder123', 10),
      role: i % 2 === 0 ? 'user' : 'admin',
      pets: []
    });
  }
  return users;
};

// Controlador para el endpoint mockingusers
exports.getMockingUsers = (req, res) => {
  const users = generateMockUsers(50);
  res.json(users);
};

// Controlador para el endpoint generateData
exports.generateData = async (req, res) => {
  const { users, pets } = req.body;
  const generatedUsers = generateMockUsers(users);

  // Simulación de inserción a MongoDB
  try {
    await User.insertMany(generatedUsers);
    res.status(201).json({ message: 'Datos generados e insertados correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al insertar datos', error });
  }
};
