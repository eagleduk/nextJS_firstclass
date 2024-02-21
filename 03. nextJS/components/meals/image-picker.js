"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function InputImage() {
  const [image, setImage] = useState(null);
  const imageInput = useRef();

  const handleButtonClickEvent = () => {
    imageInput.current.click();
  };
  const handleImageInputChangeEvent = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!image && <p>No image picked yet.</p>}
        {image && <Image src={image} alt="picked image" fill />}
      </div>
      <div className={classes.picker}>
        <input
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageInputChangeEvent}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleButtonClickEvent}
        >
          Pick on Image
        </button>
      </div>
    </div>
  );
}
