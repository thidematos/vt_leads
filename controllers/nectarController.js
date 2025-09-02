const catchAsync = require('../utils/catchAsync');

exports.createContact = catchAsync(async (req, res, next) => {
  const { contact } = req.body;

  res.status(201).json({
    status: 'success',
    data: {},
  });
});
