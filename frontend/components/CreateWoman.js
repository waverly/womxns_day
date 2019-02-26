import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form, { Button } from "./styles/Form";
import Error from "./ErrorMessage";
import { ALL_WOMEN_QUERY } from "./Women";
import { genId } from "./helpers";

const CREATE_WOMAN_MUTATION = gql`
  mutation CREATE_WOMAN_MUTATION($name: String!) {
    createWoman(name: $name) {
      name
      id
    }
  }
`;

class CreateWoman extends Component {
  state = {
    name: ""
  };
  handleChange = e => {
    const { type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ name: val });
  };
  render() {
    return (
      <Mutation mutation={CREATE_WOMAN_MUTATION} variables={this.state}>
        {(createWoman, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              const res = await createWoman({
                refetchQueries: [
                  {
                    query: ALL_WOMEN_QUERY
                  }
                ]
              });

              const id = genId(this.state.name);
              Router.push(`/names#${id}`);
              // this.setState({ name: "" });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <div className="wrapper">
                <label htmlFor="title">
                  Name
                  <input
                    // onFocus={this.props.onFocus}
                    // onBlur={this.props.onBlur}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Placeholder"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <Button display={this.state.name.length > 0} type="submit">
                  <span>Submit</span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 19L23 19.75L23.75 19.75L23.75 19L23 19ZM0.469667 18.4697C0.176775 18.7626 0.176775 19.2374 0.469667 19.5303L5.24264 24.3033C5.53553 24.5962 6.01041 24.5962 6.3033 24.3033C6.59619 24.0104 6.59619 23.5355 6.3033 23.2426L2.06066 19L6.3033 14.7574C6.59619 14.4645 6.59619 13.9896 6.3033 13.6967C6.01041 13.4038 5.53553 13.4038 5.24264 13.6967L0.469667 18.4697ZM22.25 1.84178e-06L22.25 19L23.75 19L23.75 1.97292e-06L22.25 1.84178e-06ZM23 18.25L0.999998 18.25L0.999998 19.75L23 19.75L23 18.25Z"
                      fill="black"
                    />
                  </svg>
                </Button>
              </div>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateWoman;
export { CREATE_WOMAN_MUTATION };
