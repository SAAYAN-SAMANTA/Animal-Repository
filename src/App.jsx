import Navbar from "./components/navbar"
import Cards from "./components/cards"
function App() {
  let x="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg"
  return (
    <>
      <Navbar/>
      <br />
      <div className="panel" style={{display:"flex"}}>
      <Cards src={x}  Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      </div>
      <br />
      <div className="panel" style={{display:"flex"}}>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      <Cards src="https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg" Title="Lion" text="The lion (Panthera leo) is a large carnivorous mammal belonging to the Felidae family. Lions are known for their distinctive appearance and social behavior."/>
      </div>
    </>
  )
}
export default App
