import{_ as c}from"./Tip.4b5d44eb.js";import{h as p,o as i,c as r,b as l,a as e,w as t,i as n,j as s}from"./app.9155d08b.js";var d="/assets/search_wsl.0fd3a175.png",g="/assets/wsl.d9f30b3d.png",u="/assets/start_wsl.e922dbbb.png",_="/assets/first_time_wsl.4f06c827.png",h="/assets/setup_password.abac6446.png",m="/assets/vscode.db691fd1.png",b="/assets/vscode_setup.574eac35.png",k="/assets/vscode_final.179c7e81.png",f="/assets/install-agbcc.7b9bcc77.png",v="/assets/buildok.698540be.png";const w={class:"prose prose-sm m-auto text-left"},S=n('<h1>\u5165\u95E8\u7BC7</h1><p>\u6211\u4E2A\u4EBA\u662F\u7528window10+wsl2+VSCode+mGBA\u7684\u7EC4\u5408\uFF0C\u84DD\u672C\u7528\u7684\u662F\u7EFF\u5B9D\u77F3\uFF0C\u5728\u8FD9\u4E2A\u535A\u5BA2\u91CC\u5927\u90E8\u5206\u4E5F\u5C06\u4F1A\u662F\u8FD9\u5957\u4F5C\u4E1A\u505A\u6559\u7A0B\u53CA\u622A\u56FE\u3002\u4F60\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/pret/pokeemerald/blob/master/INSTALL.md">pokeemerald\u5B98\u65B9\u5B89\u88C5\u6587\u6863</a>\u4E86\u89E3\u5176\u4ED6\u5B89\u88C5\u65B9\u5F0F\u3002</p><h2>\u5B89\u88C5\u53CA\u914D\u7F6EWSL</h2><ol><li><p>\u53EF\u4EE5\u5728\u5FAE\u8F6F\u7684\u5546\u5E97\u91CC\u8FB9\u641C\u7D22Ubuntu\uFF0C\u9009\u4E00\u4E2A\u7248\u672C\u6765\u5B89\u88C5\u3002 <img src="'+d+'" alt="\u5728\u5546\u5E97\u67E5\u8BE2UBUNTU"></p></li><li><p>\u5B89\u88C5\u597D\u540E\u53EF\u4EE5\u70B9\u53F3\u4E0A\u89D2\u7684\u5F00\u542F\u6253\u5F00wsl\u3002 <img src="'+g+'" alt="\u6211\u5B89\u88C5\u7684WSL"> \u4EE5\u540E\u4E5F\u53EF\u4EE5\u5728Start\u6253\u5F00 <img src="'+u+'" alt="start\u4E0A\u7684wsl"></p></li><li><p>\u9996\u6B21\u5F00\u542F\u9700\u8981\u8BBE\u7F6E\u7528\u6237\u53CA\u5BC6\u7801 <img src="'+_+'" alt="wsl\u9996\u6B21\u6253\u5F00"> \u4F9D\u6B21\u8F93\u5165\u7528\u6237\u540D\uFF0C\u5BC6\u7801\uFF0C\u786E\u8BA4\u5BC6\u7801\u5C31\u53EF\u4EE5\u4E86 <img src="'+h+`" alt="wsl\u914D\u7F6E"></p></li><li><p>\u5728\u7EC8\u7AEF\u8F93\u5165\u4EE5\u4E0B\u6307\u4EE4\u6765\u68C0\u6D4B\u53CA\u5B89\u88C5\u66F4\u65B0</p></li></ol><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade
</code></pre>`,5),y=s("WSL 2\u6BD4\u8D77WSL 1 \u6709\u7740\u66F4\u597D\u7684IO\u6027\u80FD\uFF0C\u4F46\u5728\u8FD9\u91CC\u53EF\u80FD\u5BF9\u4E00\u4E9B\u5DE5\u5177\u7684\u517C\u5BB9\u4E0D\u662F\u5F88\u53CB\u597D\uFF0C\u5982porymap<4.5.0\u3002"),L=n('<h2>\u5B89\u88C5VSCode(\u53EF\u8DF3\u8FC7)</h2><ol><li><p>\u4E0B\u8F7D\u540E\u5168\u90E8\u9ED8\u8BA4\u5B89\u88C5\u5C31\u884C\u4E86\uFF0C\u7136\u540E\u76F4\u63A5\u6253\u5F00VSCode\u3002 <img src="'+m+'" alt="vscode"></p></li><li><p>\u952E\u76D8<kbd>Ctrl</kbd>+<kbd>`</kbd>\u5FEB\u6377\u6253\u5F00\u7EC8\u7AEF</p></li><li><p>\u7136\u540E\u53F3\u4E0A\u89D2\u9009\u62E9\u9ED8\u8BA4\u7EC8\u7AEF\u4E3AWSL <img src="'+b+'" alt="vscode\u914D\u7F6E"></p></li><li><p>\u4EE5\u540E\u5C31\u53EF\u4EE5\u5728VSCode\u9ED8\u8BA4\u4F7F\u7528WSL\u7EC8\u7AEF <img src="'+k+`" alt="vscode\u6700\u7EC8"></p></li></ol><h2>\u5B89\u88C5\u4F9D\u8D56\u548Cgit</h2><ol><li>\u5728wsl\u7EC8\u7AEF\u8F93\u5165\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5\u7F16\u8BD1\u4F9D\u8D56</li></ol><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential binutils-arm-none-eabi <span class="token function">git</span> libpng-dev
</code></pre><ol start="2"><li>\u5168\u56DE\u7B54yes\u5B89\u88C5\u5C31\u884C</li></ol><h2>\u514B\u9686\u53CD\u7F16\u8BD1\u6587\u4EF6</h2><ol><li>\u514B\u9686pokeemerald\u4ED3\u5E93</li></ol><pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone https://github.com/pret/pokeemerald my-poke-hack
</code></pre>`,9),V=s("\u8FD9\u91CC\u6211\u7684\u4ED3\u5E93\u540D\u5B57\u662Fmy-poke-hack\uFF0C\u4F60\u53EF\u4EE5\u81EA\u7531\u9009\u62E9"),C=n(`<h2>\u514B\u9686\u53CA\u7F16\u8BD1agbcc</h2><ol><li>\u514B\u9686agbcc\u4ED3\u5E93</li></ol><pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone https://github.com/pret/agbcc
</code></pre><ol start="2"><li>\u8FDB\u5165agbcc\u6587\u4EF6\u5939\u5E76\u7F16\u8BD1,\u8FD9\u91CC\u4F1A\u82B1\u51E0\u5206\u949F</li></ol><pre class="language-bash"><code class="language-bash"><span class="token builtin class-name">cd</span> agbcc
./build.sh
</code></pre><h2>\u5B89\u88C5agbcc\u8FDB\u53CD\u7F16\u8BD1\u6587\u4EF6\u5939</h2><p>\u5728agbcc\u6587\u4EF6\u5939\u91CC\u4F7F\u7528</p><pre class="language-bash"><code class="language-bash">./install.sh <span class="token punctuation">..</span>/my-poke-hack
</code></pre><p><img src="`+f+'" alt="install agbcc"></p>',9),N=s(" \u8FD9\u4E2Aagbcc\u53EA\u9700\u8981\u7F16\u8BD1\u4E00\u6B21\uFF0C\u4EE5\u540E\u76F4\u63A5\u5B89\u88C5\u53BB\u9700\u8981\u7684\u4ED3\u5E93\u5C31\u884C\u4E86\u3002 "),W=n(`<h2>\u7F16\u8BD1ROM</h2><ol><li>\u8FDB\u5165\u53CD\u7F16\u8BD1\u6587\u4EF6\u5939</li></ol><pre class="language-bash"><code class="language-bash"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/my-poke-hack
</code></pre><ol start="2"><li>\u7F16\u8BD1\u6D4B\u8BD5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u82B1\u51E0\u5206\u949F\u3002</li></ol><pre class="language-bash"><code class="language-bash"><span class="token function">make</span> compare
</code></pre>`,5),x=l("img",{src:v,alt:"build ok"},null,-1),B=s(" \u770B\u89C1ok\u5C31\u4EE3\u8868\u7F16\u8BD1\u6210\u529F "),T=s(" \u8FD9\u91CC\u7684compare\u53C2\u6570\u4F1A\u6307\u793AMakefile\u5BF9\u6BD4\u7F16\u8BD1\u6210\u54C1\u548C\u539F\u4F5C\uFF0C\u65E0\u4EFB\u4F55\u6539\u52A8\u7684\u60C5\u51B5\u4E0B\u6B63\u5E38\u90FD\u4F1A\u51FA\u73B0OK\u3002 "),E={title:"\u5165\u95E8\u7BC7",meta:[{property:"og:title",content:"\u5165\u95E8\u7BC7"}]},G={setup(U,{expose:o}){return p({title:"\u5165\u95E8\u7BC7",meta:[{property:"og:title",content:"\u5165\u95E8\u7BC7"}]}),o({frontmatter:{title:"\u5165\u95E8\u7BC7",meta:[{property:"og:title",content:"\u5165\u95E8\u7BC7"}]}}),(A,I)=>{const a=c;return i(),r("div",w,[S,l("p",null,[e(a,null,{default:t(()=>[y]),_:1})]),L,l("p",null,[e(a,null,{default:t(()=>[V]),_:1})]),C,e(a,null,{default:t(()=>[N]),_:1}),W,l("p",null,[x,B,e(a,null,{default:t(()=>[T]),_:1})])])}}};export{G as default,E as frontmatter};
