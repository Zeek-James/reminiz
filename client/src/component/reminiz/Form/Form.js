import React from "react";
import "./styles.css";

export const Form = () => {
  return (
    <div className="form_Container">
      <h3>Reminiz</h3>
      <form>
        <label htmlFor="creator">Creator</label>
        <br />
        <input
          name="creator"
          id="creator"
          type="text"
          placeholder="Input Creator"
        />
        <br />
        <label htmlFor="titlr">Title</label>
        <br />
        <input name="title" id="title" type="text" placeholder="Input Title" />
        <br />
        <label htmlFor="tags">Tag</label>
        <br />
        <input name="tags" id="tags" type="text" placeholder="Tags" />
        <br />
        <label htmlFor="mesage">Message</label>
        <br />
        <input name="message" id="message" type="text" placeholder="Message" />
        <br />

        <div>
          <input type="submit" />
          <br />

          <button className="clear_Btn">Clear</button>
        </div>
      </form>
    </div>
  );
};
