try {
  throw new Error('caught!');
} catch (err) {
  console.error(err);
};

setTimeout(function asyncErrorHandling() {
  try {
    throw new Error('caught!');
  } catch (err) {
    console.error(err);
  };
}, 0);
