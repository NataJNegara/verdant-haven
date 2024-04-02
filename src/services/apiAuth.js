import supabase from "./supabase";

// =====================================================LOGIN
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Email or password is incorrect");
  }

  return data;
}

// =====================================================GET CURRENT USER
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

// =====================================================LOGOUT
export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

// =====================================================SIGNUP
export async function signUp({ email, fullName, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        isAdmin: false,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
