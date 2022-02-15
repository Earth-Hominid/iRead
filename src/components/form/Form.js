import React from 'react';

const Form = () => {
  return (
    <>
      <div id="form-container">
        <div className="title">Enter your book details</div>
        <div className="content">
          <form id="addbookform">
            <div className="book-details">
              <div className="input-box">
                <label for="title">Title</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter the title"
                  autocomplete="off"
                  required=""
                />
              </div>
              <div className="input-box">
                <label for="author">Author</label>
                <input
                  id="author"
                  type="text"
                  name="author"
                  placeholder="Enter the author"
                  autocomplete="off"
                  required=""
                />
              </div>
              <div className="input-box">
                <label for="pages">Pages</label>
                <input
                  id="pages"
                  type="number"
                  name="pages"
                  min="0"
                  max="9999"
                  placeholder="Enter the number of pages"
                />
              </div>
              <div className="input-box">
                <label for="cover">Image URL</label>
                <input
                  id="cover"
                  type="url"
                  name="cover"
                  placeholder="www.example.com (not required)"
                />
              </div>
            </div>
            <div className="read-details">
              <input type="radio" name="read" id="dot-1" />
              <input type="radio" name="read" id="dot-2" />
              <span className="read-title">Finished Reading?</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot" id="one"></span>
                  <span className="yes-no">Yes</span>
                </label>
                <label for="dot-2">
                  <span className="dot" id="two"></span>
                  <span className="yes-no">No</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" id="btn" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
