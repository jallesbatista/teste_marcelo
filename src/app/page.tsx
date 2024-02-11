"use client";

import { useAppContext } from "@/context";
import { TUser } from "@/interfaces";
import { userMock } from "@/mocks";
import { registerUserSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    resolver: zodResolver(registerUserSchema),
  });

  const router = useRouter();

  const { setUser } = useAppContext();

  const onSubmit = (data: TUser) => {
    if (data.email == userMock.email && data.password == userMock.password) {
      setUser(userMock);
      router.push("/feiras");
    }
  };

  return (
    <>
      <main>
        <div className="wrapper">
          <div className="shadow-md bg-[white] mt-[80px] h-max px-5 py-7 w-[90%] max-w-[300px] flex flex-col ">
            <h2 className="text-center text-xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
              <label className="flex flex-col gap-2">
                Email:
                <input
                  {...register("email")}
                  className="px-1 py-4"
                  type="email"
                  placeholder="Ex: teste@gmail.com"
                />
              </label>

              <label className="flex flex-col gap-2">
                Password:
                <input
                  {...register("password")}
                  className="px-1 py-4"
                  type="password"
                  placeholder="********"
                />
              </label>

              <button className="button-default mt-[12px] py-3" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
