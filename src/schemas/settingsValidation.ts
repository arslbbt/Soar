import * as yup from 'yup';

export const settingsSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be less than 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers and underscores'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  
  dob: yup
    .string()
    .required('Date of birth is required'),
  
  presentAddress: yup
    .string()
    .required('Present address is required'),
  
  permanentAddress: yup
    .string()
    .required('Permanent address is required'),
  
  postalCode: yup
    .string()
    .required('Postal code is required')
    .matches(/^\d{5}(-\d{4})?$/, 'Invalid postal code format'),
  
  city: yup
    .string()
    .required('City is required'),
  
  country: yup
    .string()
    .required('Country is required')
});

export type SettingsFormData = yup.InferType<typeof settingsSchema>; 