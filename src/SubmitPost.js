import axios from "axios";
import { useState } from "react";

export default function SubmitPost() {
  // tags,title,adress,longitude,latitude,condition,popularity,picturesDescription,picturesUrl,description,supplies
  const [formValues, setValues] = useState({});
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const newPost = {
  //     tags: form.tags.value,
  //     title: form.title.value,
  //     adress: form.adress.value,
  //     longitude: form.longitude.value,
  //     latitude: form.latitude.value,
  //     condition: form.condition.value,
  //     popularity: form.popularity.value,
  //     picturesDescription: form.picturesDescription.value,
  //     picturesUrl: form.picturesUrl.value,
  //     description: form.description.value,
  //     supplies: form.supplies.value,
  //   };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.id);

    setValues({ ...formValues, [e.target.id]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValues);

    axios
      .post("http://localhost:3001/api/locations", formValues)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="content-container-custom p-5">
      <h1 className="fs-3">Enter Details for the Location you want to add:</h1>
      <form onSubmit={submitForm} onChange={handleChange}>
        <div className="mb-2 col-6">
          <label for="tags" className="form-label">
            Tags{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            value={formValues.tags}
          />
          <div id="titleHelp" className="form-text col-6">
            Enter the the title of your location here{" "}
          </div>
        </div>

        <div className="mb-3 col-6">
          <label for="title" className="form-label col-6">
            Title{" "}
          </label>
          <input
            type="text"
            className="form-control col-6"
            id="title"
            aria-describedby="emailHelp"
            value={formValues.title}
          />
          <div id="titleHelp" className="form-text col-6">
            Enter the the title of your location here{" "}
          </div>
        </div>

        <div className="mb-3 col-6">
          <label for="adress" className="form-label">
            Adress{" "}
          </label>
          <input
            type="text"
            className="form-control col-6"
            id="adress"
            aria-describedby="emailHelp"
            value={formValues.adress}
          />
        </div>

        <div className="mb-3 col-6">
          <label for="longitude" className="form-label">
            Longitude{" "}
          </label>
          <input
            type="number"
            className="form-control col-6"
            id="longitude"
            aria-describedby="emailHelp"
            value={formValues.longitude}
          />
        </div>

        <div className="mb-3 col-6">
          <label for="latitude" className="form-label">
            Latitude{" "}
          </label>
          <input
            type="number"
            className="form-control col-6"
            id="latitude"
            aria-describedby="emailHelp"
            value={formValues.latitude}
          />
        </div>

        <div className="mb-3 col-6">
          <label for="condition" className="form-label">
            Condition{" "}
          </label>
          <input
            type="text"
            className="form-control col-6"
            id="condition"
            aria-describedby="emailHelp"
            value={formValues.condition}
          />
        </div>

        <div className="mb-3 col-6">
          <label for="popularity" className="form-label">
            Popularity{" "}
          </label>
          <input
            type="text"
            className="form-control col-6"
            id="popularity"
            aria-describedby="emailHelp"
            value={formValues.popularity}
          />
          <div id="emailHelp" className="form-text col-6">
            Cozy or vibrant?{" "}
          </div>
        </div>

        <div className="mb-3 col-6">
          <label for="picturesDescription" className="form-label">
            Picture description
          </label>
          <input
            type="text"
            className="form-control col-6"
            id="picturesDescription"
            aria-describedby="emailHelp"
            value={formValues.picturesDescription}
          />
          <div id="picturesDescription" className="form-text">
            Describe your picture
          </div>
        </div>
        <div className="mb-3 col-6">
          <label for="exampleInputEmail1" className="form-label">
            Link to picture
          </label>
          <input
            type="text"
            className="form-control"
            id="picturesUrl"
            aria-describedby="emailHelp"
            value={formValues.picturesUrl}
          />
          <div id="picturesUrl" className="form-text col-6">
            Add a link to your picture here
          </div>
        </div>
        <div className="mb-3 col-6">
          <label for="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control col-6"
            id="description"
            aria-describedby="emailHelp"
            value={formValues.description}
          />
          <div id="description" className="form-text col-6">
            Describe the table for others
          </div>
        </div>
        <div className="mb-3 col-6">
          <label for="supplies" className="form-label">
            Snacks in the area
          </label>
          <input
            type="text"
            className="form-control col-6"
            id="supplies"
            aria-describedby="emailHelp"
            value={formValues.supplies}
          />
          <div id="supplies" className="form-text col-6">
            What snack opportunities are nearby?
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
