# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.1.0](https://github.com/embark-framework/embark/compare/v4.1.0-beta.6...v4.1.0) (2019-08-12)

**Note:** Version bump only for package root





# [4.1.0-beta.6](https://github.com/embark-framework/embark/compare/v4.1.0-beta.5...v4.1.0-beta.6) (2019-08-09)


### Bug Fixes

* **@embark/accountParser:** exit on unsupported account configs ([78bb9bc](https://github.com/embark-framework/embark/commit/78bb9bc))
* **@embark/cli:** properly forward cli options to ethereum simulator ([beebbe6](https://github.com/embark-framework/embark/commit/beebbe6))
* **@embark/embarkjs-ipfs:** use `version()` API instead of `id()` to determine availability ([1595e4b](https://github.com/embark-framework/embark/commit/1595e4b))
* **@embark/ipfs:** fix ipfs upload with wrong error message ([27bd574](https://github.com/embark-framework/embark/commit/27bd574))
* **@embark/library-manager:** add a check/warning for `"1.0.0-beta"` web3 version in installAll ([6dd0628](https://github.com/embark-framework/embark/commit/6dd0628))
* **@embark/pipeline:** adjust ignore paths ([e58c552](https://github.com/embark-framework/embark/commit/e58c552))
* **@embark/pipeline:** check if config arg of writeStats is falsy ([9d81fc5](https://github.com/embark-framework/embark/commit/9d81fc5))
* **@embark/pipeline:** streamline contract index file creation ([810c3be](https://github.com/embark-framework/embark/commit/810c3be))
* **@embark/site:** fix configuring contract link in structure.md ([9c0923c](https://github.com/embark-framework/embark/commit/9c0923c))
* **@embark/test-runner:** fix describe in describe tests ([c2094db](https://github.com/embark-framework/embark/commit/c2094db))
* **@embark/ui:** fix errorEntities not working at all ([5ab4c22](https://github.com/embark-framework/embark/commit/5ab4c22))


### Features

* **@embark/cmd:** add a warning on build and upload if development ([9e74d32](https://github.com/embark-framework/embark/commit/9e74d32))
* **@embark/pipeline:** add minimalContractSize to remove bytecode ([b0cccae](https://github.com/embark-framework/embark/commit/b0cccae))
* **@embark/pipeline:** enable choosing which fields to filter out ([b5c81bd](https://github.com/embark-framework/embark/commit/b5c81bd))
* **@embark/site:** add docs on filteredFields ([59eb69c](https://github.com/embark-framework/embark/commit/59eb69c))
* **@embark/site:** add documentation on minimalContractSize ([f9fb302](https://github.com/embark-framework/embark/commit/f9fb302))
* **homepage:** add section with logos from companies, who use embark ([178d8cd](https://github.com/embark-framework/embark/commit/178d8cd))





# [4.1.0-beta.5](https://github.com/embark-framework/embark/compare/v4.1.0-beta.4...v4.1.0-beta.5) (2019-07-10)


### Bug Fixes

* **@cockpit:** don't send invalid value to Smart Contract methods ([3f77272](https://github.com/embark-framework/embark/commit/3f77272))
* **@cockpit/debugger:** check if `debuggingContract` is undefined ([3590197](https://github.com/embark-framework/embark/commit/3590197))
* **@cockpit/explorers:** consistently display "Mined on" timestamps ([52d54f0](https://github.com/embark-framework/embark/commit/52d54f0))
* **@embark/code-generator:** use plugins for contract generation ([c87d7da](https://github.com/embark-framework/embark/commit/c87d7da))
* **@embark/code-runner:** restore EmbarkJS.environment property in the cli dashboard ([7d27125](https://github.com/embark-framework/embark/commit/7d27125))
* **@embark/contracts-manager:** ensure ETH values sent through APIs are converted to string ([70ff3c1](https://github.com/embark-framework/embark/commit/70ff3c1))
* **@embark/deployment:** don't over estimate gas when running tests against non-simulator nodes ([d76a82a](https://github.com/embark-framework/embark/commit/d76a82a)), closes [/github.com/trufflesuite/ganache-core/blob/8ad1ab29deccbbb4018f6961d0eb7ec984ad8fcb/lib/utils/gasEstimation.js#L33-L39](https://github.com//github.com/trufflesuite/ganache-core/blob/8ad1ab29deccbbb4018f6961d0eb7ec984ad8fcb/lib/utils/gasEstimation.js/issues/L33-L39)
* **@embark/embarkjs-whisper:** Messages.isAvailable() should always return a promise ([93ca3ad](https://github.com/embark-framework/embark/commit/93ca3ad))
* **@embark/ipc:** fix functions not being printed in console ([421c340](https://github.com/embark-framework/embark/commit/421c340))
* **@embark/site:** update contractGeneration plugin api ([ad796bc](https://github.com/embark-framework/embark/commit/ad796bc))
* **@embark/storage:** revise timing for process:started and code eval to avoid race conditions ([5828ae6](https://github.com/embark-framework/embark/commit/5828ae6))
* **@embark/test-runner:** make `--tx-details` option work again ([2531fc1](https://github.com/embark-framework/embark/commit/2531fc1)), closes [/github.com/embark-framework/embark/commit/87d92b6091#diff-92b4f79a0473160fe700440b1ced5204R140](https://github.com//github.com/embark-framework/embark/commit/87d92b6091/issues/diff-92b4f79a0473160fe700440b1ced5204R140)


### Features

* **@cockpit:** Pass tx value as wei and add validation ([536a402](https://github.com/embark-framework/embark/commit/536a402))
* **@embark/solc:** add embark-solc to monorepo ([1e59b58](https://github.com/embark-framework/embark/commit/1e59b58))
* **@embark/ui:** sort contracts and functions alphabetically ([0e9a4a1](https://github.com/embark-framework/embark/commit/0e9a4a1))





# [4.1.0-beta.4](https://github.com/embark-framework/embark/compare/v4.1.0-beta.3...v4.1.0-beta.4) (2019-06-27)


### Bug Fixes

* **@cockpit/utils:** Ensure whisper channels are at least 4 characters long ([610d8f1](https://github.com/embark-framework/embark/commit/610d8f1))
* **@dapps/demo:** don't allow subscription to whisper channels with less than 4 chars ([322397f](https://github.com/embark-framework/embark/commit/322397f)), closes [#1666](https://github.com/embark-framework/embark/issues/1666)
* **@dapps/templates/demo:** ensure whisper channel state is set correctly ([1b6987e](https://github.com/embark-framework/embark/commit/1b6987e))
* **@embark/config:** disable webserver if pipeline is disabled ([24b5339](https://github.com/embark-framework/embark/commit/24b5339))
* **@embark/coverage:** function types and single statement ifs ([2ce9ca6](https://github.com/embark-framework/embark/commit/2ce9ca6))
* **@embark/dapps:** old link updated to the latest documentation at website ([09d7428](https://github.com/embark-framework/embark/commit/09d7428))
* **@embark/deploy-tracker:** fix getting the block 0 with sim --fork ([f6d7a54](https://github.com/embark-framework/embark/commit/f6d7a54))
* **@embark/deployment:** don't break when using abiDefinitions ([9e5c9c7](https://github.com/embark-framework/embark/commit/9e5c9c7))
* **@embark/solidity:** fix recursive error on Windows ([1edd68f](https://github.com/embark-framework/embark/commit/1edd68f))
* **@embark/solidity:** show a better error message in debug ([198a5dc](https://github.com/embark-framework/embark/commit/198a5dc))
* **@embark/test-runenr:** fix event listener overflow ([e288483](https://github.com/embark-framework/embark/commit/e288483))
* alleviate races re: embarkjs by introducing Plugin#addGeneratedCode and related refactors ([fc4faa8](https://github.com/embark-framework/embark/commit/fc4faa8))
* **@embark/test-runner:** only run tests on files with describe ([9646673](https://github.com/embark-framework/embark/commit/9646673))
* **docs:** ensure paginator helper has `__()` local ([ebe61f4](https://github.com/embark-framework/embark/commit/ebe61f4))
* **templates:** fix templates because tests don't like empty files ([908aa3b](https://github.com/embark-framework/embark/commit/908aa3b))


### Features

* **@embark/blockchain-connector:** Add command to get full account info ([71cb161](https://github.com/embark-framework/embark/commit/71cb161))
* **@embark/site:** add section on getting account from describe ([5044403](https://github.com/embark-framework/embark/commit/5044403))
* **@embark/test-runner:** return accounts in the describe callback ([332229f](https://github.com/embark-framework/embark/commit/332229f))
* **@embark/test-runner:** wait for deploy before enterning describe ([8c16541](https://github.com/embark-framework/embark/commit/8c16541))





# [4.1.0-beta.3](https://github.com/embark-framework/embark/compare/v4.1.0-beta.2...v4.1.0-beta.3) (2019-06-07)


### Bug Fixes

* **@cockpit/explorer:** slice contract function result string only if starts/ends with double-quote ([ac76a40](https://github.com/embark-framework/embark/commit/ac76a40)), closes [#1636](https://github.com/embark-framework/embark/issues/1636)
* **@embark/swarm:** update url-scheme to bzz-raw ([6d844d7](https://github.com/embark-framework/embark/commit/6d844d7))
* **@embark/test-runner:** don't try to deploy and register ENS domains after JS tests have run ([e5fc12e](https://github.com/embark-framework/embark/commit/e5fc12e))
* gas estimates in test ([#1650](https://github.com/embark-framework/embark/issues/1650)) ([312c631](https://github.com/embark-framework/embark/commit/312c631))
* packages/embark/package.json to reduce vulnerabilities ([9029bfe](https://github.com/embark-framework/embark/commit/9029bfe))
* **@embarkjs:** unconditionally require symlinked embarkjs-* modules ([b45b2e2](https://github.com/embark-framework/embark/commit/b45b2e2))
* **@embarkjs/whisper:** don't rely on global EmbarkJS in whisper APIs ([f2903e7](https://github.com/embark-framework/embark/commit/f2903e7)), closes [/github.com/embark-framework/embark/blob/ac76a40a6156603fa436f1fe173835cff5fb0c3d/packages/embarkjs-whisper/src/index.js#L43-L62](https://github.com//github.com/embark-framework/embark/blob/ac76a40a6156603fa436f1fe173835cff5fb0c3d/packages/embarkjs-whisper/src/index.js/issues/L43-L62) [/github.com/embark-framework/embark/blob/ac76a40a6156603fa436f1fe173835cff5fb0c3d/packages/embarkjs-whisper/src/index.js#L64-L73](https://github.com//github.com/embark-framework/embark/blob/ac76a40a6156603fa436f1fe173835cff5fb0c3d/packages/embarkjs-whisper/src/index.js/issues/L64-L73) [/github.com/embark-framework/embark/blob/ac76a40a6156603fa436f1fe173835cff5fb0c3d/packages/embark-code-runner/src/index.ts#L33](https://github.com//github.com/embark-framework/embark/blob/ac76a40a6156603fa436f1fe173835cff5fb0c3d/packages/embark-code-runner/src/index.ts/issues/L33)


### Features

* **@cockpit/explorer:** enable users to send ether through payable methods ([#1649](https://github.com/embark-framework/embark/issues/1649)) ([d10c0b7](https://github.com/embark-framework/embark/commit/d10c0b7))
* **@embark/cli:** exit with error if --template and --contracts-only are both used with 'new' cmd ([d477adc](https://github.com/embark-framework/embark/commit/d477adc))





# [4.1.0-beta.2](https://github.com/embark-framework/embark/compare/v4.1.0-beta.1...v4.1.0-beta.2) (2019-05-22)


### Bug Fixes

* **@cockpit/utils:** properly detect if ENS is enabled ([7a0609b](https://github.com/embark-framework/embark/commit/7a0609b))
* **@cockpit/whisper:** ensure message subscription call is working ([2c6c948](https://github.com/embark-framework/embark/commit/2c6c948))
* **@embark/ens:** use namehash for resolver ([4d079de](https://github.com/embark-framework/embark/commit/4d079de))
* **@embark/pipeline:** ensure color methods for logs are available ([8ca6419](https://github.com/embark-framework/embark/commit/8ca6419))
* **@embark/utils:** add find-up and globule to dependencies ([0253c90](https://github.com/embark-framework/embark/commit/0253c90))


### Features

* **@embark/utils:** introduce setUpEnv() function ([038928f](https://github.com/embark-framework/embark/commit/038928f))





# [4.1.0-beta.1](https://github.com/embark-framework/embark/compare/v4.1.0-beta.0...v4.1.0-beta.1) (2019-05-15)


### Bug Fixes

* **@embark-utils/accountParser:** fix privateKey accounts ([fc02405](https://github.com/embark-framework/embark/commit/fc02405))
* **@embark/api:** import colors pkg so type string has .stripColors ([fbfe376](https://github.com/embark-framework/embark/commit/fbfe376))
* **@embark/api:** setup the embark-ui build dir before the express instance ([c4d647c](https://github.com/embark-framework/embark/commit/c4d647c))
* **@embark/api:** specify colors package as a dependency ([ae8ec69](https://github.com/embark-framework/embark/commit/ae8ec69))
* **@embark/blockchain_process:** use correct import for ProcessWrapper ([9acf256](https://github.com/embark-framework/embark/commit/9acf256))
* **@embark/console:** fix cockpit console if using console command ([d5c3a9c](https://github.com/embark-framework/embark/commit/d5c3a9c))
* **@embark/core:** move process.on inside ProcessWrapper's constructor ([fd09488](https://github.com/embark-framework/embark/commit/fd09488))
* **@embark/demo:** link css from dependency ([438e917](https://github.com/embark-framework/embark/commit/438e917))
* **@embark/demo:** render whisper error messages not error objects ([925ed06](https://github.com/embark-framework/embark/commit/925ed06))
* **@embark/deployment:** only log error when error exists ([bf0f439](https://github.com/embark-framework/embark/commit/bf0f439))
* **@embark/library-manager:** specify colors package as a dependency ([2d22819](https://github.com/embark-framework/embark/commit/2d22819))
* **@embark/plugin-cmd:** revise package.json in light of [#1573](https://github.com/embark-framework/embark/issues/1573), [#1574](https://github.com/embark-framework/embark/issues/1574), [#1575](https://github.com/embark-framework/embark/issues/1575), [#1576](https://github.com/embark-framework/embark/issues/1576) ([c30f742](https://github.com/embark-framework/embark/commit/c30f742))
* **@embark/site:** fix strategy not put in the right section ([8781585](https://github.com/embark-framework/embark/commit/8781585))
* **@embark/specialconfig:** fix undefined contract name in onDeploy ([7eb85f0](https://github.com/embark-framework/embark/commit/7eb85f0))
* **@embark/utils:** expose longRunningProcessTimer properly ([244e2e2](https://github.com/embark-framework/embark/commit/244e2e2))
* **embark-site:** error in tracking section ([c7c923d](https://github.com/embark-framework/embark/commit/c7c923d))
* **embark-site:** remove double web3 typo ([b9c12dd](https://github.com/embark-framework/embark/commit/b9c12dd))
* improve wording on contract constructor failing ([ea7ae22](https://github.com/embark-framework/embark/commit/ea7ae22))
* **embark/generator:** add back environment to EmbarkJS ([1ae0ab6](https://github.com/embark-framework/embark/commit/1ae0ab6))
* **embark/generator:** add empty line to embarkjs ([6b16f66](https://github.com/embark-framework/embark/commit/6b16f66))
* **test:** fix accountParser test in regards to privateKey fix ([a22d8fc](https://github.com/embark-framework/embark/commit/a22d8fc))
* add missing linkjuice built ([b5db685](https://github.com/embark-framework/embark/commit/b5db685))
* dashboard auto complete ([c51ec50](https://github.com/embark-framework/embark/commit/c51ec50))
* make coverage more forgiving ([0f4e554](https://github.com/embark-framework/embark/commit/0f4e554))
* parity origins ([a75fa79](https://github.com/embark-framework/embark/commit/a75fa79))
* update solidity-parser-antlr to allow the use of the payable keyword in contracts ([7401966](https://github.com/embark-framework/embark/commit/7401966))


### Features

* **@embar/contracts-manager:** add message for interface contracts ([334d3bc](https://github.com/embark-framework/embark/commit/334d3bc))
* **@embark-site:** add troubleshooting guide on interface contracts ([1f02e49](https://github.com/embark-framework/embark/commit/1f02e49))
* **@embark/api:** Add command `service api on/off` ([634feb5](https://github.com/embark-framework/embark/commit/634feb5))
* **@embark/blockchain:** Restart Ethereum via command ([7a76516](https://github.com/embark-framework/embark/commit/7a76516))
* **@embark/storage:** Add command `service ipfs on/off` ([1e4e6e4](https://github.com/embark-framework/embark/commit/1e4e6e4))
* **@embark/storage:** Add command `service swarm on/off` ([3dcc339](https://github.com/embark-framework/embark/commit/3dcc339))
* **@embark/test-runner:** show interface contract message in tests ([f9d7a3f](https://github.com/embark-framework/embark/commit/f9d7a3f))
* **@embark/webserver:** Add support for `service webserver on/off` ([0c394fe](https://github.com/embark-framework/embark/commit/0c394fe))
* **@embark/whisper:** Remove support for `service whisper on/off` ([fc01daf](https://github.com/embark-framework/embark/commit/fc01daf))





# [4.1.0-beta.0](https://github.com/embark-framework/embark/compare/v4.0.0...v4.1.0-beta.0) (2019-04-17)


### Bug Fixes

* **@cockpit/deployment:** Check if contracts deployed when connected to metamask ([c233163](https://github.com/embark-framework/embark/commit/c233163))
* **@cockpit/services:** send only process names to embark-api-client ([eb9de68](https://github.com/embark-framework/embark/commit/eb9de68))
* **@embark/contracts_manager:** compare correct property ([9e4204a](https://github.com/embark-framework/embark/commit/9e4204a))
* **@embark/debugger:** Add error handling for missing line ([5a502b3](https://github.com/embark-framework/embark/commit/5a502b3))
* **@embark/deployment:** ensure error messages emitted are logged ([72fc80d](https://github.com/embark-framework/embark/commit/72fc80d))
* **@embark/deployment:** ensure logger is available in all hooks ([42aebb9](https://github.com/embark-framework/embark/commit/42aebb9))
* **@embark/ipfs:** Fix IPFS gateway CORS for embark-status plugin ([e4d1e4e](https://github.com/embark-framework/embark/commit/e4d1e4e))
* **@embark/pipeline:** Support embarkjs-whisper with external pipeline ([447f6f8](https://github.com/embark-framework/embark/commit/447f6f8))
* **@embark/solidity:** handle absolute paths correctly ([4b1e126](https://github.com/embark-framework/embark/commit/4b1e126))
* **@embark/storage:** Fix hang when IPFS/Swarm started externally ([eca456f](https://github.com/embark-framework/embark/commit/eca456f))
* **@embark/tests:** Fix contracts app hanging ([12cbb7b](https://github.com/embark-framework/embark/commit/12cbb7b))
* **@embark/utils:** Fix proxy crash with unknown function ([431d366](https://github.com/embark-framework/embark/commit/431d366))
* **embark/compiler:** fix errors and bugs with solc 0.4.18 ([bfebb3c](https://github.com/embark-framework/embark/commit/bfebb3c))
* **embark/simulator:** fix account object empty when no mnemonic ([a4f68cb](https://github.com/embark-framework/embark/commit/a4f68cb))
* **pipeline:** build contracts even when pipeline is disabled ([75af5c4](https://github.com/embark-framework/embark/commit/75af5c4))
* run geth and parity in archival mode for dev nodes ([542809c](https://github.com/embark-framework/embark/commit/542809c))


### Features

* **@cockpit:** implement pagination for contracts ([d71352b](https://github.com/embark-framework/embark/commit/d71352b))
* **@cockpit/editor:** Make tabs draggable ([f27cde9](https://github.com/embark-framework/embark/commit/f27cde9))
* **@cockpit/explorer:** display truncated account balances ([6b2dc95](https://github.com/embark-framework/embark/commit/6b2dc95))
* **@cockpit/explorer:** implement pagination for accounts explorer ([745edaf](https://github.com/embark-framework/embark/commit/745edaf))
* **@embark/embark-reset:** allow users to specify files to be removed in reset ([b8357b7](https://github.com/embark-framework/embark/commit/b8357b7))
* **@embark/embark-specialconfigs:** introduce new beforeDeploy hooks ([1aeb6fd](https://github.com/embark-framework/embark/commit/1aeb6fd))
* **@embark/embarkjs:** add bytecode to contract ([4d4704a](https://github.com/embark-framework/embark/commit/4d4704a))
* **@embark/generator:** transpile embarkjs.js to be used by node ([ae88cc6](https://github.com/embark-framework/embark/commit/ae88cc6))
* **@embark/proxy:** Add dev tx to proxy when request fails to get response ([36be50e](https://github.com/embark-framework/embark/commit/36be50e))





## [4.0.2](https://github.com/embark-framework/embark/compare/v4.0.1...v4.0.2) (2019-04-11)


### Bug Fixes

* **@embark/contracts_manager:** compare correct property ([06dcbd0](https://github.com/embark-framework/embark/commit/06dcbd0))
* **@embark/solidity:** handle absolute paths correctly ([3cee7cf](https://github.com/embark-framework/embark/commit/3cee7cf))
* **@embark/storage:** Fix hang when IPFS/Swarm started externally ([c5b11ae](https://github.com/embark-framework/embark/commit/c5b11ae))
* **pipeline:** build contracts even when pipeline is disabled ([88c9a60](https://github.com/embark-framework/embark/commit/88c9a60))





## [4.0.1](https://github.com/embark-framework/embark/compare/v4.0.0...v4.0.1) (2019-03-26)


### Bug Fixes

* **@embark/utils:** Fix proxy crash with unknown function ([d03481e](https://github.com/embark-framework/embark/commit/d03481e))





# [4.0.0](https://github.com/embark-framework/embark/compare/v4.0.0-beta.2...v4.0.0) (2019-03-18)


### Bug Fixes

* **embark-ui:** don't show debug button for txs of silent contracts ([5161f54](https://github.com/embark-framework/embark/commit/5161f54))





# [4.0.0-beta.2](https://github.com/embark-framework/embark/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2019-03-18)


### Bug Fixes

* typed commands in console ([9d34355](https://github.com/embark-framework/embark/commit/9d34355))
* **embark-ui:** detect fallback functions in the contracts explorer ([832f16a](https://github.com/embark-framework/embark/commit/832f16a))





# [4.0.0-beta.1](https://github.com/embark-framework/embark/compare/v4.0.0-beta.0...v4.0.0-beta.1) (2019-03-18)


### Bug Fixes

* **@embark/cockpit:** Fix cockpit not suggesting console commands ([0eaad43](https://github.com/embark-framework/embark/commit/0eaad43))
* **@embark/cockpit:** Fix contract method autosuggest ([e943d03](https://github.com/embark-framework/embark/commit/e943d03))
* **@embark/cockpit:** Fix decode transaction error ([f957ba5](https://github.com/embark-framework/embark/commit/f957ba5))
* **@embark/cockpit:** fix gas estimation ([43fed4f](https://github.com/embark-framework/embark/commit/43fed4f))
* **@embark/cockpit:** Fix whisper messages not being received ([a67a4ad](https://github.com/embark-framework/embark/commit/a67a4ad))
* **@embark/cockpit:** Switching between tabs resets logs ([a6b15ae](https://github.com/embark-framework/embark/commit/a6b15ae))
* **@embark/cockpit:** Utils/Communications handle enter ([8b7a374](https://github.com/embark-framework/embark/commit/8b7a374))
* **@embark/console:** Fix console not working with VM2/monorepo ([fc823bb](https://github.com/embark-framework/embark/commit/fc823bb))
* **@embark/core:** `web3.eth.getAccounts` returning empty ([bb86b60](https://github.com/embark-framework/embark/commit/bb86b60))
* **@embark/core:** Allow errors in event actions ([9fad777](https://github.com/embark-framework/embark/commit/9fad777))
* **@embark/core:** Fix contract testing with `remix_tests` ([02305fa](https://github.com/embark-framework/embark/commit/02305fa))
* **@embark/core:** fix memory leak when contract files are loaded ([40b9ac3](https://github.com/embark-framework/embark/commit/40b9ac3))
* **@embark/core:** fix tests as paths have changed again ([07ede90](https://github.com/embark-framework/embark/commit/07ede90))
* **@embark/core:** Fix tests for shim/monorepo ([eb4da28](https://github.com/embark-framework/embark/commit/eb4da28))
* **@embark/core:** Metamask + geth warning to enable regular txs ([c233dbc](https://github.com/embark-framework/embark/commit/c233dbc))
* **@embark/core:** Prevent unnecessary re-renderings ([128ecd4](https://github.com/embark-framework/embark/commit/128ecd4))
* **@embark/core:** Re-enable regular txs commands/api ([236f6e6](https://github.com/embark-framework/embark/commit/236f6e6))
* **@embark/core): fix(@embark/core:** Fix recursive import remapping ([e0fd641](https://github.com/embark-framework/embark/commit/e0fd641))
* **@embark/demo:** Fix demo ([58ea3d9](https://github.com/embark-framework/embark/commit/58ea3d9))
* **@embark/embarkjs:** Fix potential race condition ([876eee5](https://github.com/embark-framework/embark/commit/876eee5)), closes [/github.com/embark-framework/embark/pull/1319#discussion_r256850820](https://github.com//github.com/embark-framework/embark/pull/1319/issues/discussion_r256850820)
* **@embark/ipfs:** Update IPFS config CORS with default config ([518d319](https://github.com/embark-framework/embark/commit/518d319))
* **@embark/pipeline:** Prevent crash when assets not specified ([3aafde3](https://github.com/embark-framework/embark/commit/3aafde3))
* **@embark/solc:** Import remapping update ([2f354c9](https://github.com/embark-framework/embark/commit/2f354c9))
* **@embark/solidity:** ensure SolidityProcess receives proper Logger instance ([fdd51cf](https://github.com/embark-framework/embark/commit/fdd51cf))
* **@embark/solidity:** fix binding in method call ([3eeeec3](https://github.com/embark-framework/embark/commit/3eeeec3))
* **@embark/storage:** Allow upload when storage disabled ([9ea0383](https://github.com/embark-framework/embark/commit/9ea0383))
* **@embark/storage:** Fix storage not connecting error ([0d72ebe](https://github.com/embark-framework/embark/commit/0d72ebe))
* **@embark/storage:** Storage processes race conditions ([6f5efb1](https://github.com/embark-framework/embark/commit/6f5efb1))
* **@embark/swarm:** Fix swarm not being registered ([14323f5](https://github.com/embark-framework/embark/commit/14323f5))
* **@embark/test_app:** Fix tests as paths have chagned ([0ba1627](https://github.com/embark-framework/embark/commit/0ba1627))
* **@embark/tests:** Make `web3` available in test descriptions ([563ba15](https://github.com/embark-framework/embark/commit/563ba15))
* **blockchain:** check if node is synched after connection ([0639717](https://github.com/embark-framework/embark/commit/0639717))
* **blockchain-process:** display error message when bad port ([ed77fc7](https://github.com/embark-framework/embark/commit/ed77fc7))
* **build:** start code-generator service even for contracts only ([7fffc44](https://github.com/embark-framework/embark/commit/7fffc44))
* **cockpit:** fix converter inputs and copy-button position ([35648ee](https://github.com/embark-framework/embark/commit/35648ee))
* **cockpit:editor:** fix arrow not turning ([359c28f](https://github.com/embark-framework/embark/commit/359c28f))
* **cockpit/console:** fix cockpit's console outputting "console >" ([22e771b](https://github.com/embark-framework/embark/commit/22e771b))
* **cockpit/console:** increase number of suggestions ([71da423](https://github.com/embark-framework/embark/commit/71da423))
* **cockpit/console:** replace br with backslash n ([a341a4f](https://github.com/embark-framework/embark/commit/a341a4f))
* **cockpit/contract:** remove contract profiling and use functions ([99dcd78](https://github.com/embark-framework/embark/commit/99dcd78))
* **cockpit/dashboard:** fix logs not in  cockpit with dashboard ([be38178](https://github.com/embark-framework/embark/commit/be38178))
* **cockpit/deployment:** filter out silent contracts ([da76c8d](https://github.com/embark-framework/embark/commit/da76c8d))
* **cockpit/editor:** add delete modal to confirm deletion ([3f488e1](https://github.com/embark-framework/embark/commit/3f488e1))
* **cockpit/editor:** remove delay on tooltips ([c30c420](https://github.com/embark-framework/embark/commit/c30c420))
* **cockpit/estimator:** make estimator clearer ([1759aac](https://github.com/embark-framework/embark/commit/1759aac))
* **cockpit/firefox:** fix bug with entities in firefox (ordering) ([dddc9d0](https://github.com/embark-framework/embark/commit/dddc9d0))
* **cockpit/header:** fix nav not highlighted for children pages ([0648824](https://github.com/embark-framework/embark/commit/0648824))
* **cockpit/sidebar:** fix closed sidebar in the dark-theme ([5816a79](https://github.com/embark-framework/embark/commit/5816a79))
* **cockpit/suggestions:** fix suggestions with slashes ([9bb33e9](https://github.com/embark-framework/embark/commit/9bb33e9))
* **cockpit/transactions:** enable filtering constructor ([447f3ed](https://github.com/embark-framework/embark/commit/447f3ed))
* **cockpit/transactions:** fix a typo in the transactions page ([cba7c85](https://github.com/embark-framework/embark/commit/cba7c85))
* **code-generator:** use isDev instead of checking env ([540ff75](https://github.com/embark-framework/embark/commit/540ff75))
* **console:** fix ENS tests not working with embark side by side ([e20c08a](https://github.com/embark-framework/embark/commit/e20c08a))
* **console/logger:** fix console and logger not outputting objects ([32e8bd2](https://github.com/embark-framework/embark/commit/32e8bd2))
* **contract-artifacts:** set address as deployedAddress on artifacts ([a895e83](https://github.com/embark-framework/embark/commit/a895e83))
* **contracts:** fix contracts being instanceOf a contract with libs ([b5a3897](https://github.com/embark-framework/embark/commit/b5a3897))
* **contractsConfig:** fix using ints as gas and gasPrice ([dd14262](https://github.com/embark-framework/embark/commit/dd14262))
* **coverage:** fix coverage regex on Windows ([5e9955e](https://github.com/embark-framework/embark/commit/5e9955e))
* **embark:** require embark-compiler in packages/embark's tests ([37080c5](https://github.com/embark-framework/embark/commit/37080c5))
* **embark:** specify "rxjs" as a dependency vs. "@reactivex/rxjs" ([db40f03](https://github.com/embark-framework/embark/commit/db40f03))
* **embark-graph:** add packages/embark-graph/tslint.json ([733d804](https://github.com/embark-framework/embark/commit/733d804))
* **embark-ui:** AccountContainer should get txs for cold load case ([fd79090](https://github.com/embark-framework/embark/commit/fd79090))
* **embark-ui:** correctly calculate which blocks to display ([cc8363a](https://github.com/embark-framework/embark/commit/cc8363a))
* **embark-ui:** correctly calculate which transactions to display ([fbeea47](https://github.com/embark-framework/embark/commit/fbeea47))
* **embark-ui:** pagination ([f5f610d](https://github.com/embark-framework/embark/commit/f5f610d))
* **embark-ui:** specify PUBLIC_URL=/ for production builds ([f4626f8](https://github.com/embark-framework/embark/commit/f4626f8)), closes [/github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/paths.js#L36](https://github.com//github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/paths.js/issues/L36)
* **embark/contracts:** add the contracts back to the autocomplete ([618ceb6](https://github.com/embark-framework/embark/commit/618ceb6))
* **embark/dashboard:** fix dashboard not printing repl errors ([dd1133d](https://github.com/embark-framework/embark/commit/dd1133d))
* **embark/dashboard:** show command in the dashboard ([54698cc](https://github.com/embark-framework/embark/commit/54698cc))
* **embark/logger:** fix logs in the dashboard ([88a41e7](https://github.com/embark-framework/embark/commit/88a41e7))
* **embark/solidity:** fix getting the original filename of contracts ([4d424c0](https://github.com/embark-framework/embark/commit/4d424c0))
* **embark/storage:** fix hang when storage is disabled ([5e4a80e](https://github.com/embark-framework/embark/commit/5e4a80e))
* **embarkjs/blockchain:** only call doFirst once on connect ([a0d336e](https://github.com/embark-framework/embark/commit/a0d336e))
* **embarkjs/blockchain:** pass error only when there is an error ([fdd8ad5](https://github.com/embark-framework/embark/commit/fdd8ad5))
* **ens:** fix ens transactions getting stuck ([84d4f3a](https://github.com/embark-framework/embark/commit/84d4f3a))
* **ens/logger:** add ens contracts to contract manager before deploy ([d80641c](https://github.com/embark-framework/embark/commit/d80641c))
* **generator:** fix warnAboutMetamask being undefined ([0d8f233](https://github.com/embark-framework/embark/commit/0d8f233))
* **logger:** filter undefined and null out of logs ([6662731](https://github.com/embark-framework/embark/commit/6662731))
* **pipeline:** fix contract magic imports ([fc113e8](https://github.com/embark-framework/embark/commit/fc113e8))
* add watch script on top level ([#1320](https://github.com/embark-framework/embark/issues/1320)) ([edd1e0f](https://github.com/embark-framework/embark/commit/edd1e0f))
* **solidity:** make original really original ([90adaab](https://github.com/embark-framework/embark/commit/90adaab))
* allow to debug instanceOf contracts ([1e4eaa5](https://github.com/embark-framework/embark/commit/1e4eaa5))
* allow to use embark in dev deps ([daf6e64](https://github.com/embark-framework/embark/commit/daf6e64))
* blockchain logs show in cockpit ([#1367](https://github.com/embark-framework/embark/issues/1367)) ([41256cf](https://github.com/embark-framework/embark/commit/41256cf))
* cockpit search with tx hash shows tx page ([#1386](https://github.com/embark-framework/embark/issues/1386)) ([891174e](https://github.com/embark-framework/embark/commit/891174e))
* command handlers named consistently ([e36ea5d](https://github.com/embark-framework/embark/commit/e36ea5d))
* contract length check now checks the correct thing ([a295a5b](https://github.com/embark-framework/embark/commit/a295a5b))
* don't eval function calls for suggestions ([#1382](https://github.com/embark-framework/embark/issues/1382)) ([73a0672](https://github.com/embark-framework/embark/commit/73a0672))
* editor wasn't saving changes ([4340a9b](https://github.com/embark-framework/embark/commit/4340a9b))
* estimate gas automatically when not specified ([8fd6a6d](https://github.com/embark-framework/embark/commit/8fd6a6d))
* fetch accounts ([7d5935d](https://github.com/embark-framework/embark/commit/7d5935d))
* first parallel deploy ([7ac27a0](https://github.com/embark-framework/embark/commit/7ac27a0))
* format \n as <br> in cockpit console ([#1385](https://github.com/embark-framework/embark/issues/1385)) ([58ab76d](https://github.com/embark-framework/embark/commit/58ab76d))
* handle the case where account is an object ([24a6a47](https://github.com/embark-framework/embark/commit/24a6a47))
* limit cockpit editor file size ([f12ca22](https://github.com/embark-framework/embark/commit/f12ca22))
* log command in console ([1334900](https://github.com/embark-framework/embark/commit/1334900))
* node_modules should be part of hidden files ([0b530f3](https://github.com/embark-framework/embark/commit/0b530f3))
* pressing enter on "Display additional results" does the expected thing ([2cc0d30](https://github.com/embark-framework/embark/commit/2cc0d30))
* prevent HTML injection in the cockpit ([#1381](https://github.com/embark-framework/embark/issues/1381)) ([78201ce](https://github.com/embark-framework/embark/commit/78201ce))
* remove unneeded test_dapps/ directory in the monorepo root ([5c2e30c](https://github.com/embark-framework/embark/commit/5c2e30c))
* revise test urls to reflect test_dapps/ -> dapps/tests/ ([eb1b693](https://github.com/embark-framework/embark/commit/eb1b693))
* simulator proxy with ws ([5968eef](https://github.com/embark-framework/embark/commit/5968eef))
* specify full path for password files (geth) ([c1d08c6](https://github.com/embark-framework/embark/commit/c1d08c6))
* supply missing tsconfig.json in packages/* ([376b6ca](https://github.com/embark-framework/embark/commit/376b6ca))
* swarm command registers and warns when swarm is disabled ([afe2512](https://github.com/embark-framework/embark/commit/afe2512))
* template dependency errors don't exit ([271a219](https://github.com/embark-framework/embark/commit/271a219))
* track and debug last transaction correctly ([aba4e0e](https://github.com/embark-framework/embark/commit/aba4e0e))
* upgrade packages with vulnerabilities ([#1388](https://github.com/embark-framework/embark/issues/1388)) ([913b4e1](https://github.com/embark-framework/embark/commit/913b4e1))
* **test:** fix tests getting stuck when embark is run next to it ([e64ed36](https://github.com/embark-framework/embark/commit/e64ed36))
* use a yarn.lock that wasn't completely regenerated ([41fb31a](https://github.com/embark-framework/embark/commit/41fb31a)), closes [/github.com/embark-framework/embark/pull/1307#issuecomment-461184291](https://github.com//github.com/embark-framework/embark/pull/1307/issues/issuecomment-461184291)
* use our global Web3 and not Metamask's ([9ccc453](https://github.com/embark-framework/embark/commit/9ccc453))
* use right accounts for contract deployment ([576836d](https://github.com/embark-framework/embark/commit/576836d))
* **test/blockchain:** fix race condition of installing web3 and test ([8ebba40](https://github.com/embark-framework/embark/commit/8ebba40))
* **vyper:** file path ([e6eea1d](https://github.com/embark-framework/embark/commit/e6eea1d))
* using async with async npm ([0ddebc7](https://github.com/embark-framework/embark/commit/0ddebc7))
* validate whisper channel name in communication tab ([616af6d](https://github.com/embark-framework/embark/commit/616af6d))
* warn when contract bytecode too large for EVM ([387d33a](https://github.com/embark-framework/embark/commit/387d33a))


### Features

* **@cockpit/transaction-decoder:** allow for decoding raw transaction hashes ([e72d648](https://github.com/embark-framework/embark/commit/e72d648))
* **@embark/core:** Add events oracle ([84ca98f](https://github.com/embark-framework/embark/commit/84ca98f))
* **@embark/core:** Auto generate EmbarkJS events ([d378ccf](https://github.com/embark-framework/embark/commit/d378ccf))
* **@embark/core:** Disable regular txs until needed ([135fde0](https://github.com/embark-framework/embark/commit/135fde0))
* **@embark/core:** Improve VM ([c1a5bfe](https://github.com/embark-framework/embark/commit/c1a5bfe))
* **@embark/core:** Recursively import contracts ([2613e6d](https://github.com/embark-framework/embark/commit/2613e6d))
* **@embark/core:** Run all code in VM2 ([9a9eb45](https://github.com/embark-framework/embark/commit/9a9eb45))
* **@embark/pipeline:** Add `enabled` property to pipeline config ([5ea4807](https://github.com/embark-framework/embark/commit/5ea4807))
* **blockchain/config:** adds a cors command to add it to the config ([84a74ac](https://github.com/embark-framework/embark/commit/84a74ac))
* **blockchainConfig:** enable having auto cors plus other origins ([9e349ff](https://github.com/embark-framework/embark/commit/9e349ff))
* **cockpit/console:** display cmds from cockpit in embark console ([e339641](https://github.com/embark-framework/embark/commit/e339641))
* **cockpit/contracts:** don't display contracts marked as silent ([0e63d6b](https://github.com/embark-framework/embark/commit/0e63d6b))
* **cockpit/editor:** add status messages for file operations ([ecdfd47](https://github.com/embark-framework/embark/commit/ecdfd47))
* **cockpit/transaction:** display a link for contracts and accounts ([74847ee](https://github.com/embark-framework/embark/commit/74847ee))
* **compiler:** add a new compiler api that checks for compatibility ([df872fd](https://github.com/embark-framework/embark/commit/df872fd))
* **console:** print console results as log so cockpit gets it ([57cd6d3](https://github.com/embark-framework/embark/commit/57cd6d3))
* **console:** wait for connector onReady to have warning ([8ee32c1](https://github.com/embark-framework/embark/commit/8ee32c1))
* **contract:** contracts can point to an artifact file to bypass deploy and compile ([1543f6a](https://github.com/embark-framework/embark/commit/1543f6a))
* **coverage:** load contracts from plugin ([46221a3](https://github.com/embark-framework/embark/commit/46221a3))
* **dapp-config:** add dapp connection to dapp  config (artifact) ([52aebeb](https://github.com/embark-framework/embark/commit/52aebeb))
* **deployer:** add event to return the contract send object ([1d459e4](https://github.com/embark-framework/embark/commit/1d459e4))
* **embark-ui:** add storybook ([eab9aa5](https://github.com/embark-framework/embark/commit/eab9aa5))
* **embark/generation:** remove generation of web3instance.js ([3b0a2b9](https://github.com/embark-framework/embark/commit/3b0a2b9))
* add repository.directory field to package.json ([a9c5e1a](https://github.com/embark-framework/embark/commit/a9c5e1a))
* allow to stop debugger ([52d830a](https://github.com/embark-framework/embark/commit/52d830a))
* avoid infinite loop ([e8da329](https://github.com/embark-framework/embark/commit/e8da329))
* create async wrapper ([bc24598](https://github.com/embark-framework/embark/commit/bc24598))
* enable embark to be run with an external pipeline ([ebcc3c4](https://github.com/embark-framework/embark/commit/ebcc3c4))
* import resolver ([29db66b](https://github.com/embark-framework/embark/commit/29db66b))
* normalize README and package.json bugs, homepage, description ([5418f16](https://github.com/embark-framework/embark/commit/5418f16))
* **embarkjs/blockchain:** remove dependency on web3instance.js ([bd9fc66](https://github.com/embark-framework/embark/commit/bd9fc66))
* **generattion:** remove web3 generation to let EmbarkJS handle it ([4023392](https://github.com/embark-framework/embark/commit/4023392))
* **plugins:** enable external plugin to be classes ([5ab3e46](https://github.com/embark-framework/embark/commit/5ab3e46))
* **test/reporter:** log tx functions during tests ([87d92b6](https://github.com/embark-framework/embark/commit/87d92b6))
* **test/reporter:** only show tx details on option ([2173576](https://github.com/embark-framework/embark/commit/2173576))
* **ui:** color console item info as success ([193abd4](https://github.com/embark-framework/embark/commit/193abd4))
* **ui:** keep state in frame ([cd32630](https://github.com/embark-framework/embark/commit/cd32630))
* **web3-connector:** convert web3connector to class and add connect ([7eceaf6](https://github.com/embark-framework/embark/commit/7eceaf6))
* **web3connector:** add web3 connector plugin to connect to web3 ([976f994](https://github.com/embark-framework/embark/commit/976f994))

# [4.0.0-beta.0](https://github.com/embark-framework/embark/compare/v4.0.0-alpha.3...v4.0.0-beta.0) (2019-01-10)


### Bug Fixes

* **@embark/coderunner:** use custom require function in vm context ([2dea50a](https://github.com/embark-framework/embark/commit/2dea50a))
* **@embark/core:** fix to allow large ether values ([f549822](https://github.com/embark-framework/embark/commit/f549822))
* **blockchain:** fix metamask using the old web3 ([749c32c](https://github.com/embark-framework/embark/commit/749c32c))
* **contracts:** fix linking libraries with long paths using output ([d071130](https://github.com/embark-framework/embark/commit/d071130))


### Features

* add API server ([d67863c](https://github.com/embark-framework/embark/commit/d67863c))
* **@embark-ui:** Change page title and description ([2613c56](https://github.com/embark-framework/embark/commit/2613c56))
* **@embark/cli:** unify command history without needing a restart ([919d271](https://github.com/embark-framework/embark/commit/919d271))
* add development mode to cockpit ([2505fa5](https://github.com/embark-framework/embark/commit/2505fa5))
* add option --no-single-use-cockpit-token ([34f5f97](https://github.com/embark-framework/embark/commit/34f5f97))
* allow cockpit with docker ([8efa889](https://github.com/embark-framework/embark/commit/8efa889))
* coverage without emit ([df3435f](https://github.com/embark-framework/embark/commit/df3435f)), closes [#1230](https://github.com/embark-framework/embark/issues/1230)





# [4.0.0-alpha.3](https://github.com/embark-framework/embark/compare/v4.0.0-alpha.2...v4.0.0-alpha.3) (2018-12-31)


### Bug Fixes

* all ws endpoint use new technique ([bbcfe9b](https://github.com/embark-framework/embark/commit/bbcfe9b))
* allow message signing with wallet address ([3a8808e](https://github.com/embark-framework/embark/commit/3a8808e))
* consistent service order in cockpit ([7574e14](https://github.com/embark-framework/embark/commit/7574e14))
* do not override web3 in embark ([94a8bad](https://github.com/embark-framework/embark/commit/94a8bad))
* record contract transaction history ([435e1e6](https://github.com/embark-framework/embark/commit/435e1e6))
* **simulator:** fix simulator when there is no accounts ([34d5923](https://github.com/embark-framework/embark/commit/34d5923))
* windows path separator being wrong ([72f8701](https://github.com/embark-framework/embark/commit/72f8701))
* **@embark:** single use tokens ([6aa8781](https://github.com/embark-framework/embark/commit/6aa8781))
* **@embark/blockchain_process:** proxy listens on the specified host ([9e7bc53](https://github.com/embark-framework/embark/commit/9e7bc53))
* **@embark/cli:** start the dashboard after services are started ([6c7782c](https://github.com/embark-framework/embark/commit/6c7782c))
* **@embark/cockpit/converter:** allow decimal numbers ([8a5871e](https://github.com/embark-framework/embark/commit/8a5871e))
* **@embark/core:** Disable swarm if URL can’t be determined ([c24536d](https://github.com/embark-framework/embark/commit/c24536d))
* **@embark/core:** Fix `—template` URL support ([f1206b4](https://github.com/embark-framework/embark/commit/f1206b4))
* **@embark/core:** Proxy support for raw transactions ([ffcff4a](https://github.com/embark-framework/embark/commit/ffcff4a))
* **@embark/core:** Restart IPFS after CORS Update ([27babf0](https://github.com/embark-framework/embark/commit/27babf0))
* **@embark/core:** Support legacy Parity version parsing ([1ccc3e7](https://github.com/embark-framework/embark/commit/1ccc3e7))
* **@embark/ens:** make resolve() work with promises and callbacks ([2195475](https://github.com/embark-framework/embark/commit/2195475))
* **@embark/whisper:** ensure web3 is ready when whisper info is requested ([fd311f9](https://github.com/embark-framework/embark/commit/fd311f9))
* **@embark/whisper:** use a new WebsocketProvider on each retry ([27ad343](https://github.com/embark-framework/embark/commit/27ad343))
* **blockchain:** add cert options to blockchain initialization ([bf8629d](https://github.com/embark-framework/embark/commit/bf8629d))
* **blockchain/geth:** create geth dev account before other accounts ([7811211](https://github.com/embark-framework/embark/commit/7811211))
* **cockpit/editor:** remove arrows next to files in file explorer ([d30b00e](https://github.com/embark-framework/embark/commit/d30b00e))
* **compiler:** fix compiler being fired twice ([ebd827b](https://github.com/embark-framework/embark/commit/ebd827b))
* **debugger:** fix and improve console commands ([37c28b9](https://github.com/embark-framework/embark/commit/37c28b9))
* **debugger:** fix debugger displays ([9c37f97](https://github.com/embark-framework/embark/commit/9c37f97))
* **embarkjs/web3:** make global web3 available again ([6e4a612](https://github.com/embark-framework/embark/commit/6e4a612))
* **ens:** fix error message by checking for directives before ([06553b5](https://github.com/embark-framework/embark/commit/06553b5))
* **ens/web3:** use blockchain connector for ens and fix global web3 ([d5f6da3](https://github.com/embark-framework/embark/commit/d5f6da3))
* **gethClient:** clear timeout when call backing ([9a6149f](https://github.com/embark-framework/embark/commit/9a6149f))
* **logHandler:** stringify objects instead of trying to split it ([33d6e29](https://github.com/embark-framework/embark/commit/33d6e29))
* **names:** fix ens console commands ([50858dc](https://github.com/embark-framework/embark/commit/50858dc))
* **parity:** create password file even when there are no accounts ([7d2ceaa](https://github.com/embark-framework/embark/commit/7d2ceaa))
* **profiler:** do not exit on error but print it ([e207537](https://github.com/embark-framework/embark/commit/e207537))
* **proxy:** delete old ids for accounts ([604e267](https://github.com/embark-framework/embark/commit/604e267))
* **test:** use logger instead of engine.logger ([af48788](https://github.com/embark-framework/embark/commit/af48788))
* **test/console:** register in the console in tests when ipc connected ([503a79c](https://github.com/embark-framework/embark/commit/503a79c))
* **whisper:** fix crash on using whisper with the simualtor ([1461e95](https://github.com/embark-framework/embark/commit/1461e95))
* **ws:** up fragmentation threshold to patch Geth bug with WS ([b20bce9](https://github.com/embark-framework/embark/commit/b20bce9))


### Features

* add coverage events ([8a6d075](https://github.com/embark-framework/embark/commit/8a6d075))
* apply contract change to test ([e3a7b74](https://github.com/embark-framework/embark/commit/e3a7b74))
* code runner use fs overrided ([944b392](https://github.com/embark-framework/embark/commit/944b392))
* **ui:** auto updates services in cockpit ([a92a986](https://github.com/embark-framework/embark/commit/a92a986))
* enable ethereum manually ([5a375d9](https://github.com/embark-framework/embark/commit/5a375d9))
* **@embark/core:** Allow search to find contract by name ([1e2cb64](https://github.com/embark-framework/embark/commit/1e2cb64))
* **@embark/core:** improve long running webpack UI ([b49839a](https://github.com/embark-framework/embark/commit/b49839a))
* **@embark/core:** store IPC files in a dir within os.tmpdir() ([a91a4dd](https://github.com/embark-framework/embark/commit/a91a4dd)), closes [#1202](https://github.com/embark-framework/embark/issues/1202) [#450](https://github.com/embark-framework/embark/issues/450)
* **@embark/core:** Support directives in ENS config ([7511156](https://github.com/embark-framework/embark/commit/7511156))
* **@embark/deployment:** output transaction hash during deployment asap ([0bb7d63](https://github.com/embark-framework/embark/commit/0bb7d63))
* **@embark/deployment:** output transaction hash of contract deployment ([3099894](https://github.com/embark-framework/embark/commit/3099894))
* **console:** add new api to register console commands ([3229e15](https://github.com/embark-framework/embark/commit/3229e15))
* **coverage:** gas usage improvements ([0118b1a](https://github.com/embark-framework/embark/commit/0118b1a))
* **scaffold:** use ipfs in scaffold and upload file ([9854368](https://github.com/embark-framework/embark/commit/9854368))
* **ui:** auto updates contracts in cockpit ([d10d906](https://github.com/embark-framework/embark/commit/d10d906))





# [4.0.0-alpha.2](https://github.com/embark-framework/embark/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2018-12-05)


### Bug Fixes

* **@embark/blockchain_process:** ignore socket disconnect bytes ([1fac391](https://github.com/embark-framework/embark/commit/1fac391))
* **@embark/cmd:** output contract json ([4dca723](https://github.com/embark-framework/embark/commit/4dca723))
* **@embark/contracts_manager:** set contract `deployedAddress` if address is set ([2ff119d](https://github.com/embark-framework/embark/commit/2ff119d))
* **@embark/core:** don't expect `balance` on `accounts` ([4961f70](https://github.com/embark-framework/embark/commit/4961f70)), closes [#1067](https://github.com/embark-framework/embark/issues/1067)
* **@embark/core:** ensure 0x0 address are extended to full zero addresses ([d3f6b43](https://github.com/embark-framework/embark/commit/d3f6b43)), closes [#956](https://github.com/embark-framework/embark/issues/956)
* **@embark/core:** expect `afterDeploy` hook on contracts config environment ([903e9d4](https://github.com/embark-framework/embark/commit/903e9d4))
* **@embark/ens:** use local ZERO_ADDRESS in ENSFunctions ([6526e83](https://github.com/embark-framework/embark/commit/6526e83))
* **@embark/webserver:** load embark-ui sources from the correct path ([96f7688](https://github.com/embark-framework/embark/commit/96f7688))
* **accounts:** remove warning for simulator configs ([de58cab](https://github.com/embark-framework/embark/commit/de58cab))
* **blockchain:** fix setting proxy to false not applying ([f50f106](https://github.com/embark-framework/embark/commit/f50f106))
* **ci:** make CI happy again by updating http paths to master branch ([af1bc90](https://github.com/embark-framework/embark/commit/af1bc90))
* **cmd:** removes -h as an option for host for the simulator ([43be2a2](https://github.com/embark-framework/embark/commit/43be2a2))
* **cockpit:** disable autocomplete in Login component ([3ddcd1f](https://github.com/embark-framework/embark/commit/3ddcd1f))
* **cockpit:** fix aside not opening correctly and typos ([a714e07](https://github.com/embark-framework/embark/commit/a714e07))
* **contracts:** replace $accounts for onDeploy too ([8831dfb](https://github.com/embark-framework/embark/commit/8831dfb))
* **contracts_manager:** fix object contract arguments ([6b61c8a](https://github.com/embark-framework/embark/commit/6b61c8a))
* **dependencies:** lock remix-test and debug version ([f938473](https://github.com/embark-framework/embark/commit/f938473))
* **deployment:** add a message when the errror is about the input ([7a5035e](https://github.com/embark-framework/embark/commit/7a5035e))
* **ENS:** register subdomain when not registered ([ca212e3](https://github.com/embark-framework/embark/commit/ca212e3))
* **ens/embarkjs:** fix using await with embarkjs functions ([c64c093](https://github.com/embark-framework/embark/commit/c64c093))
* **ipc:** sends requests and events only when connected ([cabfa93](https://github.com/embark-framework/embark/commit/cabfa93)), closes [#1063](https://github.com/embark-framework/embark/issues/1063)
* **module/authenticator:** do not display log if no webserver ([97829c0](https://github.com/embark-framework/embark/commit/97829c0))
* **simulator:** adds `node` to sim command to comply with Windows ([1a29a8f](https://github.com/embark-framework/embark/commit/1a29a8f))
* **simulator:** change port depending of the type in config ([51e39c5](https://github.com/embark-framework/embark/commit/51e39c5))
* **simulator:** use config's gas limit if no option provided ([3353a05](https://github.com/embark-framework/embark/commit/3353a05)), closes [#1054](https://github.com/embark-framework/embark/issues/1054)
* **tests:** enable coverage only when --coverage ([0032569](https://github.com/embark-framework/embark/commit/0032569)), closes [#1091](https://github.com/embark-framework/embark/issues/1091)
* **tests:** fix tests that fetched files from devleop ([ea2a656](https://github.com/embark-framework/embark/commit/ea2a656))
* **tests:** fix using node config inside a test ([3a3c81e](https://github.com/embark-framework/embark/commit/3a3c81e))
* **ui:** click on debug button start the debugger ([1600153](https://github.com/embark-framework/embark/commit/1600153))
* **ui:** switch aside ([66e431c](https://github.com/embark-framework/embark/commit/66e431c))
* add missing external declaration ([6e784de](https://github.com/embark-framework/embark/commit/6e784de))
* adjust module resolution behavior ([bc6e0e3](https://github.com/embark-framework/embark/commit/bc6e0e3))
* coverage count ([f32ddc9](https://github.com/embark-framework/embark/commit/f32ddc9))
* deploy hangs ([92610ed](https://github.com/embark-framework/embark/commit/92610ed))
* handle contracts being removed ([485b8ef](https://github.com/embark-framework/embark/commit/485b8ef)), closes [#1077](https://github.com/embark-framework/embark/issues/1077)
* open/close aside container ([7728c54](https://github.com/embark-framework/embark/commit/7728c54))
* **ui:** white screen on text editor ([10caddd](https://github.com/embark-framework/embark/commit/10caddd))
* **whisper:** fix disabling whisper crashing blockchain ([b48d29a](https://github.com/embark-framework/embark/commit/b48d29a)), closes [#1027](https://github.com/embark-framework/embark/issues/1027)
* runtime environment needs to support locally installed embark ([23f19a0](https://github.com/embark-framework/embark/commit/23f19a0))


### Features

* add CRUD to file explorer ([f82d3de](https://github.com/embark-framework/embark/commit/f82d3de))
* add debug button to transaction and contract log ([184e1e2](https://github.com/embark-framework/embark/commit/184e1e2))
* add new event before build ([db35d7f](https://github.com/embark-framework/embark/commit/db35d7f))
* adds support for swarm imports in Solidity ([62607b0](https://github.com/embark-framework/embark/commit/62607b0)), closes [#766](https://github.com/embark-framework/embark/issues/766)
* Allow parallel deploy ([3406ae8](https://github.com/embark-framework/embark/commit/3406ae8))
* expose dappPath ([5fb687c](https://github.com/embark-framework/embark/commit/5fb687c))
* handle missing directive ([bae3116](https://github.com/embark-framework/embark/commit/bae3116))
* introduce function support for deploy lifecycle hooks ([8b68bec](https://github.com/embark-framework/embark/commit/8b68bec)), closes [#1029](https://github.com/embark-framework/embark/issues/1029)
* **@embark/cli:** add --template option to embark demo cli command ([89e3eb6](https://github.com/embark-framework/embark/commit/89e3eb6))
* permanently save logs/events ([51b8224](https://github.com/embark-framework/embark/commit/51b8224))
* run coverage for bytecode and deployedBytecode ([f84d7f1](https://github.com/embark-framework/embark/commit/f84d7f1))
* strategy for deployment ([f9f4c28](https://github.com/embark-framework/embark/commit/f9f4c28))
* **@embark/cli:** introduce `eject-build-config` alias ([ffb8f54](https://github.com/embark-framework/embark/commit/ffb8f54)), closes [#1121](https://github.com/embark-framework/embark/issues/1121) [#1121](https://github.com/embark-framework/embark/issues/1121)
* **@embark/cli:** repl support inside dashboard ([53780aa](https://github.com/embark-framework/embark/commit/53780aa)), closes [#768](https://github.com/embark-framework/embark/issues/768)
* **@embark/console:** better determine suggestions for any js object not just with the dot.' ([d427e62](https://github.com/embark-framework/embark/commit/d427e62))
* **@embark/console:** determine suggestions automatically for a js object of the type 'command.' ([f206062](https://github.com/embark-framework/embark/commit/f206062))
* **@embark/contracts_manager:** allow ABI definition non-owned contracts ([17cec1b](https://github.com/embark-framework/embark/commit/17cec1b))
* **@embark/plugins:** introduce API to register a contract factory ([90aac83](https://github.com/embark-framework/embark/commit/90aac83)), closes [#1066](https://github.com/embark-framework/embark/issues/1066)
* **@embark/whister:** Add signature and recipient public key to whisper envelope ([46e351e](https://github.com/embark-framework/embark/commit/46e351e))
* **cockpit:** add searching ENS names in search bar ([dca52d0](https://github.com/embark-framework/embark/commit/dca52d0))
* **cockpit:** make editor resizable ([1030607](https://github.com/embark-framework/embark/commit/1030607))
* update to solc 0.5.0 ([45afe83](https://github.com/embark-framework/embark/commit/45afe83))
* **coverage:** count node by line only ([154a4f0](https://github.com/embark-framework/embark/commit/154a4f0))
* **scaffold:** allow association/file ([f68f1fc](https://github.com/embark-framework/embark/commit/f68f1fc))
