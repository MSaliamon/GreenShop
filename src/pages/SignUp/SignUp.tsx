import './SignUp.scss';
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
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match'),
  })
  .required();

interface SignUpProps {
  onRegister: () => void;
}

function SignUp({ onRegister }: SignUpProps) {
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
    if (users.some((user: { email: string }) => user.email === data.email)) {
      setError('User already exists');
      return;
    }
    const hashedPassword = btoa(data.password);
    const token = btoa(JSON.stringify({ email: data.email, timestamp: Date.now() }));
    users.push({ email: data.email, password: hashedPassword });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('token', token);
    localStorage.setItem('isRegistered', 'true');
    onRegister();
    navigate('/home');
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="form__title">Sign Up</h1>
        {error && <p className="form__error">{error}</p>}
        <div className="form-wrap">
          <input
            {...register('email')}
            type="email"
            className="form__input form__input--email"
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
        <div className="form-wrap">
          <input
            {...register('confirmPassword')}
            type={showPassword ? 'text' : 'password'}
            className="form__input"
            placeholder="Confirm Password"
          />
          <span
            className="main-reges__password-toggle"
            onClick={togglePasswordVisibility}
          >
            <img src={Eyes} alt="Toggle Password Visibility" />
          </span>
        </div>
        <p className="form__error">{errors.confirmPassword?.message}</p>
        <Link to="/SignIn">Do you want to sign in?</Link>
        <button className="form__btn">Submit</button>
      </form>
      <Footer />
    </>
  );
}

export default SignUp;