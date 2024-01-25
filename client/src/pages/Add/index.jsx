import React, { useEffect } from "react";
import "./styles.scss";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AddNew, DeleteById, GetAll } from "../../store/prods/api_actions";
import { Link } from "react-router-dom";

const AddSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  subTitle: Yup.string().required("Required"),
  desc: Yup.string().required("Required"),
  model: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive(),
});

const Add = () => {
  const { data, loading, error, currentData } = useSelector(
    (state) => state.prods
  );
  const dispatch = useDispatch();
  const getAll = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
      <div className="container pt-5">
        <h1>Add new</h1>
        <Formik
          initialValues={{
            title: "",
            subTitle: "",
            desc: "",
            model: "",
            price: 0,
            image: "",
          }}
          validationSchema={AddSchema}
          onSubmit={async (values) => {
            dispatch(AddNew(values))
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div class="form-group mb-3">
                <label htmlFor="title">Title</label>
                <Field
                  id="title"
                  class="form-control"
                  name="title"
                  placeholder="Title"
                />
                {errors.title && touched.title ? (
                  <div>{errors.title}</div>
                ) : null}
              </div>
              <div class="form-group mb-3">
                <label htmlFor="subTitle">Sub-Title</label>
                <Field
                  id="subTitle"
                  class="form-control"
                  name="subTitle"
                  placeholder="Sub-Title"
                />
                {errors.subTitle && touched.subTitle ? (
                  <div>{errors.subTitle}</div>
                ) : null}
              </div>
              <div class="form-group mb-3">
                <label htmlFor="model">Model</label>
                <Field
                  id="model"
                  class="form-control"
                  name="model"
                  placeholder="Model"
                />
                {errors.model && touched.model ? (
                  <div>{errors.model}</div>
                ) : null}
              </div>
              <div class="form-group mb-3">
                <label htmlFor="desc">Description</label>
                <Field
                  id="desc"
                  class="form-control"
                  name="desc"
                  placeholder="Description"
                />
                {errors.desc && touched.desc ? <div>{errors.desc}</div> : null}
              </div>
              <div class="form-group mb-3">
                <label htmlFor="price">Price</label>
                <Field
                  type="number"
                  id="price"
                  class="form-control"
                  name="price"
                  placeholder="Price"
                />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
              </div>
              <div class="form-group mb-3">
                <label htmlFor="image">Image URL</label>
                <Field
                  id="image"
                  class="form-control"
                  name="image"
                  placeholder="Image URL"
                />
                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}
                <small id="emailHelp" class="form-text text-muted">
                  Example:
                  https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Group-8211-copy-2.jpg?id=601
                </small>
              </div>

              <button className="btn btn-dark" type="submit">
                Add Product
              </button>
            </Form>
          )}
        </Formik>

        <table class="table table-bordered mt-5 ">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            ) : data ? (
              data.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={item.image} alt="image" style={{width:"60px", height:"60px", objectFit:"cover"}} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <div class="actions">
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => {
                          dispatch(DeleteById(item._id));
                        }}
                      >
                        Delete
                      </button>{" "}
                      <Link to={`/detail/${item._id}`} className="btn btn-dark">
                        Detail
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Add;
