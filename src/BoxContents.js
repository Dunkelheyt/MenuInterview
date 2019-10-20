import React, { Component } from "react";
import Modal from "react-modal";

class BoxContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      showModal: false,
      selectedOption: "option1"
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  toggleBg = () => {
    this.setState({ color: this.state.color === "white" ? "blue" : "blue" });
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have selected:", this.state.selectedOption);
  };

  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div
          className="border border-dark mt-2"
          style={{ backgroundColor: this.state.color }}
        >
          <img className="img-fluid imgsizing" src={this.props.img} alt="x" />
          <h1>{this.props.desc}</h1>
          <p>{this.props.num}</p>
          <button
            onClick={event => {
              {
                this.toggleBg();
                this.handleOpenModal();
              }
            }}
            type="button"
            class="btn btn-primary"
          >
            Check item
          </button>
          <Modal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className=""
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <img
                    className="img-fluid imgsizing"
                    src={this.props.img}
                    alt="x"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <p>{this.props.title}</p>
                  <p>{this.props.desc2}</p>
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="form-check">
                      <label>
                        <input
                          type="radio"
                          name="react-tips"
                          value="option1"
                          checked={this.state.selectedOption === "option1"}
                          onChange={this.handleOptionChange}
                          className="form-check-input"
                        />
                        {this.props.value1}
                      </label>
                    </div>

                    <div className="form-check">
                      <label>
                        <input
                          type="radio"
                          name="react-tips"
                          value="option2"
                          checked={this.state.selectedOption === "option2"}
                          onChange={this.handleOptionChange}
                          className="form-check-input"
                        />
                        {this.props.value2}
                      </label>
                    </div>

                    <div className="form-check">
                      <label>
                        <input
                          type="radio"
                          name="react-tips"
                          value="option3"
                          checked={this.state.selectedOption === "option3"}
                          onChange={this.handleOptionChange}
                          className="form-check-input"
                        />
                        {this.props.value3}
                      </label>
                    </div>

                    <div className="form-group">
                      <button className="btn btn-primary mt-2" type="submit">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <button onClick={this.handleCloseModal} className="btn btn-primary">
              Cancelar
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default BoxContents;
