import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Event name is required'),
  date: Yup.date().required('Date is required'),
  location: Yup.string().required('Location is required'),
  description: Yup.string().required('Description is required'),
});

function EventForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', date: '', location: '', description: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
     <Form className="max-w-lg mx-auto bg-yellow-200/50 p-8 rounded-lg shadow-lg mt-10">
  <h2 className="text-3xl font-extrabold mb-6 text-[#47223d] text-center">Create Event</h2>
  <div className="mb-6">
    <label htmlFor="name" className="block text-gray-800 text-lg font-medium mb-2">Event Name</label>
    <Field type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#E178C5] focus:border-[#E178C5] transition" />
    <ErrorMessage name="name" component="div" className="text-red-600 mt-2 text-sm" />
  </div>
  <div className="mb-6">
    <label htmlFor="date" className="block text-gray-800 text-lg font-medium mb-2">Date</label>
    <Field type="date" id="date" name="date" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#E178C5] focus:border-[#E178C5] transition" />
    <ErrorMessage name="date" component="div" className="text-red-600 mt-2 text-sm" />
  </div>
  <div className="mb-6">
    <label htmlFor="location" className="block text-gray-800 text-lg font-medium mb-2">Location</label>
    <Field type="text" id="location" name="location" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#E178C5] focus:border-[#E178C5] transition" />
    <ErrorMessage name="location" component="div" className="text-red-600 mt-2 text-sm" />
  </div>
  <div className="mb-6">
    <label htmlFor="description" className="block text-gray-800 text-lg font-medium mb-2">Description</label>
    <Field as="textarea" id="description" name="description" rows="4" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#E178C5] focus:border-[#E178C5] transition" />
    <ErrorMessage name="description" component="div" className="text-red-600 mt-2 text-sm" />
  </div>
  <button type="submit" className="w-full bg-[#E178C5] text-white py-3 px-4 rounded-lg hover:bg-[#E178C5]/80 transition duration-300">Create Event</button>
</Form>
    </Formik>
  );
}

export default EventForm;