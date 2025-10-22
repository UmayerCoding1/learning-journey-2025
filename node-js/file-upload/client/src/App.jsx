import React from 'react';

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
     const file = e.target.file.files[0];

    console.log('d')
    formData.append('file', file);
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>File Upload </h1>


      <div className='mt-10 bg-neutral-200 p-10 rounded-2xl'>
         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="file" name="file" className='border p-1 rounded-lg border-neutral-300' />
          <button type="submit" className='bg-blue-500 p-2 cursor-pointer'>Upload</button>
         </form>
      </div>
    </div>
  );
};

export default App;