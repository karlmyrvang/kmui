import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811': getInheritedConfiguration({ ...require('@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/ww-config.js').default, name: 'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811' }),
'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f': getInheritedConfiguration({ ...require('@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/ww-config.js').default, name: 'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...require('@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js').default, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...require('@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js').default, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'wwobject-2dff5957-3bd8-46f9-afa3-a5c5bab91931': getInheritedConfiguration({ ...require('@/components/elements/element-2dff5957-3bd8-46f9-afa3-a5c5bab91931/ww-config.js').default, name: 'wwobject-2dff5957-3bd8-46f9-afa3-a5c5bab91931' }),
'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299': getInheritedConfiguration({ ...require('@/components/elements/element-af811adf-94d9-49dd-ab22-e2f29ae30299/ww-config.js').default, name: 'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299' }),
'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398': getInheritedConfiguration({ ...require('@/components/elements/element-6ba133b6-a444-414f-93a5-25cd237dd398/ww-config.js').default, name: 'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...require('@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js').default, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' }),
'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d': getInheritedConfiguration({ ...require('@/components/elements/element-985570fc-b3c0-4566-8004-82ab3b30a11d/ww-config.js').default, name: 'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...require('@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js').default, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...require('@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js').default, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...require('@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js').default, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...require('@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js').default, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...require('@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js').default, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5': getInheritedConfiguration({ ...require('@/components/elements/element-9256b033-f4e8-4ab4-adce-dac3a940d7f5/ww-config.js').default, name: 'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...require('@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js').default, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82': getInheritedConfiguration({ ...require('@/components/elements/element-59dca300-db78-42e4-a7a6-0cbf22d3cc82/ww-config.js').default, name: 'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82' }),
'wwobject-e5e2f367-38d3-41fc-a938-7d221dd4691b': getInheritedConfiguration({ ...require('@/components/elements/element-e5e2f367-38d3-41fc-a938-7d221dd4691b/ww-config.js').default, name: 'wwobject-e5e2f367-38d3-41fc-a938-7d221dd4691b' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...require('@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js').default, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' }),
'wwobject-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb': getInheritedConfiguration({ ...require('@/components/elements/element-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb/ww-config.js').default, name: 'wwobject-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb' }),
'wwobject-6145eb60-0af8-4e52-bcc6-dc0f6743654e': getInheritedConfiguration({ ...require('@/components/elements/element-6145eb60-0af8-4e52-bcc6-dc0f6743654e/ww-config.js').default, name: 'wwobject-6145eb60-0af8-4e52-bcc6-dc0f6743654e' }),
'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340': getInheritedConfiguration({ ...require('@/components/elements/element-1b1e2173-9b78-42cc-a8ee-a6167caea340/ww-config.js').default, name: 'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340' }),
'wwobject-60676ae5-99b1-4278-9330-4299cd99c5cf': getInheritedConfiguration({ ...require('@/components/elements/element-60676ae5-99b1-4278-9330-4299cd99c5cf/ww-config.js').default, name: 'wwobject-60676ae5-99b1-4278-9330-4299cd99c5cf' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
