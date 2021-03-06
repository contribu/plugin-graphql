import { Post, setupMockData } from "../../support/mock-data";
import { Data } from "../../../src/support/interfaces";
import { recordGraphQLRequest } from "../../support/helpers";

let store: any;
let vuexOrmGraphQL;

describe("destroy", () => {
  beforeEach(async () => {
    [store, vuexOrmGraphQL] = await setupMockData();
  });

  test("sends the correct query to the API", async () => {
    // @ts-ignore
    await Post.fetch(1);
    const post: Data = Post.find(1)! as Data;

    const request = await recordGraphQLRequest(async () => {
      await post.$destroy();
    });

    expect(request!.variables).toEqual({ id: 1 });
    expect(request!.query).toEqual(
      `
mutation DeletePost($id: ID!) {
  deletePost(id: $id) {
    id
    content
    title
    otherId
    published
    author {
      id
      name
      profile {
        id
        email
        age
        sex
      }
    }
    comments {
      nodes {
        id
        content
        subjectId
        subjectType
        author {
          id
          name
          profile {
            id
            email
            age
            sex
          }
        }
      }
    }
    tags {
      nodes {
        id
        name
      }
    }
  }
}
      `.trim() + "\n"
    );
  });
});
