import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgQuote = ({
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
			d='M6.66675 8.00004H3.33341C2.96523 8.00004 2.66675 7.70157 2.66675 7.33337V5.00004C2.66675 4.63185 2.96523 4.33337 3.33341 4.33337H6.00008C6.36827 4.33337 6.66675 4.63185 6.66675 5.00004V8.00004ZM6.66675 8.00004C6.66675 9.66671 6.00008 10.6667 4.00008 11.6667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M13.3333 8.00004H9.99992C9.63172 8.00004 9.33325 7.70157 9.33325 7.33337V5.00004C9.33325 4.63185 9.63172 4.33337 9.99992 4.33337H12.6666C13.0348 4.33337 13.3333 4.63185 13.3333 5.00004V8.00004ZM13.3333 8.00004C13.3333 9.66671 12.6666 10.6667 10.6666 11.6667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgQuote;
