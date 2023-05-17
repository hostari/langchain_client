require "../../spec_helper"

describe Langchain do
  it "returns a ghostwritten email based on the text for a given sales_rep and prospect" do
    input = File.read("spec/support/ghostwrite_email_input.json")

    WebMock.stub(:post, "http://localhost:5000/ghostwrite/email")
      .to_return(status: 200, body: File.read("spec/support/ghostwrite_email.json"), headers: {"Content-Type" => "application/json"})

    client = Langchain.client("localhost", 5000)
    json = Hash(String, String | Bool).from_json(input)
    result = Langchain.ghostwrite(client, json["token"].as(String), json["text"].as(String), json["sales_rep"].as(String), json["prospect"].as(String), json["text_type"].as(String))

    result.should be_a(Langchain::GhostwriteResult)
  end
end
