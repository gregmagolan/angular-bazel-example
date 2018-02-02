const replace = require('replace-in-file');

try {
  console.log('Temporary fix in @angular/router@5.2.2 until next release...')
  replace.sync({
    files: ['node_modules/@angular/router/src/recognize.d.ts'],
    from: 'ParamsInheritanceStrategy, RouterStateSnapshot',
    to: 'RouterStateSnapshot'
  });
  replace.sync({
    files: ['node_modules/@angular/router/src/recognize.d.ts'],
    from: 'paramsInheritanceStrategy?: ParamsInheritanceStrategy',
    to: 'paramsInheritanceStrategy?: \'emptyOnly\' | \'always\''
  });
  console.log('Done')
} catch (error) {
  console.error('Error occurred:', error);
}
