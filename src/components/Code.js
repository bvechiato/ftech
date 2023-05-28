import ReactMarkdown from "react-markdown";

function Code({ line }) {
  return (
    <ReactMarkdown className="text-s pt-4">`{ line }`</ReactMarkdown>
  )
}

export default Code
