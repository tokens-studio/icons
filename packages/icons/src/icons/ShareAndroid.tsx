import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShareAndroid = ({
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
			d='M12 14.6666C13.1046 14.6666 14 13.7712 14 12.6666C14 11.562 13.1046 10.6666 12 10.6666C10.8954 10.6666 10 11.562 10 12.6666C10 13.7712 10.8954 14.6666 12 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 5.33337C13.1046 5.33337 14 4.43794 14 3.33337C14 2.22881 13.1046 1.33337 12 1.33337C10.8954 1.33337 10 2.22881 10 3.33337C10 4.43794 10.8954 5.33337 12 5.33337Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 10C5.10457 10 6 9.1046 6 8C6 6.8954 5.10457 6 4 6C2.89543 6 2 6.8954 2 8C2 9.1046 2.89543 10 4 10Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M10.3333 4.33337L5.66663 7.00004' stroke='currentColor' />
		<path d='M5.66663 9L10.3333 11.6667' stroke='currentColor' />
	</svg>
);
export default SvgShareAndroid;
