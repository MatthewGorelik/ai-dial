"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[7],{7927:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=o(5893),t=o(1151);const s={},a="Launch AI DIAL Chat with To-Do List Addon",d={id:"quick-start-with-addon",title:"Launch AI DIAL Chat with To-Do List Addon",description:"About AI DIAL Addons",source:"@site/docs/quick-start-with-addon.md",sourceDirName:".",slug:"/quick-start-with-addon",permalink:"/quick-start-with-addon",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"Chat User Guide",permalink:"/user-guide"},next:{title:"Launch AI DIAL Chat with Echo Application",permalink:"/quick-start-with-application"}},r={},c=[{value:"About AI DIAL Addons",id:"about-ai-dial-addons",level:2},{value:"About AI DIAL Assistants",id:"about-ai-dial-assistants",level:2},{value:"About To-Do List Addon",id:"about-to-do-list-addon",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Get AI DIAL",id:"step-1-get-ai-dial",level:2},{value:"Step 2: Configuration",id:"step-2-configuration",level:2},{value:"Configure Model",id:"configure-model",level:3},{value:"Configure Assistant",id:"configure-assistant",level:3},{value:"Configure Addon",id:"configure-addon",level:3},{value:"Step 3: Lauch AI DIAL Chat",id:"step-3-lauch-ai-dial-chat",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"launch-ai-dial-chat-with-to-do-list-addon",children:"Launch AI DIAL Chat with To-Do List Addon"}),"\n",(0,i.jsx)(n.h2,{id:"about-ai-dial-addons",children:"About AI DIAL Addons"}),"\n",(0,i.jsxs)(n.p,{children:["Within the AI DIAL framework, an ",(0,i.jsx)(n.strong,{children:"Addon"})," is a service - or any component adhering to its own or provided OpenAPI specification - that empowers LLMs to access and utilize any desired data source or technology to produce their responses."]}),"\n",(0,i.jsx)(n.p,{children:"For example, one might want LLM to access specific data or technology to use for generating its answers. It can be a corporate database, collection of PDF documents, calculation engines, or any other data source or technology."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://epam-rail.com/extension-framework",children:"AI DIAL website"})," to view typical examples of addons."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"about-ai-dial-assistants",children:"About AI DIAL Assistants"}),"\n",(0,i.jsxs)(n.p,{children:["An Addon can be used in conjunction with a System Prompt to attain a particular behavior for the LLM, allowing for more flexibility and customization in the LLM's responses. Within the AI DIAL framework, we refer to such combinations of Addons and System Prompts as ",(0,i.jsx)(n.strong,{children:"Assistants"}),".\nAssistants provide enhanced control over the behavior of LLMs, leading to more tailored and accurate responses that meet specific requirements."]}),"\n",(0,i.jsx)(n.p,{children:"Flexibility offered by this combination allows developers to create custom Assistants within the AI DIAL framework. These Assistants can range from simple implementations, like instructing the LLM to provide answers using a specific tone or style (e.g., like a pirate), to more complex use cases, such as limiting the LLM's data scope to a particular geographical location (e.g., providing weather forecasts for Chicago only). Overall, combining Addons and System Prompts allows for better customization and adaptability to diverse situations, resulting in more versatile AI responses."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-assistant",children:"AI DIAL Assistant"})," repository for more information."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"about-to-do-list-addon",children:"About To-Do List Addon"}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, for example purposes, we will show how to quickly launch AI DIAL Chat with the ",(0,i.jsx)(n.a,{href:"https://github.com/openai/plugins-quickstart/",children:"To-Do List Addon"})," by OpenAI. With this addon, one can generate a list of tasks, append new entries, and fetch information about the entries saved in the list."]}),"\n",(0,i.jsx)(n.p,{children:"Following this pattern, you can develop your own addons or use a third-party ones. The only requirement is that it should be compatible with the OpenAPI specification."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Docker engine installed on your machine."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/desktop/",children:"Docker"})," documentation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Account in MS Azure OpenAI Studio."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/Deployment/Azure%20Model%20Deployment",children:"Create and Deploy OpenAI Model in Azure"})," to learn how to create and deploy an OpenAI model in MS Azure."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Addon. In this example, it is ",(0,i.jsx)(n.a,{href:"https://github.com/openai/plugins-quickstart/",children:"To-Do List"})," by OpenAI."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-get-ai-dial",children:"Step 1: Get AI DIAL"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/",children:"Download"})," AI DIAL."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.strong,{children:"docker-compose.yaml"}),", you can find sections for ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/docker-compose.yml#L18",children:"OpenAI Adapter"})," to work with an Azure model, ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/docker-compose.yml#L22",children:"AI DIAL Assistant"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/docker-compose.yml#L27",children:"Addon"}),", and ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/docker-compose.yml#L29",children:"Core (AI DIAL back-end)"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-openai",children:"AI DIAL Adapter for OpenAI"})," to learn more."]}),"\n",(0,i.jsxs)(n.li,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core",children:"AI DIAL Core"})," to view a complete documentation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"/addon"})," folder, you can find a ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/addon/Dockerfile",children:"Dockerfile"})," we need to get and launch the To-Do List Addon."]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-configuration",children:"Step 2: Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"/addon/core"})," folder, you can find a ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/core/config.json",children:"config.json"})," configuration file. In this file, you can configure your model, assistant and addon."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-model",children:"Configure Model"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Supply your ",(0,i.jsx)(n.strong,{children:"Azure API Keys"})," for your deployments for the ",(0,i.jsx)(n.code,{children:"key"})," parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"https://AZURE_DEPLOYMENT_URL"})," with your GPT ",(0,i.jsx)(n.strong,{children:"endpoint"})," for the ",(0,i.jsx)(n.code,{children:"endpoint"})," parameter. ",(0,i.jsx)(n.strong,{children:"Note"}),": in the endpoint, replace ",(0,i.jsx)(n.code,{children:"gpt-4"})," with your Azure deployment name, in case it is different."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'      "upstreams": [\n      {\n        "endpoint": "https://AZURE_DEPLOYMENT_URL/openai/deployments/gpt-4/chat/completions",\n        "key": "AZURE_MODEL_API_KEY"\n      }\n]\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/Deployment/Azure%20Model%20Deployment",children:"Create and Deploy OpenAI Model in Azure"})," to learn how to create and deploy an OpenAI model in MS Azure."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-assistant",children:"Configure Assistant"}),"\n",(0,i.jsx)(n.p,{children:"Provide the endpoint for AI DIAL Assistant:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"assistant": {\n    "endpoint": "http://assistant:5000/openai/deployments/assistant/chat/completions"\n  }\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/core/config.json#L18",children:"config file"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial-assistant",children:"AI DIAL Assistant"})," repository for more information."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-addon",children:"Configure Addon"}),"\n",(0,i.jsxs)(n.p,{children:["Provide configuration for your addon in the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/core/config.json#L11",children:"addons"})," section:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'  "addons": {\n    "addon-todo": {\n      "endpoint": "http://addon:5003/.well-known/ai-plugin.json",\n      "displayName": "TODO List",\n      "description": "Manage your TODO list. You can add, remove and view your TODOs."\n    }\n  }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Provide configuration for your addon in the ",(0,i.jsx)(n.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/dial-docker-compose/addon/core/config.json#L49",children:"roles"})," section:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"roles": {\n  "default": {\n    "limits": {\n      "addon-todo": {}\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In this example, we get information about the name, description etc. from the ",(0,i.jsx)(n.a,{href:"https://github.com/openai/plugins-quickstart/blob/main/.well-known/ai-plugin.json",children:"addon repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-lauch-ai-dial-chat",children:"Step 3: Lauch AI DIAL Chat"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the ",(0,i.jsx)(n.code,{children:"docker compose up"})," command from the folder with the ",(0,i.jsx)(n.code,{children:"docker-compose"})," file (",(0,i.jsx)(n.strong,{children:"dial-docker-compose/addon"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," in your browser to launch the AI DIAL Chat application."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The AI DIAL Chat is launched with the Azure model we have configured, and the Addon is enabled with the display name you configured for the ",(0,i.jsx)(n.code,{children:"addons.displayName"})," parameter in ",(0,i.jsx)(n.code,{children:"config.json"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(8525).Z+"",width:"1637",height:"749"})}),"\n",(0,i.jsx)(n.p,{children:'Select the Addon and start a new conversation. For example, send "Add homework to the to do list" and then "Get the to do list".'})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8525:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/addon-9d78643d20a398536ee2b6ba1fc18188.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>a});var i=o(7294);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);