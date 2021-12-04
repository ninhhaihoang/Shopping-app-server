const removeKeyNotValue = (fieldToUpdate) => {
    for (const [key, value] of Object.entries(fieldToUpdate)) {
        if (!value) {
          delete fieldToUpdate[key];
        }
    }
};
  
module.exports = removeKeyNotValue;