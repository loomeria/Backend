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
                                <a href="modules/AddressModule.html" data-type="entity-link" >AddressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' : 'data-bs-target="#xs-controllers-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' :
                                            'id="xs-controllers-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' }>
                                            <li class="link">
                                                <a href="controllers/AddressController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' : 'data-bs-target="#xs-injectables-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' :
                                        'id="xs-injectables-links-module-AddressModule-61d61601f845089e9b351794dc88ba08c26e0ae04188046f9ee851b04d90a878752e8c0d5b7690f71e5a0733b310c99ad0853c7cf754f0c3da746504eed94d64"' }>
                                        <li class="link">
                                            <a href="injectables/AddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1dfebf5639f52e1cf87eaad4929bc100ad56bd8d19a0992617290dcde7bf6d3215ee94b7a3d294ded527993fd58ab50faa21987974c9d5e437e0ac325e318419"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1dfebf5639f52e1cf87eaad4929bc100ad56bd8d19a0992617290dcde7bf6d3215ee94b7a3d294ded527993fd58ab50faa21987974c9d5e437e0ac325e318419"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1dfebf5639f52e1cf87eaad4929bc100ad56bd8d19a0992617290dcde7bf6d3215ee94b7a3d294ded527993fd58ab50faa21987974c9d5e437e0ac325e318419"' :
                                        'id="xs-injectables-links-module-AppModule-1dfebf5639f52e1cf87eaad4929bc100ad56bd8d19a0992617290dcde7bf6d3215ee94b7a3d294ded527993fd58ab50faa21987974c9d5e437e0ac325e318419"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' :
                                            'id="xs-controllers-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' :
                                        'id="xs-injectables-links-module-AuthModule-7f2a0c5fe7a5bf49ba07097adae7f3eaf31ac7629b15618ded7ed8808a97277c60b3529faf040005021cdede9f8e15dfbffdd2173cf287675f677c7b74b49120"' }>
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
                                            'data-bs-target="#controllers-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' :
                                            'id="xs-controllers-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' :
                                        'id="xs-injectables-links-module-PermissionsModule-1f320706976c5285f3aebe1676703a59420d268b5205917f48b63e4453231c974c9b8c8de72c8dc6b58145432d498c0bf2b751847ab1dc69c6a279b7b6f2cda8"' }>
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
                                <a href="modules/SellersModule.html" data-type="entity-link" >SellersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' : 'data-bs-target="#xs-controllers-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' :
                                            'id="xs-controllers-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' }>
                                            <li class="link">
                                                <a href="controllers/SellersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SellersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' : 'data-bs-target="#xs-injectables-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' :
                                        'id="xs-injectables-links-module-SellersModule-88a62b624c98932883c2e3eff0dbffa616e8ba84ddb1e9b6bce06d30eec3295eb7059e06d9b6f9be96cbe0d9615f700c93c17e2e29582bd5e1562459beae115d"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SellersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SellersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' :
                                            'id="xs-controllers-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' :
                                        'id="xs-injectables-links-module-UsersModule-314537f88bcf9e5bd62dacae79b1ccfd4f6d01f71c1f2146c2dd518fc6e1dd222cf636c143f3ff3a89535625f57065ef599482c576a1d3658aa119319251c565"' }>
                                        <li class="link">
                                            <a href="injectables/AddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SellersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SellersService</a>
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
                                    <a href="controllers/AddressController.html" data-type="entity-link" >AddressController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SellersController.html" data-type="entity-link" >SellersController</a>
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
                                <a href="classes/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAddressDto.html" data-type="entity-link" >CreateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSellerDto.html" data-type="entity-link" >CreateSellerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/Seller.html" data-type="entity-link" >Seller</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAddressDto.html" data-type="entity-link" >UpdateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSellerDto.html" data-type="entity-link" >UpdateSellerDto</a>
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
                                    <a href="injectables/AddressService.html" data-type="entity-link" >AddressService</a>
                                </li>
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
                                    <a href="injectables/SellersService.html" data-type="entity-link" >SellersService</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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