_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(s.default.useContext(a.AmpStateContext))};var n,s=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||s&&c}},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var n,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=n?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},c=r("lwAK"),i=r("FYa8"),o=r("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function j(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(s){var a=!0;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){var c=s.key.slice(s.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(var i=0,o=p.length;i<o;i++){var l=p[i];if(s.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var d=s.props[l],u=n[l]||new Set;u.has(d)?a=!1:(u.add(d),n[l]=u)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return s.default.cloneElement(e,{key:r})}))}function b(e){var t=e.children,r=(0,s.useContext)(c.AmpStateContext),n=(0,s.useContext)(i.HeadManagerContext);return s.default.createElement(a.default,{reduceComponentsToState:j,headManager:n,inAmpMode:(0,o.isInAmpMode)(r)},t)}b.rewind=function(){};var f=b;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var s=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=s},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},NS4b:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("rePB");function s(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=r("nKUr");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){var t=e.name,r=void 0===t?"bootstrap":t,i=e.size,o=void 0===i?18:i,l=e.color,d=void 0===l?"currentColor":l,u=s(e,["name","size","color"]);return Object(a.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:"bi",width:o,height:o,fill:d,dangerouslySetInnerHTML:{__html:'<use xlink:href="/assets/icons/sprite.svg#'.concat(r,'" />')}},u))}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),s=r("EbDI"),a=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||s(e)||a(e)||c()}},SWoO:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r("nKUr"),s=r("NS4b");r("q1tI");function a(e){var t=e.children;return Object(n.jsxs)("h2",{className:"mb-4",id:"certification",children:[Object(n.jsx)("div",{className:"icon-stack bg-primary text-white mr-2",children:Object(n.jsx)(s.a,{name:"arrow-right"})}),t]})}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),s=r("lwsE"),a=r("W8MJ"),c=(r("PJYZ"),r("7W2i")),i=r("a1gu"),o=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=o(e);if(t){var s=o(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var d=r("q1tI"),u=function(e){c(r,e);var t=l(r);function r(e){var a;return s(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=u},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),s=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?s(e):t}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},kN73:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("nKUr");function s(e){var t=e.title,r=void 0===t?"":t,s=e.paragraph,a=void 0===s?"":s,c=e.nextColor,i=void 0===c?"white":c;return Object(n.jsxs)("header",{className:"page-header page-header-dark bg-gradient-primary-to-secondary",children:[Object(n.jsx)("div",{className:"page-header-content pt-10",children:Object(n.jsx)("div",{className:"container text-center",children:Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsxs)("div",{className:"col-lg-9",children:[Object(n.jsx)("h1",{className:"page-header-title mb-3",children:r}),Object(n.jsx)("p",{className:"page-header-text m-0",children:a})]})})})}),Object(n.jsx)("div",{className:"svg-border-rounded text-white",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 144.54 17.34",preserveAspectRatio:"none",fill:i,children:Object(n.jsx)("path",{d:"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"})})})]})}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var s=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=s},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},"tb+9":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r("nKUr"),s=(r("q1tI"),r("kN73")),a=r("NS4b"),c=r("SWoO"),i=r("8Kt/"),o=r.n(i);function l(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a,{children:Object(n.jsx)("title",{children:"Curso de programaci\xf3n desde cero"})}),Object(n.jsx)(s.a,{title:"Curso De Programaci\xf3n Desde Cero",paragraph:"Aprende el lenguaje JavaScript, el mas vers\xe1til del mundo"}),Object(n.jsxs)("section",{className:"bg-white py-10",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row ",children:[Object(n.jsx)("div",{className:"col-lg-3",children:Object(n.jsxs)("ul",{className:"list-group list-group-flush list-group-careers",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("b",{children:"Duraci\xf3n:"})," 4 meses"]}),Object(n.jsxs)("li",{className:"list-group-item align-items-start ",children:[Object(n.jsx)("b",{children:"D\xedas:"})," ",Object(n.jsxs)("span",{className:"text-right",children:["S\xe1bado y Domingo ",Object(n.jsx)("br",{})," 1:00 PM - 5:00 PM"]})]}),Object(n.jsxs)("li",{className:"list-group-item align-items-start",children:[Object(n.jsx)("b",{children:"Tiempo:"}),"4 horas"]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("b",{children:"Precio:"})," ",Object(n.jsx)("span",{children:"RD$ 2,500 / mes"})]}),Object(n.jsx)("li",{className:"text-info font-weight-bold  list-group-item align-items-start",children:"Puedes asistir el primer d\xeda gratis. Realiza el pago antes de la segunda clase o no podr\xe1s entrar."})]})}),Object(n.jsxs)("div",{className:"col-lg-9",children:[Object(n.jsxs)("section",{children:[Object(n.jsxs)("h2",{className:"mb-4",children:[Object(n.jsx)("div",{className:"icon-stack bg-primary text-white mr-2",children:Object(n.jsx)(a.a,{name:"arrow-right"})}),"Requerimientos"]}),Object(n.jsx)("p",{children:"Ninguno, este curso esta hecho para principiantes sin ningun conocimiento previo de programacion."})]}),Object(n.jsx)("hr",{className:"my-5"}),Object(n.jsxs)("section",{children:[Object(n.jsxs)("h2",{className:"mb-4",children:[Object(n.jsx)("div",{className:"icon-stack bg-primary text-white mr-2",children:Object(n.jsx)(a.a,{name:"arrow-right"})}),"Contenido del curso"]}),Object(n.jsxs)("p",{children:["En este curso aprender\xe1s los fundamentos del desarrollo de software con el lenguaje de programaci\xf3n ",Object(n.jsx)("em",{children:"JavaScript"}),", el lenguaje mas vers\xe1til del mundo en la actualidad."]}),Object(n.jsx)("p",{children:"Este lenguaje tienes sus inicios en las p\xe1ginas web, pero con el tiempo ha ido evolucionando a tal punto que se puede hacer cualquier cosa; apps de tel\xe9fono, apps de escritorio, paginas web, servidores, y hasta programar robots."}),Object(n.jsxs)("details",{className:"pb-3",children:[Object(n.jsxs)("summary",{className:"mb-2 p-1",children:[Object(n.jsx)("b",{children:"Parte I"}),": Los fundamentos"]}),Object(n.jsx)("div",{className:"small",children:Object(n.jsxs)("ul",{className:"",children:[Object(n.jsx)("li",{children:"Tipos de datos y variables"}),Object(n.jsx)("li",{children:"Expresiones"}),Object(n.jsx)("li",{children:"Estructuras de control"}),Object(n.jsx)("li",{children:"Funciones"}),Object(n.jsx)("li",{children:"Estructuras de datos "}),Object(n.jsx)("li",{children:"Programaci\xf3n Orientada a Objetos (OOP, POO)"}),Object(n.jsx)("li",{children:"Manejo de errores"})]})})]}),Object(n.jsxs)("details",{className:"pb-3",children:[Object(n.jsxs)("summary",{className:"mb-2 p-1",children:[Object(n.jsx)("b",{children:"Parte II"}),": T\xe9cnicas avanzadas"]}),Object(n.jsx)("div",{className:"small",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Expresiones regulares (Regex)"}),Object(n.jsx)("li",{children:"Recursi\xf3n"}),Object(n.jsx)("li",{children:"Promesas"}),Object(n.jsx)("li",{children:"Generadores"}),Object(n.jsx)("li",{children:"Objetos complejos"}),Object(n.jsx)("li",{children:"Optimizaci\xf3n de memoria"}),Object(n.jsx)("li",{children:"Calidad de c\xf3digo"}),Object(n.jsx)("li",{children:"Pruebas de unidad"}),Object(n.jsx)("li",{children:"Debugging"})]})})]}),Object(n.jsxs)("details",{className:"",children:[Object(n.jsxs)("summary",{className:"mb-2 p-1",children:[Object(n.jsx)("b",{children:"Parte III"}),": El desarrollo de una aplicaci\xf3n"]}),Object(n.jsx)("div",{className:"small",children:Object(n.jsx)("p",{children:"Aprender\xe1s a crear una aplicaci\xf3n web desde cero junto con todos tus compa\xf1eros. Utilizar\xe1s todos los conocimientos cubiertos hasta este punto para lograr la creaci\xf3n completa de un proyecto."})})]})]}),Object(n.jsx)("hr",{className:"my-5"}),Object(n.jsxs)("section",{children:[Object(n.jsx)(c.default,{children:"Metodolog\xeda"}),Object(n.jsx)("p",{children:"Despu\xe9s de cada explicaci\xf3n, realizaras una practica simple con los conocimientos que ya aprendiste. Las practicas son progresivas, y nunca ser\xe1n demasiado dif\xedciles ni demasiado f\xe1ciles, y tampoco aburridas."}),Object(n.jsx)("p",{children:"Al final del curso, trabajaras en equipo con el resto de la clase, para crear un solo proyecto completo en una simulaci\xf3n realista, lo que te ense\xf1ara como trabajan los equipos en la vida real para desarrollar software."})]}),Object(n.jsx)("hr",{className:"my-5"}),Object(n.jsxs)("section",{children:[Object(n.jsxs)("h4",{children:[Object(n.jsx)("div",{className:"icon-stack bg-primary text-white mr-2",children:Object(n.jsx)(a.a,{name:"arrow-right"})}),"El Gremio"]}),Object(n.jsx)("p",{children:"Esta es nuestra comunidad solo disponible para quienes se inscriban en el curso. Esta membres\xeda es permanente y no tiene costo."}),Object(n.jsx)("p",{children:"Entre los beneficios que ofrece el gremio se destacan:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Seguir en comunicaci\xf3n con todos los miembros del curso, incluyendo el instructor."}),Object(n.jsx)("li",{children:"Informaci\xf3n sobre posiciones laborales abiertas."}),Object(n.jsx)("li",{children:"Noticias relacionadas con software y tecnolog\xeda."}),Object(n.jsx)("li",{children:"Tutoriales complementarios gratuitos."})]}),Object(n.jsx)("h5",{className:"pt-3",children:"Desaf\xedos y Niveles"}),Object(n.jsx)("p",{children:"Luego de terminado el curso, podr\xe1s participar en desaf\xedos que te permitir\xe1n subir de nivel. Cada nivel otorga privilegios extra dentro del gremio, tales como:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Prioridad en ofertas laborales"}),Object(n.jsx)("li",{children:"Tutoriales exclusivos, sin costo"}),Object(n.jsx)("li",{children:"Comisiones oficiales asignadas por Savantes"}),Object(n.jsx)("li",{children:"Descuentos en otros cursos"}),Object(n.jsx)("li",{children:"Regalos aleatorios"})]}),Object(n.jsx)("h5",{className:"pt-3",children:"Anillo de Honor"}),Object(n.jsx)("p",{children:"Alcanza el nivel m\xe1ximo dentro del gremio y recibir\xe1s un anillo de honor como premio por tu dedicaci\xf3n. Este anillo es cortes\xeda de la casa y se har\xe1 a tu medida."}),Object(n.jsx)("div",{className:"py-5",children:Object(n.jsx)("a",{className:"btn btn-block btn-success font-weight-bold",href:"/inscripcion",children:"Inscribirme en este curso"})})]})]})]})}),Object(n.jsx)("div",{className:"svg-border-rounded text-dark",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 144.54 17.34",preserveAspectRatio:"none",fill:"var(--dark)",children:Object(n.jsx)("path",{d:"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"})})})]})]})}},yc2V:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curso/programacion-desde-cero",function(){return r("tb+9")}])}},[["yc2V",0,1]]]);