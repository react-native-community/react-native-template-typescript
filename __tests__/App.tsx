import * as React from "react";
import "react-native";
import { create } from "react-test-renderer";

import App from "../src/App";

it("renders correctly", () => {
    const tree = create(<App exampleProp="helloWorld" />);
});
