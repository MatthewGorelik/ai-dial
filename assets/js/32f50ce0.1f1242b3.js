"use strict";(self.webpackChunkdial=self.webpackChunkdial||[]).push([[457],{1502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>r,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=t(5893),o=t(1151);const s={title:"How to call text-to-image DIAL applications"},i="How to call text-to-image DIAL applications",c={id:"Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications",title:"How to call text-to-image DIAL applications",description:"From [this",source:"@site/docs/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications.mdx",sourceDirName:"Cookbook/dial-cookbook/examples",slug:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_image_applications",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"How to call text-to-image DIAL applications"},sidebar:"CustomSideBar",previous:{title:"How to call text-to-text DIAL applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_text_to_text_applications"},next:{title:"How to call image-to-text DIAL applications",permalink:"/Cookbook/dial-cookbook/examples/how_to_call_image_to_text_applications"}},l={},h=[{value:"Setup",id:"setup",level:2},{value:"Using Curl",id:"using-curl",level:2},{value:"Using Requests Python Library",id:"using-requests-python-library",level:2},{value:"Using OpenAI Python SDK",id:"using-openai-python-sdk",level:2},{value:"Using LangChain",id:"using-langchain",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-call-text-to-image-dial-applications",children:"How to call text-to-image DIAL applications"}),"\n",(0,a.jsxs)(n.p,{children:["From ",(0,a.jsx)(n.a,{href:"https://github.com/epam/ai-dial/blob/main/dial-cookbook/examples/how_to_call_text_to_image_applications.ipynb",children:"this\nnotebook"}),",\nyou will learn how to call text-to-image applications via ",(0,a.jsx)(n.a,{href:"https://epam-rail.com/dial_api#/paths/~1openai~1deployments~1%7BDeployment%20Name%7D~1chat~1completions/post",children:"DIAL API\nchat/completions"}),"\ncall."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"DIAL application"})," is a general term, which encompasses model adapters\nand applications with any custom logic."]}),"\n",(0,a.jsx)(n.p,{children:"DIAL currently supports a few text-to-image model adapters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-openai/",children:"DALL-E-3"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-vertexai/",children:"Google Imagen"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/epam/ai-dial-adapter-bedrock/",children:"Stability\ndiffusion"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These models follow the same pattern of usage: they take the last user\nmessage as a prompt for image generation and return the generated image\nin the response."}),"\n",(0,a.jsxs)(n.p,{children:["For example purposes, we are going to use a sample text-to-image\napplication called ",(0,a.jsx)(n.code,{children:"render-text"})," which prints the user prompt as an\nimage."]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 1"}),": install all the necessary dependencies and import the\nlibraries we are going to use."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"%pip install -r ../python-notebooks-runner/requirements.txt > /dev/null\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Note: you may need to restart the kernel to use updated packages.\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import requests\nimport openai\nimport langchain_openai\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 2"}),": run ",(0,a.jsx)(n.code,{children:"docker compose"})," in a separate terminal to start the\n",(0,a.jsx)(n.strong,{children:"DIAL Core"})," server locally along with the ",(0,a.jsx)(n.code,{children:"render-text"})," application."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"(cd ..; docker compose up core render-text)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 3"}),": configure DIAL Core URL: it will be ",(0,a.jsx)(n.code,{children:"http://localhost:8080"}),",\nif the DIAL Core is run locally."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\ndial_url = os.environ.get("DIAL_URL", "http://localhost:8080")\nos.environ["DIAL_URL"] = dial_url\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 4"}),": define helpers to display images in the notebook:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import base64\n\nfrom IPython.display import Image as IPImage\nfrom IPython.display import display\n\ndef display_base64_image(image_base64):\n    image_binary = base64.b64decode(image_base64)\n    display(IPImage(data=image_binary))\n"})}),"\n",(0,a.jsx)(n.h2,{id:"using-curl",children:"Using Curl"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The application deployment is called ",(0,a.jsx)(n.code,{children:"render-text"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The local DIAL Core server URL is ",(0,a.jsx)(n.code,{children:"dial_url"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The OpenAI API version we are going to use is ",(0,a.jsx)(n.code,{children:"2023-03-15-preview"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Therefore, the application is accessible via the url:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"http://${DIAL_URL}/openai/deployments/render-text/chat/completions?api-version=2023-03-15-preview\n"})}),"\n",(0,a.jsx)(n.p,{children:"The corresponding curl command with a singe message in the request is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'!curl -X POST "${DIAL_URL}/openai/deployments/render-text/chat/completions?api-version=2023-03-15-preview" \\\n  -H "Api-Key:dial_api_key" \\\n  -H "Content-Type:application/json" \\\n  -d \'{"messages": [{"role": "user", "content": "Hello world!"}]}\'\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'{"choices":[{"index":0,"finish_reason":"stop","message":{"role":"assistant","custom_content":{"attachments":[{"index":0,"type":"image/png","title":"Image","data":"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"}]},"content":"Image was generated successfully"}}],"usage":null,"id":"9c8169a3-cefe-4e59-a00e-589c7015fc22","created":1706097619,"object":"chat.completion"}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"using-requests-python-library",children:"Using Requests Python Library"}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s make an HTTP request using the Python ",(0,a.jsx)(n.code,{children:"requests"})," library and then\ndisplay the generated image."]}),"\n",(0,a.jsx)(n.p,{children:"The arguments are identical to the curl command above."}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,a.jsx)(n.strong,{children:"non-streaming"})," mode:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'response = requests.post(\n    f"{dial_url}/openai/deployments/render-text/chat/completions?api-version=2023-03-15-preview",\n    headers={"Api-Key": "dial_api_key"},\n    json={"messages": [{"role": "user", "content": "Hello world!"}]},\n)\nbody = response.json()\ndisplay(body)\nmessage = body["choices"][0]["message"]\ncompletion = message["content"]\nprint(f"Completion: {completion!r}")\nassert completion == "Image was generated successfully", "Unexpected completion"\n\nimage_data = message["custom_content"]["attachments"][0]["data"]\ndisplay_base64_image(image_data)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"{'choices': [{'index': 0,\n   'finish_reason': 'stop',\n   'message': {'role': 'assistant',\n    'custom_content': {'attachments': [{'index': 0,\n       'type': 'image/png',\n       'title': 'Image',\n       'data': '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'}]},\n    'content': 'Image was generated successfully'}}],\n 'usage': None,\n 'id': 'a9428fed-4c10-4308-8eae-ef7f528e741c',\n 'created': 1706097936,\n 'object': 'chat.completion'}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Completion: 'Image was generated successfully'\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(1968).Z+"",width:"200",height:"100"})}),"\n",(0,a.jsxs)(n.p,{children:["When ",(0,a.jsx)(n.strong,{children:"streaming is enabled"}),", the chat completion returns a sequence of\nmessages, each containing a chunk of a generated response:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'response = requests.post(\n    f"{dial_url}/openai/deployments/render-text/chat/completions?api-version=2023-03-15-preview",\n    headers={"Api-Key": "dial_api_key"},\n    json={"messages": [{"role": "user", "content": "Hello world!"}], "stream": True},\n)\nfor chunk in response.iter_lines():\n    print(chunk)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'b\'data: {"choices":[{"index":0,"finish_reason":null,"delta":{"role":"assistant"}}],"usage":null,"id":"daf6fbc2-666b-48f2-91d9-1dca46762153","created":1706097974,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: {"choices":[{"index":0,"finish_reason":null,"delta":{"custom_content":{"attachments":[{"index":0,"type":"image/png","title":"Image","data":"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"}]}}}],"usage":null,"id":"daf6fbc2-666b-48f2-91d9-1dca46762153","created":1706097974,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: {"choices":[{"index":0,"finish_reason":null,"delta":{"content":"Image was generated successfully"}}],"usage":null,"id":"daf6fbc2-666b-48f2-91d9-1dca46762153","created":1706097974,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: {"choices":[{"index":0,"finish_reason":"stop","delta":{}}],"usage":null,"id":"daf6fbc2-666b-48f2-91d9-1dca46762153","created":1706097974,"object":"chat.completion.chunk"}\'\nb\'\'\nb\'data: [DONE]\'\nb\'\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"using-openai-python-sdk",children:"Using OpenAI Python SDK"}),"\n",(0,a.jsxs)(n.p,{children:["The DIAL deployment could be called using ",(0,a.jsx)(n.a,{href:"https://pypi.org/project/openai/",children:"OpenAI Python\nSDK"})," as well."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'openai_client = openai.AzureOpenAI(\n    azure_endpoint=dial_url,\n    azure_deployment="render-text",\n    api_key="dial_api_key",\n    api_version="2023-03-15-preview",\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,a.jsx)(n.strong,{children:"non-streaming"})," mode:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'\nchat_completion = openai_client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "Hello world!",\n        }\n    ],\n    model="render-text",\n)\nprint(chat_completion)\nmessage = chat_completion.choices[0].message\ncompletion = message.content\nprint(f"Completion: {completion!r}")\nassert completion == "Image was generated successfully", "Unexpected completion"\n\nimage_data = message.custom_content["attachments"][0]["data"]\ndisplay_base64_image(image_data)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"ChatCompletion(id='3969e827-f3c5-410f-b3d1-74218ed56310', choices=[Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='Image was generated successfully', role='assistant', function_call=None, tool_calls=None, custom_content={'attachments': [{'index': 0, 'type': 'image/png', 'title': 'Image', 'data': 'iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAIAAABM5OhcAAAGHUlEQVR4nO3ZXWhTZxzH8e9psrbaiNham6JFQS2+QDOsbL4N6lYmoiK+i7tQbwrihYoX4o26zgtFtwkrgyobY9NuoAiKgi+1RqlvuImgNxNFC0XxtbMqvrRJdpGDMaenNpX9183+Ppyb8+TJk+ecfGfSzEkkEPnHZfX0BuT9pLDEhMISEwpLTCgsMaGwxITCEhMKS0woLDGhsMSEwhITCktMKCwxobDExL8dluMwbFinp/9NGW5y2DAcx3wz/xcZhfWWO6u72Zlefmf0USgmFJaYMAlr3z6mTKFfP0Ihpk4lGu3e048eZcYMCgvJzqa4mAULuHjRZ9rYsTgON2+mRn79FcchGOTx49RgbS2OQ01NpusnP/cvXaKsjECAFy/8N7l3r3uN+flUVHD2bPeu8f2XSHR9AEOH+j80dKh3kXXrACZPpqaGb75h9GgCAQ4d8l+q48pffQUwciRbt7JnD19+SThMIMAvv3hfev16gJ07UyNVVQSDAAcPpgbnzwdoasp0fSAcprSUadOoqSEW89nkmjXuNdbW8t13TJpEOMzAgWm3ouOd6VVHZpMyDuvYMYCZM2lvd0daWykuZvBg2tp8lvKcnjqF4xCJ8ORJavD2bcJhcnO5cSPtpc+fB1i0KDVSWsoXX5CdzerV7kg8TkEBH37YjfWTVq7sdJOHDwNUVqauMRZj7lzvf6gKK4NJUFJCS4vPUVKSdvtmzQK4ejXt6Rs2ANTX+7xJntM5cwCOHPFu4PvvAdauTRuMxykuprCQeJxEgtu3Aerq+OQTIhF3zu+/A2zc2I31k+7d63STyWu8cCFthRs3FFbakdmkrryeWVhI//7e+HbvBvj2W583yXM6aBBZWbx86d3AtWsAH3/sHa+qArh8mUSCujqAO3fYsAHH4cEDEgm2bAH4449urA8UFHgv/81NFhURDKb+uXp9hEIKK3UEu64GgKIifvvNZ3zxYu7eTZ22tNDezoABPjOfPev6VR49cr9TewwZ4j7qMXs2O3dSX08kQjTK6NGEw3z6KdXVRKPMm0d9PSUljBvXvfWTiXTm4UMGDiQQ8I7n5/P0adfX2EtkGlZuLhUV/uNvCoWIxzlwwGfm8OFdv0p+Pvfv8+qV971vbnYf9fjsM0IhTpxg7VqiUSorASZMoE8fTp5k5kzOnGH58ndf31ffvjx4QCzmbeuvvzJ6ei/xD//cUFZGayvl5VRUpI5YjGiUtraunz5pEvE4DQ3e8ePHASZP9o7n5DBtGqdP09TEtWtMneoOTpxIQwONjTx/zuzZ776+r0iE9nb3T4fX/vyT1ta0kVu33I/RXiqTz0sy/quwthagujo18uQJo0YRCvHsmc9SntPkL16RCE+fpgbv3CEcJieH69d9NvDzzwArVuA43L/vDm7eDLBsGf36pX2jymT9jhfrGdm1C2D6dPePhkSCtjb3R403b8XXX1Nezv79Pf91p0eOzCZlHFZ7O59/DrBkCT/8wI4djBlDVhZ79rgTcnMJBtm1i5YWn9NEgo0bAUaOZNs26uqornZ/Z/rpJ/8NPHxIIMAHH1BWlho8cwYgEGDhQu/8LtfveLGeTcZi7jVWVvLjj+zYwUcfMX48gwen3Yq8PIDy8p5/j3vkyGxSd34gffWKLVsYM4acHMJhZs2isTH16Lp15OWRm8uVKz6nyePwYaZPp6CAYJCiIubN49y5t20v+eVv1aq0PSS/gO/e7TP/7et3vNiOm3z+nE2bGDGC7GyGDGHpUpqbvbeiqoq8PLZv7/n3uEcOJ9GbvweIGf1PaDGhsMSEwhITCktMKCwxobDEhMISEwpLTCgsMaGwxITCEhMKS0woLDGhsMSEwhITCktMKCwxobDEhMISEwpLTCgsMaGwxITCEhMKS0woLDGhsMSEwhITCktMKCwxobDEhMISEwpLTCgsMaGwxITCEhMKS0woLDGhsMSEwhITCktMKCwxobDEhMISEwpLTCgsMaGwxITCEhMKS0woLDGhsMSEwhITCktMKCwxobDEhMISEwpLTCgsMaGwxITCEhMKS0woLDGhsMSEwhITCktMKCwxobDEhMISEwpLTCgsMfE3CAFF1FZJkwQAAAAASUVORK5CYII='}]}))], created=1706098042, model=None, object='chat.completion', system_fingerprint=None, usage=None)\nCompletion: 'Image was generated successfully'\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(762).Z+"",width:"200",height:"100"})}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,a.jsx)(n.strong,{children:"streaming"})," mode:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'chat_completion = openai_client.chat.completions.create(\n    messages=[\n        {\n            "role": "user",\n            "content": "Hello world!",\n        }\n    ],\n    stream=True,\n    model="render-text",\n)\ncompletion = ""\nfor chunk in chat_completion:\n    print(chunk)\n    content = chunk.choices[0].delta.content\n    if content:\n        completion += content\nprint(f"Completion: {completion!r}")\nassert completion == "Image was generated successfully", "Unexpected completion"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"ChatCompletionChunk(id='80cd32cd-f36a-41f3-9af4-54947a5243cb', choices=[Choice(delta=ChoiceDelta(content=None, function_call=None, role='assistant', tool_calls=None), finish_reason=None, index=0, logprobs=None)], created=1706098062, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nChatCompletionChunk(id='80cd32cd-f36a-41f3-9af4-54947a5243cb', choices=[Choice(delta=ChoiceDelta(content=None, function_call=None, role=None, tool_calls=None, custom_content={'attachments': [{'index': 0, 'type': 'image/png', 'title': 'Image', 'data': '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'}]}), finish_reason=None, index=0, logprobs=None)], created=1706098062, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nChatCompletionChunk(id='80cd32cd-f36a-41f3-9af4-54947a5243cb', choices=[Choice(delta=ChoiceDelta(content='Image was generated successfully', function_call=None, role=None, tool_calls=None), finish_reason=None, index=0, logprobs=None)], created=1706098062, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nChatCompletionChunk(id='80cd32cd-f36a-41f3-9af4-54947a5243cb', choices=[Choice(delta=ChoiceDelta(content=None, function_call=None, role=None, tool_calls=None), finish_reason='stop', index=0, logprobs=None)], created=1706098062, model=None, object='chat.completion.chunk', system_fingerprint=None, usage=None)\nCompletion: 'Image was generated successfully'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"using-langchain",children:"Using LangChain"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://pypi.org/project/langchain-openai/",children:"LangChain"})," library ",(0,a.jsx)(n.strong,{children:"is\nnot suitable"})," as a client of text-to-image applications, since\n",(0,a.jsx)(n.code,{children:"langchain-openai<=0.0.2"})," ignores the additional fields attached to the\nresponse message."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from langchain_core.messages import HumanMessage\n\nllm = langchain_openai.AzureChatOpenAI(\n    azure_endpoint=dial_url,\n    azure_deployment="render-text",\n    api_key="dial_api_key",\n    api_version="2023-03-15-preview",\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,a.jsx)(n.strong,{children:"non-streaming"})," mode:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'output = llm.generate(messages=[[HumanMessage(content="Hello world!")]])\nprint(output)\ncompletion = output.generations[0][0].text\nprint(f"Completion: {completion!r}")\nassert completion == "Image was generated successfully", "Unexpected completion"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"generations=[[ChatGeneration(text='Image was generated successfully', generation_info={'finish_reason': 'stop', 'logprobs': None}, message=AIMessage(content='Image was generated successfully'))]] llm_output={'token_usage': {}, 'model_name': 'gpt-3.5-turbo'} run=[RunInfo(run_id=UUID('9de1c192-fedc-4a7d-b38d-cd7b4aa221cf'))]\nCompletion: 'Image was generated successfully'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s call the application in the ",(0,a.jsx)(n.strong,{children:"streaming"})," mode:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'output = llm.stream(input=[HumanMessage(content="Hello world!")])\ncompletion = ""\nfor chunk in output:\n    print(chunk.dict())\n    completion += chunk.content\nprint(f"Completion: {completion!r}")\nassert completion == "Image was generated successfully", "Unexpected completion"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"{'content': '', 'additional_kwargs': {}, 'type': 'AIMessageChunk', 'example': False}\n{'content': '', 'additional_kwargs': {}, 'type': 'AIMessageChunk', 'example': False}\n{'content': 'Image was generated successfully', 'additional_kwargs': {}, 'type': 'AIMessageChunk', 'example': False}\n{'content': '', 'additional_kwargs': {}, 'type': 'AIMessageChunk', 'example': False}\nCompletion: 'Image was generated successfully'\n"})})]})}function r(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},762:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"},1968:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var a=t(7294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);