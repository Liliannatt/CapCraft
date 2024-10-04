import{_ as f,o,h as c,s as u,F as m,i as T,x as L,f as p,t as h,b as s,y,r as v,e as w,g as b,z as I,p as _,k as C}from"./index.fcc527b7.js";const S={name:"LyricScroll",props:{currentTime:{type:Number,required:!0},lyric:{type:Object,required:!0},tLyric:{type:Object,default(){return null}},lyricActiveClass:String,lyricCenterClass:String,lyricScrollTime:{type:Number,default:400},dragendWaitTime:{type:Number,default:3e3},lyricMargin:{type:String,default:"20px"},lyricLineheight:{type:String,default:"1.5em"},triangleColor:{type:String,default:"orange"},triangleWidth:{type:String,default:"40px"},centerLineColor:{type:String,default:"#ccc"},centerTimeColor:{type:String,default:"orange"}},data:()=>({startClientY:0,startTranslateY:0,isDragging:!1,nowTranslateY:0,timer:null,centerLyricIdx:-1,offsetHeightList:[],wrapper:null,wrapperHeight:0,viewHeight:0}),mounted(){this.wrapper=this.$refs.lyricWrapper},computed:{allLyric(){const e=[];if(this.tLyric!==null)for(const t in this.lyric)e.push([Number(t),this.lyric[t],this.tLyric[t]]);else for(const t in this.lyric)e.push([Number(t),this.lyric[t]]);return e.sort((t,i)=>t[0]-i[0]),e},offsetTopList(){const e=[];let t=0;return this.$refs.lyricLine.forEach(i=>{const r=i.offsetHeight;this.offsetHeightList.push(r),e.push(t),t+=r}),e},activeLyricIdx(){const e=this.allLyric,t=this.currentTime;for(let i=0,r=e.length;i<r;i++)if(e[i][0]<=t&&(e[i+1]&&e[i+1][0]>t||!e[i+1]))return i;return 0},lyricTopPadding(){return this.viewHeight/2-this.firstLyricHeight/2},lyricBottomPadding(){return this.viewHeight/2-this.lastLyricHeight/2},minTranslateY(){return-(this.wrapperHeight-this.viewHeight+this.lyricBottomPadding)}},methods:{unitDivide(e,t){const i=parseFloat(e),r=e.replace(i,"");return`${i/t}${r}`},timeToStr(e){e=Math.round(e);let t=e%60,i=Math.floor(e/60);return t<10&&(t="0"+t),i<10&&(i="0"+i),i+":"+t},setFirstLastLyricHeight(){const e=this.$refs.lyricLine;this.firstLyricHeight=e[0].offsetHeight,this.lastLyricHeight=e[e.length-1].offsetHeight},changeCurrentTime(){this.$emit("change-current-time",this.allLyric[this.centerLyricIdx][0]),this.$nextTick(()=>{this.isDragging=!1})},getTranslateY(e){const t=window.getComputedStyle(e);return(t.transform||t.webkitTransform).split(",")[5].replace(")","")},updateLyricPos(){if(!this.isDragging){const e=this.activeLyricIdx;console.log(e);const t=this.offsetTopList[e]+this.offsetHeightList[e]/2-this.viewHeight/2;this.nowTranslateY=-t}},onTouchStart(e){this.isDragging=!0,clearTimeout(this.timer),this.startClientY=e.touches[0].clientY,this.startTranslateY=Number(this.getTranslateY(this.wrapper)),this.nowTranslateY=this.startTranslateY},onTouchMove(e){e.preventDefault();const t=e.touches[0].clientY,i=this.startTranslateY+t-this.startClientY;i>this.lyricTopPadding?this.nowTranslateY=this.lyricTopPadding:i<this.minTranslateY?this.nowTranslateY=this.minTranslateY:(this.nowTranslateY=i,this.centerLyricIdx=this.findCenterLyricIdx())},onTouchEnd(){this.timer=setTimeout(()=>{this.isDragging=!1,this.centerLyricIdx=-1},this.dragendWaitTime)},findCenterLyricIdx(){const e=this.viewHeight/2,t=this.offsetTopList,i=this.nowTranslateY;for(let r=0,d=t.length;r<d;r++){const n=t[r];if(i+n<e&&t[r+1]&&i+t[r+1]>e||!t[r+1])return r}}},watch:{currentTime(){this.updateLyricPos()},allLyric(e){this.$nextTick(()=>{this.setFirstLastLyricHeight(),this.viewHeight=this.$refs.lyricView.offsetHeight,this.wrapperHeight=this.$refs.lyricWrapper.offsetHeight,this.nowTranslateY=this.lyricTopPadding})}}},k={key:1,class:"center-mark"};function H(e,t,i,r,d,n){return o(),c("div",{class:"lyric-view",ref:"lyricView",onTouchstart:t[1]||(t[1]=(...l)=>n.onTouchStart&&n.onTouchStart(...l)),onTouchmove:t[2]||(t[2]=(...l)=>n.onTouchMove&&n.onTouchMove(...l)),onTouchend:t[3]||(t[3]=(...l)=>n.onTouchEnd&&n.onTouchEnd(...l))},[this.lyric?(o(),c("div",{key:0,class:"lyric-wrapper",ref:"lyricWrapper",style:u({transform:`translate3d(0, ${e.nowTranslateY}px, 0)`,transition:`${e.isDragging?"none":`all ease ${i.lyricScrollTime}ms`}`})},[(o(!0),c(m,null,T(n.allLyric,(l,a)=>(o(),c("div",{ref_for:!0,ref:"lyricLine",key:a,style:u({padding:`${n.unitDivide(i.lyricMargin,2)} 0`}),class:L(a===n.activeLyricIdx?"ts":"")},[p(h(`${a}${e.centerLyricIdx}`)+" "+h(`${a}${n.activeLyricIdx}`)+" ",1),s("p",{style:u({lineHeight:i.lyricLineheight})},h(l[1]),5),l[2]?(o(),c("p",{key:0,style:u({lineHeight:i.lyricLineheight})},h(l[2]),5)):y("",!0)],6))),128))],4)):y("",!0),e.isDragging?(o(),c("div",k,[s("div",{class:"triangle",style:u({borderColor:`transparent transparent transparent ${i.triangleColor}`,borderWidth:`${n.unitDivide(i.triangleWidth,1.732)} 0 ${n.unitDivide(i.triangleWidth,1.732)} ${i.triangleWidth}`}),onClick:t[0]||(t[0]=(...l)=>n.changeCurrentTime&&n.changeCurrentTime(...l))},null,4),s("div",{class:"line",style:u({background:i.centerLineColor})},null,4),s("div",{class:"target-time",style:u({color:i.centerTimeColor})},h(n.allLyric[e.centerLyricIdx]&&n.timeToStr(n.allLyric[e.centerLyricIdx][0])),5)])):y("",!0)],544)}var Y=f(S,[["render",H],["__scopeId","data-v-a777913c"]]);const D=`[by:\u79CB\u950B\u5BA2]
[00:15.460]\u4EC6\u304C\u305A\u3063\u3068\u524D\u304B\u3089\u601D\u3063\u3066\u308B\u4E8B\u3092\u8BDD\u305D\u3046\u304B
[00:22.250]\u53CB\u8FBE\u306B\u623B\u308C\u305F\u3089\u3053\u308C\u4EE5\u4E0A\u306F\u3082\u3046\u671B\u307E\u306A\u3044\u3055
[00:29.020]\u541B\u304C\u305D\u308C\u3067\u3044\u3044\u306A\u3089\u4EC6\u3060\u3063\u3066\u305D\u308C\u3067\u6784\u308F\u306A\u3044\u3055
[00:36.010]\u5618\u3064\u304D\u306E\u4EC6\u304C\u5410\u3044\u305F \u306F\u3093\u305F\u3044\u3053\u3068\u3070\u306E\u7231\u306E\u3046\u305F
[00:47.360]
[00:56.820]\u4ECA\u65E5\u306F\u3053\u3063\u3061\u306E\u5730\u65B9\u306F\u3069\u3057\u3083\u3076\u308A\u306E\u6674\u5929\u3067\u3057\u305F
[01:03.690]\u6628\u65E5\u3082\u305A\u3063\u3068\u6687\u3067\u4E00\u65E5\u6E80\u55AB\u3057\u3066\u307E\u3057\u305F
[01:10.560]\u522B\u306B\u541B\u306E\u3053\u3068\u306A\u3093\u3066\u8003\u3048\u3066\u306A\u3093\u304B\u3044\u306A\u3044\u3055
[01:17.530]\u3044\u3084\u3067\u3082\u3061\u3087\u3063\u3068\u672C\u5F53\u306F\u8003\u3048\u3066\u305F\u304B\u3082\u306A\u3093\u3066
[01:24.510]\u30E1\u30EA\u30FC\u30B4\u30FC\u30E9\u30F3\u30C9\u307F\u305F\u3044\u306B
[01:29.240]\u4EC6\u306E\u5934\u3093\u4E2D\u306F\u3082\u3046\u30B0\u30EB\u30B0\u30EB\u3055
[01:34.760]
[01:35.310]\u3053\u306E\u4E21\u624B\u304B\u3089\u96F6\u308C\u305D\u3046\u306A\u307B\u3069
[01:42.130]\u541B\u306B\u8D33\u3063\u305F\u7231\u306F\u3069\u3053\u306B\u820D\u3066\u3088\u3046
[01:48.990]\u9650\u308A\u306E\u3042\u308B\u6D88\u8017\u54C1\u306A\u3093\u3066\u4EC6\u306F
[02:00.040]\u8981\u3089\u306A\u3044\u3088
[02:03.230]
[02:03.620]\u4EC6\u304C\u305A\u3063\u3068\u524D\u304B\u3089\u601D\u3063\u3066\u308B\u4E8B\u3092\u8BDD\u305D\u3046\u304B
[02:10.240]\u59FF\u306F\u89C1\u3048\u306A\u3044\u306E\u306B\u8A00\u53F6\u3060\u3051\u89C1\u3048\u3061\u3083\u3063\u3066\u308B\u3093\u3060
[02:17.220]\u4EC6\u304C\u77E5\u3089\u306A\u3044\u3053\u3068\u304C\u3042\u308B\u3060\u3051\u3067\u6C17\u304C\u72C2\u3044\u305D\u3046\u3060
[02:24.060]\u3076\u3089\u4E0B\u304C\u3063\u305F\u611F\u60C5\u304C \u7EEE\u4E3D\u306A\u306E\u304B\u6C5A\u3044\u306E\u304B
[02:30.780]
[02:31.370]\u4EC6\u306B\u306F\u307E\u3060\u308F\u304B\u3089\u305A\u820D\u3066\u308B\u5B9B\u3066\u3082\u306A\u3044\u3093\u3060
[02:44.870]\u8A00\u53F6\u306E\u88CF\u306E\u88CF\u304C\u89C1\u3048\u308B\u307E\u3067\u5F85\u3064\u304B\u3089\u3055
[02:51.760]\u5F85\u3064\u304F\u3089\u3044\u306A\u3089\u3044\u3044\u3058\u3083\u306A\u3044\u304B
[02:58.030]
[02:58.530]\u8FDB\u3080\u541B\u3068\u6B62\u307E\u3063\u305F\u4EC6\u306E
[03:05.300]\u7F29\u307E\u3089\u306A\u3044\u9699\u3092\u4F55\u3067\u57CB\u3081\u3088\u3046
[03:12.020]\u307E\u3060\u7D20\u76F4\u306B\u8A00\u53F6\u306B\u51FA\u6765\u306A\u3044\u4EC6\u306F
[03:23.480]\u5929\u6027\u306E\u5F31\u866B\u3055
[03:25.920]
[03:26.320]\u3053\u306E\u4E21\u624B\u304B\u3089\u96F6\u308C\u305D\u3046\u306A\u307B\u3069
[03:33.090]\u541B\u306B\u6E21\u3059\u7231\u3092\u8C01\u306B\u8B72\u308D\u3046
[03:39.760]\u305D\u3093\u306A\u3093\u3069\u3053\u306B\u3082\u5B9B\u3066\u304C\u3042\u308B\u308F\u3051\u306A\u3044\u3060\u308D
[03:51.020]\u307E\u3060\u5F85\u3064\u3088
[03:58.680]
[03:59.930]\u3082\u3046\u3044\u3044\u304B\u3044/
[04:12.620]
`,x={name:"app",components:{LyricScroll:Y},data:()=>({musicSrc:"https://f000.backblazeb2.com/file/j-assets/wispering+-+%E5%A4%A9%E3%83%8E%E5%BC%B1+piano+ver.mp3",originLyric:"test",originTLyric:"",currentTime:0,originalLyrics:"",translatedLyrics:"",supportedLanguages:["en","es","fr","zh-CN","de","sv"],selectedLanguage:""}),computed:{lyric(){return this.lyricToObj(this.originLyric)},tLyric(){return this.lyricToObj(this.originTLyric)}},methods:{timeStrToNum(e){const t=Number(e.slice(0,2)),i=Number(e.slice(3,5)),r=Number(e.slice(6,8));return t*60+i+r/100},lyricToObj(e){const t={};let i,r;return e.split(`
`).forEach((d,n)=>{i=d.slice(d.indexOf("]")+1),i&&(r=this.timeStrToNum(d.slice(1,9)),t[r]=i)}),t},timeupdate(){this.changeCurrentTime(this.$refs.audio.currentTime)},changeCurrentTime(e){this.currentTime=e},handleChangeCurrentTime(e){this.$refs.audio.currentTime=e},async translateLyrics(){console.log("Translate button clicked");try{let e=D.split(`
`);e=e.filter(r=>r!==""&&r!==`
`),console.log(e);const t=[];for(let r=0;r<e.length;r++)t[r]="item"+r;console.log(t);const i=t.join(`
`);console.log(i),this.translatedLyrics=i}catch(e){console.error("Error translating text:",e),this.translatedLyrics="",alert("Error translating lyrics. Please try again later.")}}},mounted(){this.originLyric=`[by:\u79CB\u950B\u5BA2]
[00:15.460]\u4EC6\u304C\u305A\u3063\u3068\u524D\u304B\u3089\u601D\u3063\u3066\u308B\u4E8B\u3092\u8BDD\u305D\u3046\u304B
[00:22.250]\u53CB\u8FBE\u306B\u623B\u308C\u305F\u3089\u3053\u308C\u4EE5\u4E0A\u306F\u3082\u3046\u671B\u307E\u306A\u3044\u3055
[00:29.020]\u541B\u304C\u305D\u308C\u3067\u3044\u3044\u306A\u3089\u4EC6\u3060\u3063\u3066\u305D\u308C\u3067\u6784\u308F\u306A\u3044\u3055
[00:36.010]\u5618\u3064\u304D\u306E\u4EC6\u304C\u5410\u3044\u305F \u306F\u3093\u305F\u3044\u3053\u3068\u3070\u306E\u7231\u306E\u3046\u305F
[00:47.360]
[00:56.820]\u4ECA\u65E5\u306F\u3053\u3063\u3061\u306E\u5730\u65B9\u306F\u3069\u3057\u3083\u3076\u308A\u306E\u6674\u5929\u3067\u3057\u305F
[01:03.690]\u6628\u65E5\u3082\u305A\u3063\u3068\u6687\u3067\u4E00\u65E5\u6E80\u55AB\u3057\u3066\u307E\u3057\u305F
[01:10.560]\u522B\u306B\u541B\u306E\u3053\u3068\u306A\u3093\u3066\u8003\u3048\u3066\u306A\u3093\u304B\u3044\u306A\u3044\u3055
[01:17.530]\u3044\u3084\u3067\u3082\u3061\u3087\u3063\u3068\u672C\u5F53\u306F\u8003\u3048\u3066\u305F\u304B\u3082\u306A\u3093\u3066
[01:24.510]\u30E1\u30EA\u30FC\u30B4\u30FC\u30E9\u30F3\u30C9\u307F\u305F\u3044\u306B
[01:29.240]\u4EC6\u306E\u5934\u3093\u4E2D\u306F\u3082\u3046\u30B0\u30EB\u30B0\u30EB\u3055
[01:34.760]
[01:35.310]\u3053\u306E\u4E21\u624B\u304B\u3089\u96F6\u308C\u305D\u3046\u306A\u307B\u3069
[01:42.130]\u541B\u306B\u8D33\u3063\u305F\u7231\u306F\u3069\u3053\u306B\u820D\u3066\u3088\u3046
[01:48.990]\u9650\u308A\u306E\u3042\u308B\u6D88\u8017\u54C1\u306A\u3093\u3066\u4EC6\u306F
[02:00.040]\u8981\u3089\u306A\u3044\u3088
[02:03.230]
[02:03.620]\u4EC6\u304C\u305A\u3063\u3068\u524D\u304B\u3089\u601D\u3063\u3066\u308B\u4E8B\u3092\u8BDD\u305D\u3046\u304B
[02:10.240]\u59FF\u306F\u89C1\u3048\u306A\u3044\u306E\u306B\u8A00\u53F6\u3060\u3051\u89C1\u3048\u3061\u3083\u3063\u3066\u308B\u3093\u3060
[02:17.220]\u4EC6\u304C\u77E5\u3089\u306A\u3044\u3053\u3068\u304C\u3042\u308B\u3060\u3051\u3067\u6C17\u304C\u72C2\u3044\u305D\u3046\u3060
[02:24.060]\u3076\u3089\u4E0B\u304C\u3063\u305F\u611F\u60C5\u304C \u7EEE\u4E3D\u306A\u306E\u304B\u6C5A\u3044\u306E\u304B
[02:30.780]
[02:31.370]\u4EC6\u306B\u306F\u307E\u3060\u308F\u304B\u3089\u305A\u820D\u3066\u308B\u5B9B\u3066\u3082\u306A\u3044\u3093\u3060
[02:44.870]\u8A00\u53F6\u306E\u88CF\u306E\u88CF\u304C\u89C1\u3048\u308B\u307E\u3067\u5F85\u3064\u304B\u3089\u3055
[02:51.760]\u5F85\u3064\u304F\u3089\u3044\u306A\u3089\u3044\u3044\u3058\u3083\u306A\u3044\u304B
[02:58.030]
[02:58.530]\u8FDB\u3080\u541B\u3068\u6B62\u307E\u3063\u305F\u4EC6\u306E
[03:05.300]\u7F29\u307E\u3089\u306A\u3044\u9699\u3092\u4F55\u3067\u57CB\u3081\u3088\u3046
[03:12.020]\u307E\u3060\u7D20\u76F4\u306B\u8A00\u53F6\u306B\u51FA\u6765\u306A\u3044\u4EC6\u306F
[03:23.480]\u5929\u6027\u306E\u5F31\u866B\u3055
[03:25.920]
[03:26.320]\u3053\u306E\u4E21\u624B\u304B\u3089\u96F6\u308C\u305D\u3046\u306A\u307B\u3069
[03:33.090]\u541B\u306B\u6E21\u3059\u7231\u3092\u8C01\u306B\u8B72\u308D\u3046
[03:39.760]\u305D\u3093\u306A\u3093\u3069\u3053\u306B\u3082\u5B9B\u3066\u304C\u3042\u308B\u308F\u3051\u306A\u3044\u3060\u308D
[03:51.020]\u307E\u3060\u5F85\u3064\u3088
[03:58.680]
[03:59.930]\u3082\u3046\u3044\u3044\u304B\u3044/
[04:12.620]
`,this.originTLyric="[by:\u79CB\u950B\u5BA2]\\n[00:15.460]Shall I speak out what I've been thinking for a long time?\\n[00:22.250]I don't wish for anything more than to return to being friends.\\n[00:29.020]If that's okay with you, I won't mind either.\\n[00:36.010]The song of love, spoken by a liar.\\n[00:47.360]\\n[00:56.820]Today, it poured down rain in this area.\\n[01:03.690]Yesterday, I was bored all day and fully enjoyed it.\\n[01:10.560]I'm not thinking about you at all.\\n[01:17.530]Well, maybe I was thinking about you a little.\\n[01:24.510]Like a merry-go-round,\\n[01:29.240]my head is spinning around and around.\\n[01:34.760]\\n[01:35.310]Where should I discard the love I've lent you,\\n[01:42.130]overflowing from these hands?\\n[01:48.990]I don't need things like limited-time consumables.\\n[02:00.040]\\n[02:03.230]Shall I speak out what I've been thinking for a long time?\\n[02:10.240]Though your figure is unseen, only your words are visible.\\n[02:17.220]Just the thought of things I don't know makes me feel like I'm going crazy.\\n[02:24.060]Are these dangling emotions beautiful or dirty?\\n[02:30.780]\\n[02:31.370]I still don't understand, and there's no intention to discard.\\n[02:44.870]I'll wait until I can see the hidden side of words.\\n[02:51.760]It's okay to wait, isn't it?\\n[02:58.030]\\n[02:58.530]How should I fill the unbridgeable gap\\n[03:05.300]between you, who moves and I, who stopped?\\n[03:12.020]I'm still a coward who can't honestly put it into words.\\n[03:23.480]That's my innate weakness.\\n[03:25.920]\\n[03:26.320]Where should I pass on the love I want to give to"}},g=e=>(_("data-v-6b8af75b"),e=e(),C(),e),N={id:"app"},W={class:"audio-wrapper"},E=["src"],M={class:"lyric"},j={class:"translation-section"},P={class:"translation-button"},V=g(()=>s("label",{for:"targetLanguage"},"Select language:",-1)),B=["value"],O={key:0,class:"translated-text"},z=g(()=>s("h3",null,"Translated Lyrics",-1)),A={key:0},F=g(()=>s("h3",null,"Original Lyrics",-1));function q(e,t,i,r,d,n){const l=v("LyricScroll");return o(),c("div",N,[s("div",W,[s("audio",{controls:"",class:"music-player",ref:"audio",src:e.musicSrc,loop:!0,onTimeupdate:t[0]||(t[0]=(...a)=>n.timeupdate&&n.timeupdate(...a))},null,40,E)]),s("div",M,[w(l,{lyric:n.lyric,"t-lyric":n.tLyric,"lyric-active-class":"lyric-active","lyric-center-class":"lyric-center","triangle-width":"14px","triangle-color":"#fff","center-line-color":"#fff","center-time-color":"#fff","current-time":e.currentTime,onChangeCurrentTime:n.handleChangeCurrentTime},null,8,["lyric","t-lyric","current-time","onChangeCurrentTime"])]),s("div",j,[s("div",P,[V,b(s("select",{id:"targetLanguage","onUpdate:modelValue":t[1]||(t[1]=a=>e.selectedLanguage=a)},[(o(!0),c(m,null,T(e.supportedLanguages,a=>(o(),c("option",{key:a,value:a},h(a),9,B))),128))],512),[[I,e.selectedLanguage]]),s("button",{onClick:t[2]||(t[2]=(...a)=>n.translateLyrics&&n.translateLyrics(...a))},"Translate")]),e.translatedLyrics?(o(),c("div",O,[z,s("pre",null,h(e.translatedLyrics),1)])):y("",!0)]),e.originalLyrics?(o(),c("div",A,[F,s("pre",null,h(e.originalLyrics),1)])):y("",!0)])}var U=f(x,[["render",q],["__scopeId","data-v-6b8af75b"]]);export{U as default};
