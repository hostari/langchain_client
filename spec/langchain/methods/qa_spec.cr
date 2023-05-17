require "../../spec_helper"

describe Langchain do
  it "returns an answer based on the text to a question specified in the prompt" do
    input = File.read("spec/support/qa_input.json")

    WebMock.stub(:post, "http://localhost:5000/qa")
      .to_return(status: 200, body: File.read("spec/support/qa.json"), headers: {"Content-Type" => "application/json"})

    client = Langchain.client("localhost", 5000)
    json = Hash(String, String | Bool).from_json(input)
    result = Langchain.qa(client, json["token"].as(String), json["text"].as(String), json["prompt"].as(String), json["text_type"].as(String), json["return_source_documents"].as(Bool))

    result.should be_a(Langchain::QaResult)
  end
end
