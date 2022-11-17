import React, { useState } from "react";
import axios from "axios";
import { SignUpWrapper } from "../../../StyledComponents/Wrappers/SignUpWrapper";
import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
const initialValue = {
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [value, setValue] = useState(initialValue);

  const changeValues = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  const signUpfunc = (e) => {
    e.preventDefault();
    if (value.email && value.password && value.username) {
      const urlApi = "https://english-teacher-uz.herokuapp.com/api/auth/signup";

      axios
        .post(urlApi, {
          username: value.username,
          email: value.email,
          password: value.password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  return (
    <SignUpWrapper>
      <Col lg={6} md={6} sm={12} className="left-side border py-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            // disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </Col>
      <Col lg={6} md={6} sm={12} className="right-side border py-5"></Col>
    </SignUpWrapper>
  );
}
