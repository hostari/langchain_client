require "json"
require "http/client"

class Langchain
  def self.client(uri : URI) : HTTP::Client
    HTTP::Client.new(uri)
  end

  def self.client(base_url : String, port : Int32) : HTTP::Client
    HTTP::Client.new(base_url, port)
  end

  QA_PATH = "/qa"

  def self.qa(client : HTTP::Client, token : String, text : String, prompt : String, text_type : String = "html", return_source_documents : Bool = false)
    headers = HTTP::Headers.new
    headers.add("Content-Type", "application/json")

    if return_source_documents
      return_source_documents_int = 1
    else
      return_source_documents_int = 0
    end

    res = client.post(
      QA_PATH, headers: headers, body: {token: token, text: text, prompt: prompt, text_type: text_type, return_source_documents: return_source_documents_int}.to_json
    )

    QaResult.from_json(res.body)
  end

  def self.ghostwrite(client : HTTP::Client, token : String, text : String, sales_rep : String, prospect : String, company : String, company_information : String, text_type : String = "html", artifact : String = "email")
    headers = HTTP::Headers.new
    headers.add("Content-Type", "application/json")

    res = client.post(
      ghostwrite_path(artifact), headers: headers, body: {token: token, text: text, text_type: text_type, sales_rep: sales_rep, prospect: prospect, company: company, company_information: company_information}.to_json
    )

    pp res.body
    GhostwriteResult.from_json(res.body)
  end

  def self.ghostwrite_path(artifact : String)
    "/ghostwrite/#{artifact}"
  end
end

require "./langchain/**"
