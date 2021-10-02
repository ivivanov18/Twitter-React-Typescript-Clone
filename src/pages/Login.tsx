import React, { useState } from "react";
import { Form, Button, FormGroup, Image, Alert } from "react-bootstrap";
import { login } from "src/services/api";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //TODO: Add validation for input

  async function handleSubmit(evt: React.SyntheticEvent) {
    try {
      evt.preventDefault();
      setIsLoading(true);
      setError("");

      const target = evt.target as typeof evt.target & {
        username: { value: string };
        password: { value: string };
      };

      const username = target.username.value;
      const password = target.password.value;

      await login({ username, password });
      window.location.pathname = "/";
    } catch (exc: unknown) {
      if (exc instanceof Error) {
        setError(exc.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <fieldset disabled={isLoading}>
      <Form
        className="border mx-auto"
        onSubmit={handleSubmit}
        style={{ width: "40vw", margin: "10% auto", padding: "0.5rem" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="img/twitter-splash.png"
            rounded
            width={75}
            height={75}
            style={{ margin: "0.5rem 0" }}
          />
        </div>
        <FormGroup className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
          />
        </FormGroup>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div style={{ margin: "1rem auto" }}>
            <p>or</p>
          </div>
          <Button variant="light">Register</Button>
        </div>
      </Form>
    </fieldset>
  );
}
