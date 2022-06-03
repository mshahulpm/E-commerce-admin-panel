import { Form, FormikProvider, useFormik, FormikFormProps, FormikErrors, FormikProps, FormikBag, FormikContextType } from 'formik';
// material
import {
  Box,
  Card,
  Checkbox,
  CardHeader,
  Typography,
  FormControlLabel,
  Stack,
  CheckboxProps
} from '@mui/material';

// ----------------------------------------------------------------------

const TASKS = [
  'Create FireStone Logo',
  'Add SCSS and JS files if required',
  'Stakeholder Meeting',
  'Scoping & Estimations',
  'Sprint Showcase'
];

// ----------------------------------------------------------------------

type TaskItemProps = {
  task: string,
  checked: boolean,
  formik: FormikContextType<{ checked: string[] }>
};

function TaskItem({ task, checked, formik, ...other }: TaskItemProps & CheckboxProps) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: 'text.disabled',
                textDecoration: 'line-through'
              })
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function AppTasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });



  const { values, handleSubmit } = formik;

  return (
    <Card>
      <CardHeader title="Tasks" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
