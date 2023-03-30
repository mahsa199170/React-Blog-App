import {React,useState} from 'react';
import {useNavigate} from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mahsa");
  const [isPending, setIsPending] =useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();  // this prevent page from being refreshed when we click on the Add blog button
    const blog = {title, body, author}
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("new blog added")
      setIsPending(false);
      // navigate(-1);
      navigate("/")
    })

   

  }
  return (
    <div className="create">
        <h1>add a new blog</h1>
        <form onSubmit={handleSubmit}>
          <label> Blog title:</label>
          <input 
            type="text" 
            required
            value = {title}
            onChange={(e)=> setTitle(e.target.value)}
          />

            <label> Blog body:</label>
            <textarea required value ={body} onChange={(e)=> setBody(e.target.value)}>
              
            </textarea>

            <label> Blog author:</label>

            <select value= {author} onChange={(e)=> setAuthor(e.target.value)}>
              <option value="Mahsa">Mahsa</option>
              <option value="Yaser">Yaser</option>

            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding blog..</button>}

            <p> {title}</p>
            <p> {body}</p>
            <p> {author}</p>
          
              
        </form>
    </div>
  )
}

export default Create