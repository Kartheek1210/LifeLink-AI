const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "LifeLink AI Backend is running successfully 🚑",
  });
};

module.exports = {
  healthCheck,
};