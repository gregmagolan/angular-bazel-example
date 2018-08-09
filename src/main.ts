// `tslib` must be imported explicitly into the application
// when building angular from source using bazel
import 'tslib';

import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
