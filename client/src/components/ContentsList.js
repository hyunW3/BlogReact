import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }

  componentDidMount() {
    fetch("/contents")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((data) => {
          this.setState((prevState) => ({
            contents: [
              ...prevState.contents,
              {
                id: data._id,
                title: data.title,
                date: data.date,
                thumbs: data.thumbs,
                modified: false,
              },
            ],
          }));
        });
      });
  }

  componentWillUnmount() {
    const { contents } = this.state;
    const updateList = [];
    // console.log("is unmount",contents);
    contents.forEach((data) => {
      if (data.modified === true) {
        // console.log(data)
        updateList.push(data);
      }
    });
    // console.log(updateList)
    /* // TODO2 - thumbsUp DB update part - request to Backend
	fetch('/contents:update', {
		method: 'POST',
		body: JSON.stringify(updateList),
		headers: {
			'Content-Type':'application/json'
		},
	})
	 */
  }

  thumbsUp(targetId) {
    const { contents } = this.state;
    const newArr = [];
    contents.forEach((data) => {
      if (data.id === targetId) {
        const { id, title, date, thumbs } = data;
        const newThumbs = thumbs + 1;
        newArr.push({ id, title, date, thumbs: newThumbs, modified: true });
      } else newArr.push(data);
    });

    this.setState({ contents: newArr });
  }

  render() {
    const { contents } = this.state;
    return (
      <div className="contents">
        <p>{contents.title}</p>
        <div className="contentsList">
          {contents.map((content) => (
            <div key={content.id}>
              <h3>
                <Link to={`/view/${content.id}`}>{content.title}</Link>

                <button
                  type="button"
                  onClick={this.thumbsUp.bind(this, content.id)}
                >
                  👍{content.thumbs}
                </button>
              </h3>
              {content.date}에 작성
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ContentsList;
