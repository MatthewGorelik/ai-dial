"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"CustomSideBar":[{"type":"link","label":"Home","href":"/","docId":"README","unlisted":false},{"type":"link","label":"Quick Start","href":"/quick-start","docId":"quick-start","unlisted":false},{"type":"link","label":"Architecture","href":"/architecture","docId":"architecture","unlisted":false},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Chat with Application","href":"/tutorials/quick-start-with-application","docId":"tutorials/quick-start-with-application","unlisted":false},{"type":"link","label":"Chat with OpenAI Model","href":"/tutorials/quick-start-model","docId":"tutorials/quick-start-model","unlisted":false},{"type":"link","label":"Chat with Addon","href":"/tutorials/quick-start-with-addon","docId":"tutorials/quick-start-with-addon","unlisted":false},{"type":"link","label":"API Keys Roles and Limits","href":"/tutorials/roles-management","docId":"tutorials/roles-management","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"link","label":"Chat User Guide","href":"/user-guide","docId":"user-guide","unlisted":false},{"type":"category","label":"Deployment","items":[{"type":"link","label":"Helm Deployment","href":"https://github.com/epam/ai-dial-helm/tree/main/charts/dial/examples/generic/simple"},{"type":"link","label":"Configuration","href":"/Deployment/configuration","docId":"Deployment/configuration","unlisted":false},{"type":"category","label":"IDP Configuration","items":[{"type":"link","label":"Auth0","href":"/Deployment/idp-configuration/auth0","docId":"Deployment/idp-configuration/auth0","unlisted":false},{"type":"link","label":"AWS Cognito","href":"/Deployment/idp-configuration/cognito","docId":"Deployment/idp-configuration/cognito","unlisted":false},{"type":"link","label":"Microsoft Entra","href":"/Deployment/idp-configuration/entraID","docId":"Deployment/idp-configuration/entraID","unlisted":false},{"type":"link","label":"Google OAuth2","href":"/Deployment/idp-configuration/google","docId":"Deployment/idp-configuration/google","unlisted":false},{"type":"link","label":"Keycloak","href":"/Deployment/idp-configuration/keycloak","docId":"Deployment/idp-configuration/keycloak","unlisted":false},{"type":"link","label":"Okta","href":"/Deployment/idp-configuration/okta","docId":"Deployment/idp-configuration/okta","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"link","label":"OpenAI Model Deployment","href":"/Deployment/OpenAI Model Deployment","docId":"Deployment/OpenAI Model Deployment","unlisted":false},{"type":"link","label":"Vertex Model Deployment","href":"/Deployment/Vertex Model Deployment","docId":"Deployment/Vertex Model Deployment","unlisted":false},{"type":"link","label":"Bedrock Model Deployment","href":"/Deployment/Bedrock Model Deployment","docId":"Deployment/Bedrock Model Deployment","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Cookbook","items":[{"type":"link","label":"How to call text-to-text DIAL applications","href":"/Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications","docId":"Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications","unlisted":false},{"type":"link","label":"How to call text-to-image DIAL applications","href":"/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications","docId":"Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications","unlisted":false},{"type":"link","label":"How to call image-to-text DIAL applications","href":"/Cookbook/dial-cookbook/examples/how_to_call_image_to_text_applications","docId":"Cookbook/dial-cookbook/examples/how_to_call_image_to_text_applications","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"link","label":"API Reference","href":"https://epam-rail.com/dial_api"}]},"docs":{"architecture":{"id":"architecture","title":"Architecture","description":"Our Vision","sidebar":"CustomSideBar"},"Cookbook/dial-cookbook/examples/how_to_call_image_to_text_applications":{"id":"Cookbook/dial-cookbook/examples/how_to_call_image_to_text_applications","title":"How to call image-to-text DIAL applications","description":"From [this","sidebar":"CustomSideBar"},"Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications":{"id":"Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications","title":"How to call text-to-image DIAL applications","description":"From [this","sidebar":"CustomSideBar"},"Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications":{"id":"Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications","title":"How to call text-to-text DIAL applications","description":"From [this","sidebar":"CustomSideBar"},"Deployment/Bedrock Model Deployment":{"id":"Deployment/Bedrock Model Deployment","title":"Bedrock Model Deployment","description":"In this instruction, you will learn how to create Bedrock model in AWS and use it in AI DIAL config.","sidebar":"CustomSideBar"},"Deployment/configuration":{"id":"Deployment/configuration","title":"configuration","description":"Important: it is assumed that you have a working knowledge of standard Helm chart parameters in order to define them within the configuration file.","sidebar":"CustomSideBar"},"Deployment/idp-configuration/auth0":{"id":"Deployment/idp-configuration/auth0","title":"auth0","description":"Table of Contents","sidebar":"CustomSideBar"},"Deployment/idp-configuration/cognito":{"id":"Deployment/idp-configuration/cognito","title":"cognito","description":"- Introduction","sidebar":"CustomSideBar"},"Deployment/idp-configuration/entraID":{"id":"Deployment/idp-configuration/entraID","title":"entraID","description":"- Introduction","sidebar":"CustomSideBar"},"Deployment/idp-configuration/google":{"id":"Deployment/idp-configuration/google","title":"google","description":"- Introduction","sidebar":"CustomSideBar"},"Deployment/idp-configuration/keycloak":{"id":"Deployment/idp-configuration/keycloak","title":"keycloak","description":"- Introduction","sidebar":"CustomSideBar"},"Deployment/idp-configuration/okta":{"id":"Deployment/idp-configuration/okta","title":"okta","description":"- Introduction","sidebar":"CustomSideBar"},"Deployment/OpenAI Model Deployment":{"id":"Deployment/OpenAI Model Deployment","title":"OpenAI Model Deployment","description":"From this instruction, you will learn how to create an Azure OpenAI model GPT-3.5-turbo/GPT-4 and use it in AI DIAL config.","sidebar":"CustomSideBar"},"Deployment/Vertex Model Deployment":{"id":"Deployment/Vertex Model Deployment","title":"Vertex Model Deployment","description":"In this instruction, you will learn how to create VertexAI model in Google Cloud Platform and use it in AI DIAL config.","sidebar":"CustomSideBar"},"quick-start":{"id":"quick-start","title":"Quick Start","description":"Follow this tutorial to launch AI DIAL Chat with Echo application. As a result, you will be able to access Chat on http3000/ and use Echo application to mirror your prompts.","sidebar":"CustomSideBar"},"README":{"id":"README","title":"AI DIAL Documentation","description":"Project Overview and Contribution Guide","sidebar":"CustomSideBar"},"tutorials/azure-ad-configuration":{"id":"tutorials/azure-ad-configuration","title":"How to Enable Authentication with Azure AD","description":"To enable authentication with Azure AD, you can use Chat environment variables."},"tutorials/quick-start-model":{"id":"tutorials/quick-start-model","title":"Launch AI DIAL Chat with Azure Model","description":"Introduction","sidebar":"CustomSideBar"},"tutorials/quick-start-with-addon":{"id":"tutorials/quick-start-with-addon","title":"Launch AI DIAL Chat with a Sample Addon","description":"Introduction","sidebar":"CustomSideBar"},"tutorials/quick-start-with-application":{"id":"tutorials/quick-start-with-application","title":"Launch AI DIAL Chat with a Sample Application","description":"Introduction","sidebar":"CustomSideBar"},"tutorials/roles-management":{"id":"tutorials/roles-management","title":"Roles Management for API Keys","description":"Refer to IDP Configuration to learn how to set and configure supported identity providers.","sidebar":"CustomSideBar"},"user-guide":{"id":"user-guide","title":"Chat User Guide","description":"Interface Components","sidebar":"CustomSideBar"}}}')}}]);