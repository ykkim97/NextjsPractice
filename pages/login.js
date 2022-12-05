import { Button, Form } from "semantic-ui-react";
import styles from "./Login.module.css";

export default function Login() {
    return (
        <div className={styles['Login-Container']}>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID" />
                </Form.Field>
                <Form.Field inline>
                    <input type="password" placeholder="Password" />
                </Form.Field>
                <Button color="blue">Login</Button>
            </Form>
        </div>
    )
}