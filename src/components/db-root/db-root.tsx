import { Component } from "@stencil/core";

@Component({
  tag: "db-root",
  styleUrl: "db-root.css"
})
export class Root {
  componentWillLoad() {
    console.log("Component is about to be rendered");
  }

  componentDidLoad() {
    console.log("Component has been rendered");
  }

  componentWillUpdate() {
    console.log("Component will update and re-render");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentDidUnload() {
    console.log("Component removed from the DOM");
  }

  render() {
    return (
      <div class="db-root">
        <div class="fancy-text">Dillon Bhola</div>

        <div class="project-link" onClick={() => window.open("https://shubhdaanfoundation.netlify.com/", "_blank")}>
          <p>view work in progress</p>
          <i class="material-icons icon first-icon">work</i>
          <i class="material-icons icon second-icon">launch</i>
        </div>

        <div class="sub-text">
          <p>more coming soon</p>
        </div>

        <div class="footer">
          <div class="container">
            <i class="material-icons">email</i>
            <p class="email-text">dillonbhola@gmail.com</p>
          </div>
          <div class="container">
            <i class="material-icons">phone</i>
            <p class="phone-text">+1-868-471-3010</p>
          </div>
        </div>
      </div>
    );
  }
}
