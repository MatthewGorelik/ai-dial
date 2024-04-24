"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[924],{1294:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var t=o(5893),l=o(1151);const a={title:"How to call text-to-text DIAL applications"},s=void 0,i={id:"Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications",title:"How to call text-to-text DIAL applications",description:"From [this",source:"@site/docs/Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications.mdx",sourceDirName:"Cookbook/dial-cookbook/examples",slug:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"How to call text-to-text DIAL applications"},sidebar:"CustomSideBar",previous:{title:"cognito",permalink:"/Deployment/idp-configuration/cognito"},next:{title:"How to call text-to-image DIAL applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications"}},c={},r=[{value:"Setup",id:"setup",level:2},{value:"Using Curl",id:"using-curl",level:2},{value:"Using Python library Requests",id:"using-python-library-requests",level:2},{value:"Using OpenAI Python SDK",id:"using-openai-python-sdk",level:2},{value:"Using LangChain",id:"using-langchain",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["From ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial/blob/main/dial-cookbook/examples/how_to_call_text_to_text_applications.ipynb",children:"this\nnotebook"}),",\nyou can learn how to call text-to-text DIAL applications via ",(0,t.jsx)(n.a,{href:"https://epam-rail.com/dial_api#/paths/~1openai~1deployments~1%7BDeployment%20Name%7D~1chat~1completions/post",children:"DIAL API\nchat/completions"}),"\ncall."]}),"\n",(0,t.jsxs)(n.p,{children:["For this example, we use a sample text-to-text application called\n",(0,t.jsx)(n.strong,{children:"Echo"}),", which returns the content of the last user message."]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1"}),": install the necessary dependencies and import the libraries\nwe are going to use."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"!pip install requests==2.31.0\n!pip install openai==1.9.0\n!pip install langchain-openai==0.0.3\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\nimport openai\nimport langchain_openai\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2"}),": if DIAL Core server is already configured and running, set\nenv vars ",(0,t.jsx)(n.code,{children:"DIAL_URL"})," and ",(0,t.jsx)(n.code,{children:"APP_NAME"})," to point to the DIAL Core server and\nthe text-to-text application (or model) you want to use."]}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, run the ",(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial/blob/main/dial-cookbook/docker-compose.yml",children:"docker-compose\nfile"}),"\nin a separate terminal to start the ",(0,t.jsx)(n.strong,{children:"DIAL Core"})," server locally along\nwith a sample ",(0,t.jsx)(n.strong,{children:"echo"})," application. The DIAL Core will become available\nat ",(0,t.jsx)(n.code,{children:"http://localhost:8080"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"docker compose up core echo\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3"}),": configure ",(0,t.jsx)(n.code,{children:"DIAL_URL"})," and ",(0,t.jsx)(n.code,{children:"APP_NAME"})," env vars. The default\nvalues are configured under the assumption that DIAL Core is running\nlocally via the docker-compose file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\n\ndial_url = os.environ.get("DIAL_URL", "http://localhost:8080")\nos.environ["DIAL_URL"] = dial_url\n\napp_name = os.environ.get("APP_NAME", "echo")\nos.environ["APP_NAME"] = app_name\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-curl",children:"Using Curl"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The DIAL deployment is called ",(0,t.jsx)(n.code,{children:"app_name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The local DIAL Core server URL is ",(0,t.jsx)(n.code,{children:"dial_url"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The OpenAI API version we are going to use is ",(0,t.jsx)(n.code,{children:"2023-12-01-preview"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Therefore, the application is accessible via the following URL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"${DIAL_URL}/openai/deployments/${APP_NAME}/chat/completions?api-version=2023-12-01-preview\n"})}),"\n",(0,t.jsx)(n.p,{children:"The curl command that requests completion for a single message chat is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!curl -X POST "${DIAL_URL}/openai/deployments/${APP_NAME}/chat/completions?api-version=2023-12-01-preview" \\\n  -H "Api-Key:dial_api_key" \\\n  -H "Content-Type:application/json" \\\n  -d \'{"messages": [{"role": "user", "content": "Hello world!"}]}\'\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{"choices":[{"index":0,"finish_reason":"stop","message":{"role":"assistant","content":"Hello world!"}}],"usage":null,"id":"37ffdc98-da4d-48e8-8dec-2d0ec0fd94b1","created":1707310417,"object":"chat.completion"}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-python-library-requests",children:"Using Python library Requests"}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s make an HTTP request using the Python library ",(0,t.jsx)(n.code,{children:"requests"})," and make\nsure the output message matches the message in the request."]}),"\n",(0,t.jsx)(n.p,{children:"The arguments are identical to the curl command above."}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,t.jsx)(n.strong,{children:"non-streaming"})," mode first:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'response = requests.post(\n    f"{dial_url}/openai/deployments/{app_name}/chat/completions?api-version=2023-12-01-preview",\n    headers={"Api-Key": "dial_api_key"},\n    json={"messages": [{"role": "user", "content": "Hello world!"}]},\n)\nbody = response.json()\ndisplay(body)\ncompletion = body["choices"][0]["message"]["content"]\nprint(f"Completion: {completion!r}")\nassert completion == "Hello world!", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"{'choices': [{'index': 0,\n   'finish_reason': 'stop',\n   'message': {'role': 'assistant', 'content': 'Hello world!'}}],\n 'usage': None,\n 'id': 'dd3647aa-2496-461c-adc4-746e323ee13f',\n 'created': 1707310430,\n 'object': 'chat.completion'}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Completion: 'Hello world!'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.strong,{children:"streaming is enabled"}),", the chat completion returns a sequence of\nmessages, each containing a chunk of a generated response:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'response = requests.post(\n    f"{dial_url}/openai/deployments/{app_name}/chat/completions?api-version=2023-12-01-preview",\n    headers={"Api-Key": "dial_api_key"},\n    json={"messages": [{"role": "user", "content": "Hello world!"}], "stream": True},\n)\nfor chunk in response.iter_lines():\n    print(chunk)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'b\'data: {"choices":[{"index":0,"finish_reason":null,"delta":{"role":"assistant"}}],"usage":null,"id":"3c231303-2c25-48a0-bf5e-4e46243ba2eb","created":1707310448,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: {"choices":[{"index":0,"finish_reason":null,"delta":{"content":"Hello world!"}}],"usage":null,"id":"3c231303-2c25-48a0-bf5e-4e46243ba2eb","created":1707310448,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: {"choices":[{"index":0,"finish_reason":"stop","delta":{}}],"usage":null,"id":"3c231303-2c25-48a0-bf5e-4e46243ba2eb","created":1707310448,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: [DONE]\'\nb\'\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"using-openai-python-sdk",children:"Using OpenAI Python SDK"}),"\n",(0,t.jsxs)(n.p,{children:["The DIAL deployment could be called using ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/openai/",children:"OpenAI Python\nSDK"})," as well."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'openai_client = openai.AzureOpenAI(\n    azure_endpoint=dial_url,\n    azure_deployment=app_name,\n    api_key="dial_api_key",\n    api_version="2023-12-01-preview",\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,t.jsx)(n.strong,{children:"non-streaming"})," mode:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'\nchat_completion = openai_client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "Hello world!",\n        }\n    ],\n    model=app_name,\n)\nprint(chat_completion)\ncompletion = chat_completion.choices[0].message.content\nprint(f"Completion: {completion!r}")\nassert completion == "Hello world!", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"ChatCompletion(id='1d020e70-9de6-402a-a2e0-cb45e340aafa', choices=[Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='Hello world!', role='assistant', function_call=None, tool_calls=None))], created=1707310540, model=None, object='chat.completion', system_fingerprint=None, usage=None)\nCompletion: 'Hello world!'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,t.jsx)(n.strong,{children:"streaming"})," mode:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'chat_completion = openai_client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "Hello world!",\n        }\n    ],\n    stream=True,\n    model=app_name,\n)\ncompletion = ""\nfor chunk in chat_completion:\n    print(chunk)\n    content = chunk.choices[0].delta.content\n    if content:\n        completion += content\nprint(f"Completion: {completion!r}")\nassert completion == "Hello world!", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"ChatCompletionChunk(id='3a99fb21-d47c-411d-a2c2-6f51ea9d12f6', choices=[Choice(delta=ChoiceDelta(content=None, function_call=None, role='assistant', tool_calls=None), finish_reason=None, index=0, logprobs=None)], created=1707310529, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nChatCompletionChunk(id='3a99fb21-d47c-411d-a2c2-6f51ea9d12f6', choices=[Choice(delta=ChoiceDelta(content='Hello world!', function_call=None, role=None, tool_calls=None), finish_reason=None, index=0, logprobs=None)], created=1707310529, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nChatCompletionChunk(id='3a99fb21-d47c-411d-a2c2-6f51ea9d12f6', choices=[Choice(delta=ChoiceDelta(content=None, function_call=None, role=None, tool_calls=None), finish_reason='stop', index=0, logprobs=None)], created=1707310529, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nCompletion: 'Hello world!'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-langchain",children:"Using LangChain"}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s call the application via the\n",(0,t.jsx)(n.a,{href:"https://pypi.org/project/langchain-openai/",children:"LangChain"})," library."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain_core.messages import HumanMessage\n\nllm = langchain_openai.AzureChatOpenAI(\n    azure_endpoint=dial_url,\n    azure_deployment=app_name,\n    api_key="dial_api_key",\n    api_version="2023-12-01-preview",\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,t.jsx)(n.strong,{children:"non-streaming"})," mode:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'output = llm.generate(messages=[[HumanMessage(content="Hello world!")]])\nprint(output)\ncompletion = output.generations[0][0].text\nprint(f"Completion: {completion!r}")\nassert completion == "Hello world!", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"generations=[[ChatGeneration(text='Hello world!', generation_info={'finish_reason': 'stop', 'logprobs': None}, message=AIMessage(content='Hello world!'))]] llm_output={'token_usage': {}, 'model_name': 'gpt-3.5-turbo'} run=[RunInfo(run_id=UUID('ca6e6bbf-84cb-489a-abcf-9c6ed922713d'))]\nCompletion: 'Hello world!'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,t.jsx)(n.strong,{children:"streaming"})," mode:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'output = llm.stream(input=[HumanMessage(content="Hello world!")])\ncompletion = ""\nfor chunk in output:\n    print(chunk.dict())\n    completion += chunk.content\nprint(f"Completion: {completion!r}")\nassert completion == "Hello world!", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"{'content': '', 'additional_kwargs': {}, 'type': 'AIMessageChunk', 'example': False}\n{'content': 'Hello world!', 'additional_kwargs': {}, 'type': 'AIMessageChunk', 'example': False}\n{'content': '', 'additional_kwargs': {}, 'type': 'AIMessageChunk', 'example': False}\nCompletion: 'Hello world!'\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var t=o(7294);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);