import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserBag = ({
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
			d='M5.99999 7.33333C7.47273 7.33333 8.66666 6.13943 8.66666 4.66667C8.66666 3.19391 7.47273 2 5.99999 2C4.52723 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52723 7.33333 5.99999 7.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33333 11.9999C1.33333 9.42259 3.42267 7.33325 5.99999 7.33325C7.08999 7.33325 8.09273 7.70699 8.88706 8.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.2427 11.1379L14.4402 12.4713C14.5595 13.2767 13.9355 14 13.1213 14H10.8787C10.0645 14 9.44047 13.2767 9.5598 12.4713L9.75734 11.1379C9.8542 10.4841 10.4154 10 11.0763 10H12.9237C13.5846 10 14.1458 10.4841 14.2427 11.1379Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 8.66675H12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUserBag;
