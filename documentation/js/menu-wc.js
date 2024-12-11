'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">loomeria12 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-c0fcd7070a2e3b45016cb859c5ddba493fbd2318f187723f81e701cbb2073cde5acba469fec98879962f4738c86d861b6e55e26beab51a3500e7228fbae6a839"' : 'data-bs-target="#xs-injectables-links-module-AppModule-c0fcd7070a2e3b45016cb859c5ddba493fbd2318f187723f81e701cbb2073cde5acba469fec98879962f4738c86d861b6e55e26beab51a3500e7228fbae6a839"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c0fcd7070a2e3b45016cb859c5ddba493fbd2318f187723f81e701cbb2073cde5acba469fec98879962f4738c86d861b6e55e26beab51a3500e7228fbae6a839"' :
                                        'id="xs-injectables-links-module-AppModule-c0fcd7070a2e3b45016cb859c5ddba493fbd2318f187723f81e701cbb2073cde5acba469fec98879962f4738c86d861b6e55e26beab51a3500e7228fbae6a839"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' :
                                            'id="xs-controllers-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' :
                                        'id="xs-injectables-links-module-AuthModule-ffd8d9337e2490baf271dc009518bbfb7db8342f14070e748ebd10875858e020359a785126ca55b0bc014b3e6893ad837b720006df6081b469c3ea62eef66881"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' :
                                            'id="xs-controllers-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' :
                                        'id="xs-injectables-links-module-PermissionsModule-9177c54c71c3bd343a70b930a53a6354ee50b5b4fd311fe02c933320dc18ea73b3ce3457a07863b7d8373de4d0ff618b282643a3ed140f3dfaaa81288ea2e1f5"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' :
                                            'id="xs-controllers-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' :
                                        'id="xs-injectables-links-module-UsersModule-4a01cc969d357a8bbfb487a7d71e912a40c0201cd40722b14d16860231fc13afaec92e8d9411ff6f5808199846a136a99bcbad61b083af065e6dbbfe45929f04"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});