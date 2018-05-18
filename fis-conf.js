var meta = require('./package.json');

fis.set('name', meta.platform);
fis.set('version', meta.version);
fis.set('framework', {
    "cache": true
    ,"urlPattern": "/c/%s"
    ,"comboPattern": "/co??%s"
    ,"debug": true
});
fis.set('project.ignore', [
    'node_modules/**',
    "svg-icons/**",
    "piscrm-set.json",
    "**/test/**",
    'fis-conf.js'
])

fis.set('project.mode', "mobile");
