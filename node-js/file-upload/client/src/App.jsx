import React from 'react';

const App = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pdf', e.target.pdf.files[0]);

    const response = await fetch('http://localhost:5000/pdf', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    document.getElementById('result').innerText = data.result;
  }
  return (
    <div>
      <div className='bg-blue-300 w-[400px] h-60'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4'>
      <input type="file" accept="application/pdf" name="pdf" required />
      <button className='bg-black text-white p-2 text-sm font-medium' type="submit">Upload PDF</button>
    </form>

  </div>
    <div id="result"></div>
    </div>
  );
};

export default App;