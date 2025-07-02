import React, { useState } from 'react';
import {type UserFormErrors, type UserForm, userFormSchema } from './types/UserForm';

const UserFormComponent = () => {
  const [formData, setFormData] = useState<UserForm>({
    name: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: 'male'
  });

  const [error, setError] = useState<UserFormErrors>({});

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'age' ? (value ? Number(value) : 0) : value
    });

    setError(prev => ({ ...prev, [name]: undefined }));
  };


  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = userFormSchema.safeParse(formData);

    if (!result.success) {
      setError(result.error.formErrors.fieldErrors);
    }else {
      setError({});
      console.log(formData);
      
    }
    
  };


  return (
    <form onSubmit={onSubmitHandler} className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md">
      {/* Name */}
      <div className="mb-5 flex flex-col">
        <label htmlFor="name" className="mb-1 font-semibold text-gray-700">Name</label>
        <input
          name="name"
          id="name"
          value={formData.name}
          onChange={changeInputHandler}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
        />

         {error.name && (
            <span className='text-red-500 text-sm'>{error.name[0]}</span>
          )}
      </div>
      {/* Age */}
      <div className="mb-5 flex flex-col">
        <label htmlFor="age" className="mb-1 font-semibold text-gray-700">Age</label>
        <input
          name="age"
          id="age"
          value={formData.age}
          onChange={changeInputHandler}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
        />

        {error.age && (
            <span className='text-red-500 text-sm'>{error.age[0]}</span>
          )}
      </div>
      {/* Email */}
      <div className="mb-5 flex flex-col">
        <label htmlFor="email" className="mb-1 font-semibold text-gray-700">Email</label>
        <input
          name="email"
          id="email"
          value={formData.email}
          onChange={changeInputHandler}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
        />
        {error.email && (
            <span className='text-red-500 text-sm'>{error.email[0]}</span>
          )}
      </div>
      {/* Password */}
      <div className="mb-5 flex flex-col">
        <label htmlFor="password" className="mb-1 font-semibold text-gray-700">Password</label>
        <input
          name="password"
          id="password"
          value={formData.password}
          onChange={changeInputHandler}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
        />

        {error.password && (
            <span className='text-red-500 text-sm'>{error.password[0]}</span>
          )}
      </div>
      {/* Confirm Password */}
      <div className="mb-5 flex flex-col">
        <label htmlFor="confirmPassword" className="mb-1 font-semibold text-gray-700">Confirm Password</label>
        <input
          name="confirmPassword"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={changeInputHandler}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
        />

        {error.confirmPassword && (
            <span className='text-red-500 text-sm'>{error.confirmPassword[0]}</span>
          )}
      </div>
      {/* Phone */}
      <div className="mb-5 flex flex-col">
        <label htmlFor="phone" className="mb-1 font-semibold text-gray-700">Phone</label>
        <input
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={changeInputHandler}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
        />
        {error.phone && (
            <span className='text-red-500 text-sm'>{error.phone[0]}</span>
          )}
      </div>
      {/* Gender */}
      <div className="mb-5 flex flex-col">
        <label htmlFor="gender" className="mb-1 font-semibold text-gray-700">Gender</label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={changeInputHandler}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {error.gender && (
            <span className='text-red-500 text-sm'>{error.gender[0]}</span>
          )}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
    </form>
  );
};

export default UserFormComponent;
