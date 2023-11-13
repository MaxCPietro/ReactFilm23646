import { render } from "@testing-library/react";

import App from "./App";
import { describe, it, expect } from "vitest";

describe("App", () => {
    it ("should render componet", () => {
    const component = render(<App />);
    expect(component).toBeDefined();    
    });
});