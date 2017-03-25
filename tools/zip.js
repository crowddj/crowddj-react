import zipdir from 'zip-dir';

/**
 * Zips the build directory
 */
async function zip() {
  /* eslint-disable no-unused-vars */
  zipdir('build', { saveTo: 'app.zip' }, (err, buffer) => {});
  /* eslint-enable no-unused-vars */
}

export default zip;
