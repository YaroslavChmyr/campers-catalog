import css from "./BookingForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MainButton from "../MainButton/MainButton";
import * as Yup from "yup";

function BookingForm() {
  const BookingSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
  });
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const bookingDateFieldId = nanoid();
  const commentFieldId = nanoid();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={`${css.field} ${css.nameField}`}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name*"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
          <Field
            className={css.field}
            type="date"
            name="bookingDate"
            id={bookingDateFieldId}
            placeholder="Booking date*"
          />
          <ErrorMessage
            name="bookingDate"
            component="div"
            className={css.error}
          />
          <Field
            as="textarea"
            className={`${css.field} ${css.commentField}`}
            type="text"
            name="comment"
            id={commentFieldId}
            placeholder="Comment"
          />
          <ErrorMessage name="comment" component="div" className={css.error} />
          <div className={css.buttonContainer}>
            <MainButton type="submit" onSubmit={handleSubmit}>Send</MainButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default BookingForm;
