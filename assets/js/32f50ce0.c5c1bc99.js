"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[457],{1502:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var t=a(5893),o=a(1151);const i={title:"How to call text-to-image DIAL applications"},s="How to call text-to-image DIAL applications",c={id:"Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications",title:"How to call text-to-image DIAL applications",description:"This notebook covers how to call text-to-image applications via [DIAL",source:"@site/docs/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications.mdx",sourceDirName:"Cookbook/dial-cookbook/examples",slug:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"How to call text-to-image DIAL applications"},sidebar:"CustomSideBar",previous:{title:"How to call text-to-text DIAL applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications"},next:{title:"How to call image-to-text DIAL applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_image_to_text_applications"}},l={},r=[{value:"Setup",id:"setup",level:2},{value:"Curl",id:"curl",level:2},{value:"Requests",id:"requests",level:2},{value:"OpenAI Python SDK",id:"openai-python-sdk",level:2},{value:"LangChain",id:"langchain",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-call-text-to-image-dial-applications",children:"How to call text-to-image DIAL applications"}),"\n",(0,t.jsxs)(n.p,{children:["This notebook covers how to call text-to-image applications via ",(0,t.jsx)(n.a,{href:"https://epam-rail.com/dial_api#/paths/~1openai~1deployments~1%7BDeployment%20Name%7D~1chat~1completions/post",children:"DIAL\nAPI\nchat/completions"}),"\ncall."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DIAL application"})," is a general term, which encompasses model adapters\nand application with custom logic."]}),"\n",(0,t.jsx)(n.p,{children:"DIAL currently supports a few text-to-image model adapters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-openai/",children:"DALL-E-3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-vertexai/",children:"Google Imagen"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-bedrock/",children:"Stability\ndiffusion"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These models follow the same pattern of usage - they take a last user\nmessage as a prompt for image generation and return the generated image\nin the response."}),"\n",(0,t.jsx)(n.p,{children:"As a simple proxy for these models we\u2019ll use an application which prints\nthe given user prompt as an image."}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"First, we install the necessary dependencies and import the libraries we\nwill be using."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"%pip install -r ../python-notebooks-runner/requirements.txt > /dev/null\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Note: you may need to restart the kernel to use updated packages.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\nimport openai\nimport langchain_openai\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Run docker compose in a separate terminal to start the DIAL Core server\nlocally along with the ",(0,t.jsx)(n.code,{children:"image-size"})," application."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"image-size"})," is a simple image-to-text application which returns\ndimensions of an attached image."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"(cd ..; docker compose up core image-size)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s now configure DIAL Core URL: it will be ",(0,t.jsx)(n.code,{children:"http://localhost:8080"}),",\nif the DIAL Core is run locally."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\ndial_url = os.environ.get("DIAL_URL", "http://localhost:8080")\nos.environ["DIAL_URL"] = dial_url\n'})}),"\n",(0,t.jsx)(n.p,{children:"Helpers to read images from disk and display images in the notebook:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import base64\n\nfrom IPython.display import Image as IPImage\nfrom IPython.display import display\n\ndef display_base64_image(image_base64):\n    image_binary = base64.b64decode(image_base64)\n    display(IPImage(data=image_binary))\n\ndef read_image_base64(image_path: str) -> str:\n    with open(image_path, "rb") as image_file:\n        image_base64 = base64.b64encode(image_file.read()).decode()\n    return image_base64\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"curl",children:"Curl"}),"\n",(0,t.jsxs)(n.p,{children:["The application deployment is called ",(0,t.jsx)(n.code,{children:"image-size"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The local DIAL Core server URL is ",(0,t.jsx)(n.code,{children:"dial_url"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The OpenAI API version we are going to use is ",(0,t.jsx)(n.code,{children:"2023-03-15-preview"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Hence the application is accessible via the url:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"http://${DIAL_URL}/openai/deployments/image-size/chat/completions?api-version=2023-03-15-preview\n"})}),"\n",(0,t.jsx)(n.p,{children:"The corresponding curl command with a singe message in the request is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'image_base64 = read_image_base64("./data/images/square.png")\nos.environ["IMAGE_BASE64"] = image_base64\n\ndisplay_base64_image(image_base64)\n\n!curl -X POST "${DIAL_URL}/openai/deployments/image-size/chat/completions?api-version=2023-03-15-preview" \\\n  -H "Api-Key:dial_api_key" \\\n  -H "Content-Type:application/json" \\\n  -d \'{ "messages": [ { "role": "user", "content": "", "custom_content": { "attachments": [ { "type": "image/png", "data": "\'"${IMAGE_BASE64}"\'" } ] } } ] }\'\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(8838).Z+"",width:"400",height:"300"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'{"choices":[{"index":0,"finish_reason":"stop","message":{"role":"assistant","content":"Size: 400x300px"}}],"usage":null,"id":"410cc421-fe92-4d53-a12d-55dc9a6b67ec","created":1706099578,"object":"chat.completion"}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"requests",children:"Requests"}),"\n",(0,t.jsxs)(n.p,{children:["Let\u2019s make an HTTP request from Python using ",(0,t.jsx)(n.code,{children:"requests"})," library and then\ndisplay the generated image."]}),"\n",(0,t.jsx)(n.p,{children:"The arguments are identical to the curl command above."}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s call the application in non-streaming mode first:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'response = requests.post(\n    f"{dial_url}/openai/deployments/image-size/chat/completions?api-version=2023-03-15-preview",\n    headers={"Api-Key": "dial_api_key"},\n    json={"messages": [{"role": "user", "content": "", "custom_content": {"attachments": [{"type": "image/png", "data": image_base64}]}}]},\n)\nbody = response.json()\ndisplay(body)\n\nmessage = body["choices"][0]["message"]\ncompletion = message["content"]\nprint(f"Completion: {completion!r}")\nassert completion == "Size: 400x300px", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"{'choices': [{'index': 0,\n   'finish_reason': 'stop',\n   'message': {'role': 'assistant', 'content': 'Size: 400x300px'}}],\n 'usage': None,\n 'id': 'a6e1daab-abc2-455d-8f32-b9cafd7b8c99',\n 'created': 1706099669,\n 'object': 'chat.completion'}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Completion: 'Size: 400x300px'\n"})}),"\n",(0,t.jsx)(n.p,{children:"When streaming is enabled, the chat completion returns a sequence of\nmessages, each containing a chunk of a generated response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'response = requests.post(\n    f"{dial_url}/openai/deployments/image-size/chat/completions?api-version=2023-03-15-preview",\n    headers={"Api-Key": "dial_api_key"},\n    json={"messages": [{"role": "user", "content": "", "custom_content": {"attachments": [{"type": "image/png", "data": image_base64}]}}], "stream": True},\n)\nfor chunk in response.iter_lines():\n    print(chunk)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'b\'data: {"choices":[{"index":0,"finish_reason":null,"delta":{"role":"assistant"}}],"usage":null,"id":"bcc15e5e-66a1-4e11-bc80-e912dbad66c9","created":1706099696,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: {"choices":[{"index":0,"finish_reason":null,"delta":{"content":"Size: 400x300px"}}],"usage":null,"id":"bcc15e5e-66a1-4e11-bc80-e912dbad66c9","created":1706099696,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: {"choices":[{"index":0,"finish_reason":"stop","delta":{}}],"usage":null,"id":"bcc15e5e-66a1-4e11-bc80-e912dbad66c9","created":1706099696,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: [DONE]\'\nb\'\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"openai-python-sdk",children:"OpenAI Python SDK"}),"\n",(0,t.jsxs)(n.p,{children:["The DIAL deployment could be called using ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/openai/",children:"OpenAI Python\nSDK"})," as well."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'openai_client = openai.AzureOpenAI(\n    azure_endpoint=dial_url,\n    azure_deployment="image-size",\n    api_key="dial_api_key",\n    api_version="2023-03-15-preview",\n)\n'})}),"\n",(0,t.jsx)(n.p,{children:"In the non-streaming mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'\nchat_completion = openai_client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "",\n            "custom_content": {"attachments": [{"type": "image/png", "data": image_base64}]}\n        }\n    ],\n    model="image-size",\n)\nprint(chat_completion)\nmessage = chat_completion.choices[0].message\ncompletion = message.content\nprint(f"Completion: {completion!r}")\nassert completion == "Size: 400x300px", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"ChatCompletion(id='7b0af319-75b3-4c37-bc84-69d5574ac27a', choices=[Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='Size: 400x300px', role='assistant', function_call=None, tool_calls=None))], created=1706099744, model=None, object='chat.completion', system_fingerprint=None, usage=None)\nCompletion: 'Size: 400x300px'\n"})}),"\n",(0,t.jsx)(n.p,{children:"And in the streaming mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'chat_completion = openai_client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "",\n            "custom_content": {"attachments": [{"type": "image/png", "data": image_base64}]}\n        }\n    ],\n    stream=True,\n    model="image-size",\n)\ncompletion = ""\nfor chunk in chat_completion:\n    print(chunk)\n    content = chunk.choices[0].delta.content\n    if content:\n        completion += content\nprint(f"Completion: {completion!r}")\nassert completion == "Size: 400x300px", "Unexpected completion"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"ChatCompletionChunk(id='f847cc25-2a53-405c-a0fa-7b98cbb4a44c', choices=[Choice(delta=ChoiceDelta(content=None, function_call=None, role='assistant', tool_calls=None), finish_reason=None, index=0, logprobs=None)], created=1706099775, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nChatCompletionChunk(id='f847cc25-2a53-405c-a0fa-7b98cbb4a44c', choices=[Choice(delta=ChoiceDelta(content='Size: 400x300px', function_call=None, role=None, tool_calls=None), finish_reason=None, index=0, logprobs=None)], created=1706099775, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nChatCompletionChunk(id='f847cc25-2a53-405c-a0fa-7b98cbb4a44c', choices=[Choice(delta=ChoiceDelta(content=None, function_call=None, role=None, tool_calls=None), finish_reason='stop', index=0, logprobs=None)], created=1706099775, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nCompletion: 'Size: 400x300px'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"langchain",children:"LangChain"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/langchain-openai/",children:"LangChain"})," library ",(0,t.jsx)(n.strong,{children:"is\nnot suitable"})," as a client of text-to-image applications, since\n",(0,t.jsx)(n.code,{children:"langchain-openai<=0.0.2"})," ignores the additional fields attached to the\nresponse message."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain_core.messages import HumanMessage\n\nllm = langchain_openai.AzureChatOpenAI(\n    azure_endpoint=dial_url,\n    azure_deployment="image-size",\n    api_key="dial_api_key",\n    api_version="2023-03-15-preview",\n)\n'})}),"\n",(0,t.jsx)(n.p,{children:"In non-streaming mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'extra_fields = {"custom_content": {"attachments": [{"type": "image/png", "data": image_base64}]}}\n\ntry:\n  llm.generate(messages=[[HumanMessage(content="", additional_kwargs=extra_fields)]])\n\n  raise Exception("Generation didn\'t fail")\nexcept Exception as e:\n  assert str(e) == "Error code: 422 - {\'error\': {\'message\': \'No image attachment was found in the last message\', \'type\': \'runtime_error\', \'param\': None, \'code\': None}}", "Unexpected error"\n'})}),"\n",(0,t.jsx)(n.p,{children:"In the streaming mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\ntry:\n    output = llm.stream(input=[HumanMessage(content=\"Hello world!\", additional_kwargs=extra_fields)])\n    for chunk in output:\n        print(chunk.dict())\n\n    raise Exception(\"Generation didn't fail\")\nexcept Exception as e:\n    assert str(e) == \"Error code: 422 - {'error': {'message': 'No image attachment was found in the last message', 'type': 'runtime_error', 'param': None, 'code': None}}\", \"Unexpected error\"\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8838:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAIAAABi1XKVAAAEAUlEQVR4nO3WsQ2EQBAEwb8X+ae8JICBt7RUFcFYrTkzP4CE//YAgLcEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsICMa3sAH3LObE94NnO2J/AJHhaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAxpnZngDwjocFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQMYNLe4JVeAYhRsAAAAASUVORK5CYII="},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>s});var t=a(7294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);