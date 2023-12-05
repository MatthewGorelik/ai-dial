"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[122],{7577:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(5893),s=n(1151);const i={},t="Configuration",c={id:"Deployment/configuration",title:"Configuration",description:"Refer to the provided example of config, where you can find the description of the application-specific parameters.",source:"@site/docs/Deployment/configuration.md",sourceDirName:"Deployment",slug:"/Deployment/configuration",permalink:"/Deployment/configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"Azure Model Deployment",permalink:"/Deployment/Azure Model Deployment"}},l={},o=[{value:"Front-End Parameters",id:"front-end-parameters",level:2},{value:"Back-End Parameters",id:"back-end-parameters",level:2},{value:"proxy.config.json parameters",id:"proxyconfigjson-parameters",level:3},{value:"Configuration of Adapters",id:"configuration-of-adapters",level:2}];function h(e){const d={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:["Refer to the provided ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/Deployment/dialConfig.yaml",children:"example of config"}),", where you can find the description of the application-specific parameters."]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["The ",(0,r.jsx)(d.code,{children:"dialConfig.yaml"})," configuration file of the AI DIAL application is comprised of several main sections:"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["Standard parameters of helm chart. Refer to ",(0,r.jsx)(d.a,{href:"https://helm.sh/",children:"Helm docs"}),"."]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.a,{href:"#front-end-parameters",children:"Front-end parameters"}),": in ",(0,r.jsx)(d.code,{children:"env"})," and ",(0,r.jsx)(d.code,{children:"secrets"})," sections in config."]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.a,{href:"#back-end-parameters",children:"Back-end parameters"}),": in ",(0,r.jsx)(d.code,{children:"proxy"})," section in the config."]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.a,{href:"#configuration-of-adapters",children:"Configuration of Adapters for models"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Important"}),": it is assumed that you have a working knowledge of standard Helm chart parameters in order to define them within the configuration file."]}),"\n"]}),"\n",(0,r.jsx)(d.h2,{id:"front-end-parameters",children:"Front-End Parameters"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:["Refer to the ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-chat#environment-variables",children:"AI DIAL Chat"})," to view a complete documentation."]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["Configure front-end parameters in the ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/Deployment/dialConfig.yaml#L18",children:(0,r.jsx)(d.code,{children:"env"})})," and ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/Deployment/dialConfig.yaml#L30",children:(0,r.jsx)(d.code,{children:"secrets"})})," sections of the config file:"]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:["Note: for development we have some predefined variables located in ",(0,r.jsx)(d.code,{children:".env.development"})]}),"\n"]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Variable"}),(0,r.jsx)(d.th,{children:"Required"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Available Values"}),(0,r.jsx)(d.th,{children:"Default values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"OPENAI_API_HOST"})}),(0,r.jsx)(d.td,{children:"Yes"}),(0,r.jsx)(d.td,{children:"OpenAI API Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"OPENAI_API_KEY"})}),(0,r.jsx)(d.td,{children:"Yes"}),(0,r.jsx)(d.td,{children:"OpenAI API Key"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"OPENAI_API_VERSION"})}),(0,r.jsx)(d.td,{children:"Yes"}),(0,r.jsx)(d.td,{children:"OpenAI API Version"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"APP_BASE_PATH"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Application base path"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"APP_BASE_ORIGIN"})}),(0,r.jsxs)(d.td,{children:["Yes (if ",(0,r.jsx)(d.code,{children:"APP_BASE_PATH"})," is set)"]}),(0,r.jsx)(d.td,{children:"Application base origin"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"ALLOWED_IFRAME_ORIGINS"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Allowed iFrame Origins"}),(0,r.jsx)(d.td,{children:"Any origin valid format."}),(0,r.jsx)(d.td,{children:"none"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"IS_IFRAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Is iFrame"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]}),(0,r.jsx)(d.td,{children:"false"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"ENABLED_FEATURES"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Enabled Features"}),(0,r.jsxs)(d.td,{children:["Refer to ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-chat/blob/release-0.2/src/types/features.ts",children:"Features"})]}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"NEXT_PUBLIC_APP_NAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Public Application Name"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{children:"AI Dial"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Public Default System Prompt"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"NEXT_PUBLIC_DEFAULT_TEMPERATURE"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Public Default Temperature"}),(0,r.jsx)(d.td,{children:"0 to 1"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DEFAULT_MODEL"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Default Model"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{children:"gpt-35-turbo"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"DEFAULT_ASSISTANT_SUB_MODEL"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Default Assistant Sub Model"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{children:"gpt-4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"RECENT_MODELS_IDS"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"A list of IDs for recently used AI models."}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"RECENT_ADDONS_IDS"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"A list of IDs for recently used AI model addons."}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"E2E_HOST"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsxs)(d.td,{children:["The host URL for end-to-end testing. Refer to ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-chat/blob/release-0.2/e2e/README.md",children:"E2E Tests"})," to learn more."]}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"PREVIEW_TEST_TOKEN"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsxs)(d.td,{children:["A test token for e2e authentification. Refer to ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-chat/blob/release-0.2/e2e/README.md",children:"E2E Tests"})," to learn more."]}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TRACES_URL"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Traces URL"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"TMS_URL"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"TMS URL"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"ISSUE_URL"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Issue URL"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"THEMES_CONFIG_HOST"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsxs)(d.td,{children:["The host URL for custom themes configuration. Refer to ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-chat/blob/release-0.2/docs/THEME-CUSTOMIZATION.md",children:"Theme Configuration"})," to learn more."]}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"FOOTER_HTML_MESSAGE"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Footer HTML Message"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AZURE_FUNCTIONS_API_HOST"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Azure Functions API Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"REPORT_ISSUE_CODE"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Report Issue Code used when sending report issue info to Azure Functions API Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"REQUEST_API_KEY_CODE"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Request API Key Code used when sending request api key info to Azure Functions API Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"CODE_GENERATION_WARNING"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Warning text regarding code generation"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"SHOW_TOKEN_SUB"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Show token sub in refresh login error logs"}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]}),(0,r.jsx)(d.td,{children:"false"})]})]})]}),"\n",(0,r.jsx)(d.p,{children:"The .env file contains environment variables that can be used to configure your app's settings and behavior. These values can be changed as needed to suit your specific requirements."}),"\n",(0,r.jsx)(d.p,{children:"Also we have a lot of auth specific env variables:"}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Variable"}),(0,r.jsx)(d.th,{children:"Required"}),(0,r.jsx)(d.th,{children:"Description"}),(0,r.jsx)(d.th,{children:"Available Values"}),(0,r.jsx)(d.th,{children:"Default values"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_DISABLED"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"A flag to enable or disable authentication."}),(0,r.jsxs)(d.td,{children:[(0,r.jsx)(d.code,{children:"true"}),", ",(0,r.jsx)(d.code,{children:"false"})]}),(0,r.jsx)(d.td,{children:"false"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"NEXTAUTH_URL"})}),(0,r.jsx)(d.td,{children:"Yes (for production)"}),(0,r.jsx)(d.td,{children:"NextAuth URL"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"NEXTAUTH_SECRET"})}),(0,r.jsx)(d.td,{children:"Yes"}),(0,r.jsxs)(d.td,{children:["NextAuth Secret (generate by ",(0,r.jsx)(d.code,{children:"openssl rand -base64 32"})," for example)"]}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_TEST_TOKEN"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Test Token"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AUTH0_AUDIENCE"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Auth0 Audience"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AUTH0_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Auth0 Client ID"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AUTH0_HOST"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Auth0 Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AUTH0_NAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Auth0 Name"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AUTH0_SECRET"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Auth0 Secret"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AZURE_AD_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Azure AD Client ID"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AZURE_AD_NAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Azure AD Name"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AZURE_AD_SECRET"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Azure AD Secret"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_AZURE_AD_TENANT_ID"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Azure AD Tenant ID"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_GITLAB_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"GitLab Client ID"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_GITLAB_HOST"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"GitLab Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_GITLAB_NAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"GitLab Name"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_GITLAB_SECRET"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"GitLab Secret"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_GOOGLE_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Google Client ID"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_GOOGLE_NAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Google Name"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_GOOGLE_SECRET"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Google Secret"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_KEYCLOAK_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Keycloak Client ID"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_KEYCLOAK_HOST"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Keycloak Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_KEYCLOAK_NAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Keycloak Name"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_KEYCLOAK_SECRET"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"Keycloak Secret"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_PING_ID_CLIENT_ID"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"PingID Client ID"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_PING_ID_HOST"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"PingID Host"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_PING_ID_NAME"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"PingID Name"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:(0,r.jsx)(d.code,{children:"AUTH_PING_ID_SECRET"})}),(0,r.jsx)(d.td,{children:"No"}),(0,r.jsx)(d.td,{children:"PingID Secret"}),(0,r.jsx)(d.td,{children:"Any string"}),(0,r.jsx)(d.td,{})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"back-end-parameters",children:"Back-End Parameters"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:["Refer to the ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-core",children:"AI DIAL Core"})," to view a complete documentation."]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["Configure back-end parameters in the ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/Deployment/dialConfig.yaml#L74",children:(0,r.jsx)(d.code,{children:"proxy"})})," section of the config file."]}),"\n",(0,r.jsxs)(d.p,{children:["You can provide dynamic or static configurations for the back-end. Provide path to the corresponding configuration in the ",(0,r.jsx)(d.code,{children:"proxy.env"})," section."]}),"\n",(0,r.jsx)(d.p,{children:"Static settings are configured at application startup and do not change throughout the application lifecycle."}),"\n",(0,r.jsx)(d.p,{children:"Priority order of configurations:"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:'Environment variables with extra "proxy." prefix. E.g. "proxy.server.port", "proxy.config.files".'}),"\n",(0,r.jsx)(d.li,{children:'File specified in "PROXY_SETTINGS" environment variable.'}),"\n",(0,r.jsx)(d.li,{children:"Default resource file: src/main/resources/proxy.settings.json."}),"\n"]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Default Value"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"config.files"}),(0,r.jsx)(d.td,{children:"proxy.config.json"}),(0,r.jsx)(d.td,{children:"Config files with parts of the whole config."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"config.reload"}),(0,r.jsx)(d.td,{children:"60000"}),(0,r.jsx)(d.td,{children:"Config reload interval in milliseconds."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"identityProvider.jwksUrl"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"URL to the jwks provider."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"identityProvider.appName"}),(0,r.jsx)(d.td,{children:"dial"}),(0,r.jsx)(d.td,{children:'App name to search in "resource_access" claim of JWT token to check access for deployments.'})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"identityProvider.loggingKey"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"User information to search in claims of JWT token."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"identityProvider.loggingSalt"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Salt to hash user information for logging."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"identityProvider.cacheSize"}),(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"How many JWT tokens to cache."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"identityProvider.cacheExpiration"}),(0,r.jsx)(d.td,{children:"10"}),(0,r.jsx)(d.td,{children:"How long to retain JWT tokens in cache."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"identityProvider.cacheExpirationUnit"}),(0,r.jsx)(d.td,{children:"MINUTES"}),(0,r.jsx)(d.td,{children:"Unit of cache expiration."})]})]})]}),"\n",(0,r.jsxs)(d.p,{children:["This file includes standard ",(0,r.jsx)(d.a,{href:"https://cloud.google.com/vertex-ai/docs/start/client-libraries",children:"Vertex library configurations"}),"."]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"Dynamic"})," settings are defined in the ",(0,r.jsx)(d.code,{children:"proxy.config.json"})," file by default. You can override settings in this file by configuring static settings."]}),"\n",(0,r.jsx)(d.h3,{id:"proxyconfigjson-parameters",children:"proxy.config.json parameters"}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:["Refer to the ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/Deployment/dialConfig.yaml#L112",children:"confuration file"})," to view an example."]}),"\n"]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Parameter"}),(0,r.jsx)(d.th,{children:"Description"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"routes"}),(0,r.jsx)(d.td,{children:"Path(s)  Paths to route to specific upstreams or to respond with configured body."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"route-rate"}),(0,r.jsx)(d.td,{children:"Parameters for vote endpoint."})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"applications"}),(0,r.jsxs)(d.td,{children:["A list of deployed AI DIAL Applications and their parameters:",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"endpoint"}),": AI DIAL Application API for chat completions.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"iconUrl"}),": a path to the icon used for the AI DIAL Application on the UI.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"description"}),": a brief description of the AI DIAL Application rendered on the UI.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"displayName"}),": a name of the AI DIAL Application used on the UI."]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"models"}),(0,r.jsxs)(d.td,{children:["A list of deployed models and their parameters:",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"type"}),": specify ",(0,r.jsx)(d.code,{children:"chat"})," or ",(0,r.jsx)(d.code,{children:"embedding"})," model type.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"iconUrl"}),": a path to the icon used for the model on the UI.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"description"}),": a brief description of the model rendered on the UI.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"displayName"}),": a name of the model rendered on the UI.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"endpoint"}),": model API for chat completions or embeddings.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"upstreams"}),": upstreams are used for load-balancing. A request will be sent to the configured model endpoint and will contain X-UPSTREAM-ENDPOINT and X-UPSTREAM-KEY headers:",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"endpoint"}),": model endpoint.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"key"}),": your API key."]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"keys"}),(0,r.jsxs)(d.td,{children:["API Keys parameters:",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"<proxyKey>"}),": your API key.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"project"}),": a project name this key is assigned to.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"role"}),": name of one of the configured roles. Defines permissions for the key.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"userAuth"}),": can be disabled/enabled/optional.",(0,r.jsx)("br",{}),(0,r.jsx)(d.strong,{children:"Disabled"})," - Authorization header is ignored and not sent to upstream.",(0,r.jsx)("br",{}),(0,r.jsx)(d.strong,{children:"Enabled"})," - Authorization header is required and sent to upstream. Optional - Authorization header is optional and sent to upstream if present."]})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"roles"}),(0,r.jsxs)(d.td,{children:["A list of configured roles with their limitations. Specify a role name and in limits, specify models (can be models, Applications, Addons, Assistants) and limitation configurations:",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"minute"}),": the total tokens per minute limit that can be sent to the model is managed using a floating window approach. This technique ensures a well-distributed rate-limiting mechanism, allowing control over the number of tokens sent to the model within a defined time frame, typically a one-minute window.",(0,r.jsx)("br",{}),(0,r.jsx)(d.code,{children:"day"}),": the total tokens per day limit that can be sent to the model is managed using a floating window approach. This method ensures a balanced rate-limiting mechanism, allowing control over the number of tokens sent to the model within a specified time frame, typically a 24-hour window.",(0,r.jsx)("br",{}),"Refer to ",(0,r.jsx)(d.a,{href:"/tutorials/roles-management",children:"Roles Management"})," to learn more."]})]})]})]}),"\n",(0,r.jsx)(d.h2,{id:"configuration-of-adapters",children:"Configuration of Adapters"}),"\n",(0,r.jsx)(d.p,{children:"To work with Azure, AWS or GCP models we use applications called Adapters. You can configure Adapters in the configuration file."}),"\n",(0,r.jsx)(d.p,{children:"Refer to these repositories to view a complete documentation for:"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-adapter-bedrock",children:"Adapter for Bedrock"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-adapter-vertexai",children:"Adapter for Vertex"})}),"\n",(0,r.jsx)(d.li,{children:(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial-adapter-openai",children:"Adapter for OpenAI"})}),"\n"]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsxs)(d.p,{children:["Refer to the provided ",(0,r.jsx)(d.a,{href:"https://github.com/epam/ai-dial/tree/main/docs/Deployment/dialConfig.yaml#L263",children:"example of config"})," to view configuration examples."]}),"\n"]})]})}function x(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,d,n)=>{n.d(d,{Z:()=>c,a:()=>t});var r=n(7294);const s={},i=r.createContext(s);function t(e){const d=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:d},e.children)}}}]);