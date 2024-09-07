/*!
 * PSPDFKit for Web 2024.5.1 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2024 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(globalThis.webpackChunkPSPDFKit=globalThis.webpackChunkPSPDFKit||[]).push([[4572],{29332:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>B});var s=a(67294),o=a(94184),n=a.n(o),r=a(35369),l=a(24021),i=a(67366),c=a(15359),d=a(20144),m=a(46455),u=a(10983),g=a(70982),p=a(21853),f=a(45249),P=a(11765),h=a(17766),y=a(21655),b=a(53261),v=a(29911),I=a(67057),w=a(60101),k=a(22122),E=a(38852);const N=(0,s.memo)((e=>{let{items:t,builtInItems:o,moveDialog:r,CSS_HACK:{components:{ToolbarButtonComponent:l},styles:i},getCustomerCallbackForItem:c}=e;return t.map(((e,t)=>{const d=o.find((t=>t.type===e.type));if("spacer"===e.type)return s.createElement("div",{style:{flex:1},className:e.className,key:`spacer-${t}`});if("move"===e.type&&d)return s.createElement("div",{key:d.type,className:i.moveButtonContainer},s.createElement(l,(0,k.Z)({},d,{icon:a(6058),className:n()(d.className,e.className),onPress:e=>{d&&d.onPress&&d.onPress(e)}})),r);if(d){const o=(0,E.zW)(d.type);return s.createElement(l,(0,k.Z)({},d,{key:d.type||t,icon:a(33720)(`./${o}.svg`),onPress:e=>{d&&d.onPress&&d.onPress(e)},className:n()(d.className,e.className)}))}if("custom"===e.type&&e.node){const{type:a,...o}=e;return s.createElement(w.Z,(0,k.Z)({},o,{onPress:c?.(e),key:e.id||t}))}return s.createElement(l,(0,k.Z)({},e,{key:d&&d.type||t,onPress:c?.(e)}))}))})),C=(0,s.memo)((e=>{let{items:t,builtInItems:o,CSS_HACK:{components:{ToolbarDropdownGroupComponent:r,ToolbarButtonComponent:l},styles:i},frameWindow:c,getCustomerCallbackForItem:d}=e;const m=t.map((e=>{let{item:t,index:a}=e;const s=o.find((e=>e.type===t.type));return s?{index:a,item:{...s,className:n()(s.className,t.className),onPress:e=>{s.onPress&&s.onPress(e)}}}:{item:{...t,onPress:d?.(t)},index:a}}));return m.length>0&&s.createElement(s.Fragment,null,s.createElement("div",{style:{flex:1},key:"spacer-responsive"}),s.createElement(r,{icon:{type:"more",size:{width:20,height:20}},items:m,discreteDropdown:!0,caretDirection:"down",role:"menu",ItemComponent:e=>{let{item:t,isSelectedItem:r,state:c,itemComponentProps:d}=e;const m=!r&&o.find((e=>e.type===t.item.type));if(r)return null;const u=m&&m.type?(0,E.zW)(m.type):"";return t.item.node?s.createElement(w.Z,(0,k.Z)({},t.item,{onPress:t.item.onPress?e=>t.item.onPress(e,t.id):void 0,key:t.item.id||t.index})):s.createElement(l,(0,k.Z)({},t.item,{role:"menuitem",className:n()(t.item.className,i.toolbar.dropdownButton,"Focused"===c&&i.toolbar["dropdownButton"+c]),icon:m?a(33720)(`./${u}.svg`):t.item.icon,itemComponentProps:d}))},onSelect:(e,t)=>{const{onPress:a,disabled:s}=t.item;s||a&&a(e,d?.(t.item),t.item.id)},noInitialSelection:!0,frameWindow:c}))}));var x,D;const S="disable-zoom-in",M="disable-zoom-out",z=new f.$u({width:u.zA,height:u._2});function A(e,t,a){return Math.min(a,Math.max(t,e))}const O=e=>{const{styles:t,formatMessage:o,movePreview:r}=e;return s.createElement("div",{style:{width:e.width,height:e.height},className:n()(t.importedDocument,{[t.importedDocumentMovePreview]:r})},s.createElement("div",{className:t.importedDocumentIconCircle},s.createElement(b.Z,{src:a(48982)})),s.createElement("span",{className:t.importedDocumentInfo},o(L.documentMergedHere)))},F=(e,t,a)=>{const s=t.flatten();let o=e.map((e=>({type:"page",page:e,rotation:0,label:e.pageLabel})));const n=e=>{const t=e.dupeOf||e.label;let a=0;for(const e of o)"dupeOf"in e&&null!=e.dupeOf&&e.dupeOf===t&&null!=e.dupeNumber&&e.dupeNumber>a&&(a=e.dupeNumber);return a+1};let r=0;for(const e of s)switch(e.type){case"addPage":{let t;null!=e.afterPageIndex?t=e.afterPageIndex+1:((0,c.kG)(null!=e.beforePageIndex),t=e.beforePageIndex),++r,o=o.insert(t,{type:"newPage",label:`${a(L.newPage)} ${r}`,rotation:0,size:new f.$u({width:e.pageWidth,height:e.pageHeight})});break}case"removePages":{const t=e.pageIndexes.map((e=>o.get(e)));for(const e of t){(0,c.kG)(null!=e);const t=o.indexOf(e);o=o.delete(t)}break}case"rotatePages":for(const t of e.pageIndexes){const a=o.get(t);let s,n;(0,c.kG)(null!=a),(0,c.kG)("page"===a.type||"newPage"===a.type);const r=a.rotation;if(n=90===e.rotateBy?270===r?0:r+e.rotateBy:90===r?0:180===r?90:270===r?180:r+e.rotateBy,(0,c.kG)(0===n||90===n||180===n||270===n),"page"===a.type)s={...a,rotation:n};else{if("newPage"!==a.type)throw new c.p2("Rotation is not allowed on imported documents");s={...a,rotation:n}}o=o.set(t,s)}break;case"duplicatePages":{const t=e.pageIndexes.map((e=>o.get(e)));for(const e of t){(0,c.kG)(null!=e),(0,c.kG)("page"===e.type);const t=n(e),a=e.dupeOf||e.label,s=o.indexOf(e);o=o.insert(s+1,Object.assign({},e,{label:`${a} (${t})`,dupeOf:a,dupeNumber:t}))}break}case"movePages":{const t=e.pageIndexes;if(1===t.length){const a=t[0];let s;null!=e.beforePageIndex?s=e.beforePageIndex:((0,c.kG)(null!=e.afterPageIndex),s=e.afterPageIndex+1);const n=o.get(a);(0,c.kG)(null!=n);const r=o.get(s),l=o.size;o=o.delete(a),s===l?o=o.push(n):0===s?o=o.unshift(n):((0,c.kG)(null!=r),o=o.insert(o.indexOf(r),n))}else{const a=t.slice().sort();if(null!=e.beforePageIndex){(0,c.kG)(0===e.beforePageIndex);const t=a.map((e=>o.get(e))).reverse();for(const e of t)(0,c.kG)(null!=e),o=o.delete(o.indexOf(e)),o=o.unshift(e)}else{(0,c.kG)(null!=e.afterPageIndex);const t=o.get(e.afterPageIndex);(0,c.kG)(null!=t);const s=a.map((e=>o.get(e))).reverse();for(const e of s)(0,c.kG)(null!=e),o=o.delete(o.indexOf(e)),o=o.insert(o.indexOf(t)+1,e)}}break}case"importDocument":{let t,a;"beforePageIndex"in e&&null!=e.beforePageIndex?t=e.beforePageIndex:((0,c.kG)("afterPageIndex"in e&&null!=e.afterPageIndex),t=e.afterPageIndex+1),"string"!=typeof e.document?((0,c.kG)("string"==typeof e.document.name),a=e.document.name):a=e.document,o=o.insert(t,{type:"importedDocument",label:a});break}}return o},K=e=>{const{pages:t,style:a,styles:o,previewCount:r}=e;return s.createElement("div",{className:o.movePreview},s.createElement("div",{className:n()(o.movePreviewPages,{[o.movePreviewPagesLoose]:"loose"===a})},t),s.createElement("div",{className:o.movePreviewCount},r||t.length))},B=e=>{const{onCancel:t,onDialog:o,usesShadowDOM:k}=e,{pages:E,backend:B,frameWindow:R,footerItems:T,toolbarItems:G}=(0,i.v9)((e=>{let{pages:t,backend:a,frameWindow:s,documentEditorFooterItems:o,documentEditorToolbarItems:n}=e;return{pages:t,backend:a,frameWindow:s,footerItems:o.toJS(),toolbarItems:n.toJS()}}),i.wU),Z=(0,i.I0)(),{formatMessage:H}=(0,l.YB)(),{styles:W}=e.CSS_HACK,[$,_]=(0,s.useState)((0,r.aV)()),[V,U]=(0,s.useState)(0),Y=$.slice(0,$.size-V),j=F(E,Y,H),[J,X]=(0,s.useState)((0,r.l4)()),[q,Q]=(0,s.useState)(!1),[ee,te]=(0,s.useState)(!1),ae=(0,s.useRef)(null),se=(0,s.useRef)(null),[oe,ne]=(0,s.useState)(!1),[re,le]=(0,s.useState)(""),{zoomStep:ie}=(0,i.v9)((e=>e.viewportState)),{thumbnailDefaultSize:ce,thumbnailMinSize:de,thumbnailMaxSize:me}=(0,i.v9)((e=>e.documentEditorConfig)),[ue,ge]=(0,s.useState)((()=>A(ce,de,me))),[pe,fe]=(0,s.useState)(""),Pe=(0,s.useCallback)((()=>{const e=se.current;null!=e&&(oe&&e.ownerDocument.activeElement!==e?e.focus():oe||e.ownerDocument.activeElement!==e||e.blur())}),[oe]),he=(0,s.useCallback)((e=>{ne(e),Pe(),o(e)}),[o,Pe]);(0,s.useEffect)((()=>{Pe()}),[Pe]);const ye=(0,s.useCallback)((e=>{_(Y.push(e)),U(0)}),[Y]),be=(0,s.useRef)(!0);(0,s.useLayoutEffect)((()=>()=>{be.current&&(be.current=!1)}),[]);const ve=(0,s.useCallback)((()=>{const e=E.get(0),t=e?e.pageSize:z,a={type:"addPage",backgroundColor:f.Il.WHITE,pageWidth:t.width,pageHeight:t.height,rotateBy:0,...1===J.size?{afterPageIndex:J.first()}:{beforePageIndex:0}};ye(a),X(J.clear())}),[E,J,ye]),Ie=(0,s.useCallback)((()=>{ye({type:"removePages",pageIndexes:J.toArray()}),X(J.clear())}),[ye,J]),we=(0,s.useCallback)((()=>{ye({type:"duplicatePages",pageIndexes:J.toArray()}),X(J.clear())}),[ye,J]),ke=(0,s.useCallback)((()=>{ye({type:"rotatePages",pageIndexes:J.toArray(),rotateBy:270})}),[ye,J]),Ee=(0,s.useCallback)((()=>{ye({type:"rotatePages",pageIndexes:J.toArray(),rotateBy:90})}),[ye,J]),Ne=(0,s.useCallback)((()=>{he(!oe)}),[oe,he]),Ce=(0,s.useCallback)((e=>{const t=e.target.value;let a=t;const s=parseInt(t,10);isNaN(s)||(a=Math.min(Math.max(s,0),j.size).toString()),le(a)}),[j.size]),xe=parseInt(re,10),De=(0,s.useCallback)((e=>{let t;return 1===e.size||null==e.sort().find((e=>{let a=!1;return null!=t&&(a=e!==t+1),t=e,a}))}),[]),Se=(0,s.useCallback)(((e,t)=>{const a=null!=t?t:J,s=De(a);return!(a.includes(e-1)||0===e&&s&&a.includes(0)||s&&a.sort().first()===e)}),[J,De]),Me=!isNaN(xe)&&Se(xe),ze=(0,s.useCallback)(((e,t)=>{const a=null!=t?t:J,s=e-1;ye({type:"movePages",pageIndexes:a.toArray(),...0===e?{beforePageIndex:0}:{afterPageIndex:s}});let o=(0,r.l4)(),n=0;0!==e&&(n=s+1,a.forEach((e=>{e<s&&--n})));let l=n;a.forEach((()=>{o=o.add(l),++l})),X(o)}),[J,ye,X]),Ae=(0,s.useCallback)((e=>{e.preventDefault(),Me&&(ze(xe),he(!1))}),[Me,xe,he,ze]),Oe=(0,s.useCallback)((e=>{const t=e.target;if(!oe||t.classList.contains(W.moveToolbarButton))return;const a=ae.current;(0,c.kG)(null!=a),a.contains(t)||he(!1)}),[oe,he,W.moveToolbarButton]),Fe=(0,s.useCallback)((()=>{const e=J.sort().toList().map((e=>({type:"movePages",pageIndexes:[e],beforePageIndex:e-1})));ye(e),X((0,r.l4)(J.toArray().map((e=>e-1))))}),[ye,J]),Ke=(0,s.useCallback)((()=>{const e=J.sort().toList().map((e=>({type:"movePages",pageIndexes:[e],afterPageIndex:e+1})));ye(e),X((0,r.l4)(J.toArray().map((e=>e+1))))}),[ye,J]),Be=(0,s.useCallback)((()=>{X(J.clear()),U(V+1)}),[J,V]),Le=(0,s.useCallback)((()=>{X(J.clear()),U(V-1)}),[J,V]),Re=(0,s.useCallback)((async()=>{const e={};1===J.size?e.afterPageIndex=J.first():e.beforePageIndex=0;const t=document.createElement("input");t.type="file",t.accept="application/pdf",t.setAttribute("multiple",""),t.onclick=e=>{(0,c.kG)(e.target instanceof HTMLInputElement),e.target.value=""},t.onchange=t=>{if((0,c.kG)(t.target instanceof HTMLInputElement),0===t.target.files?.length)return;let a=Y;for(const s of t.target.files){if("string"!=typeof s.name||0===s.name.length)return;if("application/pdf"!==s.type)return void(0,c.wp)("The uploaded file must be a PDF.");s.arrayBuffer().then((t=>{a=a.push({type:"importDocument",treatImportedDocumentAsOnePage:!0,document:new File([t],s.name,{type:s.type,lastModified:s.lastModified}),...e}),_(a),U(0),X(J.clear())})).catch((e=>{throw new c.p2(`Could not read the imported file: ${e.message}`)}))}},t.click()}),[J,Y]),Te=(0,s.useCallback)((async()=>{Q(!0);try{const e=await B.exportPDFWithOperations(Y.flatten().toArray().map(P.kg).concat([{type:"keepPages",pageIndexes:J.toArray()}]));(0,p.cR)(e,R)}catch(e){throw e}finally{be.current&&Q(!1)}}),[B,Y,R,J]),Ge=(0,s.useCallback)((()=>{X(j.keySeq().toSet())}),[j,X]),Ze=(0,s.useCallback)((()=>{X(J.clear())}),[J,X]),He=(0,s.useCallback)((e=>{J.has(e)?X(J.delete(e)):X(J.add(e))}),[J,X]),We=(0,s.useCallback)((()=>{t()}),[t]),$e=(0,s.useCallback)((()=>{Q(!0),Z((0,g.b_)(Y.flatten().toArray(),(()=>{be.current&&Q(!1)}),(e=>{throw be.current&&Q(!1),e})))}),[Z,Y]),_e=(0,s.useCallback)((async()=>{Q(!0);try{const e=await B.exportPDFWithOperations(Y.flatten().toArray().map(P.kg));(0,p.cR)(e,R)}catch(e){throw e}finally{be.current&&Q(!1)}}),[B,Y,R]),Ve=(e,t,a,o)=>{const n=j.get(e);let r;switch((0,c.kG)(null!=n),n.type){case"page":r=s.createElement(m.Z,{key:`page-${n.label}`,page:n.page,size:t,maxSize:a,rotation:n.rotation});break;case"newPage":{const{rotatedWidth:e,rotatedHeight:o}=(0,m.X)(n.size,n.rotation,t,a);r=s.createElement("div",{key:`newPage-${n.label}`,className:W.newPage,style:{width:e,height:o}});break}case"importedDocument":{const{containerWidth:e,containerHeight:l}=(0,m.X)(z,0,t,a);r=s.createElement(O,{width:e,height:l,movePreview:o,key:`importedDoc-${n.label}`,styles:W,formatMessage:H});break}default:r=s.createElement(s.Fragment,null),(0,c.Rz)(n.type)}return{item:r,label:n.label,props:"page"===n.type?{"data-original-page-index":n.page.pageIndex}:{}}},Ue=J.size>0&&J.size!==j.size&&!q,Ye=J.size>0&&void 0===J.find((e=>{const t=j.get(e);return(0,c.kG)(null!=t),"page"!==t.type&&"newPage"!==t.type})),je=J.size>0&&void 0===J.find((e=>{const t=j.get(e);return(0,c.kG)(null!=t),"page"!==t.type})),Je=!J.isEmpty()&&J.size!==j.size&&!q,Xe=!J.isEmpty()&&!J.includes(0),qe=!J.isEmpty()&&!J.includes(j.size-1),Qe=V<$.size,et=V>0,tt=J.size<j.size&&!q,at=!J.isEmpty()&&!q,st=(0,s.useRef)(null),ot=(0,s.useRef)(!1),[nt,rt]=(0,s.useState)(new f.$u),[lt,it]=(0,s.useState)(Number.POSITIVE_INFINITY),ct=(0,s.useCallback)((e=>{rt((t=>(t.width!==e.width&&it(Number.POSITIVE_INFINITY),new f.$u({width:e.width,height:e.height}))))}),[rt,it]);(0,s.useLayoutEffect)((()=>{const e=yt.current;if(!e||0===nt.width)return;const t=e.children;if(t.length===lt)return;const a=e.ownerDocument.defaultView.getComputedStyle(e);let s=44+(parseInt(a.getPropertyValue("padding-left"))||0)+(parseInt(a.getPropertyValue("padding-right"))||0);const o=[].findIndex.call(t,((e,t)=>"spacer"!==G[t].type&&(s+=e.clientWidth,s>nt.width)));it(-1===o?Number.POSITIVE_INFINITY:o);e.ownerDocument.defaultView.innerWidth>=u.Fg?te(!0):te(!1)}),[nt,lt,it,G]);const dt=(0,s.useCallback)((()=>{pe!==S&&ge((e=>{const t=e*ie;return t<me?(fe(""),t):(fe(S),me)}))}),[pe,me,ie]),mt=(0,s.useCallback)((()=>{pe!==M&&ge((e=>{const t=e/ie;return t<de?(fe(M),de):(fe(""),t)}))}),[pe,de,ie]),ut=(0,s.useCallback)((()=>{ge(A(ce,de,me)),fe("")}),[ce,me,de]);(0,s.useLayoutEffect)((()=>{const e=st.current;if(null==e)return;ot.current||(e.focus(),ot.current=!0);const t=e=>{if(null!=document.activeElement&&"INPUT"===document.activeElement.tagName)return;if(q)return;const t=e.key.toLowerCase(),a=e.metaKey||e.ctrlKey,s=a&&!e.shiftKey&&!e.altKey,o=e.altKey&&!a&&!e.shiftKey,n=!a&&!e.shiftKey&&!e.altKey;if(e.altKey&&e.shiftKey&&!a&&"arrowleft"===t&&Ye)ke();else if(e.altKey&&e.shiftKey&&!a&&"arrowright"===t&&Ye)Ee();else if(o&&"arrowleft"===t&&Xe)Fe();else if(o&&"arrowright"===t&&qe)Ke();else if(a&&e.shiftKey&&!e.altKey&&"z"===t&&et)Le();else if(s&&"z"===t&&Qe)Be();else if(s&&"a"===t&&tt)Ge();else if(s&&"d"===t&&at)Ze();else if(!s||"="!==t&&"+"!==t)if(s&&"-"===t)mt(),e.stopPropagation();else if(s&&"0"===t)ut(),e.stopPropagation();else if(n&&"n"===t)ve();else if(n&&"d"===t&&Ue)Ie();else if(n&&"c"===t&&je)we();else if(n&&"l"===t&&Ye)ke();else if(n&&"r"===t&&Ye)Ee();else if(n&&"m"===t&&Je)he(!0);else{if(!n||"i"!==t)return;Re()}else dt(),e.stopPropagation();e.preventDefault()};return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t)}}),[je,Je,Xe,qe,et,Ue,Ye,tt,at,Qe,ve,we,Re,Fe,Ke,Le,Ie,ke,Ee,Ge,Ze,Be,dt,mt,ut,q,he]);let gt={left:0,top:0,x:0,y:0};if(st.current){const e=st.current.getRootNode();e instanceof ShadowRoot&&(gt=e.host.getBoundingClientRect())}const pt=W.toolbar.toolbarButton,ft=[{type:"add",onPress:ve,className:pt,disabled:q,children:H(L.newPage)},{type:"remove",onPress:Ie,className:pt,disabled:!Ue,children:H(L.removePage)},{type:"duplicate",onPress:we,className:pt,children:H(L.duplicatePage),disabled:!je||q},{type:"rotate-left",onPress:ke,className:pt,children:H(L.rotatePageLeft),disabled:!Ye||q},{type:"rotate-right",onPress:Ee,className:pt,children:H(L.rotatePageRight),disabled:!Ye||q},{type:"move",onPress:Ne,className:n()(pt,W.moveToolbarButton),children:H(L.openMoveDialog),disabled:!Je},{type:"move-left",onPress:Fe,className:W.toolbar.toolbarButton,children:H(L.moveBefore),disabled:!Xe||q},{type:"move-right",onPress:Ke,className:pt,children:H(L.moveAfter),disabled:!qe||q},{type:"import-document",onPress:Re,className:pt,children:H(L.mergeDocument),disabled:q},{type:"extract-pages",onPress:Te,className:pt,children:H(L.extractPages),disabled:0===J.size||q},{type:"spacer"},{type:"undo",onPress:Be,className:pt,children:H(h.Z.undo),disabled:!Qe||q},{type:"redo",onPress:Le,className:pt,children:H(h.Z.redo),disabled:!et||q},{type:"select-all",onPress:Ge,className:pt,children:H(L.selectAll),disabled:!tt},{type:"select-none",onPress:Ze,className:pt,children:H(L.selectNone),disabled:!at},{type:"zoom-out",onPress:mt,className:pt,children:H(L.zoomOut),disabled:pe===M},{type:"zoom-in",onPress:dt,className:pt,children:H(L.zoomIn),disabled:pe===S}],[Pt,ht]=(0,s.useMemo)((()=>lt===Number.POSITIVE_INFINITY?[G,[]]:[G.slice(0,lt),G.slice(lt).filter((e=>"spacer"!==e.type)).map(((e,t)=>({index:t,item:{...e,dropdownGroup:"documentEditor"}})))]),[G,lt]),yt=(0,s.useRef)(null),bt=(0,s.useCallback)((e=>{"Escape"===e.key&&oe&&(he(!1),e.stopPropagation())}),[oe,he]),vt=(0,s.useMemo)((()=>null!=Pt.find((e=>"move"===e.type))),[Pt]),It=s.createElement("div",{className:n()(W.moveDialog,{[W.moveDialogShown]:oe,[W.moveDialogDetached]:!vt},"PSPDFKit-DocumentEditor-MoveDialog"),ref:ae},s.createElement("form",{onSubmit:Ae,className:W.moveDialogForm},s.createElement("span",{className:W.moveDialogFormLabel},H(L.insertAfterPage)),s.createElement("input",{className:W.moveDialogFormInput,type:"number",min:"0",max:j.size,value:re,onChange:Ce,ref:se}),s.createElement(d.zx,{type:"submit",className:W.moveDialogMoveButton,disabled:!Me},H(L.move))),s.createElement("div",{className:W.moveDialogHint},s.createElement("p",{className:W.moveDialogHintText},H(L.docEditorMoveBeginningHint)))),wt=(0,s.useCallback)(((e,t)=>{const a=(0,r.l4)(e);Se(t,a)&&ze(t,a)}),[ze,Se]);let kt;const Et=oe&&!isNaN(xe);if(Et){const e=J.toList().sort().map((e=>Ve(e,160,160,!0).item)).toArray(),t=s.createElement(K,{pages:e,style:"straight",styles:W});Et&&(kt=0===xe?{previewContent:t,pageIndex:0,position:"left"}:{previewContent:t,pageIndex:xe-1,position:"right"},Me||(kt.disabled=!0))}const Nt=(0,s.useMemo)((()=>({cancel:{element:s.createElement(d.zx,null,H(h.Z.cancel)),onPress:We,className:"PSPDFKit-DocumentEditor-CancelButton"},"selected-pages":{element:s.createElement("div",null,s.createElement("div",{className:W.pagesSelectedIcon},s.createElement(b.Z,{src:a(13006)})),H(L.pagesSelected,{arg0:J.size})),className:n()({[W.pagesSelectedIndicator]:!0,[W.pagesSelectedIndicatorShown]:J.size>0,"PSPDFKit-DocumentEditor-PagesSelectedIndicator":!0})},spacer:{element:x||(x=s.createElement("div",null)),className:n()({[W.spacer]:!0,"PSPDFKit-DocumentEditor-Spacer":!0})},"loading-indicator":{element:D||(D=s.createElement(v.Z,null)),hide:!q,className:"PSPDFKit-DocumentEditor-LoadingIndicator"},"save-as":{element:s.createElement(d.zx,null,H(h.Z.saveAs)),onPress:_e,disabled:q,className:"PSPDFKit-DocumentEditor-SaveAsButton"},save:{element:s.createElement(d.zx,{primary:!0},H(h.Z.save)),disabled:Y.isEmpty()||q,onPress:$e,className:"PSPDFKit-DocumentEditor-SaveButton"}})),[W,H,We,_e,$e,q,Y,J]),Ct=(0,s.useMemo)((()=>T.map(((e,t)=>{const{onPress:a,className:o,type:l,node:i,id:d}=e;if((0,c.kG)(l),"custom"===l){let e;if(a){const t={setOperations:(e,t)=>{const a=e($);if(!r.aV.isList(a))throw new c.p2("The setOperations callback must return an Immutable List of DocumentOperation objects.");_(a),t&&X((0,r.l4)())},getSelectedPageIndexes:()=>J.toArray()};e=async e=>{Q(!0);try{await a(e,t,d)}catch(e){throw e}finally{Q(!1)}}}return i?s.createElement(w.Z,{className:o,onPress:e,key:d||t,node:i}):null}{const e=Nt[l];return e.hide?null:(0,s.cloneElement)(e.element,{onClick:t=>{e.onPress&&e.onPress(t)},key:l,disabled:e.disabled,className:n()(e.className,o)})}}))),[T,Nt,$,J]),xt=e=>{if(e.onPress){const t={setOperations:(e,t)=>{const a=e($);if(!r.aV.isList(a))throw new c.p2("The setOperations callback must return an Immutable List of DocumentOperation objects.");_(a),t&&X((0,r.l4)())},getSelectedPageIndexes:()=>J.toArray()};return async a=>{Q(!0);try{await(e.onPress?.(a,t,e.id))}catch(a){throw a}finally{Q(!1)}}}return()=>{}},Dt=s.useRef(null);return s.createElement("div",{className:n()(W.docEditor,!k&&W.withIframe,"PSPDFKit-DocumentEditor"),onClick:Oe,onKeyDown:bt,tabIndex:"-1",ref:st},s.createElement("div",{className:n()(W.toolbar.root,W.toolbarRoot,"PSPDFKit-DocumentEditor-Toolbar"),style:{flex:0}},s.createElement("div",{ref:yt,className:W.toolbarContainer},s.createElement(N,{items:Pt,builtInItems:ft,moveDialog:It,CSS_HACK:e.CSS_HACK,getCustomerCallbackForItem:xt})),s.createElement(C,{builtInItems:ft,items:ht,CSS_HACK:e.CSS_HACK,frameWindow:R,getCustomerCallbackForItem:xt})),s.createElement("div",{className:W.pagesView},s.createElement(I.Z,{onResize:ct}),!vt&&It,s.createElement("div",{className:n()(W.pagesGrid,{[W.pagesGridLargeThumbnails]:ee}),ref:Dt},s.createElement(y.Z,{canInsert:(e,t)=>Se(t,(0,r.l4)(e)),totalItems:j.size,width:nt.width,height:nt.height,itemScale:e.scale,thumbnailHeight:ue,renderItemCallback:Ve,renderDragPreviewCallback:(e,t,a,o)=>{const n=(0,r.aV)(e).filter((e=>e!==t)).sort().push(t).slice(-5).map((e=>Ve(e,a,o,!0).item)).toArray();return s.createElement(K,{pages:n,style:"straight",styles:W,previewCount:e.length})},onItemPress:He,selectedItemIndexes:J,cssPrefix:"PSPDFKit-DocumentEditor",moveCursor:null!=kt?kt:void 0,onItemsMove:oe?void 0:wt,containerOffset:gt,gridContainerEl:Dt.current}))),s.createElement("div",{className:n()(W.bottomBar,"PSPDFKit-DocumentEditor-Footer")},Ct))},L=(0,l.vU)({newPage:{id:"newPage",defaultMessage:"New Page",description:"Add new page"},removePage:{id:"removePage",defaultMessage:"Remove Page",description:"Remove page"},duplicatePage:{id:"duplicatePage",defaultMessage:"Duplicate Page",description:"Duplicate page"},rotatePageLeft:{id:"rotatePageLeft",defaultMessage:"Rotate Page Left",description:"Rotate Page Left"},rotatePageRight:{id:"rotatePageRight",defaultMessage:"Rotate Page Right",description:"Rotate Page Right"},mergeDocument:{id:"mergeDocument",defaultMessage:"Merge Document",description:"Merge Document"},extractPages:{id:"extractPages",defaultMessage:"Extract Pages",description:"Extract Pages"},selectAll:{id:"selectAll",defaultMessage:"Select All",description:"Select All Pages"},selectNone:{id:"selectNone",defaultMessage:"Select None",description:"Deselect All Pages"},openMoveDialog:{id:"openMoveDialog",defaultMessage:"Move…",description:"Open dialog for moving pages to specific location in the document"},move:{id:"move",defaultMessage:"Move",description:"Move pages to specific location in the document"},moveBefore:{id:"moveBefore",defaultMessage:"Move Before",description:"Move page before previous one"},moveAfter:{id:"moveAfter",defaultMessage:"Move After",description:"Move page after next one"},documentMergedHere:{id:"documentMergedHere",defaultMessage:"Document will be merged here",description:"Placeholder for the imported document"},pagesSelected:{id:"pagesSelected",defaultMessage:"{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",description:"Number of pages selected."},insertAfterPage:{id:"insertAfterPage",defaultMessage:"Insert after page",description:"Move selected pages after designated page index."},docEditorMoveBeginningHint:{id:"docEditorMoveBeginningHint",defaultMessage:"Type “0” to move selected pages to the beginning of the document.",description:"Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor."},zoomIn:{id:"zoomIn",defaultMessage:"Zoom In",description:"Zoom in the document"},zoomOut:{id:"zoomOut",defaultMessage:"Zoom Out",description:"Zoom out the document"}})},33720:(e,t,a)=>{var s={"./add.svg":69558,"./duplicate.svg":24388,"./extractPages.svg":88105,"./help.svg":9451,"./importDocument.svg":48982,"./move.svg":6058,"./moveLeft.svg":91288,"./moveRight.svg":46018,"./multiplePages.svg":13006,"./redo.svg":52449,"./remove.svg":1562,"./rotateLeft.svg":52684,"./rotateRight.svg":58287,"./selectAll.svg":57208,"./selectNone.svg":95119,"./undo.svg":32428,"./zoomIn.svg":62475,"./zoomOut.svg":75480};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=n,e.exports=o,o.id=33720}}]);