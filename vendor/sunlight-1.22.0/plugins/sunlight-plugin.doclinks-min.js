(function(c,a,e){if(c===e){throw"Include sunlight.js before including plugin files";}var b={php:{"function":function(f){return"http://php.net/"+f;},languageConstruct:function(f){return"http://php.net/"+f;}},ruby:{"function":function(f){return"http://www.ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/function.html#"+f.replace(/!/g,"_bang").replace(/\?/g,"_p");}},python:{"function":function(f){return"http://docs.python.org/py3k/library/functions.html#"+f;}},perl:{"function":function(f){return"http://perldoc.perl.org/functions/"+f+".html";}},lua:{"function":function(f){return"http://www.lua.org/manual/5.1/manual.html#pdf-"+f;}}};function d(f){return function(g){var h=a.createElement("a");h.className=g.options.classPrefix+g.tokens[g.index].name;h.setAttribute("href",f(g.tokens[g.index].value));h.appendChild(g.createTextNode(g.tokens[g.index]));g.addNode(h);};}c.bind("beforeAnalyze",function(f){if(!this.options.enableDocLinks){return;}f.analyzerContext.getAnalyzer=function(){var i=b[this.language.name],h,g;if(!i){return;}h=c.util.clone(f.analyzerContext.language.analyzer);for(g in i){if(!i.hasOwnProperty(g)){continue;}h["handle_"+g]=d(i[g]);}return h;};});c.globalOptions.enableDocLinks=false;}(this["Sunlight"],document));