const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const nectarService = require('./../services/nectarServices');

exports.createContact = catchAsync(async (req, res, next) => {
  const contact = req.body;

  const response = await nectarService.createContact(contact);

  if (!response.status) {
    return next(new AppError(response.data.join(' | ')));
  }

  res.status(201).json({
    status: 'success',
    data: {},
  });
});

exports.getContacts = catchAsync(async (req, res, next) => {
  const response = await nectarService.getContacts();

  if (!response.status) {
    return next(new AppError(response.data.join(' | ')));
  }

  res.status(200).json({
    status: 'success',
    data: {
      contacts: response.data,
    },
  });
});
