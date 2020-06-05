const interpret = (value) =>
  value === -1 ? 'not evaluated'
    : value === 0 ? 'no assertions'
      : value === 1 ? 'pass'
        : value === 2 ? 'fail'
          : value === 3 ? 'handled error'
            : value === 4 ? 'rejected'
              : value === 5 ? 'error'
                : value === 6 ? 'syntaxError'
                  : 'unknown status';

module.exports = interpret;
