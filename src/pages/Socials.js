import React from 'react'
import '../styles/socials.css'
import { Link } from "react-router-dom";
function Socials() {
  return (
    <div className="Social">
        <a target="_blank" href="https://twitter.com/theonlyshaid?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1512868950413131778%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=" className="Twitter card">
            <h3>Twitter</h3>
            <img className="icon" src="https://images.koji-cdn.com/generic/JtKYoYX5NaQNeUcp5JNRih4XTfS2_1635796085756.jpg?fm=webp&w=180?w=138"/>
        </a>
        <a target="_blank" href="https://www.instagram.com/theonlyshaid/" className="card">
            <h3>Instagram</h3>
            <img className="icon" src="https://images.koji-cdn.com/generic/JtKYoYX5NaQNeUcp5JNRih4XTfS2_1635796085756.jpg?fm=webp&w=180?w=138"/>
        </a>
        <a target="_blank" href="https://www.instagram.com/theonlyshaid/" className="card">
            <h3>TikTok</h3>
            <img className="icon" src="https://images.koji-cdn.com/generic/JtKYoYX5NaQNeUcp5JNRih4XTfS2_1635796085756.jpg?fm=webp&w=180?w=138"/>
        </a>
    </div>
  )
}

export default Socials