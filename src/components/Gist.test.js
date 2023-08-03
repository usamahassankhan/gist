import React from "react";
import { render, screen } from "@testing-library/react";
import Gist from "./Gist"; // Assuming the Gist component is in the same directory

// Sample Gist data for testing
const sampleGist = {
  owner: {
    avatar_url: "https://example.com/avatar.jpg",
    html_url: "https://example.com/user",
    login: "example_user",
  },
  url: "https://example.com/gist",
  files: {
    file1: {
      raw_url: "https://example.com/raw/file1",
      filename: "file1.js",
    },
    file2: {
      raw_url: "https://example.com/raw/file2",
      filename: "file2.js",
    },
  },
  forks_url: "https://example.com/forks",
  comments_url: "https://example.com/comments",
  created_at: "2023-08-02T12:34:56Z",
  updated_at: "2023-08-03T10:12:34Z",
  description: "Sample Gist description",
};

test("renders Gist component with provided data", () => {
  render(<Gist gist={sampleGist} />);

  // Test Gist header elements
  expect(screen.getByText("example_user")).toBeInTheDocument();
  expect(screen.getByText("Forks")).toBeInTheDocument();
  expect(screen.getByText("Comments")).toBeInTheDocument();
  expect(screen.getByText("Stars")).toBeInTheDocument();
  expect(screen.getByText("Created At: 08/02/2023")).toBeInTheDocument();
  expect(screen.getByText("Last Updated At: 08/03/2023")).toBeInTheDocument();

  // Test Gist description
  expect(screen.getByText("Sample Gist description")).toBeInTheDocument();

  // Test Gist footer elements
  expect(screen.getByText("file1.js")).toBeInTheDocument();
  expect(screen.getByText("file2.js")).toBeInTheDocument();
});

test("renders empty Gist component when no data provided", () => {
  render(<Gist gist={{}} />);

  // Test that the Gist component renders without content
  expect(screen.queryByText("example_user")).toBeNull();
  expect(screen.queryByText("4 Files")).toBeNull();
  expect(screen.queryByText("Forks")).toBeNull();
  expect(screen.queryByText("Comments")).toBeNull();
  expect(screen.queryByText("Stars")).toBeNull();
  expect(screen.queryByText("Created At: 08/02/2023")).toBeNull();
  expect(screen.queryByText("Last Updated At: 08/03/2023")).toBeNull();
  expect(screen.queryByText("Sample Gist description")).toBeNull();
  expect(screen.queryByText("file1.js")).toBeNull();
  expect(screen.queryByText("file2.js")).toBeNull();
});
