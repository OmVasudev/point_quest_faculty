import { supabase } from "./supabase";

//REQUIRED FOR FACULTY

export async function addFaculty(studentData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNo: number;
  branch: string;
  uid: string;
}) {
  const { data, error } = await supabase.from("Faculty").insert([studentData]);

  if (error) {
    console.error("Error adding faculty:", error.message);
    throw new Error("Failed to add faculty record.");
  }
  return data;
}

export async function findFaculty(uid: string) {
  const { data, error } = await supabase
    .from("Faculty")
    .select("*")
    .eq("uid", uid)
    .single();

  if (error) {
    console.log("Failed to find faculty.");
  }

  return data;
}

export async function addFeedBack(feedback: {
  name: string;
  email: string;
  message: string;
}) {
  const { error } = await supabase.from("Feedback").insert([feedback]);

  if (error) {
    console.error(
      "Error in adding feedback to database:",
      error.message,
      error.details
    );
    return false;
  }

  console.log("Feedback saved successfully");
  return true; // Return true on success
}

export async function getFacultyBranch(id: number) {
  const { data, error } = await supabase
    .from("Faculty")
    .select("branch")
    .eq("id", id);

  if (error) {
    console.log("Cant get faculty branch");
    return null;
  }

  return data;
}

export async function getStudentsByBranch(branch: string) {
  const { data, error } = await supabase
    .from("Student")
    .select("*")
    .eq("branch", branch);

  if (error) {
    console.log("Unable to get student by faculty branch");
    return null;
  }

  return data;
}

export async function getBodsByBranch(branch: string) {
  const { data, error } = await supabase
    .from("BOD")
    .select("*")
    .eq("branch", branch);

  if (error) {
    console.log("Unable to get bod by faculty branch");
    return null;
  }

  return data;
}

export async function getAdminsByBranch(branch: string) {
  const { data, error } = await supabase
    .from("Admin")
    .select("*")
    .eq("branch", branch);

  if (error) {
    console.log("Unable to get admin by faculty branch");
    return null;
  }

  return data;
}

export async function findStudent(usn: string) {
  const { data, error } = await supabase
    .from("Student")
    .select("*")
    .eq("USN", usn)
    .single();

  if (error) {
    console.log("Failed to find student.");
    return null;
  }

  return data;
}

export async function findBod(usn: string) {
  const { data, error } = await supabase
    .from("BOD")
    .select("*")
    .eq("USN", usn)
    .single();

  if (error) {
    console.log("Failed to find bod.");
  }

  return data;
}

export async function findAdmin(usn: string) {
  const { data, error } = await supabase
    .from("Admin")
    .select("*")
    .eq("USN", usn)
    .single();

  if (error) {
    console.log("Failed to find admin.");
  }

  return data;
}

export async function getStudentsByYear(year: number, branch: string) {
  const { data, error } = await supabase
    .from("Student")
    .select("*")
    .eq("passingYear", year)
    .eq("branch", branch);
  if (error) {
    console.log("Unable to get students by passing year");
    return null;
  }
  return data;
}

export async function getBodsByYear(year: number, branch: string) {
  const { data, error } = await supabase
    .from("BOD")
    .select("*")
    .eq("passingYear", year)
    .eq("branch", branch);
  if (error) {
    console.log("Unable to get bods by passing year");
    return null;
  }
  return data;
}

export async function getAdminsByYear(year: number, branch: string) {
  const { data, error } = await supabase
    .from("Admin")
    .select("*")
    .eq("passingYear", year)
    .eq("branch", branch);
  if (error) {
    console.log("Unable to get admins by passing year");
    return null;
  }
  return data;
}

export async function getParticipatedStudent(studentId: number) {
  const { data, error } = await supabase
    .from("Participated")
    .select("eventId")
    .eq("studentId", studentId);

  if (error) {
    console.error("Error fetching participation data:", error);
    return null;
  }

  return data;
}

export async function getParticipatedBod(BodId: number) {
  const { data, error } = await supabase
    .from("Participated")
    .select("eventId")
    .eq("bodId", BodId);

  if (error) {
    console.error("Error fetching participation data:", error);
    return null;
  }

  return data;
}

export async function getParticipatedAdmin(adminId: number) {
  const { data, error } = await supabase
    .from("Participated")
    .select("eventId")
    .eq("adminId", adminId);

  if (error) {
    console.error("Error fetching participation data:", error);
    return null;
  }

  return data;
}

export async function getParticipatedEvent(eventId: number) {
  const { data, error } = await supabase
    .from("Event")
    .select("name, date, points, link, clubId")
    .eq("id", eventId)
    .single();

  if (error) {
    console.error("Error fetching event data:", error);
    return null;
  }

  return data;
}

export async function getParticipatedClub(clubId: number) {
  const { data, error } = await supabase
    .from("Club")
    .select("name")
    .eq("id", clubId)
    .single();

  if (error) {
    console.error("Error fetching club data:", error);
    return null;
  }

  return data;
}
