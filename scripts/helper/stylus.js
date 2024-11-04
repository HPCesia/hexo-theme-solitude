hexo.extend.filter.register('stylus:renderer', function (style) {
    const {config, theme} = this;
    const data = hexo.locals.get('data');

    style.define('$about', data && data.about ? Object.keys(data.about) : false);
    style.define('$link', !!(data && data.links) || !!(data && data.tlink))
    style.define('$equipment', !!(data && data.equipment))
    style.define('$games', !!(data && data.games))

    // highlight
    const {syntax_highlighter: syntaxHighlighter, highlight, prismjs, shiki} = hexo.config
    let {enable: highlightEnable, line_number: highlightLineNumber} = highlight
    let {enable: prismjsEnable, line_number: prismjsLineNumber} = prismjs
    let {enable: shikiEnable, line_number: shikiLineNumber} = shiki

    // for hexo > 7.0
    if (syntaxHighlighter) {
        highlightEnable = syntaxHighlighter === 'highlight.js'
        prismjsEnable = syntaxHighlighter === 'prismjs'
        shikiEnable = syntaxHighlighter === 'shiki'
    }

    style.define('$highlight_enable', highlightEnable)
    style.define('$highlight_line_number', highlightLineNumber)
    style.define('$prismjs_enable', prismjsEnable)
    style.define('$prismjs_line_number', prismjsLineNumber)
    style.define('$shiki_enable', shikiEnable)
    style.define('$shiki_line_number', shikiLineNumber)
    style.define('$language', config.language)
});
