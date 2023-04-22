class Langchain::QaResult
  include JSON::Serializable

  getter result : String
  getter page_content : Array(String)?
end
