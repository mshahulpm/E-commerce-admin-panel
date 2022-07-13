import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from 'src/components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from 'src/components/hook-form';
import { useAuth } from 'src/context/AuthContext';
import { useAxiosMutation } from 'src/hooks/axiosHooks';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

export default function LoginForm() {


  const { login } = useAuth();
  const [loginMutation, { error, loading }] = useAxiosMutation()

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: 'demo1234',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values: FormValuesProps) => {
    try {
      const res = await loginMutation('/auth/login', { data: values })
      // @ts-ignore
      login(res.accessToken)
    } catch (error) {
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {error && <Alert
          sx={{ color: '#e63b25', fontWeight: 'bold', background: '#f5d1c1' }}
          severity="error">{error.data?.message}</Alert>}

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 4 }}>
        {/* <RHFCheckbox name="remember" label="Remember me" /> */}
        <div></div>
        <Link component={RouterLink} variant="subtitle2" to={'/reset-password'}>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
      >
        Login
      </LoadingButton>
    </FormProvider>
  );
}
