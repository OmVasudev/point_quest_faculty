import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { addFaculty } from "@/app/_lib/data-service";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password, phoneNo, branch, uid } =
      await request.json();
    //validate email and password
    console.log({
      firstName,
      lastName,
      email,
      password,
      phoneNo,
      branch,
      uid,
    });
    const hashedPassword = await hash(password, 10);

    const facultyData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      phoneNo: phoneNo,
      branch: branch,
      uid: uid,
    };

    const response = await addFaculty(facultyData);
    console.log("Faculty added: ", response);
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ message: "success" });
}
