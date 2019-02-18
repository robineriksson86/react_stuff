import React from "react";
import { Field, reduxForm } from "redux-form";

function CheckoutForm(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Name:</label>
          <br />
          <Field name="order[name]" component="input" type="text" />
        </div>

        <div>
          <label htmlFor="order[adress]">Adress:</label>
          <br />
          <Field name="order[adress]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[city]">City:</label>
          <br />
          <Field name="order[city]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[country]">Country:</label>
          <br />
          <Field name="order[country]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[postalcode]">Postalcode:</label>
          <br />
          <Field name="order[postalcode]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[phonenumber]">Phonenumber:</label>
          <br />
          <Field name="order[phonenumber]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[email]">Email:</label>
          <br />
          <Field name="order[email]" component="input" type="email" />
        </div>
        <div>
          <button type="submit">Submit order</button>
        </div>
      </form>
    </div>
  );
}

CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
