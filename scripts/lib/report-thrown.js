const findMapKey = require('./find-map-key');

module.exports = (PARENT_DIR, reportMap) => {

  const removeDirname = dirName => dirName.split(PARENT_DIR).join('  ...  ');


  const reportThrown = (thrown, path, async, promise) => {
    // console.log(thrown);

    const thrownReport = { async, promise };
    if (thrown instanceof Error) {
      if (thrown.stack.includes('SyntaxError:')) {
        thrownReport.status = 6;
      } else {
        thrownReport.status = promise ? 4 : 5;
      };

      thrownReport.error = thrown.name + ': ' + thrown.message;
      thrownReport.stack = removeDirname(thrown.stack);
      const mapKey = path || findMapKey(thrown, PARENT_DIR, reportMap);
      // console.log('---------', thrownReport.stack)
      try {
        reportMap[mapKey].logs.push(thrownReport);
      } catch (err) {
        reportMap.unsortedLogs.push(thrownReport);
      }

    } else {

      thrownReport.status = promise ? 4 : 5;
      thrownReport.thrown = thrown;

      thrownReport.path = path;

      try {
        reportMap[mapKey].logs.push(thrownReport);
      } catch (err) {
        reportMap.unsortedLogs.push(thrownReport);
      }

    }


  };

  return reportThrown;
}
