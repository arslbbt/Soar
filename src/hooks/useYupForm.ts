import { useState, useCallback } from 'react';
import { ObjectSchema, ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string;
}

export function useYupForm<T extends Record<string, unknown>>(
  schema: ObjectSchema<T>,
  initialData: T
) {
  const [formData, setFormData] = useState<T>(initialData);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback(async (name: keyof T, value: unknown) => {
    try {
      await schema.validateAt(name as string, { [name]: value });
      setErrors(prev => ({ ...prev, [name]: '' }));
      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        setErrors(prev => ({ ...prev, [name]: error.message }));
      }
      return false;
    }
  }, [schema]);

  const handleChange = useCallback(async (name: keyof T, value: unknown) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    await validateField(name, value);
  }, [validateField]);

  const validateForm = useCallback(async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        const newErrors: ValidationErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  }, [schema, formData]);

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setFormData
  };
} 