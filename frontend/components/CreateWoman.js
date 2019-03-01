import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import Link from "next/link";
import gql from "graphql-tag";
import Router from "next/router";
import Form, { Button } from "./styles/Form";
import Error from "./ErrorMessage";
import { genId } from "./helpers";
import { ALL_WOMEN_QUERY } from "./Women";

const CREATE_WOMAN_MUTATION = gql`
  mutation CREATE_WOMAN_MUTATION($name: String!, $slug: String!) {
    createWoman(name: $name, slug: $slug) {
      name
      slug
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
    const slug = genId(val);
    this.setState({ name: val, slug: slug });
  };
  render() {
    return (
      <Fragment>
        <Mutation mutation={CREATE_WOMAN_MUTATION} variables={this.state}>
          {(createWoman, { loading, error }) => (
            <Form
              onSubmit={async e => {
                e.preventDefault();

                // only run query if data.women did not have any items in it
                const res = await createWoman({
                  refetchQueries: [{ query: ALL_WOMEN_QUERY }]
                });
                Router.push(`/names#${this.state.slug}`);
                this.setState({ name: "", slug: "" });
              }}
            >
              <Link href="/names">
                <a>
                  <svg
                    className="close"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20022 24.7566L5.6216 21.178L11.5109 15.2887L5.88929 9.6671L9.66706 5.88934L15.2887 11.5109L21.1779 5.62164L24.7566 9.20027L18.8673 15.0896L24.5163 20.7386L20.7385 24.5163L15.0895 18.8673L9.20022 24.7566Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </Link>
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
                      placeholder="..."
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </label>
                  <Button
                    willdisplay={this.state.name.length > 0}
                    type="submit"
                  >
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
      </Fragment>
    );
  }
}

export default CreateWoman;
export { CREATE_WOMAN_MUTATION };
