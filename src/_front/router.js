import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"07923d1b-fe8d-49bf-ace0-76f746d4f76b","homePageId":"740cecac-319e-4ae3-95c9-2a5bbf8a857c","authPluginId":null,"baseTag":{},"defaultTheme":"dark","langs":[{"lang":"en","default":true}],"background":{"backgroundColor":"var(--a7a02937-2c50-43ae-84aa-e25849ec75b3,#F5F5F5)"},"workflows":[],"pages":[{"id":"740cecac-319e-4ae3-95c9-2a5bbf8a857c","linkId":"740cecac-319e-4ae3-95c9-2a5bbf8a857c","name":"KMUI","folder":null,"paths":{"en":"kmui","default":"kmui"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"52360dee-ff92-4fc1-b024-92aed52d9d44","sectionTitle":"Top Nav","linkId":"a2908599-6b36-4d2e-8800-53df9cf61c37"},{"uid":"088c1157-39b1-414e-835e-95dbbdc9dab4","sectionTitle":"hero","linkId":"9e050a3b-7bba-423e-b5a0-181af41c1b94"},{"uid":"0d4458a2-55f4-47d3-a907-fdafcbc5a34d","sectionTitle":"demo","linkId":"ac662449-fca1-48e2-a48c-8ab418ecc1d6"},{"uid":"edaef97d-bb64-4ef9-be3b-8921502e912e","sectionTitle":"usp","linkId":"30a5cf14-3ba3-4027-a640-84cddfe25b6f"},{"uid":"67cb604a-7c0c-4945-8a6e-6947bb56d6e1","sectionTitle":"usp","linkId":"8ed6cfe0-b84b-4e20-8a1c-081338facfcf"},{"uid":"eaf4bd47-c845-4fd2-a24e-04d062ace3b4","sectionTitle":"Section","linkId":"65fddcc7-0fa2-4146-84ef-9fdd8f8c35f0"},{"uid":"c75dca84-f385-4889-b26d-b035860e9c6c","sectionTitle":"Section","linkId":"477b06b6-95ce-4a33-8868-fd2069a019eb"},{"uid":"3b18f38f-b22f-4223-8b38-7ee58a818a23","sectionTitle":"footer","linkId":"099a0739-3c69-451a-ad00-d8afb0a36a56"}],"pageUserGroups":[],"title":{"en":"KMUI - WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"},{"id":"76aca8a1-456a-42a5-bf86-a5c33f98b134","linkId":"76aca8a1-456a-42a5-bf86-a5c33f98b134","name":"Blocks","folder":null,"paths":{"en":"blocks","default":"blocks"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"52360dee-ff92-4fc1-b024-92aed52d9d44","sectionTitle":"Top Nav","linkId":"a2908599-6b36-4d2e-8800-53df9cf61c37"},{"uid":"b0e6bb12-c0c4-4d6f-84e2-ed13fa507d44","sectionTitle":"Body","linkId":"c3827ce4-49ab-4d7b-8169-31e8a67b6be7"},{"uid":"3b18f38f-b22f-4223-8b38-7ee58a818a23","sectionTitle":"footer","linkId":"099a0739-3c69-451a-ad00-d8afb0a36a56"}],"pageUserGroups":[],"title":{"en":"Blocks – KMUI – WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"},{"id":"ab86ad9b-546d-4bd4-9c8d-da6ffe6658c4","linkId":"ab86ad9b-546d-4bd4-9c8d-da6ffe6658c4","name":"KMUI-Dashboard-example","folder":"pages/","paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"d46eb7f8-f8f8-42a0-9c57-bd994edab319","sectionTitle":"Section","linkId":"b9901fcd-7bff-42d5-9bb0-f5325b0974cf"},{"uid":"1342a524-7b1f-408a-994f-bbe03d07e5fa","sectionTitle":"Sidemenu","linkId":"dbaba423-8e4e-46b2-bd5b-c1ba71f16c7a"},{"uid":"f58bfe92-7217-49fc-aea0-b133cf82011f","sectionTitle":"Top section","linkId":"ac2d6c69-cad0-444d-a69d-9f110cb25016"},{"uid":"64d012ae-6a83-40b9-b69f-8141518ea8d5","sectionTitle":"Top section","linkId":"9af0b9d8-f604-4ad6-8631-f13e458a22be"}],"pageUserGroups":[],"title":{"en":"Dashboard Example – KMUI – WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"},{"id":"2aa9b008-2de9-4916-93ef-8f0115d08aa5","linkId":"2aa9b008-2de9-4916-93ef-8f0115d08aa5","name":"KMUI-login-1","folder":"pages/","paths":{"en":"pages/login-1","default":"pages/login-1"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"11449cb8-a441-4d82-bbfd-ca0d137b3630","sectionTitle":"Section","linkId":"899ef5b2-aa5f-46b4-920d-a9ebaa791c9d"},{"uid":"d737dbc9-d5b2-44fa-964f-360a2e47f174","sectionTitle":"Section","linkId":"323905eb-4e0e-44c1-a247-d73a81da8e66"}],"pageUserGroups":[],"title":{"en":"Login Example – KMUI – WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"},{"id":"9bc4a5c0-1cd2-490b-8f69-1a1a2c4e56b8","linkId":"9bc4a5c0-1cd2-490b-8f69-1a1a2c4e56b8","name":"Documentation","folder":null,"paths":{"en":"documentation","default":"documentation"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"52360dee-ff92-4fc1-b024-92aed52d9d44","sectionTitle":"Top Nav","linkId":"a2908599-6b36-4d2e-8800-53df9cf61c37"},{"uid":"1ec5d3e7-72ad-40cf-82ac-9477dfb4c78c","sectionTitle":"Body","linkId":"46bd34a8-80ed-4f05-ae0f-189f8bd01d18"},{"uid":"3b18f38f-b22f-4223-8b38-7ee58a818a23","sectionTitle":"footer","linkId":"099a0739-3c69-451a-ad00-d8afb0a36a56"}],"pageUserGroups":[],"title":{"en":"Docs – KMUI – WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"},{"id":"047d9999-5194-4322-bf6e-993d14d43f0d","linkId":"047d9999-5194-4322-bf6e-993d14d43f0d","name":"Components","folder":null,"paths":{"en":"km-ui","default":"km-ui"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"52360dee-ff92-4fc1-b024-92aed52d9d44","sectionTitle":"Top Nav","linkId":"a2908599-6b36-4d2e-8800-53df9cf61c37"},{"uid":"d2c64b5d-fa85-4d62-bef1-9c3199757018","sectionTitle":"Body","linkId":"f12c6e7d-e376-4e85-861d-10e30ad358c0"},{"uid":"3b18f38f-b22f-4223-8b38-7ee58a818a23","sectionTitle":"footer","linkId":"099a0739-3c69-451a-ad00-d8afb0a36a56"}],"pageUserGroups":[],"title":{"en":"Components – KMUI – WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"},{"id":"b34b122f-d267-4b25-b0c2-6f3e56ed275f","linkId":"b34b122f-d267-4b25-b0c2-6f3e56ed275f","name":"Sections","folder":null,"paths":{"en":"sections","default":"sections"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"52360dee-ff92-4fc1-b024-92aed52d9d44","sectionTitle":"Top Nav","linkId":"a2908599-6b36-4d2e-8800-53df9cf61c37"},{"uid":"8606e516-7379-494c-b71c-1114660cac4f","sectionTitle":"Body","linkId":"f984d115-1d13-47a4-9777-713883a1207f"},{"uid":"3b18f38f-b22f-4223-8b38-7ee58a818a23","sectionTitle":"footer","linkId":"099a0739-3c69-451a-ad00-d8afb0a36a56"}],"pageUserGroups":[],"title":{"en":"Sections – KMUI – WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"},{"id":"ec62ce6c-c17f-4008-932e-183fc6bf3d9b","linkId":"ec62ce6c-c17f-4008-932e-183fc6bf3d9b","name":"Pages","folder":null,"paths":{"en":"pages","default":"pages"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"52360dee-ff92-4fc1-b024-92aed52d9d44","sectionTitle":"Top Nav","linkId":"a2908599-6b36-4d2e-8800-53df9cf61c37"},{"uid":"536fc9e8-3d25-48ea-ba70-c5d5c4d198cf","sectionTitle":"Body","linkId":"2ab56d9a-f4bc-4496-a88e-898ce5952105"},{"uid":"3b18f38f-b22f-4223-8b38-7ee58a818a23","sectionTitle":"footer","linkId":"099a0739-3c69-451a-ad00-d8afb0a36a56"}],"pageUserGroups":[],"title":{"en":"Pages – KMUI – WeWeb UI Library"},"meta":{"desc":{"en":"A modular UI library for WeWeb, featuring components, blocks, sections and pages built for speed, clarity, and full customization in your projects."},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"public/images/Hero.png?_wwcv=10"}],"plugins":[{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 10;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
