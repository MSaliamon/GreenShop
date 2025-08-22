import './SignIn.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Eyes from '../../assets/Reges/svg/eyes.svg';

const schema = yup
  .object({
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .matches(/^\d+$/, 'Password must contain only numbers')
      .min(8)
      .max(16)
      .required('Password is required'),
  })
  .required();

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: yup.InferType<typeof schema>) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: { email: string; password: string }) => u.email === data.email);
    if (!user) {
      setError('Invalid email or password');
      return;
    }
    if (btoa(data.password) !== user.password) {
      setError('Invalid email or password');
      return;
    }
    const token = btoa(JSON.stringify({ email: data.email, timestamp: Date.now() }));
    localStorage.setItem('token', token);
    localStorage.setItem('isRegistered', 'true');
    navigate('/home');
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="form__title">Sign In</h1>
        {error && <p className="form__error">{error}</p>}
        <div className="form-wrap">
          <input
            {...register('email')}
            type="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <p className="form__error">{errors.email?.message}</p>
        <div className="form-wrap">
          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            className="form__input"
            placeholder="Password"
          />
          <span
            className="main-reges__password-toggle"
            onClick={togglePasswordVisibility}
          >
            <img src={Eyes} alt="Toggle Password Visibility" />
          </span>
        </div>
        <p className="form__error">{errors.password?.message}</p>
        <Link to="/SignUp">Do you want to sign up?</Link>
        <button className="form__btn">Submit</button>
      </form>
      <Footer />
    </>
  );
}

export default SignIn;