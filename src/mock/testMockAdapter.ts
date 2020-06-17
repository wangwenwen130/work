import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Mock from "mockjs";
const Users: any[] = [];
for (let i = 0; i < 100; i++) {
  Users.push(
    Mock.mock({
      id: Mock.Random.integer(60, 100),
      time: Mock.Random.datetime(),
      desc: Mock.Random.cparagraph()
    })
  );
}
export default {
  testMockAdapter() {
    let mock = new MockAdapter(axios);
    mock.onGet("/users").reply(200, {
      // 200 为状态码，后面对象为返回data
      users: Users
    });
  }
};
