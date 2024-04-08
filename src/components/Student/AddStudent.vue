<template>
    <div class="container">
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="row">
                <div class="col-sm-4 mb-3">
                    <label>First Name</label>
                    <Field type="text" name="firstName" v-model="firstName" class="form-control" />
                    <span class="text-danger">{{ errors.firstName }}</span>
                </div>

                <div class="col-sm-4 mb-3">
                    <label class="form-label">Last Name</label>
                    <Field type="text" name="lastName" v-model="lastName" class="form-control" />
                    <span class="text-danger">{{ errors.lastName }}</span>
                </div>

                <div class="col-md-4 mt-3">
                    <label>Email</label>
                    <Field type="email" name="email" class="form-control" />
                    <span class="text-danger">{{ errors.email }}</span>
                </div>
                <div class="col-md-4 mt-3">
                    <label>Password</label>
                    <Field type="password" name="password" class="form-control" />
                    <span class="text-danger">{{ errors.password }}</span>
                </div>
                <div class="col-md-4 mt-3">
                    <label>Confirm Password</label>
                    <Field type="password" name="confirmPassword" class="form-control" />
                    <span class="text-danger">{{ errors.confirmPassword }}</span>
                </div>

                <div class="col-sm-4 mb-3">
                    <label>City</label>
                    <Field type="text" name="city" v-model="city" class="form-control" />
                    <span class="text-danger">{{ errors.city }}</span>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-gray me-1" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>
        </Form>
    </div>
</template>

<script setup>
import * as Yup from 'yup';
import { Form, Field } from 'vee-validate';

const schema = Yup.object().shape({
    firstName: Yup.string().required().label("First Name"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    city: Yup.string(),
});

function onSubmit(value) {
    console.log(value)
    try {
        localStorage.setItem('studentData', JSON.stringify(value));
        return true;
    }
    catch (ex) {
        console.error(ex);
        return false;
    }
}
</script>
