import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardNoAccess = ({
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
			d='M14.6667 6.00001V4.66668C14.6667 3.9303 14.0698 3.33334 13.3334 3.33334H2.66671C1.93033 3.33334 1.33337 3.9303 1.33337 4.66668V11.3333C1.33337 12.0697 1.93033 12.6667 2.66671 12.6667H8.00004M14.6667 6.00001H4.00004M14.6667 6.00001V8.66668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9997 10.7C13.5762 10.268 12.9861 10 12.3333 10C11.0447 10 10 11.0447 10 12.3333C10 12.9693 10.2544 13.5458 10.667 13.9667M13.9997 10.7C14.4123 11.1209 14.6667 11.6974 14.6667 12.3333C14.6667 13.622 13.622 14.6667 12.3333 14.6667C11.6806 14.6667 11.0905 14.3987 10.667 13.9667M13.9997 10.7L10.667 13.9667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCardNoAccess;
