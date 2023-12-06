"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[941],{2551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=t(5893),r=t(1151);const i={},c="GCP VertexAI Model Deployment",o={id:"Deployment/Vertex Model Deployment",title:"GCP VertexAI Model Deployment",description:"In this instruction, you will learn how to create VertexAI model in Google Cloud Platform and deploy it in AI DIAL config.",source:"@site/docs/Deployment/Vertex Model Deployment.md",sourceDirName:"Deployment",slug:"/Deployment/Vertex Model Deployment",permalink:"/Deployment/Vertex Model Deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"Azure Model Deployment",permalink:"/Deployment/Azure Model Deployment"},next:{title:"Configuration",permalink:"/Deployment/configuration"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Step 1: Enable Vertex AI API",id:"step-1-enable-vertex-ai-api",level:2},{value:"Step 2: Create a Service Account",id:"step-2-create-a-service-account",level:2},{value:"Step 3: Configure AI DIAL Adapter",id:"step-3-configure-ai-dial-adapter",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gcp-vertexai-model-deployment",children:"GCP VertexAI Model Deployment"}),"\n",(0,s.jsx)(n.p,{children:"In this instruction, you will learn how to create VertexAI model in Google Cloud Platform and deploy it in AI DIAL config."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Active Google Cloud project"}),"\n",(0,s.jsx)(n.li,{children:"Enabled billing for the project"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/featurestore/setup",children:"Google Cloud Documentation"})," to learn how to create an account and enable billing."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#step-1-enable-vertex-ai-api",children:"Enable Vertex AI API"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#step-2-create-a-service-account",children:"Create a Service Account"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#step-3-configure-ai-dial-adapter",children:"Configure AI DIAL Adapter"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-enable-vertex-ai-api",children:"Step 1: Enable Vertex AI API"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log into your Google Cloud account."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the navigation panel on the left, in ",(0,s.jsx)(n.strong,{children:"APIs & Services"}),", select ",(0,s.jsx)(n.strong,{children:"Enable APIs and Services"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3174).Z+"",width:"489",height:"417"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.strong,{children:"APIs and Services"})," click ",(0,s.jsx)(n.strong,{children:"+ Enable APIs and Services"})," to access the API library."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the search bar, type ",(0,s.jsx)(n.strong,{children:"Vertex AI API"})," and select the ",(0,s.jsx)(n.strong,{children:"Vertex AI API"})," panel when it appears in search results."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Enable"})," to turn on the Vertex AI API for your Google Cloud project.\n",(0,s.jsx)(n.img,{src:t(2405).Z+"",width:"704",height:"288"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-2-create-a-service-account",children:"Step 2: Create a Service Account"}),"\n",(0,s.jsx)(n.p,{children:"To communicate with VertexAI models, it is necessary to have a service account."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"To create a Service Account"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your Google Cloud account, in the main navigation menu find ",(0,s.jsx)(n.strong,{children:"IAM & Admin"})," and navigate to ",(0,s.jsx)(n.strong,{children:"Service Accounts"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(1323).Z+"",width:"473",height:"570"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To create a new service account, click ",(0,s.jsx)(n.strong,{children:"+ Create Service Account"})," and fill in the details for your new service account:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3657).Z+"",width:"1137",height:"94"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fill in the ",(0,s.jsx)(n.strong,{children:"Service account details"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the next step ",(0,s.jsx)(n.strong,{children:"Grant this service account access to project"}),", add ",(0,s.jsx)(n.strong,{children:"Vertex AI Custom Code Service Agent"})," role. Refer to ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/general/access-control#grant_service_agents_access_to_other_resources",children:"GCP Documentation"})," to learn more."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3606).Z+"",width:"644",height:"588"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"})," to complete."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The new service account appears on the Service Account page. Click it to view the details:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"In KEYS"}),", create a key for this service account and download it in JSON format."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(9257).Z+"",width:"1033",height:"650"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-3-configure-ai-dial-adapter",children:"Step 3: Configure AI DIAL Adapter"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"https://github.com/epam/ai-dial/blob/86773b4b7a716a60684d36d6d7739bc64aaba80d/docs/Deployment/dialConfig.yaml#L288",children:"AI DIAL Config"})," to view a config example."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The JSON file with your model key should be mounted to a pod as a file. Please, use the most suitable way to perform it."}),"\n",(0,s.jsx)(n.p,{children:"Example of mounting using CSI drivers:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'vertexai:\n  enabled: true\n\n  image:\n    tag: imagetag\n\n  env:\n    GOOGLE_APPLICATION_CREDENTIALS: "/mnt/secrets-store/gcp-ai-proxy-key"\n    GCP_PROJECT_ID: you-project-id\n    DEFAULT_REGION: "your-region"\n    \n  serviceAccount:\n    create: \n    name: \n\n  extraVolumes:\n    - name: secrets\n      csi:\n        driver: secrets-store.csi.k8s.io\n        readOnly: true\n        volumeAttributes:\n          secretProviderClass: gcp-ai-key\n\n  extraVolumeMounts:\n    - name: secrets\n      readOnly: true\n      mountPath: /mnt/secrets-store\n\n  extraDeploy:\n    - apiVersion: secrets-store.csi.x-k8s.io/v1\n      kind: SecretProviderClass\n      metadata:\n        name: gcp-ai-key\n        namespace: your-k8s-namespace\n      spec:\n        provider: \n        parameters:\n          clientID: your-client-id\n          cloudName: your-cloud-name\n          keyvaultName: your-keyvault-name\n          objects: |\n            array:\n              - |\n                objectName: gcp-ai-proxy-key\n                objectType: secret\n                objectVersion: ""\ntenantID: your-tenant-id\n          usePodIdentity: "false"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1323:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gcp1-7aed2edb0016090050ca501faab5dcb1.png"},2405:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gcp11-9c908f17becd893bdf14929d65d49a11.png"},3606:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gcp12-202ba8ee08d6e2835a39bc758b681a7d.png"},3657:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gcp2-1-650a17336573ce11a9d04468a79964cd.png"},9257:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gcp6-b2a15d2b8f1ac67bc39fd2ab5d6ca7fc.png"},3174:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/gcp9-a2bde5d131ffffc6da4b0b9a9e678caa.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var s=t(7294);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);