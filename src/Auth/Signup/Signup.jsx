import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import AuthFormLayout from '../AuthComponents/AuthFormLayout';
import FormInput from '../Forms/FormInput';
import PasswordInput from '../Forms/PasswordInput';
import { SignUpSchema } from '../ValidationSchema';

const Signup = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      userName: '',
      email: '',
      phone: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <AuthFormLayout
      title="Welcome to the community"
      subtitle="Sign up to Explore"
    >
      <Group className="px-0 max-w-[48%]">

        <Group className="mb-3 w-full">
          <Text className="text-3xl font-bold mb-10">Create your Account</Text>
          <Text className="font-bold text-base">Enter your Full Details</Text>
        </Group>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
          <FormInput
            control={control}
            name="userName"
            placeholder="User Name"
            error={errors.userName?.message}
          />

          <FormInput
            control={control}
            name="email"
            placeholder="Email"
            error={errors.email?.message}
          />

          <FormInput
            control={control}
            name="phone"
            placeholder="Phone"
            error={errors.phone?.message}
          />

          <PasswordInput
            control={control}
            name="password"
            placeholder="Password"
            error={errors.password?.message}
          />

          <Button
            type="submit"
            className="text-white font-bold p-2 !w-full bg-gradient-to-r from-text to-main !mt-8"
          >
            Sign In
          </Button>
        </form>

        <Group position="center" className="mt-4 flex justify-center items-center">
          <Text className="cursor-pointer text-base font-semibold">Have an Account?</Text>
          <Link to={'/login'}>
            <Text className="cursor-pointer text-[#769F7D] text-base font-bold">Login</Text>
          </Link>
        </Group>

      </Group>
    </AuthFormLayout>
  );
};

export default Signup;