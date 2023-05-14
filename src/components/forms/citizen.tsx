import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputControl } from "components/ui/input";
import { Button } from "components/ui/button";
import { z } from "zod";

const CitizenSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email" }),
});

export type Citizen = z.infer<typeof CitizenSchema>;

export type CitizenFormProps = {
  onSubmit: (citizen: Citizen) => void;
  mode?: "create" | "edit";
  submitting?: boolean;
  submitText?: string;
  submittingText?: string;
  initialData?: Partial<Citizen>;
};
export const CitizenForm = ({
  onSubmit,
  submitting = false,
  submitText = "Add",
  submittingText = "Adding...",
  initialData = {},
}: CitizenFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<Citizen>({
    resolver: zodResolver(CitizenSchema),
    mode: "onChange",
    defaultValues: initialData,
  });

  console.log(errors);

  // current form value
  console.log(getValues());

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex flex-col gap-7">
        <InputControl
          label="First name"
          control={control}
          name="firstName"
          errorText={errors.firstName?.message}
        />
        <InputControl
          label="Last name"
          control={control}
          name="lastName"
          errorText={errors.lastName?.message}
        />
        <InputControl
          label="Email"
          control={control}
          name="email"
          errorText={errors.email?.message}
        />

        <div>
          <Button disabled={submitting} type="submit">
            {submitting ? submittingText : submitText}
          </Button>
        </div>
      </div>
    </form>
  );
};
