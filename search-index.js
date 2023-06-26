crystal_doc_search_index_callback({"repository_name":"langchain","body":"# Langchain\n\n![Shard CI](https://github.com/hostari/langchain_client/workflows/Shard%20CI/badge.svg)\n[![API Documentation Website](https://img.shields.io/website?down_color=red&down_message=Offline&label=API%20Documentation&up_message=Online&url=https%3A%2F%2Fhostari.github.io%2Flangchain_client%2F)](https://hostari.github.io/langchain_client)\n[![GitHub release](https://img.shields.io/github/release/hostari/langchain_client.svg?label=Release)](https://github.com/hostari/langchain_client/releases)\n\nLangchain API wrapper for Crystal. This supports only very specific use cases and operates as a tightly coupled client for a Flask app hosted on the [hostari/hello-langchain](https://github.com/hostari/hello-langchain) repo.\n\n## Installation\n\nAdd this to your application's `shard.yml`:\n\n```yaml\ndependencies:\n  langchain:\n    github: hostari/langchain_client\n```\n\n## Contributing\n\n1. Fork it (<https://github.com/hostari/langchain_client/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n","program":{"html_id":"langchain/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"langchain","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"langchain/Langchain","path":"Langchain.html","kind":"class","full_name":"Langchain","name":"Langchain","abstract":false,"superclass":{"html_id":"langchain/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"langchain/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"langchain/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/langchain.cr","line_number":4,"url":null}],"repository_name":"langchain","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"QA_PATH","name":"QA_PATH","value":"\"/qa\""}],"class_methods":[{"html_id":"client(base_url:String,port:Int32):HTTP::Client-class-method","name":"client","abstract":false,"args":[{"name":"base_url","external_name":"base_url","restriction":"String"},{"name":"port","external_name":"port","restriction":"Int32"}],"args_string":"(base_url : String, port : Int32) : HTTP::Client","args_html":"(base_url : String, port : Int32) : HTTP::Client","location":{"filename":"src/langchain.cr","line_number":9,"url":null},"def":{"name":"client","args":[{"name":"base_url","external_name":"base_url","restriction":"String"},{"name":"port","external_name":"port","restriction":"Int32"}],"return_type":"HTTP::Client","visibility":"Public","body":"HTTP::Client.new(base_url, port)"}},{"html_id":"client(uri:URI):HTTP::Client-class-method","name":"client","abstract":false,"args":[{"name":"uri","external_name":"uri","restriction":"URI"}],"args_string":"(uri : URI) : HTTP::Client","args_html":"(uri : URI) : HTTP::Client","location":{"filename":"src/langchain.cr","line_number":5,"url":null},"def":{"name":"client","args":[{"name":"uri","external_name":"uri","restriction":"URI"}],"return_type":"HTTP::Client","visibility":"Public","body":"HTTP::Client.new(uri)"}},{"html_id":"ghostwrite(client:HTTP::Client,token:String,text:String,sales_rep:String,prospect:String,company:String,company_information:String,text_type:String=\"html\",artifact:String=\"email\")-class-method","name":"ghostwrite","abstract":false,"args":[{"name":"client","external_name":"client","restriction":"HTTP::Client"},{"name":"token","external_name":"token","restriction":"String"},{"name":"text","external_name":"text","restriction":"String"},{"name":"sales_rep","external_name":"sales_rep","restriction":"String"},{"name":"prospect","external_name":"prospect","restriction":"String"},{"name":"company","external_name":"company","restriction":"String"},{"name":"company_information","external_name":"company_information","restriction":"String"},{"name":"text_type","default_value":"\"html\"","external_name":"text_type","restriction":"String"},{"name":"artifact","default_value":"\"email\"","external_name":"artifact","restriction":"String"}],"args_string":"(client : HTTP::Client, token : String, text : String, sales_rep : String, prospect : String, company : String, company_information : String, text_type : String = \"html\", artifact : String = \"email\")","args_html":"(client : HTTP::Client, token : String, text : String, sales_rep : String, prospect : String, company : String, company_information : String, text_type : String = <span class=\"s\">&quot;html&quot;</span>, artifact : String = <span class=\"s\">&quot;email&quot;</span>)","location":{"filename":"src/langchain.cr","line_number":32,"url":null},"def":{"name":"ghostwrite","args":[{"name":"client","external_name":"client","restriction":"HTTP::Client"},{"name":"token","external_name":"token","restriction":"String"},{"name":"text","external_name":"text","restriction":"String"},{"name":"sales_rep","external_name":"sales_rep","restriction":"String"},{"name":"prospect","external_name":"prospect","restriction":"String"},{"name":"company","external_name":"company","restriction":"String"},{"name":"company_information","external_name":"company_information","restriction":"String"},{"name":"text_type","default_value":"\"html\"","external_name":"text_type","restriction":"String"},{"name":"artifact","default_value":"\"email\"","external_name":"artifact","restriction":"String"}],"visibility":"Public","body":"headers = HTTP::Headers.new\nheaders.add(\"Content-Type\", \"application/json\")\nres = client.post(ghostwrite_path(artifact), headers: headers, body: {token: token, text: text, text_type: text_type, sales_rep: sales_rep, prospect: prospect, company: company, company_information: company_information}.to_json)\npp(res.body)\nGhostwriteResult.from_json(res.body)\n"}},{"html_id":"ghostwrite_path(artifact:String)-class-method","name":"ghostwrite_path","abstract":false,"args":[{"name":"artifact","external_name":"artifact","restriction":"String"}],"args_string":"(artifact : String)","args_html":"(artifact : String)","location":{"filename":"src/langchain.cr","line_number":44,"url":null},"def":{"name":"ghostwrite_path","args":[{"name":"artifact","external_name":"artifact","restriction":"String"}],"visibility":"Public","body":"\"/ghostwrite/#{artifact}\""}},{"html_id":"qa(client:HTTP::Client,token:String,text:String,prompt:String,text_type:String=\"html\",return_source_documents:Bool=false)-class-method","name":"qa","abstract":false,"args":[{"name":"client","external_name":"client","restriction":"HTTP::Client"},{"name":"token","external_name":"token","restriction":"String"},{"name":"text","external_name":"text","restriction":"String"},{"name":"prompt","external_name":"prompt","restriction":"String"},{"name":"text_type","default_value":"\"html\"","external_name":"text_type","restriction":"String"},{"name":"return_source_documents","default_value":"false","external_name":"return_source_documents","restriction":"Bool"}],"args_string":"(client : HTTP::Client, token : String, text : String, prompt : String, text_type : String = \"html\", return_source_documents : Bool = false)","args_html":"(client : HTTP::Client, token : String, text : String, prompt : String, text_type : String = <span class=\"s\">&quot;html&quot;</span>, return_source_documents : Bool = <span class=\"n\">false</span>)","location":{"filename":"src/langchain.cr","line_number":15,"url":null},"def":{"name":"qa","args":[{"name":"client","external_name":"client","restriction":"HTTP::Client"},{"name":"token","external_name":"token","restriction":"String"},{"name":"text","external_name":"text","restriction":"String"},{"name":"prompt","external_name":"prompt","restriction":"String"},{"name":"text_type","default_value":"\"html\"","external_name":"text_type","restriction":"String"},{"name":"return_source_documents","default_value":"false","external_name":"return_source_documents","restriction":"Bool"}],"visibility":"Public","body":"headers = HTTP::Headers.new\nheaders.add(\"Content-Type\", \"application/json\")\nif return_source_documents\n  return_source_documents_int = 1\nelse\n  return_source_documents_int = 0\nend\nres = client.post(QA_PATH, headers: headers, body: {token: token, text: text, prompt: prompt, text_type: text_type, return_source_documents: return_source_documents_int}.to_json)\nQaResult.from_json(res.body)\n"}}],"types":[{"html_id":"langchain/Langchain/GhostwriteResult","path":"Langchain/GhostwriteResult.html","kind":"class","full_name":"Langchain::GhostwriteResult","name":"GhostwriteResult","abstract":false,"superclass":{"html_id":"langchain/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"langchain/JSON/Serializable","kind":"module","full_name":"JSON::Serializable","name":"Serializable"},{"html_id":"langchain/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"langchain/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/langchain/ghostwrite_result.cr","line_number":1,"url":null}],"repository_name":"langchain","program":false,"enum":false,"alias":false,"const":false,"included_modules":[{"html_id":"langchain/JSON/Serializable","kind":"module","full_name":"JSON::Serializable","name":"Serializable"}],"namespace":{"html_id":"langchain/Langchain","kind":"class","full_name":"Langchain","name":"Langchain"},"constructors":[{"html_id":"new(pull:JSON::PullParser)-class-method","name":"new","abstract":false,"args":[{"name":"pull","external_name":"pull","restriction":"::JSON::PullParser"}],"args_string":"(pull : JSON::PullParser)","args_html":"(pull : JSON::PullParser)","location":{"filename":"src/langchain/ghostwrite_result.cr","line_number":2,"url":null},"def":{"name":"new","args":[{"name":"pull","external_name":"pull","restriction":"::JSON::PullParser"}],"visibility":"Public","body":"new_from_json_pull_parser(pull)"}}],"instance_methods":[{"html_id":"result:String-instance-method","name":"result","abstract":false,"location":{"filename":"src/langchain/ghostwrite_result.cr","line_number":4,"url":null},"def":{"name":"result","return_type":"String","visibility":"Public","body":"@result"}}]},{"html_id":"langchain/Langchain/QaResult","path":"Langchain/QaResult.html","kind":"class","full_name":"Langchain::QaResult","name":"QaResult","abstract":false,"superclass":{"html_id":"langchain/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"langchain/JSON/Serializable","kind":"module","full_name":"JSON::Serializable","name":"Serializable"},{"html_id":"langchain/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"langchain/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/langchain/qa_result.cr","line_number":1,"url":null}],"repository_name":"langchain","program":false,"enum":false,"alias":false,"const":false,"included_modules":[{"html_id":"langchain/JSON/Serializable","kind":"module","full_name":"JSON::Serializable","name":"Serializable"}],"namespace":{"html_id":"langchain/Langchain","kind":"class","full_name":"Langchain","name":"Langchain"},"constructors":[{"html_id":"new(pull:JSON::PullParser)-class-method","name":"new","abstract":false,"args":[{"name":"pull","external_name":"pull","restriction":"::JSON::PullParser"}],"args_string":"(pull : JSON::PullParser)","args_html":"(pull : JSON::PullParser)","location":{"filename":"src/langchain/qa_result.cr","line_number":2,"url":null},"def":{"name":"new","args":[{"name":"pull","external_name":"pull","restriction":"::JSON::PullParser"}],"visibility":"Public","body":"new_from_json_pull_parser(pull)"}}],"instance_methods":[{"html_id":"page_content:Array(String)|Nil-instance-method","name":"page_content","abstract":false,"location":{"filename":"src/langchain/qa_result.cr","line_number":5,"url":null},"def":{"name":"page_content","return_type":"Array(String) | ::Nil","visibility":"Public","body":"@page_content"}},{"html_id":"result:String-instance-method","name":"result","abstract":false,"location":{"filename":"src/langchain/qa_result.cr","line_number":4,"url":null},"def":{"name":"result","return_type":"String","visibility":"Public","body":"@result"}}]}]}]}})