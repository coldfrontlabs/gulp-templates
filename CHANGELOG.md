# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.1](https://github.com/coldfrontlabs/gulp-templates/compare/v4.0.0...v4.0.1) (2021-09-27)


### Build System

* **npm:** update cssnano and postcss-discard-comments to latest ([ccb588b](https://github.com/coldfrontlabs/gulp-templates/commit/ccb588be781c68f01bfe2b7256632d71d44f3558))
* **npm:** update dependencies to latest ([f238208](https://github.com/coldfrontlabs/gulp-templates/commit/f23820839e2b735207a85c4d2d2fc20246d2253f))

## [4.0.0](https://github.com/coldfrontlabs/gulp-templates/compare/v4.0.0-alpha.0...v4.0.0) (2021-05-06)


### Build System

* **editor:** add specific editor config ([4ed00bf](https://github.com/coldfrontlabs/gulp-templates/commit/4ed00bf4ae61ed856cc67e637822c395eaddf4ea))
* **npm:** implement lint-staged ([01e5371](https://github.com/coldfrontlabs/gulp-templates/commit/01e5371d0807c46bce4376278e61c56ae7c8354c))
* **npm:** move commitizen config to its own file ([f97200e](https://github.com/coldfrontlabs/gulp-templates/commit/f97200e53fdbc6a8c05aa8aac4b13a986ac44c56))
* **npm:** use prettier as stand-alone formatter ([316b5d6](https://github.com/coldfrontlabs/gulp-templates/commit/316b5d6326e1a494de1e53c8f883c6a51eddd0d8))
* **prettier:** specifically declare prettier settings that are cared about ([bdc99f0](https://github.com/coldfrontlabs/gulp-templates/commit/bdc99f0000467baae64481548a3c85233a600674))


### Documentation

* updat example files ([640a12e](https://github.com/coldfrontlabs/gulp-templates/commit/640a12eba322e7f944824a6ce0f42605f82b4631))
* update documentation to match to updates ([fae12ff](https://github.com/coldfrontlabs/gulp-templates/commit/fae12ff01a49c0ca85abcc62bd59cacddbacc29b))
* update upgrading wording ([5c9abda](https://github.com/coldfrontlabs/gulp-templates/commit/5c9abda976f7824e575f6f4bd82da223b46448dc))
* **jsdoc:** add description of sourcemap options ([e91f724](https://github.com/coldfrontlabs/gulp-templates/commit/e91f7247fec025672f20dbd5507d38205c8cfc39))

## [4.0.0-alpha.0](https://github.com/coldfrontlabs/gulp-templates/compare/v3.0.0...v4.0.0-alpha.0) (2021-04-09)


### ⚠ BREAKING CHANGES

* **npm:** Customizations requiring uglify-es functionality may break due to swap to terser

### Features

* add ability to generate sourcemaps ([cdebaaa](https://github.com/coldfrontlabs/gulp-templates/commit/cdebaaa91e60cce4f6bb0505754e29572a4dece4))


### Build System

* **husky:** upgrade husky to v6 ([2b67a63](https://github.com/coldfrontlabs/gulp-templates/commit/2b67a63a111a476f6cef1a2ac7bfc4ba4c81d88b))
* **npm:** clean up dependency tree ([968afd2](https://github.com/coldfrontlabs/gulp-templates/commit/968afd2bc00c2c699d6a49d44c48120920b3a69d))
* **npm:** replace uglify-es with terser ([1ded7ed](https://github.com/coldfrontlabs/gulp-templates/commit/1ded7ed4450beafb3fd792a0dcd9d7a226f75b57))
* **npm:** update dependencies to latest ([8f41d69](https://github.com/coldfrontlabs/gulp-templates/commit/8f41d69f6f928136d1171566f4316dd4a8a64eb3))

## [3.0.0](https://github.com/coldfrontlabs/gulp-templates/compare/v2.0.0...v3.0.0) (2020-09-08)


### ⚠ BREAKING CHANGES

* **sass:** replacing node-sass with dart-sass will cause problems for projects relying on node-sass in some other way

### Features

* **sass:** replace node-sass with dart-sass ([2917390](https://github.com/coldfrontlabs/gulp-templates/commit/29173901abce8758e88da2fc4bc652b27a301d4c))


### Performance Improvements

* add default value to destination where applicable ([03436a0](https://github.com/coldfrontlabs/gulp-templates/commit/03436a049c699a16197f14508725a46e609d23da))


### Documentation

* **general:** update git docs ([07c6878](https://github.com/coldfrontlabs/gulp-templates/commit/07c6878cbfac71c0805834157c49cd01dc9f9aeb))
* **general:** update install docs ([0aff6ad](https://github.com/coldfrontlabs/gulp-templates/commit/0aff6ad760099f151d958fb886e515877df904a8))


### Build System

* **deps-dev:** bump standard-version from 7.1.0 to 8.0.1 ([908728b](https://github.com/coldfrontlabs/gulp-templates/commit/908728b21e2d18ae2eea577be454c6d2920b363f))
* **npm:** add resolution for yargs-parser ^18.1.2 ([5c9397d](https://github.com/coldfrontlabs/gulp-templates/commit/5c9397dc81228b72703165f3cbb2669b32bdfd50))
* **npm:** dependency updates ([ec8c2d5](https://github.com/coldfrontlabs/gulp-templates/commit/ec8c2d56ae967396bc7a77f5eec909196adc489c))
* **npm:** disallow .files from being packaged ([b531afb](https://github.com/coldfrontlabs/gulp-templates/commit/b531afb58bc3163efcac108197669c28653aa08f))
* **npm:** fix commitizen setup ([1a3e1fc](https://github.com/coldfrontlabs/gulp-templates/commit/1a3e1fcda9833874c4e4a09f6e7fd8e068cec7d1))
* **npm:** run security updates for commitlint and standard-version ([c9748a9](https://github.com/coldfrontlabs/gulp-templates/commit/c9748a945e4ff96ecd8332f56793d71122f9b184))
* **npm:** update deps and config ([d714b21](https://github.com/coldfrontlabs/gulp-templates/commit/d714b211aaf70117f928011047032ebe774aebad))

## [2.0.0](https://github.com/coldfrontlabs/gulp-templates/compare/v2.0.0-alpha.0...v2.0.0) (2019-10-31)


### Documentation

* **guide:** add an upgrade guide for 1.x to 2.x ([#39](https://github.com/coldfrontlabs/gulp-templates/issues/39)) ([10e48f1](https://github.com/coldfrontlabs/gulp-templates/commit/10e48f187726cccb5d61adcdbb240db8580b6522))
* update documentation for 2.0.0 ([#38](https://github.com/coldfrontlabs/gulp-templates/issues/38)) ([a34cfc9](https://github.com/coldfrontlabs/gulp-templates/commit/a34cfc9a4740667ec9730df7bbec0403901283db))

## [2.0.0-alpha.0](https://github.com/coldfrontlabs/gulp-templates/compare/v1.2.0...v2.0.0-alpha.0) (2019-10-27)


### ⚠ BREAKING CHANGES

* **source:** Combining all parameters into a single object will cause all existing projects using the templates to fail due to the expected input changes.

### Features

* **source:** combine parameters into single object ([#36](https://github.com/coldfrontlabs/gulp-templates/issues/36)) ([08e6c22](https://github.com/coldfrontlabs/gulp-templates/commit/08e6c22dc033be51bcd57a43e636988607e7dd80))

### [1.1.3](https://github.com/coldfrontlabs/gulp-templates/compare/v1.1.2...v1.1.3) (2019-09-20)


### Documentation

* **changelog:** user keepachangelog format ([#30](https://github.com/coldfrontlabs/gulp-templates/issues/30)) ([fb3b297](https://github.com/coldfrontlabs/gulp-templates/commit/fb3b2972790b3e6f68b2e7e23f53cbde5b428d89))


### Build System

* **npm:** run audit and updates ([#31](https://github.com/coldfrontlabs/gulp-templates/issues/31)) ([bf7ef7c](https://github.com/coldfrontlabs/gulp-templates/commit/bf7ef7c7678080571f61edb639cc97ba9a5f906e))

### [1.1.2](https://github.com/coldfrontlabs/gulp-templates/compare/v1.1.1...v1.1.2) (2019-07-19)

### [1.1.1](https://github.com/coldfrontlabs/gulp-templates/compare/v1.1.0...v1.1.1) (2019-07-18)


### Features

* **release:** 1.1.1 ([c3b5d1b](https://github.com/coldfrontlabs/gulp-templates/commit/c3b5d1b702648a49133cc383f24b7cc0d62feef5))

## [1.1.0](https://github.com/coldfrontlabs/gulp-templates/compare/v1.0.0...v1.1.0) (2019-04-29)

## [1.0.0](https://github.com/coldfrontlabs/gulp-templates/compare/601863bce51a2a6e90aa0a6cc1be3392ee406767...v1.0.0) (2019-04-26)


### Features

* **init:** initial commit ([601863b](https://github.com/coldfrontlabs/gulp-templates/commit/601863bce51a2a6e90aa0a6cc1be3392ee406767))
* **lint:** split out fix into its own function ([a101b38](https://github.com/coldfrontlabs/gulp-templates/commit/a101b38425bda8a57cc7c620e0124f6034a42e3f))
* **template:** add external library templates ([92e6278](https://github.com/coldfrontlabs/gulp-templates/commit/92e6278787424aee561130325da9a2c3b0af0929))
* **templates:** add issue templates ([341d008](https://github.com/coldfrontlabs/gulp-templates/commit/341d008e4fb5aae4f24f4776954eeca1cdd42ac8))


### Bug Fixes

* **dest:** remove recurrence issue ([a5690e3](https://github.com/coldfrontlabs/gulp-templates/commit/a5690e3f26b709c95eff35dbcab25b932ae8befe))
* **fix:** change handling of optional destinations ([0320f83](https://github.com/coldfrontlabs/gulp-templates/commit/0320f836e030d07dc0170ddf58e47eb9579adf50))
* **lint:** check for fix option before piping to destination ([8468582](https://github.com/coldfrontlabs/gulp-templates/commit/84685824f66528159c40ba52bda7a5af1fc37abe)), closes [#5](https://github.com/coldfrontlabs/gulp-templates/issues/5)
* **src:** add module exports to libs ([5d88e23](https://github.com/coldfrontlabs/gulp-templates/commit/5d88e23fc200d8646bbde48471d82449b10b2b5d))


### Build System

* **npm:** update stylelint to 10.0.1 ([0f2a958](https://github.com/coldfrontlabs/gulp-templates/commit/0f2a9584bfbcb860cb0dfc72bf73e8ca7703cc80))


### Documentation

* **package:** add community resources ([ba48edb](https://github.com/coldfrontlabs/gulp-templates/commit/ba48edb9cfc997e3a40830da0e4617241423e676))
* **project:** add proper documentation and examples ([23c1eb4](https://github.com/coldfrontlabs/gulp-templates/commit/23c1eb42fa1bda5f3d95046fb5b2777fc62d8ba3))


### Code Refactoring

* **structure:** move github specific docs ([bdeef6d](https://github.com/coldfrontlabs/gulp-templates/commit/bdeef6dff70bc715d8852a46c639f8399196684a))
