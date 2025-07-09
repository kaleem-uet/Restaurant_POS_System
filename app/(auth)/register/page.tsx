import Button from "@/app/components/common/Button";
import Input from "@/app/components/common/Input";

export default function Register() {
  return (
    <div className="">
      <Input
        label="Employee Name"
        type="text"
        name="name"
        placeholder="Enter employee name"
        required
      />
      <Input
        label="Employee Email"
        type="email"
        name="email"
        placeholder="Enter employee email"
        required
      />
      <Input
        label="Employee Phone"
        type="number"
        name="phone"
        placeholder="Enter employee phone"
        required
      />
      <Input
        label="Employee Password"
        type="password"
        name="password"
        placeholder="Enter employee password"
        required
      />
      <Input
        label="Employee Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Enter employee confirm password"
        required
      />
      <div>
        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
          Choose your role
        </label>

        <div className="flex item-center gap-3 mt-4">
          {["Waiter", "Cashier", "Admin"].map((role) => {
            return (
              <button
                key={role}
                type="button"
                className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]`}
              >
                {role}
              </button>
            );
          })}
        </div>
      </div>
      <Button label="Sign Up" type="submit" className="mt-6" />
    </div>
  );
}
