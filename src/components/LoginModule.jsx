import React, { useState } from 'react';
import axios from 'axios';

const LoginModule = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/login', form, { withCredentials: true });
      if (res.data.token) {
        onLogin(res.data.token);
      } else {
        setError('Invalid response from server');
      }
    } catch (err) {
      setError(
        err.response?.data?.error ||
        'Login failed. Please check your credentials and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 card-tactical rounded-xl space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <div>
        <label className="block mb-2 font-mono text-xs">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="input-tactical w-full px-4 py-3 rounded-lg"
        />
      </div>
      <div>
        <label className="block mb-2 font-mono text-xs">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className="input-tactical w-full px-4 py-3 rounded-lg"
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        className="btn-tactical w-full py-3 rounded-lg font-bold"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginModule;
