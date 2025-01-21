/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
const MyButton3=({abc,xyz})=><button disabled={abc}>{xyz}</button>


MyButton3.defaultProps = {
    abc:false,
    xyz:"click me",
};
export default MyButton3;