'use client'

import { useEffect, useState } from "react";

export default function Home() {

  const [form, setForm] = useState({name: '', favoriteFood: ''})
  const isFilled = form.name != '' && form.favoriteFood !='';
  const [isSumbmitted, setIsSubmitted] = useState(false);

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value }) 
  }

  const handleForm = () => {
    isFilled ? setIsSubmitted(true): setForm({name: '', favoriteFood: ''})
  }

  useEffect(()=>{
    console.log(form)
  },[form])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <form className={isSumbmitted ? 'hidden': ''}>
        <h1 className="text-center text-lg">Favorite food form</h1>
        <div className="bg-white shadow-md rounded p-8">
          <div className="mb-4">
            <label className="block rounded p-3">
              Name
            </label>
            <input type="text" className="border rounded p-3" placeholder="Name" name="name" onChange={updateForm} value={form.name}/>
          </div>
            <div className="mb-4">
              <label htmlFor="" className="block rounded p-3">
                Favorite Food
              </label>
              <input type="text" className="border rounded p-3" placeholder="Favorite Food" name="favoriteFood" onChange={updateForm} value={form.favoriteFood} />
            </div>

            <button className={`text-white py-2 px-4 rounded ${isFilled ? 'bg-green-500 hover:bg-green-700': 'bg-red-500 hover:bg-red-700'}`} type="button" onClick={handleForm}>
              {isFilled ? 'Submint':'Clear'}
            </button>

        </div>
      </form>
      <p className={isSumbmitted ? '' : 'hidden'}>Thank you for your submission!</p>
    </main>
  );
}
