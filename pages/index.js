
import { useState } from "react";

export default function Home() {
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () =>{
    const dataSend = {
      nama,
      password
    }

    fetch('/api/insert',{
      method:'POST',
      body: JSON.stringify(dataSend),
      headers:{
        'Content-Type' : 'aplication/JSON'
      }
    })
  }


  return (
    <>
      <div className="m-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1"
            className="form-label">
            Nama</label>
          <input type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nama"
            onChange={(e) => setNama(e.target.value)}
          />


        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" class="form-label">password</label>
          <input type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
         <button onClick={() => onSubmit() } className="btn btn-primary"> SUBMIT</button>
        </div>

      </div>

    </>
  )
}
