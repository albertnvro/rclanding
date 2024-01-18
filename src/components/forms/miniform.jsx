import React, { useState } from 'react';
import { MdSupportAgent } from "react-icons/md"; 
// Icons
import {
  RiCoinsLine,

} from "react-icons/ri";

function MiniForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-96 rounded border bg-white p-2 shadow">
        {!open && (
          <div className="flex items-center justify-between">
            <div className="ml-2">{email}</div>
            <div className="ml-2"><MdSupportAgent size={30} />Comienza a ganar</div>
            <button type="button" className="btn rounded bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300" onClick={() => setOpen(true)}>¿Hablamos?</button>
          </div>
        )}

        {open && (
          <div className="flex flex-col items-center space-y-4">
            <input type="text" className="w-full rounded border bg-gray-100 p-2 focus:border-blue-500 focus:outline-none" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
            <input type="text" className="w-full rounded border bg-gray-100 p-2 focus:border-blue-500 focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />

            <div className="flex w-full items-center justify-center space-x-2">
              <button type="button" onClick={() => setOpen(false)} className="btn rounded bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300">Cancelar</button>
              <button type="button" className="btn rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">Contactar</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default MiniForm;
