import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
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
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from 'src/graphql/mutation';
import { setToken } from 'src/services/Token';

// ----------------------------------------------------------------------

type FormValuesProps = {
  username: string;
  password: string;
  remember: boolean;
  afterSubmit?: string;
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Email/phone is required'),
  password: Yup.string().required('Password is required'),
});

const defaultValues = {
  username: 'admin@gmail.com',
  password: 'password',
};


export default function LoginForm() {


  const { authorizeUser } = useAuth()
  const navigate = useNavigate()
  const [loginMutation, { error, loading }] = useMutation(LOGIN_MUTATION)

  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });


  const onSubmit = async (values: FormValuesProps) => {
    try {
      const res = await loginMutation({
        variables: {
          login: {
            username: values.username,
            password: values.password
          }
        }
      })
      setToken(res.data.login.token)
      authorizeUser(res.data.login.user)
      navigate('/')

    } catch (error) {
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {error && <Alert
          sx={{ color: '#e63b25', fontWeight: 'bold', background: '#f5d1c1' }}
          severity="error">{error.message}</Alert>}

        <RHFTextField name="username" label="Email address" />

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
