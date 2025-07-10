import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function Login() {
  return (
    <>
      <Input
        label="Employee Email"
        type="email"
        name="email"
        placeholder="Enter employee email"
        required
      />
      <Input
        label="Employee Password"
        type="password"
        name="password"
        placeholder="Enter employee password"
        required
      />
      <Button label="Sign In" type="submit" />
    </>
  );
}
