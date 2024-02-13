import { Form } from '../components/form/Form.tsx';
import { useState } from 'react';
import { IResolver } from '../lib/interfaces.ts';

export function FormPage() {
  const [results, setResults] = useState<Array<IResolver>>([]);

  return (
    <div className="page-container">
      <h1>Form page</h1>
      <div className="form-wrapper">
        <Form setResults={setResults} />
      </div>
      {results.length > 0 && (
        <>
          <h2 className="title">Users</h2>
          <div className="users-container">
            {results.map((data, index) => {
              return (
                <ul className="user-container" key={index}>
                  <li>
                    <img width="200px" src={URL.createObjectURL(data.file)} alt="User photo" />
                  </li>
                  <li>
                    <span className="name">Name: </span>
                    {data.name}
                  </li>
                  <li>
                    <span className="name">Age: </span>
                    {data.age}
                  </li>
                  <li>
                    <span className="name">Email: </span>
                    {data.email}
                  </li>
                  <li>
                    <span className="name">Password: </span>
                    {data.password}
                  </li>
                  <li>
                    <span className="name">Bio: </span>
                    {data.bio}
                  </li>
                  <li>
                    <span className="name">Gender: </span>
                    {data.gender}
                  </li>
                  <li>
                    <span className="name">Accept: </span>
                    {String(data.accept)}
                  </li>
                  <li>
                    <span className="name">Country: </span>
                    {data.country}
                  </li>
                </ul>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
