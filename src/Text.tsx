interface IProps {
	value: string;
}

export const Text = ({ value }: IProps) => {
	return (

		<span className="text">
			{value}
		</span>

	);

}