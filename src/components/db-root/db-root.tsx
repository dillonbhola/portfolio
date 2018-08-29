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

        <div class="sub-text">
          <p>
            more coming soon.
          </p>
        </div>
      </div>
    );
  }
}
