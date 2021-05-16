(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{145:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return o}));var n=a(2),r=a(6),b=(a(0),a(258)),l={id:"5_node_state",title:"Node state",sidebar_label:"Node state"},c={unversionedId:"5_references/1_nifi_cluster/5_node_state",id:"version-v0.4.3/5_references/1_nifi_cluster/5_node_state",isDocsHomePage:!1,title:"Node state",description:"Holds information about nifi state",source:"@site/versioned_docs/version-v0.4.3/5_references/1_nifi_cluster/5_node_state.md",slug:"/5_references/1_nifi_cluster/5_node_state",permalink:"/nifikop/docs/v0.4.3/5_references/1_nifi_cluster/5_node_state",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.4.3/5_references/1_nifi_cluster/5_node_state.md",version:"v0.4.3",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1610979212,sidebar_label:"Node state",sidebar:"version-v0.4.3/docs",previous:{title:"Node",permalink:"/nifikop/docs/v0.4.3/5_references/1_nifi_cluster/4_node"},next:{title:"Listeners Config",permalink:"/nifikop/docs/v0.4.3/5_references/1_nifi_cluster/6_listeners_config"}},i=[{value:"NodeState",id:"nodestate",children:[]},{value:"GracefulActionState",id:"gracefulactionstate",children:[]},{value:"ConfigurationState",id:"configurationstate",children:[]},{value:"InitClusterNode",id:"initclusternode",children:[]},{value:"State",id:"state",children:[{value:"Upscale",id:"upscale",children:[]},{value:"Downscale",id:"downscale",children:[]}]},{value:"ActionStep",id:"actionstep",children:[]}],O={rightToc:i};function o(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Holds information about nifi state"),Object(b.b)("h2",{id:"nodestate"},"NodeState"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"gracefulActionState"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#gracefulactionstate"}),"GracefulActionState")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"holds info about nifi cluster action status."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"configurationState"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#configurationstate"}),"ConfigurationState")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"holds info about the config."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"initClusterNode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#initclusternode"}),"InitClusterNode")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains if this nodes was part of the initial cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"gracefulactionstate"},"GracefulActionState"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"errorMessage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"holds the information what happened with Nifi Cluster."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"actionStep"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#actionstep"}),"ActionStep")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"holds info about the action step ran."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskStarted"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hold the time when the execution started."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"actionState"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#state"}),"State")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"holds the information about Action state."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(b.b)("h2",{id:"configurationstate"},"ConfigurationState"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConfigInSync"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConfigInSync"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the generated nodeConfig is in sync with the Node")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConfigOutOfSync"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConfigOutOfSync"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the generated nodeConfig is out of sync with the Node")))),Object(b.b)("h2",{id:"initclusternode"},"InitClusterNode"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IsInitClusterNode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states the node is part of initial cluster setup")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NotInitClusterNode"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states the node is not part of initial cluster setup")))),Object(b.b)("h2",{id:"state"},"State"),Object(b.b)("h3",{id:"upscale"},"Upscale"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleRequired"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleRequired"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that a node upscale is required.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleRunning"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleRunning"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the node upscale task is still running.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleSucceeded"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleSucceeded"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states the node is updated gracefully.")))),Object(b.b)("h3",{id:"downscale"},"Downscale"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulDownscaleRequired"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulDownscaleRequired"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that a node downscale is required")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulDownscaleRunning"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulDownscaleRunning"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the node downscale is still running in")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleSucceeded"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GracefulUpscaleSucceeded"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states the node is updated gracefully")))),Object(b.b)("h2",{id:"actionstep"},"ActionStep"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisconnectNodeAction"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DISCONNECTING"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node is disconnecting from NiFi Cluster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DisconnectStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DISCONNECTED"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node is disconnected from NiFi Cluster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OffloadNodeAction"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OFFLOADING"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node is offloading data to NiFi Cluster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OffloadStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OFFLOADED"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node offloaded data to NiFi Cluster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RemovePodAction"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POD_REMOVING"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node pod and object related are removing by operator.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RemovePodStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POD_REMOVED"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node pod and object related have been removed by operator.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RemoveNodeAction"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"REMOVING"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node is removing from NiFi Cluster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RemoveStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"REMOVED"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node is removed from NiFi Cluster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConnectNodeAction"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CONNECTING"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node is connecting to the NiFi Cluster.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConnectStatus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CONNECTED"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"states that the NiFi node is connected to the NiFi Cluster.")))))}o.isMDXComponent=!0},258:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return p}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var O=r.a.createContext({}),o=function(t){var e=r.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=o(t.components);return r.a.createElement(O.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),d=o(a),u=n,p=d["".concat(l,".").concat(u)]||d[u]||j[u]||b;return a?r.a.createElement(p,c(c({ref:e},O),{},{components:a})):r.a.createElement(p,c({ref:e},O))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var O=2;O<b;O++)l[O]=a[O];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);