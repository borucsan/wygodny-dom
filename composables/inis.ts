let script: HTMLScriptElement | null = null;
export const useInis360 = (data: Record<string, any> | Record<string, any>[], trigger = "promise", options = { hid: 'inis360' }) => {
    script = useScript({
        src: 'https://c' + 'dn.in' + 'is' + '360' + '.com/inis.js?r=' + Math.random(),
        crossorigin: false,
        referrerpolicy: false,
        tagPosition: 'bodyClose',
        tagDuplicateStrategy: 'replace',
        ...options

    }, {
        trigger: new Promise((resolve) => {
            if (script?.remove) {
                script.remove();
            }
            resolve(null);
        }),
        beforeInit() {
            window.inisConversion = data;

            console.debug(JSON.stringify(data));
        },
        use() { return { inisConversion: window.inisConversion } }
    });
};