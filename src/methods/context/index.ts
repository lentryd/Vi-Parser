import NS from "@NS";
import Context from "@classes/Context";

import context from "./methods/context";
import studentGrades from "./methods/studentGrades";
import sysInfo from "./methods/sysinfo";

export default async function (this: NS) {
  const { client } = this;

  const [
    { server },
    { year, user, server: server1, schoolId },
    { user: user1, subjects },
  ] = await Promise.all([
    sysInfo(client),
    context(client),
    studentGrades(client),
  ]);

  return new Context({
    year,
    user: { ...user, ...user1 },
    server: { ...server, ...server1 },
    subjects,
    schoolId,
  });
}