import { FC } from "react";

interface IProps {
	value: number;
}


export const ManyText: FC<IProps> = ({ value, children }) => {

	const elems = Array.from(Array(value).keys()).map(() =>
		children
	)
	return <div>{elems}</div>;

}