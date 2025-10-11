import Image from "next/image";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const SignInDialog = () => {
  const handleLogInWithGoogleClick = () => signIn("google");
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faca login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do google
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLogInWithGoogleClick}
      >
        <Image alt="logo do google" src="/google.svg" width={18} height={18} />
        Google
      </Button>
    </>
  );
};

export default SignInDialog;
