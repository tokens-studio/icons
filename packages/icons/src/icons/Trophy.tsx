import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrophy = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M4.49695 2.66675H11.5422C11.5422 2.66675 10.9551 11.5048 8.01959 11.5048C6.58556 11.5048 5.71196 9.39575 5.19346 7.23815C4.65055 4.97904 4.49695 2.66675 4.49695 2.66675Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.5421 2.66673C11.5421 2.66673 12.1562 2.01162 12.6666 2.00006C13.6666 1.97742 13.8515 2.66673 13.8515 2.66673C14.0472 3.07308 14.2038 4.12959 13.2644 5.10483C12.325 6.08006 11.2735 6.9334 10.8456 7.23813'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.49688 2.66673C4.49688 2.66673 3.85701 2.00415 3.33333 2.00007C2.33333 1.99226 2.14846 2.66673 2.14846 2.66673C1.95275 3.07308 1.79619 4.12959 2.73557 5.10483C3.67493 6.08007 4.76552 6.93339 5.19339 7.23819'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.67102 13.3332C5.67102 12.1142 8.01941 11.5046 8.01941 11.5046C8.01941 11.5046 10.3679 12.1142 10.3679 13.3332H5.67102Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTrophy;
