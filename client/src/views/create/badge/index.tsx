import React, { useState } from 'react';
import { useFormik } from "formik";
import { BadgeForm, ImageUpload, Rating } from "@/components";
import { BADGE_SCHEMA } from "@/assets/data";
import { useDebounce } from 'use-debounce';
import {
	usePrepareContractWrite,
	useContractWrite,
	useWaitForTransaction,
	useAccount,
	useConnect,
} from "wagmi";
import { mintBadge } from "@/utils/app.mjs";
import "./index.scss";
import { useEffect } from "react";

function prepareMint(address: string) {
	// try {
	const {
		config,
		// 		error: prepareError,
		// 		isError: isPrepareError,
	} = usePrepareContractWrite({
		address: "0x9Fc3168ee0Cf90aaBF485BF24c337da9922bB4a3",
		abi: [
			{
				inputs: [
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
				],
				name: "mint",
				outputs: [],
				stateMutability: "nonpayable",
				type: "function",
			},
		],
		functionName: "mint",
		args: [address],
		value: BigInt(0),
	});
	// 	const { data, error, isError, write } =
	// 		useContractWrite(config);
	// 	const { isLoading, isSuccess } = useWaitForTransaction({
	// 		hash: data?.hash,
	// 	});
	// 	if (isSuccess) {
	// 		await mintBadge(values);
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }
	// console.log(values.receiver);",
}

// console.log(mintBadge);

export const Badge = ({ group }: { group: string }) => {
	const [receiver, setReceiver] = useState("");
	const [debouncedReceiver] = useDebounce(receiver, 1000);
	const { config, error: prepareError, isError: isPrepareError } = usePrepareContractWrite({
		address: "0x9Fc3168ee0Cf90aaBF485BF24c337da9922bB4a3",
		abi: [
			{
				"inputs": [
					{
					"internalType": "address",
					"name": "owner",
					"type": "address"
					}
				],
				"name": "mint",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
				}
		],
		functionName: 'mint',
		args: [debouncedReceiver],
		value: BigInt(0),
	});

	const { data, error, isError, write } = useContractWrite(config);

	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: data?.hash,
	});
	const { isConnected, connector } = useAccount();
	const { connectors } = useConnect();

	console.log({ isConnected, connectors });
	const initialValues = {
		additionalInfo: "",
		description: "",
		endDate: null,
		image: null,
		rating: 0,
		receiver: "",
		startDate: new Date(),
		title: "",
		validator: "",
		working: false,
	};

	const {
		values,
		handleSubmit,
		setFieldValue,
		handleChange,
		handleBlur,
		errors,
		touched,
	} = useFormik({
		validationSchema: BADGE_SCHEMA,
		initialValues,
		onSubmit: async (values) => {
			console.log("Formik data:", values);
			// Handle form submission logic here (e.g., API call)
			try {
				setReceiver(values.receiver);
				write?.();
				if (isSuccess) {
					await mintBadge(values);
				}
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<section>
			<form
				onSubmit={handleSubmit}
				autoComplete="off"
				className={`${group}__form`}
			>
				{/* Image Upload Component */}
				<ImageUpload
					onImageChange={(image) => setFieldValue("image", image)}
					handleBlur={handleBlur}
					errors={errors}
					touched={touched}
					group="badge"
				/>

				{/* Badge Form Fields */}
				<BadgeForm
					formData={values}
					handleFormChange={handleChange}
					setFieldValue={setFieldValue}
					handleBlur={handleBlur}
					errors={errors}
					touched={touched}
					group="badge"
				/>

				{/* Rating Component */}
				<Rating
					rating={values.rating}
					handleRatingChange={(newRating) =>
						setFieldValue("rating", newRating)
					}
				/>

				{/* Badge Submission Button */}
				<div className="badge__submit">
					<button
						className="badge__submit-button"
						type="submit"
					>
						<span>mint badge</span>
					</button>
				</div>
			</form>
		</section>
	);
};
