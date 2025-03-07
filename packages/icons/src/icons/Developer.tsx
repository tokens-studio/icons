import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDeveloper = ({
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
			d='M4.54535 14.6667L4.54538 12.762C4.44148 11.728 3.75514 10.9443 3.12134 9.99998M9.63625 14.6667V13.5239C12.909 13.5239 12.5454 9.71445 12.5454 9.71445C12.5454 9.71445 13.9999 9.71445 13.9999 8.19065L12.5454 5.90505C12.5454 2.85753 10.0729 1.36111 7.45445 1.33377C5.98751 1.31846 4.81643 1.68748 3.94126 2.33332'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 4.66669L10.0001 6.33335L8.66675 8.00002'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33333 4.66669L2 6.33335L3.33333 8.00002'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66659 4L5.33325 8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDeveloper;
