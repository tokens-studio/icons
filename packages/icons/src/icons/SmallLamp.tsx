import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSmallLamp = ({
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
			d='M4.58109 2.28506L2.82109 8.15173C2.74409 8.4084 2.93627 8.66667 3.20422 8.66667H12.7957C13.0636 8.66667 13.2558 8.4084 13.1788 8.15173L11.4188 2.28506C11.368 2.11587 11.2123 2 11.0357 2H4.96422C4.78757 2 4.63185 2.11587 4.58109 2.28506Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 11.3333V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.73333 13.9999H10.2667C10.4876 13.9999 10.6633 13.8209 10.6282 13.6028C10.5087 12.8597 10.0175 11.3333 7.99999 11.3333C5.98245 11.3333 5.49134 12.8597 5.37179 13.6028C5.3367 13.8209 5.51241 13.9999 5.73333 13.9999Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSmallLamp;
