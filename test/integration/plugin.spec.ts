import { setupMockData, User, Post, Tariff, Tag } from "../support/mock-data";
import Context from "../../src/common/context";
import { recordGraphQLRequest } from "../support/helpers";
import { Data } from "../../src/support/interfaces";

let store: any;
let vuexOrmGraphQL;

describe("Plugin GraphQL", () => {
  beforeEach(async () => {
    [store, vuexOrmGraphQL] = await setupMockData();
  });

  test("fetches the schema on the first action", async () => {
    let result;

    const request = await recordGraphQLRequest(async () => {
      // @ts-ignore
      result = await Post.fetch(2);
    });

    expect(request).not.toEqual(null);
    expect(result).not.toEqual(null);

    const context = Context.getInstance();
    expect(!!context.schema).not.toEqual(false);
    expect(context.schema!.getType("Post")!.name).toEqual("Post");
    expect(context.schema!.getQuery("post")!.name).toEqual("post");
    expect(context.schema!.getMutation("createPost")!.name).toEqual("createPost");
  });

  describe("$isPersisted", () => {
    test("is false for newly created records", async () => {
      const insertedData = await User.insert({ data: { name: "Snoopy" } });
      let user: Data = insertedData.users[0] as Data;
      expect(user.$isPersisted).toBeFalsy();

      user = User.find(user.id)! as Data;
      expect(user.$isPersisted).toBeFalsy();
    });

    test("is true for persisted records", async () => {
      const insertedData = await User.insert({ data: { name: "Snoopy" } });
      let user: Data = insertedData.users[0] as Data;

      expect(user.$isPersisted).toBeFalsy();

      const result = await user.$persist();
      user = User.find(4)! as Data;

      expect(user.$isPersisted).toBeTruthy();
    });

    test("is true for fetched records", async () => {
      // @ts-ignore
      await User.fetch(1);

      const user: Data = User.find(1)! as Data;
      expect(user.$isPersisted).toBeTruthy();
    });
  });
});
