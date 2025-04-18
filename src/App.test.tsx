import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "@testing-library/jest-dom"; // Add this import

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

    it("renders home page and shows movie categories", async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={["/"]}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        );
        
        // Wait for appearance inside an assertion
        await waitFor(() => {
            expect(screen.getByText("popular")).toBeInTheDocument();
            expect(screen.getByText("upcoming")).toBeInTheDocument();
            expect(screen.getByText("now playing")).toBeInTheDocument();
            expect(screen.getByText("top_rated")).toBeInTheDocument();
        });
    });
});