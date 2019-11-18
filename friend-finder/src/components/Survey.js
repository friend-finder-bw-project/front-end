// Colin and Luis

import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function Survey() {
  return (
    <div>
        
        <Form>
        <label>
            Whats your Favourite drink?
            <Field as="select" name="FavouriteDrink">
                <option>Select an option</option>
                <option>Tea</option>
                <option>Coffee</option>
            </Field>
        </label>
        <label>
            What type of music do you like ?
            <Field as="select" name="FavouriteMusic">
                <option>Select an option</option>
                <option>Hiphop</option>
                <option>Country</option>
                <option>Pop</option>
            </Field>
        </label>
        <label>
            Whats social media network do you use most often ?
            <Field as="select" name="FavouriteSocialMedia">
                <option>Select an option</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Twitter</option>
            </Field>
        </label>
        <input type="submit" />
        </Form>
        
    </div>
  );
}

const SurveyWithFormik = withFormik({
    mapPropsToValues() {
        return {
            FavouriteDrink: "",
            FavouriteMusic: "",
            FavouriteSocialMedia: "",

        };
    },
    validationSchema: Yup.object().shape({
        FavouriteDrink: Yup.string().required(""),
        FavouriteMusic: Yup.string().required(""),
        FavouriteSocialMedia: Yup.string().required(""),
        
    })

    
})(Survey);

export default SurveyWithFormik;

