import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { ALL_WOMEN_QUERY } from "./Women";
import { setBodyHeight } from "./helpers";

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
    name: "Name Here"
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Mutation mutation={CREATE_WOMAN_MUTATION} variables={this.state}>
        {(createWoman, { loading, error }) => (
          <Form
            onSubmit={async e => {
              // Stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await createWoman({
                refetchQueries: [
                  {
                    query: ALL_WOMEN_QUERY
                  }
                ]
              });
              // change them to the single item page
              console.log(res);
              // set height of body again based on new item added

              this.setState({ name: "Name Goes Here" });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <div className="wrapper">
                <label htmlFor="title">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name Goes Here"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
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
