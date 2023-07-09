import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";

export const PhoneNumberInput = ({ control, register }) => {
	return (
		<Controller
			{...register("clientPhoneNumber")}
			control={control}
			name="companyPhoneNumber"
			render={({ field: { onChange, value = "" } }) => {
				return (
					<InputMask
						mask="(999)-999-9999"
						maskChar=""
						autoComplete="phone"
						className="w-full bg-transparent border border-b-black border-t-transparent border-r-transparent border-l-transparent"
						onChange={onChange}
						value={value}
					/>
				);
			}}
		/>
	);
};
