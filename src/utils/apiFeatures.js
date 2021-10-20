import catchAsync from './catchAsync';
import AppError from './appError';

const apiFeatures = catchAsync(async (req, model, populate) => {
  let query;
  const reqQuery = { ...req.query };
  const removeFields = ['select', 'sort', 'page', 'limit', 'filter'];

  removeFields.forEach((param) => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);

  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  query = model.find(JSON.parse(queryStr));

  if (!query) {
    throw new AppError('No Data Found', 400);
  }

  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  if (req.query.sort) {
    const sortBy = req.query.sort.split(',');
    const obj = {};
    const number = Number(sortBy[0]);

    sortBy.forEach((field) => {
      obj[field] = number;
    });

    delete obj[sortBy[0]];

    query = query.sort(obj);
  }

  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 100;
  const skip = (page - 1) * limit;

  query = query.skip(skip).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  query = await query;

  const filterByValue = (array, value) =>
    array.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1
    );

  if (req.query.filter) {
    const filter = req.query.filter.split(',').join(' ');
    return filterByValue(query, filter);
  }

  return query;
});

export default apiFeatures;
