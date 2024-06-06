"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[372],{1904:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=i(5893),o=i(1151);const l={},s="How to Set Keycloak as Identity Provider",r={id:"Deployment/idp-configuration/keycloak",title:"keycloak",description:"- Introduction",source:"@site/docs/Deployment/idp-configuration/keycloak.md",sourceDirName:"Deployment/idp-configuration",slug:"/Deployment/idp-configuration/keycloak",permalink:"/Deployment/idp-configuration/keycloak",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"CustomSideBar",previous:{title:"google",permalink:"/Deployment/idp-configuration/google"},next:{title:"okta",permalink:"/Deployment/idp-configuration/okta"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration Guidelines",id:"configuration-guidelines",level:2},{value:"Configure Keycloak",id:"configure-keycloak",level:3},{value:"Configuration in Keycloak Admin Console",id:"configuration-in-keycloak-admin-console",level:4},{value:"Configuration in Keycloak Config CLI",id:"configuration-in-keycloak-config-cli",level:4},{value:"Configure AI DIAL",id:"configure-ai-dial",level:3},{value:"AI DIAL Chat Settings",id:"ai-dial-chat-settings",level:4},{value:"AI DIAL Core Settings",id:"ai-dial-core-settings",level:4},{value:"Assignment of Roles",id:"assignment-of-roles",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-set-keycloak-as-identity-provider",children:"How to Set Keycloak as Identity Provider"}),"\n",(0,t.jsxs)("div",{class:"docusaurus-ignore",children:[(0,t.jsx)(n.h1,{id:"table-of-contents",children:"Table of Contents"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configure-keycloak",children:"Configure Keycloak"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-in-keycloak-admin-console",children:"Configuration in Keycloak Admin Console"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-in-keycloak-config-cli",children:"Configuration in Keycloak Config CLI"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ai-dial-chat-settings",children:"AI DIAL Chat Settings"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#ai-dial-core-settings",children:"AI DIAL Core Settings"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#assignment-of-roles",children:"Assignment of Roles"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["This basic tutorial demonstrates the steps to create a REALM in ",(0,t.jsx)(n.a,{href:"https://www.keycloak.org",children:"Keycloak"})," and use it as an identity and access management solution for AI DIAL users."]}),"\n",(0,t.jsx)(n.p,{children:"In AI DIAL, you can assign roles to Models, Applications, Addons, and Assistants to restrict the number of tokens that can be transmitted in a specific time frame. These roles and their limitations can be created in external systems and then assigned in AI DIAL's configuration."}),"\n",(0,t.jsx)(n.h2,{id:"configuration-guidelines",children:"Configuration Guidelines"}),"\n",(0,t.jsx)(n.h3,{id:"configure-keycloak",children:"Configure Keycloak"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Replace ",(0,t.jsx)(n.code,{children:"<chat_url>"})," with the actual address of your AI DIAL Chat application."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to configure Keycloak: via Admin Console or using a CLI tool."}),"\n",(0,t.jsx)(n.h4,{id:"configuration-in-keycloak-admin-console",children:"Configuration in Keycloak Admin Console"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to configure Keycloak in Admin Console:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create a Client:"})," ",(0,t.jsx)(n.a,{href:"https://www.keycloak.org/docs/latest/server_admin/#proc-creating-oidc-client_server_administration_guide",children:"Create an OpenID Connect client"})," in Keycloak with the following settings:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Client type: OpenID Connect"}),"\n",(0,t.jsxs)(n.li,{children:["Client ID: ",(0,t.jsx)(n.code,{children:"dial-chat"})]}),"\n",(0,t.jsx)(n.li,{children:"Client authentication: On"}),"\n",(0,t.jsxs)(n.li,{children:["Root URL: ",(0,t.jsx)(n.code,{children:"<chat_url>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Valid redirect URIs: ",(0,t.jsx)(n.code,{children:"<chat_url>/*"})]}),"\n",(0,t.jsxs)(n.li,{children:["Home URL: ",(0,t.jsx)(n.code,{children:"<chat_url>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Web origins: ",(0,t.jsx)(n.code,{children:"<chat_url>"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Collect configuration parameters:"})," in this step, you will collect parameters that will be required for ",(0,t.jsx)(n.a,{href:"#ai-dial-chat-settings",children:"AI DIAL configuration"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"Clients/Client details/Settings"}),", record the ",(0,t.jsx)(n.strong,{children:"Client ID"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"Clients/Client details/Credentials"}),", click on view ",(0,t.jsx)(n.strong,{children:"Client secret"})," and record it."]}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"Realm settings/General"}),", record the ",(0,t.jsx)(n.strong,{children:"Realm ID"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create Users:"})," create necessary ",(0,t.jsx)(n.a,{href:"https://www.keycloak.org/docs/latest/server_admin/#proc-creating-user_server_administration_guide",children:"Users"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["(Optional) ",(0,t.jsx)(n.strong,{children:"Create and Assign Roles:"})," under the ",(0,t.jsx)(n.strong,{children:"Clients/Client details/Roles"}),", create necessary ",(0,t.jsx)(n.a,{href:"https://www.keycloak.org/docs/latest/server_admin/#con-client-roles_server_administration_guide",children:"Client roles"}),". After that ",(0,t.jsx)(n.a,{href:"https://www.keycloak.org/docs/latest/server_admin/#proc-assigning-role-mappings_server_administration_guide",children:"assign roles to users"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"configuration-in-keycloak-config-cli",children:"Configuration in Keycloak Config CLI"}),"\n",(0,t.jsxs)(n.p,{children:["For setting up Keycloak, which is included in the AI DIAL Helm chart, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/bitnami/containers/tree/main/bitnami/keycloak-config-cli#configuration",children:"Keycloak Config CLI"}),". We suggest using the following configuration, which can be passed to ",(0,t.jsx)(n.code,{children:'keycloak.keycloakConfigCli.configuration."realm\\.yaml"'})," in the DIAL ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-helm/blob/56b41d6f3c2148b42bdd12c1dcecc9711e23fd6d/charts/dial/values.yaml#L29",children:"Helm chart"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Replace ",(0,t.jsx)(n.code,{children:"<fields>"})," before applying this configuration."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'realm: "dial"\ndisplayName: "dial"\nenabled: true\naccessTokenLifespan: 86400\nssoSessionIdleTimeout: 86400\nssoSessionMaxLifespan: 86400\nroles:\n  client:\n    dial-chat:\n      - name: admin\n        description: "AI DIAL chat admin role"\n        composite: false\n        clientRole: true\ngroups:\n  - name: DIAL\n    subGroups:\n      - name: "admin"\n        clientRoles:\n          dial-chat: ["admin"]\nclientScopes:\n  - name: dial\n    description: "dial scope"\n    protocol: openid-connect\n    attributes:\n      include.in.token.scope: "true"\n      display.on.consent.screen: "true"\n      consent.screen.text: ""\n    protocolMappers:\n      - name: "Audience for Dial"\n        protocol: openid-connect\n        protocolMapper: oidc-audience-mapper\n        consentRequired: false\n        config:\n          included.client.audience: dial-chat\n          id.token.claim: false\n          access.token.claim: true\nclients:\n  - clientId: dial-chat\n    name: dial-chat\n    description: AI DIAL chat client\n    rootUrl: https://<chat_url>\n    adminUrl: https://<chat_url>\n    baseUrl: https://<chat_url>\n    surrogateAuthRequired: false\n    enabled: true\n    clientAuthenticatorType: client-secret\n    secret: <keycloak_client_secret>\n    redirectUris:\n      - https://<chat_url>/*\n    webOrigins:\n      - https://<chat_url>\n    notBefore: 0\n    bearerOnly: false\n    consentRequired: false\n    standardFlowEnabled: true\n    implicitFlowEnabled: false\n    directAccessGrantsEnabled: true\n    serviceAccountsEnabled: false\n    publicClient: false\n    frontchannelLogout: true\n    protocol: openid-connect\n    attributes:\n      oidc.ciba.grant.enabled: "false"\n      client.secret.creation.time: "1691398764"\n      backchannel.logout.session.required: "true"\n      display.on.consent.screen: "false"\n      oauth2.device.authorization.grant.enabled: "false"\n      backchannel.logout.revoke.offline.tokens: "false"\n    authenticationFlowBindingOverrides: {}\n    fullScopeAllowed: true\n    nodeReRegistrationTimeout: -1\n    defaultClientScopes:\n      - web-origins\n      - acr\n      - profile\n      - roles\n      - email\n      - dial\n    optionalClientScopes:\n      - address\n      - phone\n      - offline_access\n      - microprofile-jwt\n'})}),"\n",(0,t.jsx)(n.h3,{id:"configure-ai-dial",children:"Configure AI DIAL"}),"\n",(0,t.jsx)(n.p,{children:"By configuring both AI DIAL Chat and AI DIAL Core with the necessary environment variables, you will enable them to work together seamlessly with Identity Provider for authentication and authorization purposes."}),"\n",(0,t.jsx)(n.p,{children:"To configure AI DIAL Chat and AI DIAL Core to work with Keycloak, follow these steps:"}),"\n",(0,t.jsx)(n.h4,{id:"ai-dial-chat-settings",children:"AI DIAL Chat Settings"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following environment variables to AI DIAL Chat configuration. Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-chat/blob/development/apps/chat/README.md#environment-variables",children:"AI DIAL Chat"})," to learn more."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'AUTH_KEYCLOAK_HOST: "https://<keycloak_host>/realms/<keycloak_realm_id>"\nAUTH_KEYCLOAK_CLIENT_ID: "<keycloak_client_id>"\nAUTH_KEYCLOAK_SECRET: "<keycloak_client_secret>"\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AUTH_KEYCLOAK_HOST"})," example: ",(0,t.jsx)(n.code,{children:"https://keycloak.example.com/realms/dial"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ai-dial-core-settings",children:"AI DIAL Core Settings"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following parameters to AI DIAL Core ",(0,t.jsx)(n.strong,{children:"static"})," settings. Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"AI DIAL Core"})," for more details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'aidial.identityProviders.keycloak.jwksUrl: "<keycloak_jwks_uri>"\naidial.identityProviders.keycloak.rolePath: "<keycloak_role_path>"\naidial.identityProviders.keycloak.issuerPattern: <issuerPattern>\naidial.identityProviders.keycloak.loggingKey: "sub" \naidial.identityProviders.keycloak.loggingSalt: "loggingSalt" # strong generated string\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"keycloak_jwks_uri"})," example: ",(0,t.jsx)(n.code,{children:"https://<keycloak_host>/realms/<keycloak_realm_id>/protocol/openid-connect/certs"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"keycloak_role_path"})," example: ",(0,t.jsx)(n.code,{children:"resource_access.dial-chat.roles"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"issuerPattern"})," example: ",(0,t.jsx)(n.code,{children:"'^https:\\/\\/keycloak\\.example\\.com.+$'"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"assignment-of-roles",children:"Assignment of Roles"}),"\n",(0,t.jsxs)(n.p,{children:["Once all the above steps are completed, including the ones marked as ",(0,t.jsx)(n.strong,{children:"Optional"}),", you can assign roles to Models, Applications, Addons, and Assistants."]}),"\n",(0,t.jsx)(n.p,{children:"In AI DIAL Core:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#static-settings",children:"Static settings"}),": as value for ",(0,t.jsx)(n.code,{children:"aidial.identityProviders.keycloak.rolePath"})," provide a role path from Keycloak."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-core?tab=readme-ov-file#dynamic-settings",children:"Dynamic settings"}),": for ",(0,t.jsx)(n.code,{children:"userRoles"})," provide a specific role name(s)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ",(0,t.jsx)(n.code,{children:'"keycloak-role-name"'})," role from the ",(0,t.jsx)(n.code,{children:"<keycloak_role_path>"})," is configured for ",(0,t.jsx)(n.code,{children:"chat-gpt-35-turbo"})," model:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# Dynamic settings of AI DIAL Core\n"models": {\n    "chat-gpt-35-turbo": {\n      "type": "chat",\n      "endpoint" : "http://localhost:7001/v1/openai/deployments/gpt-35-turbo/chat/completions",\n      "upstreams": [\n        {"endpoint": "http://localhost:7001", "key": "modelKey1"}\n      ],\n      "userRoles": ["keycloak-role-name"]\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(7294);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);