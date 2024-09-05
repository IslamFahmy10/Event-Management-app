import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/homeImage.jpg'
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === values.username && storedUser.password === values.password) {
      // User is authenticated
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen " style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#E178C5]">Login</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <Field type="text" id="username" name="username" className="form-input mt-1 p-2 border border-gray-300 rounded-md shadow-sm" />
              <ErrorMessage name="username" component="div" className="text-red-500 mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <Field type="password" id="password" name="password" className="form-input mt-1 p-2 border border-gray-300 rounded-md shadow-sm" />
              <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
            </div>
            <button type="submit" className="bg-[#E178C5] text-white py-2 px-4 rounded-md hover:bg-[#E178C5]/80 transition">Login</button>
          </Form>
        </Formik>
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <button
            onClick={() => navigate('/register')}
            className="text-[#E178C5] hover:underline mt-2"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;