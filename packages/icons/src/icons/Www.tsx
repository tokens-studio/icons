import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWww = ({
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
			d='M3.22522 11.3333C4.37792 13.3259 6.5324 14.6666 9.00003 14.6666C11.4676 14.6666 13.6221 13.3259 14.7748 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.22522 4.66659C4.37792 2.67391 6.5324 1.33325 9.00003 1.33325C11.4676 1.33325 13.6221 2.67391 14.7748 4.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66663 14.6337C9.66663 14.6337 10.6052 13.3977 11.1964 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66663 1.36621C9.66663 1.36621 10.6052 2.60218 11.1964 4.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33338 14.6337C8.33338 14.6337 7.39481 13.3977 6.80359 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33338 1.36621C8.33338 1.36621 7.39481 2.60218 6.80359 4.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 6.66675L8 10.0001L9 6.66675L10 10.0001L11 6.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 6.66675L2.66663 10.0001L3.66663 6.66675L4.66663 10.0001L5.66663 6.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3334 6.66675L13.3334 10.0001L14.3334 6.66675L15.3334 10.0001L16.3334 6.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWww;
