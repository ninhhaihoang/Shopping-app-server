const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const password = (value, helpers) => {
  if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/)) {
    return helpers.message('Password must be 8 or more characters long, at least one uppercase letter, one lowercase letter and one number');
  }
  return value;
};

module.exports = {
  objectId,
  password,
};
