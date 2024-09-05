import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // Store user data and navigate to login
    localStorage.setItem('user', JSON.stringify(values));
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFDCB]" style={{ backgroundImage: `url('/assets/background.jpg')`, backgroundSize: 'cover' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <Formik
          initialValues={{ username: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <Field type="text" id="username" name="username" className="form-input mt-1 p-2 border border-gray-300 rounded" />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <Field type="password" id="password" name="password" className="form-input mt-1 p-2 border border-gray-300 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" className="form-input mt-1 p-2 border border-gray-300 rounded" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="bg-[#E178C5] text-white p-2 rounded">Register</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;