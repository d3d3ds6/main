import { describe, expect, it, test } from "vitest";
import { render, screen, waitFor, getByText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

describe("App", () => {
    it("renders navbar", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(screen.getByTestId("navigation")).toBeInTheDocument();
    });

    it("renders home page", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={["/"]}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );
        test("movie category title appears", async () => {
            // element is initially not present...

            // wait for appearance inside an assertion
            await waitFor(() => {
                expect(getByText("popular")).toBeInTheDocument();
                expect(getByText("upcoming")).toBeInTheDocument();
                expect(getByText("now playing")).toBeInTheDocument();
                expect(getByText("top_rated")).toBeInTheDocument();
            });
        });
    });
});
