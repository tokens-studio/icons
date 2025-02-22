import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFilterAlt = ({
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
			d='M2 4.66667V2.66667C2 2.29848 2.29848 2 2.66667 2H13.3334C13.7016 2 14 2.29844 14.0001 2.6666L14.0003 4.66667M2 4.66667L6.43387 8.46713C6.58163 8.5938 6.66667 8.77867 6.66667 8.97327V13.1461C6.66667 13.5799 7.07429 13.8981 7.49502 13.7929L8.82835 13.4596C9.12515 13.3854 9.33335 13.1187 9.33335 12.8128V8.97333C9.33335 8.77867 9.41835 8.5938 9.56615 8.46713L14.0003 4.66667M2 4.66667H14.0003'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFilterAlt;
