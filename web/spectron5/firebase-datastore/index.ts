import {SpectronWebappMain} from '../../js/test/SpectronWebappMain';
import {FilePaths} from 'polar-shared/src/util/FilePaths';

const webRoot = FilePaths.join(__dirname, "..", "..", "..");
const appRoot = __dirname;

SpectronWebappMain.run({webRoot, appRoot, path: "/web/spectron5/firebase-datastore/content.html"});
