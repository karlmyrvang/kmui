import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f', plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"34313772-e39b-4c5a-aed3-70be8fdf6a3e":"#2AD100","118ab1a8-abf2-4262-96e7-f39cb09c6867":"#878787","a7a02937-2c50-43ae-84aa-e25849ec75b3":"#1A1A1A","24eac892-b3ac-491b-895f-bdfe30c2cc9a":"#FFFFFF","6047abe2-4b96-4a42-a6ad-68a09385e62c":"#40404099","cbebc4e1-3d74-42f1-b341-1d71989aea7e":"#BFBFBF","d4118360-d050-4457-ad16-8a402f513f44":"#6B6B6B66","0fe07b36-45f1-46c5-b98b-8fd7e9ec2316":"#1F1F1F","4dcda4f4-dac5-4efa-b621-ac6b936e368e":"#FFFFFF","7fbcef58-971e-41f0-95e9-5f810372a04f":"#8080801A","8e84511a-9c4d-4411-89e6-7ecc6e1bd22e":"#FFFFFF","6aa44e28-7f41-4fa6-933b-14ce97fa11ff":"#3D3D3D33","79d921e5-3073-460c-a292-de67b9f10ebb":"#C90D0D","3cf1e7e9-ffce-40e8-9182-c2f2c21aeec0":"#D18400","149a6e26-d723-4fa0-a1fa-a35c194cc147":"#0F93FF","30f7191c-a988-43cd-a7de-1393d9d87500":"#242424","6db7a6e6-c3ec-486e-9dfd-a93227d46044":"#1C1C1C","b6dc9191-8cc1-42bf-900e-3cc663b5442d":"#171717","6c9fd0d5-de6e-4be1-a8ff-0b93e169124f":"#B5B5B5"} : {"34313772-e39b-4c5a-aed3-70be8fdf6a3e":"#2AD100","118ab1a8-abf2-4262-96e7-f39cb09c6867":"#737373","a7a02937-2c50-43ae-84aa-e25849ec75b3":"#F5F5F5","24eac892-b3ac-491b-895f-bdfe30c2cc9a":"#000000D9","6047abe2-4b96-4a42-a6ad-68a09385e62c":"#C9C9C980","cbebc4e1-3d74-42f1-b341-1d71989aea7e":"#303030","d4118360-d050-4457-ad16-8a402f513f44":"#7A7A7A66","0fe07b36-45f1-46c5-b98b-8fd7e9ec2316":"#FFFFFF","4dcda4f4-dac5-4efa-b621-ac6b936e368e":"#FFFFFF","7fbcef58-971e-41f0-95e9-5f810372a04f":"#D4D4D440","8e84511a-9c4d-4411-89e6-7ecc6e1bd22e":"#000000","6aa44e28-7f41-4fa6-933b-14ce97fa11ff":"#DEDEDE33","79d921e5-3073-460c-a292-de67b9f10ebb":"#C01616","3cf1e7e9-ffce-40e8-9182-c2f2c21aeec0":"#D18400","149a6e26-d723-4fa0-a1fa-a35c194cc147":"#0F93FF","30f7191c-a988-43cd-a7de-1393d9d87500":"#E6E6E6","6db7a6e6-c3ec-486e-9dfd-a93227d46044":"#1C1C1C","b6dc9191-8cc1-42bf-900e-3cc663b5442d":"#F2F2F2","6c9fd0d5-de6e-4be1-a8ff-0b93e169124f":"#B5B5B5"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"938f0b7f-bf47-49a7-b173-728f838b0f55":"4px","6e16a677-1ada-4c24-84af-d2b69f5996f4":"8px","fc67747d-3e97-4a0d-8672-5e68346234b1":"8px","f2c835c6-420a-4754-b141-6b6091cc181a":"12px","a7cda7cb-9c40-4855-ba24-528917f09c19":"8px","cc9e6068-10dd-4656-b6db-b29ee6973659":"16px","386a5df0-3424-42ac-8fb5-51fdf6e0db89":"12px","ae9c2a0f-7af7-40d0-9440-bc4f0c02ce48":"1100px","080b43c5-b246-4411-b162-f08dfd9bf15c":"36px","3afae1bc-5a17-4f26-8f8c-8c48f9d18aac":"8px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"676830c4-abcd-4a64-9325-150ac0ed5af7":"400 16px/24px var(--ww-default-font-family, sans-serif)","e1958da3-3ac9-439f-9c8e-6462b46080d6":"400 14px/20px var(--ww-default-font-family, sans-serif)","f18dc11b-7b23-4b7d-9257-7729248cee09":"500 28px/normal var(--ww-default-font-family, sans-serif)","d728913f-d206-4511-93e6-bd77e99c7572":"500 14px/18px var(--ww-default-font-family, sans-serif)","06dd25dc-699d-4105-b03c-b84ad9b012ec":"500 12px/18px var(--ww-default-font-family, sans-serif)","2ce05ec8-3953-42ba-b047-cf3e941cef06":"400 12px/18px var(--ww-default-font-family, sans-serif)","50f7ae5c-9dbc-4b26-b219-c36e4c058168":"500 24px/32px var(--ww-default-font-family, sans-serif)","ba25722f-2388-40f2-a003-5a35d5c6e1cb":"500 16px/24px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
