import { Octokit } from "@octokit/rest";
import { createTokenAuth } from "@octokit/auth-token";
const auth = createTokenAuth(
  process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
);

let octokit;
const getAuth = async () => {
  const authentication = await auth();
  octokit = new Octokit({ auth: authentication.token });
};

getAuth();

export const getPublicGists = () => octokit.gists.listPublic();

export const getGistForUser = (username) =>
  octokit.gists.listForUser({ username });
