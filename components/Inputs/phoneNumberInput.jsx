import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";

export const PhoneNumberInput = ({ control, register }) => {
	return (
		<Controller
			{...register("companyPhoneNumber")}
			control={control}
			name="companyPhoneNumber"
			render={({ field: { onChange, value = "" } }) => {
				return (
					<InputMask
						mask="(999)-999-9999"
						maskChar=""
						autoComplete="phone"
						className="form-input"
						onChange={onChange}
						value={value}
					/>
				);
			}}
		/>
	);
};
