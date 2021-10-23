interface IProps {
	value: string;

}
export const Heading = ({ value }: IProps) => {

	return (
		<div>
			<h1 className="heading">
				{value}
			</h1>
		</div>
	)

}